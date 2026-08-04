import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <header className="about-header">
          <h1>About Data Quality Checker</h1>
        </header>
        <main className="about-content">
          <p>
            <strong>Data Quality Checker</strong> helps you review your data in seconds.
            Upload CSV or Excel files and get immediate feedback on completeness,
            uniqueness, and consistency issues.
          </p>
          <p>
            The app combines a modern React frontend with a Python/Django backend to make
            data validation fast, clear, and practical for everyday use.
          </p>
          <p>
            Whether you are cleaning a small spreadsheet or preparing a larger dataset for
            reporting or ML workflows, this tool gives you a simple way to understand your data quality.
          </p>
        </main>
      </div>
    </div>
  )
}
