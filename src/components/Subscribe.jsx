import { useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function Subscribe() {
  const [submitted, setSubmitted] = useState(false)

  useReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <section className="subscribe">
      <div className="container">
        <div className="sub-wrap">
          <div className="reveal">
            <h3>Stay Informed.</h3>
            <p>Get Awayah investor news, financial reports, and event updates delivered straight to your inbox.</p>
          </div>
          <form className="sub-form reveal d1" onSubmit={handleSubmit}>
            <input type="email" placeholder="your.email@company.com" aria-label="Email" required />
            <button type="submit" className="btn" style={{ background: 'var(--ink)', color: 'var(--lime)' }}>
              {submitted ? 'Subscribed \u2713' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
