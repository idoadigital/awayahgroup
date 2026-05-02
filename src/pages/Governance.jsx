import { useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import SubHero from '../components/SubHero'
import logoLime from '../assets/awayah-lime-logo.png'
import logoBlack from '../assets/awayah-black-logo.png'
import subheroBg from '../assets/siteimages/web/brand-flatlay.webp'
import imgChauffeur from '../assets/siteimages/web/chauffeur-arrival.webp'
import imgAppUserWalking from '../assets/siteimages/web/app-user-walking.webp'
import imgRiderCityscape from '../assets/siteimages/web/rider-cityscape.webp'
import imgPremiumFlatlay from '../assets/siteimages/web/premium-flatlay.webp'
import imgRooftopCouple from '../assets/siteimages/web/rooftop-couple.webp'
import imgShopperPhone from '../assets/siteimages/web/shopper-phone.webp'

export default function Governance() {
  useReveal()

  useEffect(() => {
    const ccard = document.querySelector('.cap-card')
    if (!ccard) return
    const cap = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.cap-row').forEach((r, i) => {
            setTimeout(() => r.classList.add('in'), i * 120)
          })
          cap.disconnect()
        }
      })
    }, { threshold: 0.3 })
    cap.observe(ccard)
    return () => cap.disconnect()
  }, [])

  return (
    <>
      <SubHero
        eyebrow="Governance"
        title='How we <span class="lime">operate.</span>'
        lede="A small team. Clear principles. Honest reporting. Awayah was built from day one to be ready for institutional capital and public scrutiny."
        bgImage={subheroBg}
      />

      {/* ── PRINCIPLES ── */}
      <section className="s-pad">
        <div className="container">
          <div style={{ maxWidth: '660px', marginBottom: '48px' }}>
            <div className="section-eye reveal">Our Principles</div>
            <h2 className="section-h-lg reveal d1" style={{ marginTop: '14px' }}>Three commitments to investors.</h2>
          </div>
          <div className="principles">
            <div className="principle reveal">
              <div className="num">01</div>
              <h4>Tell the truth, especially when it&rsquo;s small.</h4>
              <p>We will never inflate metrics, hide cohort decay, or cherry-pick favorable comparisons. Every number on this site is built to survive a deep due diligence.</p>
            </div>
            <div className="principle reveal d1">
              <div className="num">02</div>
              <h4>Report against our own model.</h4>
              <p>We publish a 36-month projection so investors can hold us accountable. Quarterly, we report actuals against that model &mdash; wins and misses both.</p>
            </div>
            <div className="principle reveal d2">
              <div className="num">03</div>
              <h4>Independent oversight, from day one.</h4>
              <p>Our board includes one independent director and an audit-committee structure usually reserved for later-stage companies. Operating discipline is not optional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="s-pad" style={{ paddingTop: 0, background: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <div className="section-eye reveal">Leadership</div>
            <h2 className="section-h-lg reveal d1" style={{ marginTop: '14px' }}>The founding team.</h2>
            <p className="reveal d2" style={{ fontSize: '16px', color: 'var(--mute)', marginTop: '18px', lineHeight: 1.65 }}>Five operators with backgrounds across mobility, fintech, logistics, and consumer product. All currently full-time, all materially invested.</p>
          </div>

          <div className="team-grid">
            <div className="person reveal">
              <div className="photo" style={{ position: 'relative', background: `url(${imgChauffeur}) center/cover no-repeat` }}></div>
              <div className="body">
                <h4>Eric M.</h4>
                <div className="role">Co-founder &amp; CEO</div>
                <p>Former product lead at a Pan-African fintech. Holds the long-horizon view and runs the cap table.</p>
              </div>
            </div>
            <div className="person reveal d1">
              <div className="photo" style={{ background: `url(${imgAppUserWalking}) center/cover no-repeat` }}></div>
              <div className="body">
                <h4>Aline K.</h4>
                <div className="role">Co-founder &amp; CTO</div>
                <p>Built logistics platforms for two African on-demand companies before Awayah. Owns the engineering org.</p>
              </div>
            </div>
            <div className="person reveal d2">
              <div className="photo" style={{ background: `url(${imgRiderCityscape}) center/cover no-repeat` }}></div>
              <div className="body">
                <h4>Patrick N.</h4>
                <div className="role">Chief Operating Officer</div>
                <p>Eight years in field operations across Rwanda. Runs partner ops, fleet, and merchant onboarding.</p>
              </div>
            </div>
            <div className="person reveal d3">
              <div className="photo" style={{ background: `url(${imgPremiumFlatlay}) center/cover no-repeat` }}></div>
              <div className="body">
                <h4>Diane U.</h4>
                <div className="role">Head of Finance</div>
                <p>Former auditor (Big Four) with a focus on emerging-market fintech reporting. Owns disclosure quality.</p>
              </div>
            </div>
            <div className="person reveal d4">
              <div className="photo" style={{ background: `url(${imgRooftopCouple}) center/cover no-repeat` }}></div>
              <div className="body">
                <h4>Jean-Paul R.</h4>
                <div className="role">Head of Product</div>
                <p>Designed two consumer apps shipped at scale. Owns the cross-vertical product strategy.</p>
              </div>
            </div>
            <div className="person reveal d5">
              <div className="photo" style={{ background: `url(${imgShopperPhone}) center/cover no-repeat` }}></div>
              <div className="body">
                <h4>Sandra B.</h4>
                <div className="role">Head of Growth</div>
                <p>Built referral &amp; CAC engines at a leading East African super app. Owns user acquisition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOARD & ADVISORS ── */}
      <section className="s-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px' }}>
            <div>
              <div className="section-eye reveal">Board &amp; Advisors</div>
              <h2 className="section-h reveal d1" style={{ marginTop: '14px' }}>Senior pattern-matching for an early company.</h2>
              <p className="reveal d2" style={{ fontSize: '15px', color: 'var(--mute)', lineHeight: 1.65, marginTop: '22px', maxWidth: '380px' }}>A small board of seasoned operators meets monthly. Advisors are compensated in equity and held to specific commitments.</p>
            </div>
            <div className="advisors">
              <div className="advisor reveal d1"><div className="avatar">SM</div><div><h4>Samuel M.</h4><div className="role">Independent Director</div><p>Former CFO of a publicly-listed African telco. Chairs the audit committee.</p></div></div>
              <div className="advisor reveal d2"><div className="avatar">AO</div><div><h4>Adaeze O.</h4><div className="role">Strategic Advisor</div><p>Built the Lagos delivery operations for a major African e-commerce platform.</p></div></div>
              <div className="advisor reveal d3"><div className="avatar">NK</div><div><h4>Nancy K.</h4><div className="role">Strategic Advisor</div><p>Senior policy advisor on fintech licensing across the East African Community.</p></div></div>
              <div className="advisor reveal d4"><div className="avatar">RT</div><div><h4>Reginald T.</h4><div className="role">Strategic Advisor</div><p>20+ years in mobility OEM partnerships across Sub-Saharan Africa.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAP TABLE ── */}
      <section className="s-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cap-card reveal">
            <div>
              <div className="section-eye" style={{ color: 'var(--lime)' }}>Capital Structure</div>
              <h3>Founder-led. Aligned for the long haul.</h3>
              <p>Post-seed cap table. Founders are still the largest holders, with a sizeable employee option pool reserved for the next two years of hiring.</p>
            </div>
            <div className="cap-bars">
              <div className="cap-row" style={{ '--w': '62%' }}><div className="lbl">Founders &amp; team</div><div className="bar"><div className="fill"></div></div><div className="pct">62%</div></div>
              <div className="cap-row" style={{ '--w': '18%' }}><div className="lbl">Seed investors</div><div className="bar"><div className="fill"></div></div><div className="pct">18%</div></div>
              <div className="cap-row" style={{ '--w': '15%' }}><div className="lbl">Option pool</div><div className="bar"><div className="fill"></div></div><div className="pct">15%</div></div>
              <div className="cap-row" style={{ '--w': '5%' }}><div className="lbl">Advisors</div><div className="bar"><div className="fill"></div></div><div className="pct">5%</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POLICIES ── */}
      <section className="s-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '600px', marginBottom: '32px' }}>
            <div className="section-eye reveal">Policies &amp; Documents</div>
            <h2 className="section-h reveal d1" style={{ marginTop: '14px' }}>Available on request.</h2>
          </div>
          <div className="policies-grid">
            <a className="policy reveal" href="#">
              <div className="icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg></div>
              <div><h5>Code of Conduct</h5><p>Internal policy for all employees and partners</p></div>
              <div className="arr">&rarr;</div>
            </a>
            <a className="policy reveal d1" href="#">
              <div className="icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div><h5>Whistleblower Policy</h5><p>Protected channel for reporting concerns</p></div>
              <div className="arr">&rarr;</div>
            </a>
            <a className="policy reveal d1" href="#">
              <div className="icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg></div>
              <div><h5>Audit Committee Charter</h5><p>Roles, responsibilities, and meeting cadence</p></div>
              <div className="arr">&rarr;</div>
            </a>
            <a className="policy reveal d2" href="#">
              <div className="icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg></div>
              <div><h5>ESG Statement</h5><p>Approach to environmental and social responsibility</p></div>
              <div className="arr">&rarr;</div>
            </a>
            <a className="policy reveal d2" href="#">
              <div className="icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
              <div><h5>Data &amp; Privacy Policy</h5><p>How user and partner data is handled</p></div>
              <div className="arr">&rarr;</div>
            </a>
            <a className="policy reveal d3" href="#">
              <div className="icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3 8-8"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
              <div><h5>Articles of Incorporation</h5><p>Available to qualified investors under NDA</p></div>
              <div className="arr">&rarr;</div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
