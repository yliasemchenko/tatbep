import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useRevealObserver } from '../motion'
import Header from './Header'
import Footer from './Footer'
import '../styles/main.css'

const titles = [
  ['/about', 'О компании'],
  ['/uslugi', 'Услуги'],
  ['/proekty/referenczii', 'Реестр проектов'],
  ['/proekty/geo', 'География проектов'],
  ['/proekty/otzyvy', 'Отзывы'],
  ['/proekty', 'Проекты'],
  ['/karera/vakansii', 'Вакансии'],
  ['/karera', 'Карьера'],
  ['/news', 'Новости'],
  ['/contacts', 'Контакты']
]

const BASE_TITLE = 'Татбелэнергопроект'

function Layout({ children }) {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  useRevealObserver(mainRef, [pathname])

  useEffect(() => {
    if (pathname === '/') {
      document.title = `${BASE_TITLE} — проектирование объектов энергетики и промышленности`
      return
    }
    const match = titles.find(([path]) => pathname === path || pathname.startsWith(`${path}/`))
    document.title = match ? `${match[1]} — ${BASE_TITLE}` : `Страница не найдена — ${BASE_TITLE}`
  }, [pathname])

  return (
    <div className="app">
      <Header />
      <main ref={mainRef}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
