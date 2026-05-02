import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import Subscribe from '../components/Subscribe'
import logoLime from '../assets/awayah-lime-logo.png'
import logoBlack from '../assets/awayah-black-logo.png'
import hero1 from '../assets/siteimages/web/luggage-pickup-hero1.webp'
import hero2 from '../assets/siteimages/web/shopper-bag-hero2.webp'
import hero3 from '../assets/siteimages/web/rooftop-friends-hero3.webp'
import imgRideCity from '../assets/siteimages/web/ride-hail-city.webp'
import imgDeliveryRider from '../assets/siteimages/web/delivery-rider.webp'
import imgShopperWalk from '../assets/siteimages/web/shopper-walk.webp'
import imgRiderSunset from '../assets/siteimages/web/rider-sunset.webp'
import imgKigaliSkyline from '../assets/siteimages/web/kigali-skyline.webp'

export default function Overview() {
  useReveal()

  /* ───── Hero carousel state ───── */
  const [cur, setCur] = useState(0)
  const timerRef = useRef(null)
  const pausedRef = useRef(false)
  const heroRef = useRef(null)
  const TOTAL = 3
  const INTERVAL = 6200

  const go = useCallback((n) => {
    setCur(((n % TOTAL) + TOTAL) % TOTAL)
  }, [])

  /* auto-advance */
  useEffect(() => {
    const start = () => {
      clearInterval(timerRef.current)
      timerRef.current = setInterval(() => {
        if (!pausedRef.current) setCur(prev => (prev + 1) % TOTAL)
      }, INTERVAL)
    }
    start()
    return () => clearInterval(timerRef.current)
  }, [])

  /* pause on hover */
  const handleMouseEnter = () => { pausedRef.current = true }
  const handleMouseLeave = () => { pausedRef.current = false }

  /* restart dot fill animation on slide change */
  const dotRefs = useRef([])
  useEffect(() => {
    dotRefs.current.forEach((btn, i) => {
      if (!btn) return
      const fill = btn.querySelector('.fill')
      if (!fill) return
      fill.style.animation = 'none'
      // force reflow
      void fill.offsetWidth
      if (i === cur) {
        fill.style.animation = 'dotFill 6.2s linear forwards'
      }
    })
  }, [cur])

  /* ───── Animated counters ───── */
  const statsRef = useRef(null)
  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll('[data-counter]')
    if (!counters) return

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const target = parseFloat(el.dataset.counter)
        const suffix = el.dataset.suffix || ''
        const duration = 1600
        const start = performance.now()

        const animate = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
          const value = Math.round(eased * target)
          el.textContent = value + suffix
          if (p < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
        io.unobserve(el)
      })
    }, { threshold: 0.3 })

    counters.forEach(c => io.observe(c))
    return () => io.disconnect()
  }, [])

  /* ───── Slide data ───── */
  const slides = [
    {
      bg: `linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.15)), url(${hero1}) center/cover no-repeat`,
      stamps: [],
      scene: 'scene \u00b7 branded car + delivery bike, kigali street',
      eyebrow: 'Investor Relations',
      h1: 'Your City,<br/><span class="lime">On Demand.</span>',
      lede: "Building Africa\u2019s leading multi-service platform for everyday life \u2014 mobility, delivery, and commerce, unified across Kigali and beyond.",
      cta1: { to: '/financials', cls: 'btn btn-lime', text: 'The Opportunity', arrow: true },
      cta2: { to: '/resources', cls: 'btn btn-ghost', text: 'Read CEO Letter' },
    },
    {
      bg: `linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.15)), url(${hero2}) center/cover no-repeat`,
      stamps: [],
      scene: 'scene \u00b7 customer with branded shopping bag, market',
      eyebrow: 'Platform',
      h1: 'Everything Kigali.<br/><span class="lime">In One App.</span>',
      lede: 'From daily commutes to last-mile deliveries and digital shopping \u2014 one seamless platform connecting riders, drivers, and merchants.',
      cta1: { to: '/resources', cls: 'btn btn-lime', text: 'Explore Platform', arrow: true },
      cta2: { to: '/financials', cls: 'btn btn-ghost', text: 'View Financials' },
    },
    {
      bg: `linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.15)), url(${hero3}) center/cover no-repeat`,
      stamps: [],
      scene: 'scene \u00b7 delivery rider, branded helmet + bag',
      eyebrow: 'Growth',
      h1: "Africa\u2019s Everyday<br/><span class=\"lime\">Super App.</span>",
      lede: 'A diversified ecosystem built to scale across multiple verticals \u2014 designed for the rhythm of modern urban African life.',
      cta1: { to: '/news-events', cls: 'btn btn-lime', text: 'Latest Updates', arrow: true },
      cta2: { to: '/news-events', cls: 'btn btn-ghost', text: 'Press Releases' },
    },
  ]

  const arrowSvg = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  )

  return (
    <>
      {/* ============ HERO CAROUSEL ============ */}
      <section
        className="hero"
        id="hero"
        data-screen-label="01 Hero"
        ref={heroRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero-slides" id="heroSlides">
          {slides.map((slide, i) => (
            <article
              key={i}
              className={`hero-slide${i === cur ? ' active' : ''}`}
              data-slide={i}
            >
              <div className="hero-img" style={{ background: slide.bg }} />

              {/* brand stamps */}
              {slide.stamps.map((stamp, si) => (
                <img key={si} src={stamp.img} alt="Awayah" style={stamp.style} />
              ))}


              <div className="hero-content">
                <span className="eyebrow anim-up d1">{slide.eyebrow}</span>
                <h1 className="anim-up d2" dangerouslySetInnerHTML={{ __html: slide.h1 }} />
                <p className="lede anim-up d3">{slide.lede}</p>
                <div className="hero-cta-row anim-up d4">
                  <Link className={slide.cta1.cls} to={slide.cta1.to}>
                    {slide.cta1.text} {slide.cta1.arrow && arrowSvg}
                  </Link>
                  <Link className={slide.cta2.cls} to={slide.cta2.to}>
                    {slide.cta2.text}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* scroll cue */}
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></svg>
        </div>

        {/* controls */}
        <div className="hero-controls">
          <div className="hero-dots" id="heroDots">
            {[0, 1, 2].map(i => (
              <button
                key={i}
                className={i === cur ? 'active' : ''}
                data-i={i}
                onClick={() => go(i)}
                ref={el => dotRefs.current[i] = el}
              >
                <span className="fill" />
              </button>
            ))}
          </div>
          <div className="hero-arrows">
            <button id="heroPrev" aria-label="Previous slide" onClick={() => go(cur - 1)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            </button>
            <button id="heroNext" aria-label="Next slide" onClick={() => go(cur + 1)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ============ ONE PLATFORM / STATS ============ */}
      <section className="s-pad" data-screen-label="02 Investor Snapshot" ref={statsRef}>
        <div className="container">
          <div className="platform-head">
            <h2 className="reveal" dangerouslySetInnerHTML={{ __html: 'Eight months in.<br/>Building for the next decade.' }} />
            <p className="reveal d1">Awayah launched in Kigali in late 2025. We&#39;re early &mdash; but the market opportunity is generational. This page tells you exactly where we are, what we&#39;ve learned, and the size of what we&#39;re building toward.</p>
          </div>

          <div className="stats-row">
            {/* Stat 1: Months Since Launch */}
            <div className="stat reveal">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M22 19a4.5 4.5 0 0 0-7-3.7"/></svg>
              </div>
              <div>
                <div className="stat-num" data-counter="8" data-suffix="" data-int="1">0</div>
                <div className="stat-label">Months Since Launch</div>
              </div>
            </div>

            {/* Stat 2: Active Early Users */}
            <div className="stat reveal d1">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h2l1.5-5h11L19 14h2v3h-3a2 2 0 1 1-4 0H10a2 2 0 1 1-4 0H3z"/></svg>
              </div>
              <div>
                <div className="stat-num" data-counter="12" data-suffix="K" data-int="1">0</div>
                <div className="stat-label">Active Early Users</div>
              </div>
            </div>

            {/* Stat 3: Verticals Live */}
            <div className="stat reveal d2">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1.2 12.4a2 2 0 0 1-2 1.6H8.2a2 2 0 0 1-2-1.6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>
              </div>
              <div>
                <div className="stat-num" data-counter="3" data-suffix="" data-int="1">0</div>
                <div className="stat-label">Verticals Live</div>
              </div>
            </div>

            {/* Stat 4: MoM User Growth */}
            <div className="stat reveal d3">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18h18"/><path d="M7 18V12"/><path d="M12 18V8"/><path d="M17 18V5"/><path d="m20 5-3 3-3-3-4 4-3-3"/></svg>
              </div>
              <div>
                <div className="stat-num" data-counter="22" data-suffix="%" data-int="1">0</div>
                <div className="stat-label">MoM User Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EVERYTHING KIGALI SPLIT ============ */}
      <section className="s-pad" style={{ paddingTop: 0 }} data-screen-label="03 Platform Story">
        <div className="container">
          <div className="split">
            <div className="mockup-pair reveal" style={{ position:'relative', aspectRatio:'1.05/1', display:'flex', alignItems:'center', justifyContent:'center' }}>
              {/* Phone 1 — Listing Page (higher, left) */}
              <div className="mockup-phone" style={{ position:'absolute', left:'8%', top:'2%', width:'44%', zIndex:2 }}>
                <div className="mockup-frame">
                  {/* status bar */}
                  <div className="mockup-status">
                    <span>9:41</span>
                    <div style={{ display:'flex', gap:'4px', alignItems:'center' }}>
                      <div style={{ width:'14px', height:'8px', border:'1.5px solid var(--ink)', borderRadius:'2px', position:'relative' }}><div style={{ position:'absolute', right:'-3px', top:'50%', transform:'translateY(-50%)', width:'2px', height:'5px', background:'var(--ink)', borderRadius:'0 1px 1px 0' }} /></div>
                    </div>
                  </div>
                  {/* header */}
                  <div style={{ padding:'12px 16px 8px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div style={{ fontSize:'15px', fontWeight:700, letterSpacing:'-0.01em', color:'var(--ink)' }}>Shop</div>
                    <div style={{ display:'flex', gap:'8px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/></svg>
                    </div>
                  </div>
                  {/* category chips */}
                  <div style={{ padding:'4px 16px 10px', display:'flex', gap:'6px' }}>
                    <div style={{ padding:'4px 10px', borderRadius:'999px', background:'var(--ink)', color:'#fff', fontSize:'9px', fontWeight:600 }}>All</div>
                    <div style={{ padding:'4px 10px', borderRadius:'999px', border:'1px solid var(--line)', fontSize:'9px', color:'var(--mute)' }}>Groceries</div>
                    <div style={{ padding:'4px 10px', borderRadius:'999px', border:'1px solid var(--line)', fontSize:'9px', color:'var(--mute)' }}>Fashion</div>
                  </div>
                  {/* product grid */}
                  <div style={{ padding:'0 16px 16px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px' }}>
                    {[
                      { name:'Fresh Avocados', price:'RWF 1,200', color:'var(--lime)' },
                      { name:'Coffee Beans', price:'RWF 3,500', color:'var(--bone)' },
                      { name:'Kitenge Fabric', price:'RWF 8,000', color:'#E8DCC8' },
                      { name:'Local Honey', price:'RWF 4,200', color:'#F5E6C8' },
                    ].map((item, i) => (
                      <div key={i} style={{ border:'1px solid var(--line)', borderRadius:'8px', overflow:'hidden' }}>
                        <div style={{ aspectRatio:'1/1', background:item.color, display:'flex', alignItems:'center', justifyContent:'center' }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,.2)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                        </div>
                        <div style={{ padding:'6px 8px' }}>
                          <div style={{ fontSize:'8px', fontWeight:600, color:'var(--ink)', lineHeight:1.2 }}>{item.name}</div>
                          <div style={{ fontSize:'7px', color:'var(--lime-deep)', fontWeight:600, marginTop:'2px' }}>{item.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* bottom nav */}
                  <div className="mockup-nav">
                    <div className="mockup-nav-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                      <span>Home</span>
                    </div>
                    <div className="mockup-nav-item active">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/></svg>
                      <span>Shop</span>
                    </div>
                    <div className="mockup-nav-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>Ride</span>
                    </div>
                    <div className="mockup-nav-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span>Account</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 — Product Detail Page (lower, right) */}
              <div className="mockup-phone" style={{ position:'absolute', right:'8%', bottom:'2%', width:'44%', zIndex:1 }}>
                <div className="mockup-frame">
                  {/* status bar */}
                  <div className="mockup-status">
                    <span>9:41</span>
                    <div style={{ display:'flex', gap:'4px', alignItems:'center' }}>
                      <div style={{ width:'14px', height:'8px', border:'1.5px solid var(--ink)', borderRadius:'2px', position:'relative' }}><div style={{ position:'absolute', right:'-3px', top:'50%', transform:'translateY(-50%)', width:'2px', height:'5px', background:'var(--ink)', borderRadius:'0 1px 1px 0' }} /></div>
                    </div>
                  </div>
                  {/* back header */}
                  <div style={{ padding:'10px 16px 6px', display:'flex', alignItems:'center', gap:'8px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    <div style={{ fontSize:'13px', fontWeight:600, color:'var(--ink)' }}>Product Details</div>
                  </div>
                  {/* product image */}
                  <div style={{ margin:'8px 16px', aspectRatio:'1.4/1', background:'var(--lime)', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,.15)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                    <div style={{ position:'absolute', top:'8px', right:'8px', width:'22px', height:'22px', borderRadius:'50%', border:'1.5px solid rgba(0,0,0,.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,.3)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </div>
                  </div>
                  {/* product info */}
                  <div style={{ padding:'8px 16px' }}>
                    <div style={{ fontSize:'13px', fontWeight:700, color:'var(--ink)' }}>Fresh Avocados</div>
                    <div style={{ fontSize:'7px', color:'var(--mute)', marginTop:'2px' }}>Locally sourced from Musanze farms</div>
                    <div style={{ fontSize:'14px', fontWeight:700, color:'var(--lime-deep)', marginTop:'6px' }}>RWF 1,200</div>
                    <div style={{ display:'flex', alignItems:'center', gap:'4px', marginTop:'4px' }}>
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="8" height="8" viewBox="0 0 24 24" fill={s <= 4 ? 'var(--lime-deep)' : 'none'} stroke="var(--lime-deep)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                      <span style={{ fontSize:'7px', color:'var(--mute)', marginLeft:'2px' }}>4.0 (128)</span>
                    </div>
                  </div>
                  {/* quantity + add */}
                  <div style={{ padding:'10px 16px 14px', display:'flex', alignItems:'center', gap:'8px' }}>
                    <div style={{ display:'flex', alignItems:'center', border:'1px solid var(--line)', borderRadius:'6px', overflow:'hidden' }}>
                      <div style={{ width:'24px', height:'24px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', color:'var(--mute)' }}>-</div>
                      <div style={{ width:'24px', height:'24px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px', fontWeight:600, borderLeft:'1px solid var(--line)', borderRight:'1px solid var(--line)' }}>1</div>
                      <div style={{ width:'24px', height:'24px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', color:'var(--ink)' }}>+</div>
                    </div>
                    <div style={{ flex:1, height:'28px', background:'var(--ink)', borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'9px', fontWeight:600 }}>Add to Cart</div>
                  </div>
                  {/* bottom nav */}
                  <div className="mockup-nav">
                    <div className="mockup-nav-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                      <span>Home</span>
                    </div>
                    <div className="mockup-nav-item active">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/></svg>
                      <span>Shop</span>
                    </div>
                    <div className="mockup-nav-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>Ride</span>
                    </div>
                    <div className="mockup-nav-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span>Account</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="copy reveal d1">
              <div className="tag-eyebrow">Our Platform</div>
              <h3 dangerouslySetInnerHTML={{ __html: 'Everything Kigali.<br/>In One App.' }} />
              <p>From daily commutes to last-mile deliveries and digital shopping, Awayah brings essential services together on one seamless platform &mdash; designed for the rhythm of modern urban life.</p>
              <Link to="/resources" className="btn-link">Explore Our Platform <span className="arrow">&rarr;</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP (BLACK) ============ */}
      <section className="trust" data-screen-label="04 Pillars">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item reveal">
              <div className="trust-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h4>Trust</h4>
                <p>Safety, reliability, and transparency at the core of everything we do.</p>
              </div>
            </div>
            <div className="trust-item reveal d1">
              <div className="trust-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18"/><path d="M6 20V13"/><path d="M11 20V9"/><path d="M16 20V5"/><path d="m20 5-3 3-3-3-4 4-3-3"/></svg>
              </div>
              <div>
                <h4>Growth</h4>
                <p>Strong user adoption and expanding services driving sustainable growth.</p>
              </div>
            </div>
            <div className="trust-item reveal d2" style={{ borderRight: 0 }}>
              <div className="trust-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="18" r="2.5"/></svg>
              </div>
              <div>
                <h4>Multi-Vertical Model</h4>
                <p>A diversified ecosystem built to scale across multiple everyday needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ECOSYSTEM IMAGE STRIP ============ */}
      <section data-screen-label="05 Brand Ecosystem">
        <div className="ecosystem">
          <div className="photo" style={{ background:`url(${imgRideCity}) center/cover no-repeat` }}></div>
          <div className="photo" style={{ background:`url(${imgDeliveryRider}) center/cover no-repeat` }}></div>
          <div className="photo" style={{ background:`url(${imgShopperWalk}) center/cover no-repeat` }}></div>
          <div className="photo" style={{ background:`url(${imgRiderSunset}) center/cover no-repeat` }}></div>
          <div className="photo" style={{ background:`url(${imgKigaliSkyline}) center/cover no-repeat` }}></div>
        </div>
      </section>

      {/* ============ NEWS & FINANCIAL HIGHLIGHTS ============ */}
      <section className="s-pad" data-screen-label="06 News &amp; Financials">
        <div className="container">
          <div className="news-fin">
            <div className="reveal">
              <div className="section-eye">News &amp; Events</div>
              <div className="news-head">
                <h3 className="section-h">Latest Updates</h3>
                <a href="#" className="view-all">View all news &rarr;</a>
              </div>
              <div className="news-list">
                <a className="news-row" href="#">
                  <div className="news-date">May 15, 2025</div>
                  <div className="news-title">Awayah Reports Strong Q1 2025 Performance</div>
                  <div className="news-arrow">&rarr;</div>
                </a>
                <a className="news-row" href="#">
                  <div className="news-date">Apr 28, 2025</div>
                  <div className="news-title">Awayah Expands Delivery Network Across Kigali</div>
                  <div className="news-arrow">&rarr;</div>
                </a>
                <a className="news-row" href="#">
                  <div className="news-date">Apr 10, 2025</div>
                  <div className="news-title">Awayah Partners with Local Merchants to Drive Growth</div>
                  <div className="news-arrow">&rarr;</div>
                </a>
                <a className="news-row" href="#">
                  <div className="news-date">Mar 22, 2025</div>
                  <div className="news-title">Annual Investor Day &mdash; Save the Date</div>
                  <div className="news-arrow">&rarr;</div>
                </a>
              </div>
            </div>

            <aside className="reveal d1">
              <div className="section-eye">Financial Highlights</div>
              <div className="fin-card">
                <h3 className="section-h">Early Traction</h3>
                <p style={{ fontSize:'13px', color:'var(--mute)', margin:'14px 0 0', lineHeight:'1.6' }}>Pre-revenue scale. We report unit economics and cohort behavior &mdash; not headline GMV &mdash; until we&#39;ve earned the right to.</p>
                <div className="fin-grid">
                  <div className="fin-cell">
                    <div className="fin-cell-label">MoM User Growth</div>
                    <div className="fin-cell-value">22%</div>
                    <div className="fin-cell-delta">8-mo trailing</div>
                  </div>
                  <div className="fin-cell">
                    <div className="fin-cell-label">D30 Retention</div>
                    <div className="fin-cell-value">38%</div>
                    <div className="fin-cell-delta">&uarr; vs benchmark</div>
                  </div>
                  <div className="fin-cell">
                    <div className="fin-cell-label">Runway</div>
                    <div className="fin-cell-value">14 mo</div>
                    <div className="fin-cell-delta">at current burn</div>
                  </div>
                </div>
                <Link to="/financials" className="btn-link">View Financials <span className="arrow">&rarr;</span></Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ SUBSCRIBE ============ */}
      <Subscribe />
    </>
  )
}
