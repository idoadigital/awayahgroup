import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import SubHero from '../components/SubHero'
import logoLime from '../assets/awayah-lime-logo.png'
import subheroBg from '../assets/siteimages/web/package-doorstep.webp'

export default function Resources() {
  useReveal()
  const [sent, setSent] = useState(false)

  function handleContactSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { e.target.reset(); setSent(false) }, 2400)
  }

  return (
    <>
      <SubHero
        eyebrow="Resources"
        title='Everything an investor <span class="lime">needs.</span>'
        lede="Letters, decks, financial reports, FAQs, and a direct line to the team. We over-share by design — it's faster than answering the same questions twice."
        bgImage={subheroBg}
      />

      {/* ── FEATURED CEO LETTER ── */}
      <section className="s-pad">
        <div className="container">
          <div className="featured-letter reveal">
            <div className="body">
              <div className="eye">CEO Letter &middot; April 2026</div>
              <h2>An honest letter at month eight.</h2>
              <blockquote>&ldquo;We are smaller than the headline numbers of any super-app you&rsquo;ve heard of. That&rsquo;s the point. Read these pages with that frame in mind &mdash; and judge us on the shape of our growth, the discipline of our spend, and the size of the market we&rsquo;re walking into.&rdquo;</blockquote>
              <a href="#" className="btn btn-lime">Read Full Letter &rarr;</a>
              <div className="sig">Eric M.</div>
              <div className="sig-name">Co-founder &amp; CEO</div>
            </div>
            <div className="preview">
              <img src={logoLime} alt="Awayah" className="doc-h" style={{ height: '28px' }} />
              <div className="doc-title">A Letter to Investors</div>
              <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--mute)', marginTop: '6px' }}>April 2026 &middot; 8 pages</div>
              <div className="lines"><span></span><span></span><span></span><span></span><span></span></div>
              <div className="lines" style={{ marginTop: '14px' }}><span></span><span></span><span></span><span></span><span></span></div>
              <div className="lines" style={{ marginTop: '14px' }}><span></span><span></span><span></span><span></span><span style={{ width: '30%' }}></span></div>
              <div style={{ marginTop: 'auto', paddingTop: '18px', borderTop: '1px solid var(--bone)', fontFamily: "'Caveat',cursive", fontSize: '22px', color: 'var(--ink)' }}>&mdash; Eric M.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section className="s-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '600px', marginBottom: '48px' }}>
            <div className="section-eye reveal">Documents</div>
            <h2 className="section-h-lg reveal d1" style={{ marginTop: '14px' }}>Decks, reports, fact sheets.</h2>
          </div>

          <div className="docs-grid">
            <div className="doc reveal">
              <div className="badge-row"><div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg></div><span className="badge badge-lime">Latest</span></div>
              <h4>Investor Pitch Deck</h4>
              <p>The current narrative we use with prospective Series A investors. 22 slides, updated monthly.</p>
              <div className="foot"><span>PDF &middot; 3.2 MB</span><span className="arr">Download &rarr;</span></div>
            </div>
            <div className="doc reveal d1">
              <div className="badge-row"><div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18h18"/><path d="M7 18V12"/><path d="M12 18V8"/><path d="M17 18V5"/></svg></div><span className="badge badge-soft">Quarterly</span></div>
              <h4>Q1 2026 Investor Update</h4>
              <p>Performance against plan, key cohort metrics, and operational milestones from the first quarter.</p>
              <div className="foot"><span>PDF &middot; 1.8 MB</span><span className="arr">Download &rarr;</span></div>
            </div>
            <div className="doc reveal d2">
              <div className="badge-row"><div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10"/></svg></div><span className="badge badge-soft">Market</span></div>
              <h4>Kigali Market Sizing Memo</h4>
              <p>Our methodology for TAM/SAM/SOM, with primary research and third-party data citations.</p>
              <div className="foot"><span>PDF &middot; 2.1 MB</span><span className="arr">Download &rarr;</span></div>
            </div>
            <div className="doc reveal">
              <div className="badge-row"><div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg></div><span className="badge badge-soft">Model</span></div>
              <h4>3-Year Financial Model</h4>
              <p>Editable model with assumptions clearly flagged. Available to qualified investors under NDA.</p>
              <div className="foot"><span>XLSX &middot; By request</span><span className="arr">Request &rarr;</span></div>
            </div>
            <div className="doc reveal d1">
              <div className="badge-row"><div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg></div><span className="badge badge-soft">Brand</span></div>
              <h4>One-Page Fact Sheet</h4>
              <p>The 60-second version: who we are, what we do, where we are, and what we&rsquo;re raising.</p>
              <div className="foot"><span>PDF &middot; 380 KB</span><span className="arr">Download &rarr;</span></div>
            </div>
            <div className="doc reveal d2">
              <div className="badge-row"><div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><span className="badge badge-soft">Press</span></div>
              <h4>Press &amp; Media Kit</h4>
              <p>Logos, photography, founder bios, and approved messaging for journalists and partners.</p>
              <div className="foot"><span>ZIP &middot; 24 MB</span><span className="arr">Download &rarr;</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="s-pad" style={{ background: 'var(--bone)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
            <div className="section-eye reveal">Frequently Asked</div>
            <h2 className="section-h-lg reveal d1" style={{ marginTop: '14px' }}>Investor questions, answered directly.</h2>
          </div>
          <div className="faq-list">
            <details className="faq reveal" open>
              <summary>You&rsquo;re only 8 months in. Why should an investor pay attention now? <span className="ico">+</span></summary>
              <div className="a">Because the cost of getting in early into infrastructure-shaped businesses in emerging markets is non-trivial later. Our metrics are small but the shape &mdash; retention, cross-vertical engagement, contribution margin trajectory &mdash; already mirrors successful super apps at the same stage. We&rsquo;d rather have early believers than late chasers.</div>
            </details>
            <details className="faq reveal d1">
              <summary>How do your numbers compare to peers at month 8? <span className="ico">+</span></summary>
              <div className="a">Comparable Pan-African and South Asian super apps were typically operating in one vertical at month 8 with retention in the 20-25% range. We are operating in three verticals with D30 retention at 38%. We attribute that to product discipline and an unusually engaged founding team &mdash; not to spend.</div>
            </details>
            <details className="faq reveal d1">
              <summary>What are you raising and at what stage? <span className="ico">+</span></summary>
              <div className="a">We are pre-Series A. We are not actively raising today, but expect to open a Series A round in Q4 2026. We are happy to take introductory meetings with funds whose mandate is aligned with our long-horizon vision.</div>
            </details>
            <details className="faq reveal d2">
              <summary>What&rsquo;s your moat? <span className="ico">+</span></summary>
              <div className="a">Density and trust, in that order. Density is mechanical: more partners + more users = better unit economics. Trust is cultural: in Kigali, brand visibility on streets, jackets, and bags compounds faster than digital marketing. We are intentionally over-investing in both.</div>
            </details>
            <details className="faq reveal d2">
              <summary>What are the biggest risks you see? <span className="ico">+</span></summary>
              <div className="a">Three: (1) capital intensity outpacing density; (2) regulatory shift in mobility or payments; (3) execution risk on the Series A timing. We talk about all three openly with our board, and they are reflected in our scenario plans.</div>
            </details>
            <details className="faq reveal d3">
              <summary>How can I get on the investor distribution list? <span className="ico">+</span></summary>
              <div className="a">Subscribe via the form below, or email <a href="mailto:investors@awayah.rw" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>investors@awayah.rw</a> with a brief intro about your fund or angel mandate.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CONTACT IR ── */}
      <section className="s-pad">
        <div className="container">
          <div className="contact-card reveal">
            <div>
              <div className="section-eye">Contact IR</div>
              <h3>Talk to us directly.</h3>
              <p>We respond to qualified investor inquiries within 48 hours. Be specific about your mandate and we&rsquo;ll make every minute count.</p>
              <div style={{ fontSize: '14px', color: 'var(--ink)', marginTop: '14px' }}><strong>investors@awayah.rw</strong></div>
              <div style={{ fontSize: '14px', color: 'var(--mute)', marginTop: '4px' }}>KG 9 Ave, Kigali, Rwanda</div>
            </div>
            <form className="contact-fields" onSubmit={handleContactSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Fund / Company" />
              <input type="email" className="full" placeholder="Email" required />
              <textarea className="full" placeholder="Tell us about your mandate (1-2 sentences)" required></textarea>
              <button type="submit" className="btn btn-outline full" style={{ height: '48px' }}>{sent ? 'Sent \u2713' : 'Send \u2192'}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
