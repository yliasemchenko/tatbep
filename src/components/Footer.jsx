import { Link } from 'react-router-dom'
import { company, contacts, services } from '../data/company'
import { Todo } from './ui'

const logoImg = '/assets/img/ker_gr.png'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" aria-label="На главную">
              <img src={logoImg} alt="Татбелэнергопроект" />
            </Link>
            <p>Проектная организация. Тепловые электростанции, источники тепла и тепловые сети, объекты общезаводского хозяйства промышленных предприятий.</p>
          </div>
          <div className="site-footer__cols">
            <div className="site-footer__col">
              <h4 className="cap cap--blue">Компания</h4>
              <Link to="/about">О компании</Link>
              <Link to="/about#history">История</Link>
              <Link to="/about#management">Руководство</Link>
              <Link to="/news">Новости</Link>
            </div>
            <div className="site-footer__col">
              <h4 className="cap cap--blue">Услуги</h4>
              {services.map((s) => (
                <Link key={s.id} to={`/uslugi#${s.id}`}>{s.title}</Link>
              ))}
            </div>
            <div className="site-footer__col">
              <h4 className="cap cap--blue">Проекты</h4>
              <Link to="/proekty/referenczii">Реестр проектов</Link>
              <Link to="/proekty/geo">География проектов</Link>
              <Link to="/proekty/otzyvy">Отзывы</Link>
              <h4 className="cap cap--blue" style={{ marginTop: 24 }}>Карьера</h4>
              <Link to="/karera">Работа у нас</Link>
              <Link to="/karera/vakansii">Вакансии</Link>
            </div>
            <div className="site-footer__col">
              <h4 className="cap cap--blue">Контакты</h4>
              <p>
                {contacts.postalCode}, {contacts.city},{' '}
                {contacts.street || <Todo>улица и дом</Todo>}
              </p>
              <p>{contacts.phone ? <a href={`tel:${contacts.phone.replace(/[^\d+]/g, '')}`}>{contacts.phone}</a> : <Todo>телефон</Todo>}</p>
              <p>{contacts.email ? <a href={`mailto:${contacts.email}`}>{contacts.email}</a> : <Todo>e-mail</Todo>}</p>
              <Link to="/contacts">Все контакты и форма связи</Link>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span className="cap">© {company.foundedYear}–{year} {company.legalName}</span>
          <span className="cap">Минск · Казань</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
