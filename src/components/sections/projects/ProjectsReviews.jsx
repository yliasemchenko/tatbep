import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'
const filterIcon = '/assets/img/icons/filter_icon.svg'

// Пример данных отзывов (в реальном проекте это будет приходить с API)
const reviewsData = [
  {
    id: 1,
    customer: 'АО «ЕВРАЗ ЗСМК»',
    period: '2023—2024',
    project: 'Разработка ОТР по объекту: «Исключение размещения золошлаковых отходов Западно-Сибирской ТЭЦ на шламохранилище ЕВРАЗ ЗСМК»',
    image: '/wp-content/uploads/2025/03/evraz-logo.jpg',
    link: '#'
  },
  {
    id: 2,
    customer: 'АО «ГАЗПРОМНЕФТЬ-МНПЗ»',
    period: '2023—2024',
    project: 'Разработка рабочей и сметной документации, экспертиза промышленной безопасности системы парообдува поверхностей нагрева котлов-утилизаторов КУ-401/1,2 Г-43-107',
    image: '/wp-content/uploads/2025/02/logotip-1.jpg',
    link: '#'
  },
  {
    id: 3,
    customer: 'ООО «Сибирская генерирующая компания»',
    period: '2024',
    project: 'Предварительное технико-экономическое обоснование по объекту «Реконструкция КА – улучшение режимов горения, снижение NOx (2-я очередь)» на Обособленном подразделении АО «СГК-Новосибирск» Новосибирская ТЭЦ-4.',
    image: '/wp-content/uploads/2025/01/sgk_216h216-1.jpg',
    link: '#'
  },
  {
    id: 4,
    customer: 'ОАО «Селенгинский ЦКК»',
    period: '2024',
    project: 'Разработка основных технических решений по сбору и утицизации дурнопахнущих газов для ОАО «Селенгинский ЦКК», включая оценку стоимости реализации проекта с точностью +/- 50%',
    image: '/wp-content/uploads/2025/01/logo-216h216.jpg',
    link: '#'
  },
  {
    id: 5,
    customer: 'ООО «УралТЭП»',
    period: '2023 — 2024',
    project: 'Выполнение проектной и рабочей документации на фундамент турбоагрегата К-315-23,5-Р по объекту: Модернизация основного генерирующего оборудования энергоблока ст.№1 ОСП Рефтинская ГРЭС АО «Кузбассэнерго».',
    image: '/wp-content/uploads/2024/10/logotip_216x216.jpg',
    link: '#'
  },
  {
    id: 6,
    customer: 'Обособленное подразделение АО «СИБЭКО» Новосибирская ТЭЦ-5',
    period: '2021 — 2022',
    project: 'Установка глубоковыдвижных обдувочных аппаратов на Новосибирской ТЭЦ-5',
    image: '/wp-content/uploads/2025/01/sgk_216h216-1.jpg',
    link: '#'
  }
]

const ITEMS_PER_PAGE = 6

