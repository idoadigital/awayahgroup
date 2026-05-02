import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import SubHero from '../components/SubHero'
import Subscribe from '../components/Subscribe'
import logoLime from '../assets/awayah-lime-logo.png'
import imgCourierHandoff from '../assets/siteimages/web/courier-handoff.webp'
import subheroBg from '../assets/siteimages/web/unboxing-rooftop.webp'

const releases = [
  { date: 'Apr 28, 2026', title: 'Awayah Expands Delivery Network Across Kigali', category: 'Operations' },
  { date: 'Apr 10, 2026', title: 'Awayah Partners with 12 Local Merchants for Shopping Launch', category: 'Partnerships' },
  { date: 'Mar 22, 2026', title: 'Cross-Vertical Engagement Reaches 30% Among Repeat Users', category: 'Product' },
  { date: 'Feb 14, 2026', title: 'Awayah App Update Brings Unified Wallet Across Verticals', category: 'Product' },
  { date: 'Jan 18, 2026', title: 'Shopping Vertical Goes Live in Three Kigali Neighborhoods', category: 'Operations' },
  { date: 'Dec 02, 2025', title: 'Awayah Welcomes Two New Advisors from East African Tech', category: 'Partnerships' },
  { date: 'Nov 11, 2025', title: 'Delivery Operations Begin in Nyarugenge District', category: 'Operations' },
  { date: 'Sep 21, 2025', title: 'Awayah Launches Soft Beta of Ride Vertical in Kigali', category: 'Product' },
]

const tabs = ['All', 'Operations', 'Partnerships', 'Product']

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState('All')

  useReveal()

  const filtered = activeTab === 'All'
    ? releases
    : releases.filter(r => r.category === activeTab)

  return (
    <>
      {/* ── SUB-HERO ── */}
      <SubHero
        eyebrow="News &amp; Events"
        title='The story <span class="lime">so far.</span>'
        lede="Eight months of milestones, partnerships, and the quiet, compounding work of building a city's everyday platform."
        bgImage={subheroBg}
      />

      {/* ── FEATURED STORY ── */}
      <section className="s-pad">
        <div className="container">
          <div className="feature-row reveal">
            <div className="photo" style={{ position: 'relative', aspectRatio: '1.4/1', borderRadius: '8px', background: `url(${imgCourierHandoff}) center/cover no-repeat` }}>
            </div>
            <div>
              <div className="meta"><span className="badge badge-lime">Featured</span><span>Apr 28, 2026</span></div>
              <h2>Awayah expands delivery network across Kigali.</h2>
              <p>Eight months after launch, our delivery operation now covers all four districts of Kigali with 140 trained partner riders. We share the operational lessons that got us here &mdash; and the ones still ahead.</p>
              <a href="#" className="btn-link">Read the update <span className="arrow">&rarr;</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="s-pad" style={{ paddingTop: 0, background: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <div className="section-eye reveal">Our First 8 Months</div>
            <h2 className="section-h-lg reveal d1">Milestones, in order.</h2>
            <p className="reveal d2" style={{ fontSize: '16px', color: 'var(--mute)', marginTop: '18px', lineHeight: 1.65 }}>A short company. A long ambition. Here&rsquo;s how we&rsquo;ve spent every week.</p>
          </div>
          <div className="timeline" style={{ marginTop: '60px' }}>
            <div className="tl-item live reveal">
              <div className="when">Today &middot; April 2026</div>
              <h4>Operating in 4 Kigali districts. ~12K active users.</h4>
              <p>Three verticals live: Ride, Deliver, Shop. 140 partner riders, 28 merchant partners, and a product roadmap focused on retention and density.</p>
            </div>
            <div className="tl-item reveal d1">
              <div className="when">March 2026</div>
              <h4>Cross-vertical use crosses 30%.</h4>
              <p>One in three repeat users now engages with two or more services in any 30-day window. Validates the super-app thesis at small scale.</p>
            </div>
            <div className="tl-item reveal d2">
              <div className="when">January 2026</div>
              <h4>Shopping vertical goes live.</h4>
              <p>Launched with 12 anchor merchants in Kimironko, Nyarugenge, and Remera. Branded shopping bags become a visible street-level signal.</p>
            </div>
            <div className="tl-item reveal d3">
              <div className="when">November 2025</div>
              <h4>Delivery launched in Nyarugenge.</h4>
              <p>The first 24 partner riders received branded helmets, jackets, and insulated bags. Median delivery time settled at 23 minutes.</p>
            </div>
            <div className="tl-item reveal d4">
              <div className="when">September 2025</div>
              <h4>Awayah goes live &middot; Ride only.</h4>
              <p>Soft launch with 8 driver-partners and a closed beta of 600 users. The team committed to a multi-vertical roadmap from day one.</p>
            </div>
            <div className="tl-item reveal d5">
              <div className="when">July 2025</div>
              <h4>Seed round closed.</h4>
              <p>Initial capital raised from a small group of African and diaspora investors aligned with our long-horizon vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRESS RELEASES ── */}
      <section className="s-pad">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
            <div>
              <div className="section-eye reveal">Press Releases</div>
              <h2 className="section-h reveal d1" style={{ marginTop: '14px' }}>All updates.</h2>
            </div>
            <div className="tabs reveal d1" style={{ margin: 0 }}>
              {tabs.map(tab => (
                <button
                  key={tab}
                  className={`tab${activeTab === tab ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="releases reveal d2" style={{ marginTop: '32px' }}>
            {filtered.map((r, i) => (
              <a key={i} className="release" href="#">
                <div className="d">{r.date}</div>
                <div className="t">{r.title}</div>
                <span className="badge badge-soft">{r.category}</span>
                <div className="arr">&rarr;</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="s-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '600px', marginBottom: '40px' }}>
            <div className="section-eye reveal">Upcoming</div>
            <h2 className="section-h reveal d1" style={{ marginTop: '14px' }}>Investor events.</h2>
          </div>
          <div className="events-grid">
            <div className="event reveal">
              <div className="date">
                <div className="m">Jun</div>
                <div className="d">12</div>
              </div>
              <div>
                <h4>Q2 2026 Investor Update Call</h4>
                <p>Quarterly results, growth update, and Q&amp;A with the founding team.</p>
                <div className="where">Virtual &middot; 14:00 CAT</div>
              </div>
            </div>
            <div className="event reveal d1">
              <div className="date">
                <div className="m">Jul</div>
                <div className="d">18</div>
              </div>
              <div>
                <h4>Annual Investor Day &middot; Kigali</h4>
                <p>In-person walk-through of operations, fleet, and merchant partners. Limited to 30 attendees.</p>
                <div className="where">Awayah HQ &middot; KG 9 Ave</div>
              </div>
            </div>
            <div className="event reveal d2">
              <div className="date">
                <div className="m">Sep</div>
                <div className="d">04</div>
              </div>
              <div>
                <h4>Africa Tech Summit &middot; Cape Town</h4>
                <p>Awayah CEO on panel: &ldquo;The Super-App Playbook for Secondary African Cities.&rdquo;</p>
                <div className="where">CTICC &middot; Cape Town</div>
              </div>
            </div>
            <div className="event reveal d3">
              <div className="date">
                <div className="m">Oct</div>
                <div className="d">22</div>
              </div>
              <div>
                <h4>Pre-Series A Investor Roadshow</h4>
                <p>Private briefings with prospective Series A investors. By invitation.</p>
                <div className="where">Nairobi &middot; Lagos &middot; Dubai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE ── */}
      <Subscribe />
    </>
  )
}
