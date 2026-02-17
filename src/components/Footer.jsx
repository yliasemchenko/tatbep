import { Link } from 'react-router-dom'
// Images from public folder
const logoImg = '/assets/img/ker_gr.png'
const logoFooterImg = '/assets/img/ker_gr.png'
const footerTgIcon = '/assets/img/icons/footer/1.svg'
const footerYtIcon = '/assets/img/icons/footer/2.svg'
const ytIcon = '/assets/img/icons/yt.svg'
const tgIcon = '/assets/img/icons/tg.svg'

function Footer() {
  return (
    <footer>
      <div className="footer_pc">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="footer_div">
                <Link to="/about" className="title">о компании</Link>
              </div>
              <div className="footer_div">
                <Link to="/">
                  <img src={logoImg} alt="Татбелэнергопроект" style={{ width: '100%' }} />
                </Link>
                <p>2025 © ООО «Татбелэнергопроект»</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_div">
                <Link to="/uslugi" className="title">услуги</Link>
                <Link to="/uslugi#preproject-work">Предпроектные решения и ТЭО</Link>
                <Link to="/uslugi#project-docs">Проектная и рабочая документация</Link>
                <Link to="/uslugi#market-analysis">Анализ рынка и закупок</Link>
                <Link to="/uslugi#bim-models">Информационные модели</Link>
                <Link to="/uslugi#hazop-sessions">Сессии HAZOP</Link>
                <Link to="/uslugi#authors-supervision">Авторский надзор</Link>
              </div>
              <div className="footer_div">
                <Link to="/proekty" className="title">проекты</Link>
                <Link to="/proekty/referenczii">Проекты</Link>
                <Link to="/proekty/geo">География проектов</Link>
                <Link to="/proekty/otzyvy">Отзывы</Link>
              </div>
              <div className="footer_div">
                <Link to="/karera" className="title">карьера</Link>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_div">
                <Link to="/press-center" className="title">пресс-центр</Link>
                <Link to="/press-center/news">Новости</Link>
                <a href="#publikaczii">Публикации</a>
              </div>
              <div className="footer_div">
                <Link to="/contacts" className="title">контакты</Link>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_div_social">
                <a href="https://t.me/tatbep" target="_blank" rel="nofollow">
                  <img src={footerTgIcon} alt="Telegram" />
                </a>
                <a href="https://www.youtube.com/@tatbep" target="_blank" rel="nofollow">
                  <img src={footerYtIcon} alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_mobile">
        <div className="container">
          <Link to="/" className="logo_footer">
            <img src={logoFooterImg} alt="Татбелэнергопроект" />
          </Link>
          <div className="footer_mobile_row">
            <div className="footer_mobile_div">
              <Link to="/about">о компании</Link>
              <Link to="/products">продукты</Link>
              <Link to="/uslugi">услуги</Link>
              <Link to="/proekty">проекты</Link>
              <Link to="/innovaczii">инновации</Link>
              <Link to="/news">новости</Link>
              <Link to="/karera">карьера</Link>
              <Link to="/contacts">контакты</Link>
            </div>
            <div className="footer_mobile_div">
              <a href="#bolshaya-energetika">Для большой энергетики</a>
              <a href="#cbp">Для целлюлозно-бумажных предприятий</a>
              <a href="#promyshlennost">Для промышленности</a>
            </div>
          </div>
          <div className="footer_mobile_row">
            <div className="footer_mobile_div">
              <div className="navbar_top_end_img">
                <a href="https://www.youtube.com/@tatbep" rel="nofollow">
                  <img src={ytIcon} alt="YouTube" />
                </a>
                <a href="https://t.me/tatbep" rel="nofollow">
                  <img src={tgIcon} alt="Telegram" />
                </a>
              </div>
            </div>
            <div className="footer_mobile_div">
              <a href="mailto:info@tatbep.by">info@tatbep.by</a>
              <a href="tel:+37517308-26-01">+375 17 308-26-01</a>
            </div>
          </div>
          <p className="footer_mobile_p">2025 © ООО «Татбелэнергопроект»</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