function ProjectsReviews() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const currentPage = parseInt(searchParams.get('page')) || 1

  const totalPages = Math.ceil(reviewsData.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentReviews = reviewsData.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setSearchParams({ page: page.toString() })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="section_padding_top">
      <div className="container">
        <div className="breadcrump">
          <Link to="/">Главная</Link>
          <p>&gt;</p>
          <Link to="/proekty">Проекты</Link>
          <p>&gt;</p>
          <Link to="/proekty/otzyvy">Отзывы</Link>
        </div>
        <div className="news_header">
          <h1>Отзывы</h1>
        </div>
        <div className="news_btn_filter" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <img src={filterIcon} alt="" />
          <p>фильтр</p>
        </div>
        <div className="news_section_row">
          {isFilterOpen && (
            <div className="news_filter">
              <div className="news_filter_div">
                <h5>По отраслям</h5>
                <Link to="/proekty/otzyvy?filter=bolshaya-energetika">Для большой энергетики</Link>
                <Link to="/proekty/otzyvy?filter=cbp">Для целлюлозно-бумажных предприятий</Link>
                <Link to="/proekty/otzyvy?filter=promyshlennost">Для промышленности</Link>
              </div>
              <div className="news_filter_div">
                <h5>По продуктам</h5>
                <Link to="/proekty/otzyvy?filter=czifrovoj-pasport">Цифровой паспорт</Link>
                <Link to="/proekty/otzyvy?filter=cdf-model">CFD-модель</Link>
                <Link to="/proekty/otzyvy?filter=kiberfizicheskaya-model">Киберфизическая модель</Link>
                <Link to="/proekty/otzyvy?filter=sovremennye-kotly">Современные энергетические котлы</Link>
                <Link to="/proekty/otzyvy?filter=bezmazutnyj-rozzhig">Безмазутный розжиг</Link>
                <Link to="/proekty/otzyvy?filter=sazheobduvochnye-apparaty">Сажеобдувочные аппараты</Link>
                <Link to="/proekty/otzyvy?filter=fundamenty">Фундаменты динамических машин</Link>
                <Link to="/proekty/otzyvy?filter=bsu">БСУ с пневмообрушением</Link>
                <Link to="/proekty/otzyvy?filter=kolczevoj-kotel">Кольцевой котел</Link>
                <Link to="/proekty/otzyvy?filter=sodoregeneraczionnye-kotly">Содорегенерационные котлы</Link>
                <div className="filter_toggle_down">
                  <Link to="/proekty/otzyvy?filter=snizhenie-vybrosov">Снижение выбросов</Link>
                  <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5 3, 10 10, 0 10" />
                  </svg>
                </div>
                <div className="filter_down_secret">
                  <Link to="/proekty/otzyvy?filter=pyle-zolouloviteli">Пыле/золоуловители</Link>
                  <Link to="/proekty/otzyvy?filter=snizhenie-nox-sox">Снижение NOx / SOx</Link>
                </div>
                <Link to="/proekty/otzyvy?filter=monitoring-vybrosov">Мониторинг выбросов</Link>
                <Link to="/proekty/otzyvy?filter=sistemy-suhogo-zoloshlakoudaleniya">Системы сухого золошлакоудаления</Link>
                <Link to="/proekty/otzyvy?filter=avtomatizacziya">Автоматизация</Link>
              </div>
              <div className="news_filter_div">
                <h5>По услугам</h5>
                <Link to="/proekty/otzyvy?filter=teo">ТЭО и предпроектные работы</Link>
                <Link to="/proekty/otzyvy?filter=inzhiniring">Инжиниринг</Link>
                <Link to="/proekty/otzyvy?filter=postavka">Поставка оборудования</Link>
                <Link to="/proekty/otzyvy?filter=puskonaladka">Пусконаладка</Link>
              </div>
            </div>
          )}

          <div className="news_body">
            <div className="row row_projects">
              {currentReviews.map((review) => (
                <div key={review.id} className="col-lg-6">
                  <a href={review.link} className="otz_div">
                    <div className="otz_img">
                      <img src={review.image} alt={review.customer} />
                    </div>
                    <div className="primer_text">
                      <div className="primer_text_content">
                        <p><strong>Заказчик: </strong>{review.customer}</p>
                        <p><strong>Период работ:</strong> {review.period}</p>
                        <p><strong>Проект: </strong>{review.project}</p>
                      </div>
                      <div className="primer_text_bottom">
                        <p>подробнее</p>
                        <img className="arrow" src={arrowRightIcon} alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {totalPages > 1 && (
          <div className="wp-pagenavi" role="navigation">
            <span className="pages">Страница {currentPage} из {totalPages}</span>
            {currentPage > 1 && (
              <Link
                className="prevpostslink"
                to={`/proekty/otzyvy?page=${currentPage - 1}`}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(currentPage - 1)
                }}
                aria-label="Предыдущая страница"
              >
                «
              </Link>
            )}
            {currentPage === 1 ? (
              <span aria-current="page" className="current">1</span>
            ) : (
              <Link
                className="page larger"
                to="/proekty/otzyvy?page=1"
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(1)
                }}
              >
                1
              </Link>
            )}
            {Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((page) => (
              page === currentPage ? (
                <span key={page} aria-current="page" className="current">{page}</span>
              ) : (
                <Link
                  key={page}
                  className="page larger"
                  to={`/proekty/otzyvy?page=${page}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(page)
                  }}
                >
                  {page}
                </Link>
              )
            ))}
            {currentPage < totalPages && (
              <Link
                className="nextpostslink"
                to={`/proekty/otzyvy?page=${currentPage + 1}`}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(currentPage + 1)
                }}
                aria-label="Следующая страница"
              >
                »
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsReviews
