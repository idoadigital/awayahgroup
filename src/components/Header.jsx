import { useEffect, useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoLime from '../assets/awayah-lime-logo.png'
import logoBlack from '../assets/awayah-black-logo.png'
import SearchOverlay from './SearchOverlay'

const navLinks = [
  { to: '/', label: 'Overview' },
  { to: '/financials', label: 'Financials' },
  { to: '/news-events', label: 'News & Events' },
  { to: '/governance', label: 'Governance' },
  { to: '/resources', label: 'Resources' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ctrl/Cmd+K shortcut
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const closeSearch = useCallback(() => setSearchOpen(false), [])

  const cls = ['site-header']
  if (!isHome) cls.push('solid')
  if (scrolled) cls.push('scrolled')

  return (
    <>
      <header className={cls.join(' ')}>
        <div className="header-inner">
          <Link to="/" className="wordmark sm" aria-label="Awayah">
            <img src={(!isHome || scrolled) ? logoBlack : logoLime} alt="Awayah" className="wordmark-logo sm" />
            <span className="header-pipe">| Investors</span>
          </Link>
          <nav className="nav" aria-label="Primary">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            </button>
          </div>
        </div>
      </header>
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </>
  )
}
