import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Overview from './pages/Overview'
import Financials from './pages/Financials'
import NewsEvents from './pages/NewsEvents'
import Governance from './pages/Governance'
import Resources from './pages/Resources'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </>
  )
}
