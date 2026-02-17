import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'
const filterIcon = '/assets/img/icons/filter_icon.svg'

const availableYears = ['в работе', 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017]

// Текущие и завершённые проекты
const defaultImage = '/assets/img/projects/2017/project1.webp'
const defaultImage1 = '/assets/img/projects/2017/project2.webp'
const defaultImage2 = '/assets/img/projects/2017/project3.webp'

const projectsData = [
  // Текущие проекты (в работе)
  { id: 1, customer: 'ООО «Нижнекамская ТЭЦ»', period: 'в работе', project: 'Перевод турбоагрегата ст.№3 в работу в цикле ПГУ с установкой ГТУ – 155 МВт. ПД; РД; СД; АН.', image: defaultImage, link: '#' },
  { id: 2, customer: 'ПАО «Казаньоргсинтез»', period: 'в работе', project: 'ПГУ-250 МВт. ПД; РД; АН.', image: defaultImage, link: '#' },
  { id: 3, customer: 'ПАО «Казаньоргсинтез»', period: 'в работе', project: 'Пункт подготовки газа на территории ПАО «Казаньоргсинтез». ПД; РД; АН.', image: defaultImage, link: '#' },
  { id: 4, customer: 'ПАО «Казаньоргсинтез»', period: 'в работе', project: 'Инженерные сети и сооружения за пределами площадок ПГУ-250 МВт и ПАО «Казаньоргсинтез». ПД; РД; АН.', image: defaultImage1, link: '#' },
  { id: 5, customer: 'Приморская ГРЭС', period: 'в работе', project: 'Приморская ГРЭС. Модернизация блоков №№ 2;3;4;6;7;9 с целью увеличения числа часов использования установленной мощности. РД; СД; АН.', image: defaultImage2, link: '#' },
  { id: 6, customer: 'ПАО «СИБУР»', period: 'в работе', project: 'Реконструкция ВПУ производства ЭТП ООО «Запсибнефтехим». ПД; РД; СД; АН.', image: defaultImage, link: '#' },
  { id: 7, customer: 'ПАО «СИБУР»', period: 'в работе', project: 'Техническое перевооружение узла слива соляной кислоты склада химреагентов ООО «Запсибнефтехим». РД; СД; АН.', image: defaultImage, link: '#' },
  { id: 8, customer: 'ПАО «СИБУР»', period: 'в работе', project: 'Воздухоразделительная установка (ВРУ) для обеспечения техническими газами ООО «Запсибнефтехим». ПД; РД; СД; АН.', image: defaultImage2, link: '#' },
  { id: 9, customer: 'Набережно-Челнинская ТЭЦ', period: 'в работе', project: 'ПГУ-236 МВт. Набережно-Челнинская ТЭЦ. ПД; РД; СД.', image: defaultImage, link: '#' },
  { id: 10, customer: 'ПАО «Казаньоргсинтез»', period: 'в работе', project: 'Увеличение межремонтного интервала (УМИ) производств Пиролиза и Полиэтилена. РД; СД; АН.', image: defaultImage1, link: '#' },
  { id: 11, customer: 'Республика Татарстан', period: 'в работе', project: 'Системы отопления и вентиляции ПС-110 кВ «Стабна», Республика Татарстан. ПД.', image: defaultImage, link: '#' },
  // Завершённые проекты — 2025
  { id: 12, customer: 'ПАО «Казаньоргсинтез»', period: '2025', project: 'Временные схемы паровых продувок ПГУ-250 МВт. РД.', image: defaultImage2, link: '#' },
  { id: 13, customer: 'Набережно-Челнинская ТЭЦ', period: '2025', project: 'ПГУ-236 МВт. Набережно-Челнинская ТЭЦ. ОТР.', image: defaultImage, link: '#' },
  // 2024
  { id: 14, customer: 'Новоленская ТЭС', period: '2024', project: 'Новоленская ТЭС. ВПУ и воднохимические режимы. ПД.', image: defaultImage, link: '#' },
  { id: 15, customer: 'ПАО «Калужский турбинный завод»', period: '2024', project: 'Стенд для испытания составных частей ПТУ-74 МВт. Фундамент под ПТУ. Расчет фундамента; РД.', image: defaultImage1, link: '#' },
  { id: 16, customer: 'ПАО «Казаньоргсинтез»', period: '2024', project: 'Увеличение межремонтного интервала (УМИ) производств Пиролиза и Полиэтилена. ОТР; КФО; ОЛ.', image: defaultImage2, link: '#' },
  { id: 17, customer: 'АО «Интер РАО – Электрогенерация»', period: '2024', project: 'Ириклинская ГРЭС. Модернизация энергоблока №3. ПД.', image: defaultImage, link: '#' },
  // 2023
  { id: 18, customer: 'ОАО «Гродно Азот»', period: '2023', project: 'Охладительная установка пара после котла РКС 25/40 цеха олеума, Республика Беларусь. ПД; РД.', image: defaultImage, link: '#' },
  { id: 19, customer: 'Пермская ТЭЦ-9.', period: '2023', project: 'Пермская ТЭЦ-9. Модернизация с заменой турбоагрегатов №9 и №10, котлоагрегата №10. Строительная часть. РД.', image: defaultImage1, link: '#' },
  { id: 20, customer: 'Норильская ТЭЦ-2', period: '2023', project: 'Норильская ТЭЦ-2. Реконструкция энергоблоков №3 и №4. Система технического водоснабжения. ПД.', image: defaultImage, link: '#' },
  { id: 21, customer: 'АО «Интер РАО - Электрогенерация»', period: '2023', project: 'Прегольская ТЭЦ, г. Калининград. 4×ПГУ-110 МВт. Реконструкция существующей системы оборотного охлаждения. ОТР.', image: defaultImage, link: '#' },
  { id: 22, customer: '—', period: '2023', project: 'Утилизационная ПВС Магнитогорского металлургического комбината. ОТР.', image: defaultImage, link: '#' },
  { id: 23, customer: 'Твердотопливная ТЭС', period: '2023', project: 'Твердотопливная ТЭС-130 МВт (Афганистан). ОТР; Сводка затрат. Расчет экономической эффективности.', image: defaultImage2, link: '#' },
  // 2022
  { id: 24, customer: 'Минская ТЭЦ-4', period: '2022', project: 'Минская ТЭЦ-4. Установка электроприводов на сетевых насосах. ПД; РД.', image: defaultImage, link: '#' },
  { id: 25, customer: 'ТЭС «Сирик»', period: '2022', project: 'ТЭС «Сирик» (Исламская Республика Иран). 4 энергоблока по 360 МВт. Система охлаждения. Глубинный водозабор. Глубинный рассеивающий водовыпуск. Базовый проект; РД.', image: defaultImage, link: '#' },
  { id: 26, customer: 'ТЭС «Сирик»', period: '2022', project: 'ТЭС «Сирик» (Исламская Республика Иран). 4 энергоблока по 360 МВт. Фундаменты под турбоустановки. Базовый проект; РД.', image: defaultImage, link: '#' },
  // 2021
  { id: 27, customer: 'Пермская ТЭЦ-9', period: '2021', project: 'Пермская ТЭЦ-9. Модернизация с заменой турбоагрегатов №9 и №10, котлоагрегата №10. Гидротехническая часть. РД.', image: defaultImage1, link: '#' },
  { id: 28, customer: '—', period: '2021', project: 'ОРУ 220 кВ ПС 500 кВ «Бугульма». Фундаменты под оборудование. РД.', image: defaultImage2, link: '#' },
  { id: 29, customer: 'Норильская ТЭЦ-2', period: '2021', project: 'Норильская ТЭЦ-2. Реконструкция с заменой оборудования энергоблоков №1 и №2. Фундамент энергоблока №2. ПД; РД.', image: defaultImage, link: '#' },
  { id: 30, customer: 'ПАО «Нижнекамскнефтехим»', period: '2021', project: 'ПГУ-495 МВт. ПД; РД; АН.', image: defaultImage, link: '#' },
  { id: 31, customer: 'Республика Татарстан', period: '2021', project: 'ГТУ-ТЭС – 25 МВт в г. Зеленодольск, Республика Татарстан. ПД.', image: defaultImage, link: '#' },
  // 2020
  { id: 32, customer: 'АО «ТГК-16»', period: '2020', project: 'Нижнекамская ТЭЦ. Техперевооружение тепловой схемы ТЭЦ. ПД; РД; СД; АН.', image: defaultImage, link: '#' },
  { id: 33, customer: 'ПАО «Нижнекамскнефтехим»', period: '2020', project: 'Подача природного газа на завод «Этилен». РД; АН.', image: defaultImage2, link: '#' },
  // 2019
  { id: 34, customer: 'ГТУ-ТЭЦ-20 МВт', period: '2019', project: 'ГТУ-ТЭЦ-20 МВт в г. Елабуга, Республика Татарстан. ПД; РД; АН.', image: defaultImage, link: '#' },
  { id: 35, customer: 'ПАО «Казаньоргсинтез»', period: '2019', project: 'Технико-экономический расчет целесообразности строительства с учетом оптимизации схемы внешнего электроснабжения ПГУ-250 МВт. ТЭР.', image: defaultImage, link: '#' },
  // 2018
  { id: 36, customer: 'АО «ТГК-1»', period: '2018', project: 'Объединённый вспомогательный корпус (паровая и водогрейная котельная общей мощностью 690 Гкал/ч) Первомайская ТЭЦ-14. РД.', image: defaultImage, link: '#' },
  { id: 37, customer: 'АО «Интер РАО – Электрогенерация»', period: '2018', project: 'Прегольская ТЭЦ, г. Калининград. 4×ПГУ-110 МВт. Внутристанционная релейная защита и вторичная коммутация главной схемы ТЭЦ. РД.', image: defaultImage, link: '#' },
  { id: 38, customer: 'АО «Интер РАО – Электрогенерация»', period: '2018', project: 'Маяковская ГТУ-ТЭЦ, Калининградская обл. Внутристанционная релейная защита и вторичная коммутация главной схемы ГТУ-ТЭЦ. РД.', image: defaultImage1, link: '#' },
  { id: 39, customer: 'АО «Интер РАО – Электрогенерация»', period: '2018', project: 'Талаховская ГТУ-ТЭЦ, Калининградская обл. Внутристанционная релейная защита и вторичная коммутация главной схемы ГТУ-ТЭЦ. РД.', image: defaultImage, link: '#' },
  { id: 40, customer: 'Котельная «Морочь»', period: '2018', project: 'Котельная «Морочь», Минская обл., Республика Беларусь. Реконструкция. ПД; РД; АН.', image: defaultImage2, link: '#' },
  // 2017
  { id: 41, customer: 'АО «Интер РАО – Электрогенерация»', period: '2017', project: 'Маяковская ГТУ-ТЭЦ, Калининградская обл. Системы отопления, теплоснабжения и вентиляции. РД.', image: defaultImage, link: '#' },
  { id: 42, customer: 'АО «Интер РАО – Электрогенерация»', period: '2017', project: 'Талаховская ГТУ-ТЭЦ, Калининградская обл. Системы отопления, теплоснабжения и вентиляции. РД.', image: defaultImage, link: '#' },
  { id: 43, customer: 'АО «ТГК-1»', period: '2017', project: 'ОВК Первомайской ТЭЦ-14. Трубопроводы добавочной воды для подпитки градирен. РД.', image: defaultImage, link: '#' },
  { id: 44, customer: 'АО «ТГК-1»', period: '2017', project: 'ОВК Первомайской ТЭЦ-14. Здание КПП с мансардой и столовой. РД.', image: defaultImage, link: '#' },
  { id: 45, customer: 'ООО «КЭР-Промстрой»', period: '2017', project: 'Реконструкция производственных помещений корпуса №9. РД.', image: defaultImage, link: '#' },
  { id: 46, customer: 'АО «Уралэлектромедь»', period: '2017', project: 'Мини ТЭЦ на площадке. ПД.', image: defaultImage2, link: '#' }
]

