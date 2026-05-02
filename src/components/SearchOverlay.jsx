import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const searchIndex = [
  // Overview
  { title: 'Your City, On Demand', desc: "Building Africa's leading multi-service platform for everyday life — mobility, delivery, and commerce, unified across Kigali and beyond.", path: '/', section: 'Overview' },
  { title: 'One Platform. Three Verticals. One City (So Far).', desc: 'Ride, Deliver, Shop — Awayah unifies daily services into a single app for Kigali.', path: '/', section: 'Overview' },
  { title: '~12K Active Users', desc: 'Active users across the Awayah platform after eight months of operations.', path: '/', section: 'Overview' },
  { title: '140 Partner Riders', desc: 'Trained partner riders operating across Kigali districts.', path: '/', section: 'Overview' },
  { title: '38% D30 Retention', desc: 'Day-30 retention rate across active cohorts.', path: '/', section: 'Overview' },
  { title: '3 Live Verticals', desc: 'Ride, Deliver, and Shop verticals currently live in Kigali.', path: '/', section: 'Overview' },
  { title: 'Everything Kigali. In One App.', desc: 'Ride to work. Get lunch delivered. Order groceries. All through one account, one wallet, one interface.', path: '/', section: 'Overview' },

  // Financials
  { title: 'Where We Are. Where We\'re Going.', desc: "Today's numbers are small, and the market we're building into is enormous.", path: '/financials', section: 'Financials' },
  { title: 'Total Addressable Market — $4.6B', desc: 'Combined mobility, delivery, and commerce TAM across urban East Africa by 2030.', path: '/financials', section: 'Financials' },
  { title: 'Serviceable Addressable Market — $820M', desc: 'SAM for Kigali and three secondary Rwandan cities within our current vertical mix.', path: '/financials', section: 'Financials' },
  { title: 'Serviceable Obtainable Market — $38M', desc: 'SOM: what we can credibly capture in Kigali within 36 months at current growth trajectory.', path: '/financials', section: 'Financials' },
  { title: 'Monthly Active Users — 11,842', desc: 'Monthly active users across all verticals.', path: '/financials', section: 'Financials' },
  { title: 'Monthly GMV — $86K', desc: 'Gross merchandise value processed monthly across platform.', path: '/financials', section: 'Financials' },
  { title: 'Blended Take Rate — 18.5%', desc: 'Platform take rate blended across all three verticals.', path: '/financials', section: 'Financials' },
  { title: 'Runway & Burn Rate', desc: 'Current runway extends through Q1 2027 at present burn rate. Monthly burn: ~$42K.', path: '/financials', section: 'Financials' },
  { title: 'Unit Economics — CAC & Contribution Margin', desc: 'Customer acquisition cost trending down, contribution margin improving across cohorts.', path: '/financials', section: 'Financials' },
  { title: '3-Year Growth Model', desc: 'Projected growth from 12K to 180K MAU, GMV from $86K to $3.2M monthly by 2028.', path: '/financials', section: 'Financials' },

  // News & Events
  { title: 'The Story So Far', desc: "Eight months of milestones, partnerships, and the quiet, compounding work of building a city's everyday platform.", path: '/news-events', section: 'News & Events' },
  { title: 'Awayah Expands Delivery Network Across Kigali', desc: 'Our delivery operation now covers all four districts of Kigali with 140 trained partner riders.', path: '/news-events', section: 'News & Events' },
  { title: 'Awayah Partners with 12 Local Merchants', desc: 'Shopping vertical launch with 12 anchor merchants in Kimironko, Nyarugenge, and Remera.', path: '/news-events', section: 'News & Events' },
  { title: 'Cross-Vertical Engagement Reaches 30%', desc: 'One in three repeat users now engages with two or more services in any 30-day window.', path: '/news-events', section: 'News & Events' },
  { title: 'Unified Wallet Across Verticals', desc: 'App update brings unified wallet experience across all Awayah verticals.', path: '/news-events', section: 'News & Events' },
  { title: 'Shopping Vertical Goes Live', desc: 'Launched in three Kigali neighborhoods with 12 anchor merchants.', path: '/news-events', section: 'News & Events' },
  { title: 'Delivery Operations Begin in Nyarugenge', desc: 'First 24 partner riders received branded helmets, jackets, and insulated bags. Median delivery time: 23 minutes.', path: '/news-events', section: 'News & Events' },
  { title: 'Awayah Launches Ride Vertical in Kigali', desc: 'Soft launch with 8 driver-partners and a closed beta of 600 users.', path: '/news-events', section: 'News & Events' },
  { title: 'Seed Round Closed', desc: 'Initial capital raised from African and diaspora investors aligned with long-horizon vision.', path: '/news-events', section: 'News & Events' },
  { title: 'Q2 2026 Investor Update Call', desc: 'Quarterly results, growth update, and Q&A with the founding team. June 12, Virtual.', path: '/news-events', section: 'News & Events' },
  { title: 'Annual Investor Day — Kigali', desc: 'In-person walk-through of operations, fleet, and merchant partners. July 18, Awayah HQ.', path: '/news-events', section: 'News & Events' },
  { title: 'Africa Tech Summit — Cape Town', desc: 'Awayah CEO on panel: "The Super-App Playbook for Secondary African Cities." September 4.', path: '/news-events', section: 'News & Events' },
  { title: 'Pre-Series A Investor Roadshow', desc: 'Private briefings with prospective Series A investors. October 22, Nairobi, Lagos, Dubai.', path: '/news-events', section: 'News & Events' },

  // Governance
  { title: 'How We Operate', desc: 'A small team. Clear principles. Honest reporting. Built from day one to be ready for institutional capital.', path: '/governance', section: 'Governance' },
  { title: 'Radical Transparency', desc: 'We share what most pre-revenue companies hide: burn, runway, mistakes, and the metrics that keep us honest.', path: '/governance', section: 'Governance' },
  { title: 'Founder Alignment', desc: 'Founding leadership and venture partners are fully committed, materially invested, and aligned on the long-horizon vision.', path: '/governance', section: 'Governance' },
  { title: 'Institutional Readiness', desc: 'Our reporting, compliance, and governance frameworks are designed for Series A scrutiny today.', path: '/governance', section: 'Governance' },
  { title: 'Shema Honests — CEO & Co-Founder, Awayah E-commerce', desc: 'Founder of Moving Maestros. Leads company vision, fundraising strategy, and executive operations across all Awayah verticals.', path: '/governance', section: 'Governance' },
  { title: 'Ndwaniye Iddy Karebu — President & Founder, Awayah E-commerce', desc: 'Co-founder of Moving Maestros. Oversees operational infrastructure, partner networks, and market expansion across Rwanda.', path: '/governance', section: 'Governance' },
  { title: 'Stephen Munabo — CTO & Co-Founder, IncPeople Kigali', desc: 'Technology & Platform Strategy, Awayah E-commerce. Leads product architecture, engineering, and the technical roadmap.', path: '/governance', section: 'Governance' },
  { title: 'Richard Akwo — CEO, IncPeople Kigali', desc: 'Strategic Partnerships & Investor Relations, Awayah E-commerce. Manages capital strategy and governance frameworks.', path: '/governance', section: 'Governance' },
  { title: 'Serge Laurent Dibao — President & Co-Founder, IncPeople Kigali', desc: 'Growth & Operations Strategy, Awayah E-commerce. Drives market expansion, business development, and operational scaling.', path: '/governance', section: 'Governance' },
  { title: 'Cap Table', desc: 'Founders & team: 68%, Seed investors: 22%, Advisor pool: 5%, ESOP reserve: 5%.', path: '/governance', section: 'Governance' },

  // Resources
  { title: 'Everything an Investor Needs', desc: "Letters, decks, financial reports, FAQs, and a direct line to the team.", path: '/resources', section: 'Resources' },
  { title: 'CEO Letter — April 2026', desc: "An honest letter at month eight. Judge us on the shape of our growth, the discipline of our spend, and the size of the market.", path: '/resources', section: 'Resources' },
  { title: 'Investor Pitch Deck', desc: 'The current narrative we use with prospective Series A investors. 22 slides, updated monthly.', path: '/resources', section: 'Resources' },
  { title: 'Q1 2026 Investor Update', desc: 'Performance against plan, key cohort metrics, and operational milestones from the first quarter.', path: '/resources', section: 'Resources' },
  { title: 'Kigali Market Sizing Memo', desc: 'Our methodology for TAM/SAM/SOM, with primary research and third-party data citations.', path: '/resources', section: 'Resources' },
  { title: '3-Year Financial Model', desc: 'Editable model with assumptions clearly flagged. Available to qualified investors under NDA.', path: '/resources', section: 'Resources' },
  { title: 'One-Page Fact Sheet', desc: "The 60-second version: who we are, what we do, where we are, and what we're raising.", path: '/resources', section: 'Resources' },
  { title: 'Press & Media Kit', desc: 'Logos, photography, founder bios, and approved messaging for journalists and partners.', path: '/resources', section: 'Resources' },
  { title: 'Why should an investor pay attention now?', desc: "The cost of getting in early into infrastructure-shaped businesses in emerging markets is non-trivial later.", path: '/resources', section: 'Resources' },
  { title: 'How do your numbers compare to peers?', desc: 'Comparable super apps were in one vertical at month 8 with 20-25% retention. We operate three verticals with 38% D30 retention.', path: '/resources', section: 'Resources' },
  { title: 'What are you raising and at what stage?', desc: 'Pre-Series A. Expecting to open a Series A round in Q4 2026.', path: '/resources', section: 'Resources' },
  { title: "What's your moat?", desc: 'Density and trust. More partners + more users = better unit economics. Brand visibility compounds faster than digital marketing.', path: '/resources', section: 'Resources' },
  { title: 'What are the biggest risks?', desc: 'Capital intensity outpacing density, regulatory shift in mobility or payments, execution risk on Series A timing.', path: '/resources', section: 'Resources' },
  { title: 'Contact Investor Relations', desc: 'investors@awayah.rw — KG 9 Ave, Kigali, Rwanda. We respond within 48 hours.', path: '/resources', section: 'Resources' },
]

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && open) onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  const results = query.trim().length < 2 ? [] : searchIndex.filter(item => {
    const q = query.toLowerCase()
    return item.title.toLowerCase().includes(q) ||
           item.desc.toLowerCase().includes(q) ||
           item.section.toLowerCase().includes(q)
  })

  const handleSelect = useCallback((path) => {
    onClose()
    navigate(path)
  }, [onClose, navigate])

  if (!open) return null

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-bar">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search investor content..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search-close" onClick={onClose}>
            <span>ESC</span>
          </button>
        </div>

        <div className="search-results">
          {query.trim().length < 2 ? (
            <div className="search-hint">
              <div className="search-hint-title">Quick links</div>
              <div className="search-quick-links">
                {[
                  { label: 'Overview', path: '/' },
                  { label: 'Financials', path: '/financials' },
                  { label: 'News & Events', path: '/news-events' },
                  { label: 'Governance', path: '/governance' },
                  { label: 'Resources', path: '/resources' },
                ].map(l => (
                  <button key={l.path} className="search-quick" onClick={() => handleSelect(l.path)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="search-empty">
              <div className="search-empty-title">No results found</div>
              <p>Try searching for "financials", "team", "retention", or "Series A".</p>
            </div>
          ) : (
            <>
              <div className="search-count">{results.length} result{results.length !== 1 ? 's' : ''}</div>
              {results.map((item, i) => (
                <button key={i} className="search-result" onClick={() => handleSelect(item.path)}>
                  <div className="search-result-section">{item.section}</div>
                  <div className="search-result-title">{highlightMatch(item.title, query)}</div>
                  <div className="search-result-desc">{highlightMatch(item.desc, query)}</div>
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function highlightMatch(text, query) {
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i}>{part}</mark> : part
  )
}
