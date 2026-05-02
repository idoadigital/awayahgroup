import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import SubHero from '../components/SubHero'
import subheroBg from '../assets/siteimages/web/kigali-cityscape.webp'

export default function Financials() {
  useReveal()

  return (
    <>
      <SubHero
        eyebrow="Financials"
        title='Where we are.<br/>Where we&apos;re <span class="lime">going.</span>'
        lede="We launched eight months ago. This page is built around two truths: today's numbers are small, and the market we're building into is enormous."
        bgImage={subheroBg}
      />

      {/* ── MARKET OPPORTUNITY ── */}
      <section className="s-pad">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '24px' }}>
            <div className="section-eye reveal">The Opportunity</div>
            <h2 className="section-h-lg reveal d1">Africa&rsquo;s super-app moment is now.</h2>
            <p className="reveal d2" style={{ fontSize: '17px', color: 'var(--mute)', lineHeight: 1.65, marginTop: '22px' }}>Smartphone penetration in Rwanda has crossed 70%. Mobile money adoption sits above 90%. Yet most everyday services &mdash; rides, deliveries, shopping, payments &mdash; still live in fragmented, cash-heavy silos. Awayah is built to be the connective layer.</p>
          </div>

          <div className="opp-grid">
            <div className="opp-card reveal d1">
              <div className="lbl">TAM &middot; Rwanda + EAC</div>
              <div className="num">$8.4B</div>
              <div className="desc">Combined annual spend on mobility, last-mile delivery, and digital commerce across the East African Community by 2030 (source: GSMA, World Bank estimates).</div>
            </div>
            <div className="opp-card featured reveal d2">
              <div className="lbl">SAM &middot; Kigali Metro</div>
              <div className="num">$640M</div>
              <div className="desc">Addressable urban services spend within Kigali alone &mdash; our beachhead market and the focus of our first 24 months of operations.</div>
            </div>
            <div className="opp-card reveal d3">
              <div className="lbl">SOM &middot; 2028 Target</div>
              <div className="num">$48M</div>
              <div className="desc">Our realistic share at 8% Kigali penetration and ~7% take rate &mdash; a fraction of the market that still represents a transformative business.</div>
            </div>
          </div>

          <div style={{ marginTop: '28px', fontSize: '12px', color: 'var(--mute-2)', letterSpacing: '.04em' }}>Estimates are management projections based on third-party market data. Subject to revision as the business matures.</div>
        </div>
      </section>

      {/* ── HONEST POSITION ── */}
      <section className="s-pad" style={{ paddingTop: 0, background: 'var(--bone)' }}>
        <div className="container">
          <div className="honest">
            <div className="reveal">
              <div className="section-eye">Where We Are Today</div>
              <h2>We&rsquo;re early.<br/>We say so out loud.</h2>
              <p>Eight months in, we have ~12,000 active early users, three live verticals, and a small fleet of branded mobility and delivery partners. We are not yet generating meaningful revenue, and we will not pretend otherwise.</p>
              <p>What we <em>do</em> have is signal: 22% MoM user growth, retention that beats regional benchmarks, and a product loop that compounds across verticals. That&rsquo;s the asset.</p>
            </div>
            <div style={{ paddingTop: '8px' }}>
              <div className="metric-row reveal d1">
                <div className="metric"><div className="k">Active Users</div><div className="v">~12K</div><div className="d">+22% MoM</div></div>
                <div className="metric"><div className="k">D30 Retention</div><div className="v">38%</div><div className="d">vs 24% benchmark</div></div>
              </div>
              <div className="metric-row reveal d2" style={{ borderTop: 0 }}>
                <div className="metric"><div className="k">Verticals Live</div><div className="v">3</div><div className="d mute">Ride &middot; Deliver &middot; Shop</div></div>
                <div className="metric"><div className="k">Cross-Vertical Use</div><div className="v">31%</div><div className="d">of repeat users</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RUNWAY + UNIT ECONOMICS ── */}
      <section className="s-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'stretch' }}>
            {/* Runway */}
            <div className="runway-card reveal">
              <div className="h">Runway</div>
              <h3>14 months at current burn.</h3>
              <p className="sub">Seed capital raised in Q1 2025. Disciplined burn with a clear path to extension via the Series A targeted Q4 2026.</p>
              <div className="runway-bars">
                {[
                  { cls: 'hot', h: '90%' }, { cls: 'hot', h: '88%' }, { cls: 'hot', h: '85%' },
                  { cls: 'hot', h: '82%' }, { cls: 'hot', h: '78%' },
                  { cls: 'warm', h: '72%' }, { cls: 'warm', h: '66%' }, { cls: 'warm', h: '58%' }, { cls: 'warm', h: '50%' },
                  { cls: 'cool', h: '42%' }, { cls: 'cool', h: '34%' }, { cls: 'cool', h: '26%' }, { cls: 'cool', h: '18%' }, { cls: 'cool', h: '10%' }
                ].map((b, i) => <div key={i} className={`runway-bar ${b.cls}`} style={{ height: b.h }} />)}
              </div>
              <div className="runway-foot"><span>Today</span><span>Series A target</span></div>
            </div>

            {/* Unit Economics */}
            <div className="reveal d1">
              <div className="section-eye" style={{ marginBottom: '18px' }}>Unit Economics</div>
              <h2 style={{ fontSize: '36px', letterSpacing: '-0.02em', fontWeight: 600, margin: '0 0 24px', lineHeight: 1.08 }}>The shape is right.</h2>
              <div className="ue-grid">
                <div className="ue-card">
                  <div className="h">CAC</div>
                  <div className="v">$3.20</div>
                  <div className="trend">
                    <svg viewBox="0 0 200 60" preserveAspectRatio="none"><polyline fill="none" stroke="#0A0A0A" strokeWidth="2" points="0,12 30,18 60,22 90,28 120,32 150,36 180,40 200,44"/></svg>
                  </div>
                  <div className="desc">Down from $5.10 at launch. Driven by referral compounding.</div>
                </div>
                <div className="ue-card">
                  <div className="h">Contribution Margin</div>
                  <div className="v" style={{ color: 'var(--lime-deep)' }}>+18%</div>
                  <div className="trend">
                    <svg viewBox="0 0 200 60" preserveAspectRatio="none"><polyline fill="none" stroke="#C7EE10" strokeWidth="2.5" points="0,52 30,46 60,42 90,34 120,28 150,22 180,16 200,10"/></svg>
                  </div>
                  <div className="desc">Per-trip CM crossed positive in month 6.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GROWTH MODEL ── */}
      <section className="s-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <div className="section-eye reveal">Growth Model</div>
            <h2 className="section-h-lg reveal d1" style={{ marginTop: '14px' }}>A clear path. Conservative assumptions.</h2>
            <p className="reveal d2" style={{ fontSize: '16px', color: 'var(--mute)', marginTop: '22px', lineHeight: 1.65, maxWidth: '580px' }}>Our 36-month plan assumes Kigali-only density, no new geographies until month 24, and modest penetration vs. addressable market.</p>
          </div>

          <div className="proj-table-wrap reveal d2">
            <div className="row-h">
              <h4>3-Year Projection &middot; Kigali</h4>
              <span className="badge badge-soft">Management Estimate</span>
            </div>
            <table className="table proj-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th className="num yrcol">2026 (Y1)</th>
                  <th className="num yrcol">2027 (Y2)</th>
                  <th className="num yrcol">2028 (Y3)</th>
                  <th className="num yrcol">CAGR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="proj-row"><td className="label">Active Users</td><td className="num">85K</td><td className="num">240K</td><td className="num">520K</td><td className="num">147%</td></tr>
                <tr className="proj-row"><td className="label">Trips / Month</td><td className="num">120K</td><td className="num">480K</td><td className="num">1.4M</td><td className="num">241%</td></tr>
                <tr className="proj-row"><td className="label">GMV</td><td className="num">RWF 2.1B</td><td className="num">RWF 9.4B</td><td className="num">RWF 28B</td><td className="num">265%</td></tr>
                <tr className="proj-row"><td className="label">Net Revenue</td><td className="num">RWF 180M</td><td className="num">RWF 850M</td><td className="num">RWF 2.7B</td><td className="num">287%</td></tr>
                <tr className="proj-row"><td className="label">Contribution Margin</td><td className="num">22%</td><td className="num">28%</td><td className="num">34%</td><td className="num">&mdash;</td></tr>
              </tbody>
            </table>
          </div>

          <div className="disclosure reveal d3" style={{ marginTop: '36px' }}>
            <strong>A note on these numbers.</strong> The figures above are forward-looking projections, not historical results. They are based on current run-rate assumptions, third-party market sizing, and management&rsquo;s view of comparable platforms in adjacent markets. Actual results will vary &mdash; likely meaningfully. We will report against this model quarterly so investors can hold us accountable.
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="container">
          <div className="row reveal">
            <h3>Want the full investor deck and Q1 letter?</h3>
            <Link to="/resources" className="btn btn-lime">View Resources &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  )
}
