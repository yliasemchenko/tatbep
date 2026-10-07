import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/company'
import { inkStyle, useInk } from '../motion'
import { pad } from './ui'
import SiteSearch from './SiteSearch'

const logoImg = '/assets/img/ker_gr.png'

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="m11 11 4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const navRef = useRef(null)
  const progressRef = useRef(null)
  const ink = useInk(navRef, '.nav__link.active', [location.pathname])

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      setIsCompact(y > 40)
      const bar = progressRef.current
      if (!bar) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const isLong = max > window.innerHeight * 1.5
      bar.style.opacity = isLong && y > 40 ? 1 : 0
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [location.pathname])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      <header className={`site-header${isCompact ? ' is-compact' : ''}`}>
        <div className="wrap site-header__inner">
          <Link to="/" className="site-header__logo" aria-label="Татбелэнергопроект — на главную">
            <img src={logoImg} alt="Татбелэнергопроект" />
          </Link>
          <nav className="nav" aria-label="Основное меню" ref={navRef}>
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className="nav__link">
                {item.label}
              </NavLink>
            ))}
            <span className="nav__ink" aria-hidden="true" style={inkStyle(ink)} />
          </nav>
          <div className="header-tools">
            <button type="button" className="search-btn" onClick={() => setIsSearchOpen(true)} aria-label="Поиск по сайту">
              <SearchIcon />
              <span className="label">Поиск</span>
            </button>
            <button
              type="button"
              className="burger"
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
        <span className="scroll-progress" ref={progressRef} aria-hidden="true" />
      </header>

      <div id="mobile-menu" className={`mobile-menu${isMenuOpen ? ' open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="wrap">
          <nav className="mobile-menu__list" aria-label="Мобильное меню">
            {navigation.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className="mobile-menu__link"
                style={{ '--i': i }}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="num">{pad(i + 1)}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu__foot">
            <button
              type="button"
              className="btn"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => { setIsMenuOpen(false); setIsSearchOpen(true) }}
            >
              Поиск по сайту <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      {isSearchOpen && <SiteSearch onClose={() => setIsSearchOpen(false)} />}
    </>
  )
}

export default Header
