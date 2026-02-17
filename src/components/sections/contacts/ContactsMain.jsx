import { Link } from 'react-router-dom'

function ContactsMain() {
  return (
    <div className="container">
      <div className="breadcrump">
        <Link to="/">Главная</Link>
        <p>&gt;</p>
        <Link to="/contacts">Контакты</Link>
      </div>
    </div>
  )
}

export default ContactsMain
