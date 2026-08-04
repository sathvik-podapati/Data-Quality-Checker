import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <header className="contact-header">
          <h1>Contact Me</h1>
        </header>
        <main className="contact-content">
          <p>If you want to reach out about the project, here are my contact details:</p>
          <ul className="contact-list">
            <li><strong>Name:</strong> Sathvik</li>
            <li><strong>Email:</strong> <a href="mailto:sathvikpodapati@gmail.com">sathvikpodapati@gmail.com</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/sathvik-podapati" target="_blank" rel="noreferrer">github.com/sathvik-podapati</a></li>
          </ul>
        </main>
      </div>
    </div>
  )
}
