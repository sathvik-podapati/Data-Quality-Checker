
import { useLocation, useNavigate } from 'react-router-dom'

export default function Score() {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state

  if (!data) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#f7f9fc' }}>
        <h1>No Score Data</h1>
        <p>Please upload a file first to see your score.</p>
        <button onClick={() => navigate('/')} style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', background: '#3ecf8e', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer', fontWeight: 600 }}>
          Go to Upload
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: '#f7f9fc' }}>
      <h1>Score: {data.score ?? 'N/A'}/100</h1>
      <p>Missing: {data.missing ?? 'N/A'}</p>
      <p>Duplicates: {data.duplicates ?? 'N/A'}</p>
      <button onClick={() => navigate('/signin')} style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', background: '#3ecf8e', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer', fontWeight: 600 }}>
        Unlock Full Report
      </button>
    </div>
  )
}