const ITEMS_PER_PAGE = 6

function ProjectsReferences() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const currentPage = parseInt(searchParams.get('page')) || 1
  const selectedYear = searchParams.get('year')

  // Фильтрация проектов по году
  const filteredProjects = selectedYear
    ? projectsData.filter(project => {
        if (selectedYear === 'в работе') {
          return project.period === 'в работе'
        }
        return project.period === selectedYear.toString()
      })
    : projectsData

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    setSearchParams(params)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleYearChange = (year) => {
    const params = new URLSearchParams()
    if (year) {
      params.set('year', year.toString())
    }
    params.set('page', '1') // Сбрасываем на первую страницу при смене фильтра
    setSearchParams(params)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Сбрасываем на первую страницу при изменении фильтра
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      const params = new URLSearchParams(searchParams)
      params.set('page', '1')
      setSearchParams(params)
    }
  }, [selectedYear, totalPages])

  // Функция для генерации номеров страниц (максимум 4 страницы вокруг текущей)
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 4 // Максимум видимых страниц вокруг текущей

    if (totalPages <= maxVisible + 2) {
      // Если страниц мало, показываем все
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Всегда показываем первую страницу
      pages.push(1)

      // Определяем диапазон страниц вокруг текущей
      let start = Math.max(2, currentPage - Math.floor(maxVisible / 2))
      let end = Math.min(totalPages - 1, currentPage + Math.floor(maxVisible / 2))

      // Корректируем диапазон, если он слишком близко к краям
      if (start <= 2) {
        end = Math.min(totalPages - 1, maxVisible + 1)
      }
      if (end >= totalPages - 1) {
        start = Math.max(2, totalPages - maxVisible)
      }

      // Добавляем многоточие перед диапазоном, если есть пропуск
      if (start > 2) {
        pages.push('...')
      }

      // Добавляем страницы в диапазоне
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Добавляем многоточие после диапазона, если есть пропуск
      if (end < totalPages - 1) {
        pages.push('...')
      }

      // Всегда показываем последнюю страницу
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <section className="section_padding_top">
      <div className="container">
        <div className="breadcrump">
          <Link to="/">Главная</Link>
          <p>&gt;</p>
          <Link to="/proekty">Проекты</Link>
          <p>&gt;</p>
          <Link to="/proekty/referenczii">Наши проекты</Link>
        </div>
        <div className="news_header">
          <h1>Наши проекты</h1>
        </div>
        

        {/* Фильтр по годам - выпадающий список */}
        <div className="projects_year_filter" style={{ marginBottom: '30px' }}>
          {/* <label htmlFor="year-select" style={{ marginRight: '15px', fontWeight: '500' }}>
            Фильтр по году:
          </label> */}
          <select
            id="year-select"
            value={selectedYear || ''}
            onChange={(e) => {
              const year = e.target.value === '' ? null : e.target.value
              handleYearChange(year)
            }}
            style={{
              padding: '10px 15px',
              fontSize: '16px',
              borderRadius: '4px',
              minWidth: '200px',
              cursor: 'pointer',
              background: 'var(--blue_1)',
              color: '#fff',
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",

            }}
            className='customSelect'
          >
            <option value="">Все проекты</option>
            {availableYears.map((year) => (
              <option key={year} value={year.toString()}>
                {year === 'в работе' ? 'В работе' : year}
              </option>
            ))}
          </select>
        </div>

        <div className={`news_section_row ${isFilterOpen ? 'filter-open' : ''}`}>
          {isFilterOpen && (
            <div className="news_filter">
              <p className="toggle_news_mobile" onClick={() => setIsFilterOpen(false)}>
                ← Выйти из фильтров
              </p>
              
              <div className="news_filter_div">
                <h5>По годам</h5>
                <Link 
                  to="/proekty/referenczii" 
                  className={!selectedYear ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleYearChange(null)
                    setIsFilterOpen(false)
                  }}
                >
                  Все проекты
                </Link>
                {availableYears.map((year) => (
                  <Link
                    key={year}
                    to={`/proekty/referenczii?year=${year}`}
                    className={selectedYear === year.toString() ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      handleYearChange(year)
                      setIsFilterOpen(false)
                    }}
                  >
                    {year === 'в работе' ? 'В работе' : year}
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/proekty/referenczii" 
                className="btn_main_border"
                onClick={(e) => {
                  e.preventDefault()
                  handleYearChange(null)
                  setIsFilterOpen(false)
                }}
              >
                все проекты
              </Link>
            </div>
          )}

          <div className="news_body">
            {filteredProjects.length === 0 ? (
              <div className="no-projects" style={{ padding: '40px 0', textAlign: 'center' }}>
                <p>Проекты не найдены</p>
              </div>
            ) : (
              <div className="row row_projects">
                {currentProjects.map((project) => (
                  <div key={project.id} className="col-lg-6">
                    <a href={project.link} className="primer_div">
                      <div className="primer_img">
                        <img src={project.image} alt={project.customer} />
                      </div>
                      <div className="primer_text">
                        <div className="primer_text_content">
                          <p><strong>Заказчик:</strong> {project.customer}</p>
                          <p><strong>Период работ:</strong> {project.period}</p>
                          <p>{project.project}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {filteredProjects.length > 0 && totalPages > 1 && (
          <div className="wp-pagenavi" role="navigation">
            <span className="pages">Страница {currentPage} из {totalPages}</span>
            {currentPage > 1 && (
              <Link
                className="prevpostslink"
                to={`/proekty/referenczii?${selectedYear ? `year=${selectedYear}&` : ''}page=${currentPage - 1}`}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(currentPage - 1)
                }}
                aria-label="Предыдущая страница"
              >
                «
              </Link>
            )}
            {pageNumbers.map((page, index) => {
              if (page === '...') {
                return <span key={`ellipsis-${index}`} className="extend">...</span>
              }
              
              const pageNum = typeof page === 'number' ? page : parseInt(page)
              const isCurrent = pageNum === currentPage
              
              return isCurrent ? (
                <span key={pageNum} aria-current="page" className="current">{pageNum}</span>
              ) : (
                <Link
                  key={pageNum}
                  className="page larger"
                  to={`/proekty/referenczii?${selectedYear ? `year=${selectedYear}&` : ''}page=${pageNum}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(pageNum)
                  }}
                >
                  {pageNum}
                </Link>
              )
            })}
            {currentPage < totalPages && (
              <Link
                className="nextpostslink"
                to={`/proekty/referenczii?${selectedYear ? `year=${selectedYear}&` : ''}page=${currentPage + 1}`}
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

export default ProjectsReferences
