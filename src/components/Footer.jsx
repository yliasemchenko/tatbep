import { Link } from 'react-router-dom'
// Images from public folder
const logoImg = '/assets/img/ker_gr.png'
const logoFooterImg = '/assets/img/ker_gr.png'

function Footer() {
  return (
    <footer>
      <div className="footer_pc">
        <div className="container">
          <div className="row footer_row">
            <div className="col-lg-3 footer_col footer_col_logo">
              <div className="footer_div">
                <Link to="/">
                  <img src={logoImg} alt="Татбелэнергопроект" className="footer_logo" />
                </Link>
                <p>2025 © ООО «Татбелэнергопроект»</p>
              </div>
            </div>
            <div className="col-lg-2 footer_col">
              <div className="footer_div">
                <Link to="/uslugi" className="title">услуги</Link>
                <Link to="/uslugi#preproject-work">Предпроектные решения и ТЭО</Link>
                <Link to="/uslugi#project-docs">Проектная и рабочая документация</Link>
                <Link to="/uslugi#market-analysis">Анализ рынка и закупок</Link>
                <Link to="/uslugi#bim-models">Информационные модели</Link>
                <Link to="/uslugi#hazop-sessions">Сессии HAZOP</Link>
                <Link to="/uslugi#authors-supervision">Авторский надзор</Link>
              </div>
            </div>
            <div className="col-lg-2 footer_col">
              <div className="footer_div">
                <Link to="/proekty" className="title">проекты</Link>
                <Link to="/proekty/referenczii">Проекты</Link>
                <Link to="/proekty/geo">География проектов</Link>
                <Link to="/proekty/otzyvy">Отзывы</Link>
              </div>
            </div>
            <div className="col-lg-2 footer_col">
              <div className="footer_div">
                <Link to="/karera" className="title">карьера</Link>
                <Link to="/karera/vakansii">Вакансии</Link>
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
              <Link to="/uslugi">услуги</Link>
              <Link to="/proekty">проекты</Link>
              <Link to="/karera">карьера</Link>
            </div>
          </div>
          <p className="footer_mobile_p">2025 © ООО «Татбелэнергопроект»</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
