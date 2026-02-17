import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'

const services = [
  {
    id: 'preproject-work',
    title: 'Предпроектные решения и ТЭО',
    image: '/assets/img/services_main.jpg',
    description: [
      'Предпроектные проработки, обоснования инвестиций и технико-экономические обоснования строительства.',
      'Оцениваем технические и экономические риски, помогая Заказчику принять взвешенные решения до начала проектирования.'
    ],
    link: '#preproject-work',
    isBig: true
  },
  {
    id: 'project-docs',
    title: 'Проектная и рабочая документация',
    image: '/assets/img/services_proekt.jpg',
    description: 'Разрабатываем полный комплект проектной, рабочей и сметной документации с соблюдением действующих норм и требований.',
    link: '#project-docs',
    isBlue: false
  },
  {
    id: 'market-analysis',
    title: 'Анализ рынка и закупок',
    image: '/assets/img/services_analiz.jpg',
    shortDescription: 'Изучаем рынок оборудования и материалов, готовим техническую часть закупочной документации и оцениваем предложения поставщиков.',
    link: '#market-analysis',
    isBlue: true
  },
  {
    id: 'bim-models',
    title: 'Информационные модели',
    image: '/assets/img/services_models.jpg',
    shortDescription: 'Создаем информационные модели объектов для координации дисциплин, визуализации и управления жизненным циклом проекта.',
    link: '#bim-models',
    isBlue: false
  },
  {
    id: 'hazop-sessions',
    title: 'Сессии HAZOP',
    image: '/assets/img/services_sesion.jpg',
    shortDescription: 'Организуем и проводим HAZOP-сессии с вовлечением ключевых специалистов для выявления и минимизации технологических рисков.',
    link: '#hazop-sessions',
    isBlue: true
  },
  {
    id: 'authors-supervision',
    title: 'Авторский надзор',
    image: '/assets/img/services_nadzor.jpg',
    shortDescription: 'Обеспечиваем контроль соответствия строительно-монтажных работ проектным решениям на всех этапах строительства.',
    link: '#authors-supervision',
    isBlue: false
  }
]

function ServicesMain() {
  const [isMobile, setIsMobile] = useState(false)

  const bigService = services.find(s => s.isBig)
  const smallServices = services.filter(s => !s.isBig)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Обработка якорных ссылок при загрузке страницы
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="section_padding_top">
      <div className="container">
        <div className="breadcrump">
          <Link to="/">Главная</Link>
          <p>&gt;</p>
          <Link to="/uslugi">Услуги</Link>
        </div>
        <h1>Услуги</h1>
        <div className="row products_row uslugi_row">
          <div className="col-lg-8">
            {bigService && (
              <a
                href={bigService.link}
                className={isMobile ? 'product_div blue_product_div' : 'product_div_big'}
                id={bigService.id}
              >
                <div className="product_div_img">
                  <img src={bigService.image} alt={bigService.title} />
                </div>
                <div className="product_text">
                  <h2>{bigService.title}</h2>
                  <div className="product_text_bottom">
                    {bigService.description?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                    <img className="arrow" src={arrowRightIcon} alt="" />
                  </div>
                </div>
              </a>
            )}
          </div>
          <div className="col-lg-4">
            {smallServices.map((service) => (
              <a
                key={service.id}
                href={service.link}
                className={`product_div ${service.isBlue ? 'blue_product_div' : ''}`}
                id={service.id}
              >
                <div className="product_text">
                  <h2>{service.title}</h2>
                  <div className="product_text_secret">
                    <p>{service.shortDescription}</p>
                  </div>
                  <div className="product_text_bottom">
                    <p>узнать подробнее</p>
                    <img className="arrow" src={arrowRightIcon} alt="" />
                  </div>
                </div>
                <div className="product_div_img">
                  <img src={service.image} alt={service.title} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesMain
