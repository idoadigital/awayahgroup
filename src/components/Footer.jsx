import { Link } from 'react-router-dom'
import logoLime from '../assets/awayah-lime-logo.png'

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="container">
        <div className="foot-grid">
          <div>
            <img src={logoLime} alt="Awayah" className="wordmark-logo md" />
            <p className="foot-tag">Your city, on demand.</p>
            <div className="social">
              <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8h4.54v14H.22zM7.86 8h4.36v1.91h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 6.99V22h-4.55v-6.66c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.51V22H7.86z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
              <a href="#" aria-label="X"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21.5l-7.36 8.41L23 22h-6.86l-5.36-7.02L4.6 22H1.34l7.88-9.01L1 2h7.04l4.84 6.4L18.24 2zm-1.2 18h1.86L7.04 4H5.06l11.99 16z"/></svg></a>
              <a href="#" aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1C24 15.6 24 12 24 12s0-3.6-.5-5.5zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg></a>
            </div>
          </div>

          <div>
            <div className="foot-h">Investor Relations</div>
            <ul className="foot-list">
              <li><Link to="/">Overview</Link></li>
              <li><Link to="/financials">Financials</Link></li>
              <li><Link to="/news-events">News &amp; Events</Link></li>
              <li><Link to="/governance">Governance</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>

          <div>
            <div className="foot-h">Company</div>
            <ul className="foot-list">
              <li><a href="#">About Awayah</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <div className="foot-h">Contact</div>
            <div className="foot-contact">
              <a href="mailto:investors@awayah.rw">investors@awayah.rw</a><br/>
              KG 9 Ave, Kigali, Rwanda
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <div>&copy; 2026 Awayah. All rights reserved.</div>
          <div className="foot-legal">
            <a href="#">Legal</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
