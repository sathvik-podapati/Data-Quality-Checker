from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.test import APIRequestFactory, force_authenticate

from .models import UploadedDataset
from .views import dataset_detail, enhance_view


class DatasetAccessTests(TestCase):
    def test_dataset_detail_allows_anonymous_access_to_public_dataset(self):
        dataset = UploadedDataset.objects.create(
            user=None,
            name='public.csv',
            score=60.0,
            metrics={
                'completeness': 50.0,
                'uniqueness': 90.0,
                'type_consistency': 100.0,
                'issues': [],
                'column_issues': {},
            },
            raw_csv='name,value\nAlice,10\n',
        )

        request = APIRequestFactory().get(f'/api/datasets/{dataset.pk}/')
        response = dataset_detail(request, dataset.pk)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['id'], dataset.pk)


class EnhanceViewTests(TestCase):
    def test_enhance_view_preserves_original_and_enhanced_scores(self):
        user = get_user_model().objects.create_user(username='tester', password='secret123')
        dataset = UploadedDataset.objects.create(
            user=user,
            name='sample.csv',
            score=50.0,
            metrics={
                'completeness': 80.0,
                'uniqueness': 80.0,
                'type_consistency': 100.0,
                'issues': ['Dataset has missing values that may affect analysis.'],
                'column_issues': {},
            },
            raw_csv='name,value\nAlice,10\n,Bad\nAlice,10\n',
        )

        request = APIRequestFactory().post(f'/api/datasets/{dataset.pk}/enhance/')
        force_authenticate(request, user=user)

        response = enhance_view(request, dataset.pk)

        self.assertEqual(response.status_code, 200)
        payload = response.data['dataset']
        self.assertEqual(payload['original_score'], 50.0)
        self.assertGreater(payload['enhanced_score'], payload['original_score'])
