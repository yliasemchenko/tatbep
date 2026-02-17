import { Link } from 'react-router-dom'

function NewsMain() {
  return (
    <div className="container">
      <div className="breadcrump">
        <Link to="/">Главная</Link>
        <p>&gt;</p>
        <Link to="/press-center">Пресс-центр</Link>
        <p>&gt;</p>
        <Link to="/press-center/news">Новости</Link>
      </div>
      <div className="news_header">
        <h1>новости</h1>
        <button 
          className="btn_main btn_main_blue" 
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal_zayavka_press"
        >
          связаться с пресс-службой
        </button>
      </div>
    </div>
  )
}

export default NewsMain
