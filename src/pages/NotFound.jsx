import { Link } from 'react-router-dom'
import { Arrow } from '../components/ui'

function NotFound() {
  return (
    <section className="grid-bg">
      <div className="wrap nf">
        <p className="nf__code" aria-hidden="true">404</p>
        <div className="nf__body">
          <span className="cap cap--blue">Ошибка 404</span>
          <h1 className="h1">Такой страницы нет</h1>
          <p className="lead">Возможно, адрес набран с ошибкой или страница была перемещена. Начните с главной или откройте нужный раздел.</p>
          <div className="btn-row">
            <Link to="/" className="btn btn--solid">На главную <Arrow /></Link>
            <Link to="/proekty" className="btn">Проекты <Arrow /></Link>
            <Link to="/contacts" className="btn">Контакты <Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
