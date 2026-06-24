import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// Images from public folder
const logoImg = '/assets/img/ker_gr.png'
const searchIcon = '/assets/img/icons/search.svg'
const searchBlackIcon = '/assets/img/icons/search_black.svg'

function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  // На главной странице - только при скролле, на остальных - сразу
  const [isScrolled, setIsScrolled] = useState(!isHomePage)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  useEffect(() => {
    // Если не главная страница, сразу устанавливаем isScrolled = true
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }
    
    // На главной странице отслеживаем скролл
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen)
  }

  return (
    <>
      <header>
        <div className="navbar_row">
          <div className="navbar_end navbar_single">
            <div className="container">
              <div className="navbar_top_logo">
                <Link to="/" className="logo">
                  <img src={logoImg} alt="Татбелэнергопроект" />
                </Link>
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Главная</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">О компании</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/uslugi">Услуги</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/proekty">Проекты</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/karera">Карьера</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/news">Новости</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">Контакты</Link>
                </li>
              </ul>
              <div className="navbar_actions">
                <div className="navbar_contacts">
                  <a href="mailto:info@tatbep.by">info@tatbep.by</a>
                  <a href="tel:+37517308-26-01">+375 17 308-26-01</a>
                </div>
                <img
                  onClick={toggleSearchModal}
                  src={searchIcon}
                  alt="Поиск"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile_header ${isScrolled ? 'mobile_header_white_scroll' : ''}`}>
        <div className="mobile_navbar">
          <div className="mobile_navbar_logo">
            <Link to="/" className="logo">
              <img src={logoImg} alt="Татбелэнергопроект" />
            </Link>
          </div>
          <div className={`burger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="line"></span>
            <span className="line_2"></span>
            <span className="line_3"></span>
          </div>
        </div>
      </div>

      <div className={`mobile_header_secret ${isMobileMenuOpen ? 'mobile_header_secret_active' : ''}`}>
        <div className="mobile_secret_top">
          <div className="mobile_secret_top_cont">
            <a href="tel:+37517308-26-01">+375 17 308-26-01</a>
            <a href="mailto:info@tatbep.by">info@tatbep.by</a>
          </div>
        </div>
        <form className="search_div_mobile" role="search" onSubmit={(e) => { e.preventDefault(); }}>
          <input type="text" placeholder="Поиск" name="s" className="search_input" />
          <button type="submit" className="btn_main">
            <img src={searchBlackIcon} alt="Поиск" />
          </button>
        </form>
        <ul className="nav_mobile">
          <li className="nav-item">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Главная</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>О компании</Link>
          </li>
          <li className="nav-item">
            <Link to="/uslugi" onClick={() => setIsMobileMenuOpen(false)}>Услуги</Link>
          </li>
          <li className="nav-item">
            <Link to="/proekty" onClick={() => setIsMobileMenuOpen(false)}>Проекты</Link>
          </li>
          <li className="nav-item">
            <Link to="/karera" onClick={() => setIsMobileMenuOpen(false)}>Карьера</Link>
          </li>
          <li className="nav-item">
            <Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>Новости</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" onClick={() => setIsMobileMenuOpen(false)}>Контакты</Link>
          </li>
        </ul>
      </div>

      {isSearchModalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} onClick={toggleSearchModal}>
          <div className="modal-dialog modal-dialog-qwiz modal-dialog-centered modal-dialog-product" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content modal-content-product">
              <div className="modal_item">
                <div className="modal_item-body">
                  <div className="container">
                    <span className="contQ">
                      <button type="button" className="btn-close" onClick={toggleSearchModal} aria-label="Close"></button>
                    </span>
                    <div className="online_plashka online_plashka_search">
                      <h4>Введите ваш поисковой запрос</h4>
                      <form className="search_div_mobile" role="search" onSubmit={(e) => { e.preventDefault(); }}>
                        <input type="text" placeholder="Поиск" name="s" className="search_input" />
                        <button type="submit" className="btn_main">
                          <img src={searchBlackIcon} alt="Поиск" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
