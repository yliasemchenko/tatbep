import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const filterIcon = '/assets/img/icons/filter_icon.svg'

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017]

function NewsFilters({ selectedYear, onYearChange, children }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <>
      <div className="news_btn_filter" onClick={() => setIsFilterOpen(!isFilterOpen)}>
        <img src={filterIcon} alt="" />
        <p>фильтр</p>
      </div>
      
      <div className="news_years">
        <Link 
          to="/press-center/news" 
          className={`btn_main btn_main_blue btn_main_blue_news_all_active ${!selectedYear ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            onYearChange(null)
          }}
        >
          все годы
        </Link>
        <div className="swiper-relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            slidesPerView="auto"
            spaceBetween={10}
            className="swiper_news_years"
          >
            {years.map((year) => (
              <SwiperSlide key={year}>
                <Link
                  to={`/press-center/news?year=${year}`}
                  className={`toggle_news_years ${selectedYear === year ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    onYearChange(year)
                  }}
                >
                  <p>{year}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-navigation">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>

      <div className={`news_section_row ${isFilterOpen ? 'filter-open' : ''}`}>
        <div className="news_filter">
          <p className="toggle_news_mobile" onClick={() => setIsFilterOpen(false)}>
            ← Выйти из фильтров
          </p>
          
          <div className="news_filter_div">
            <h5>По отраслям</h5>
            <Link to="/press-center/news?industry=big-energy">Для большой энергетики</Link>
            <Link to="/press-center/news?industry=cbp">Для целлюлозно-бумажных предприятий</Link>
            <Link to="/press-center/news?industry=industry">Для промышленности</Link>
          </div>
          
          <div className="news_filter_div">
            <h5>По продуктам</h5>
            <Link to="/press-center/news?product=digital-passport">Цифровой паспорт</Link>
            <Link to="/press-center/news?product=cfd-model">CFD-модель</Link>
            <Link to="/press-center/news?product=cyber-physical-model">Киберфизическая модель</Link>
            <Link to="/press-center/news?product=modern-boilers">Современные энергетические котлы</Link>
            <Link to="/press-center/news?product=oil-free-ignition">Безмазутный розжиг</Link>
            <Link to="/press-center/news?product=soot-blowing">Сажеобдувочные аппараты</Link>
            <Link to="/press-center/news?product=foundations">Фундаменты динамических машин</Link>
            <Link to="/press-center/news?product=bsu">БСУ с пневмообрушением</Link>
            <Link to="/press-center/news?product=ring-boiler">Кольцевой котел</Link>
            <Link to="/press-center/news?product=soda-regeneration">Содорегенерационные котлы</Link>
            <div className="filter_toggle_down">
              <Link to="/press-center/news?product=emission-reduction">Снижение выбросов</Link>
              <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <polygon points="5 3, 10 10, 0 10"/>
              </svg>
            </div>
            <div className="filter_down_secret">
              <Link to="/press-center/news?product=dust-collectors">Пыле/золоуловители</Link>
              <Link to="/press-center/news?product=nox-sox">Снижение NOx / SOx</Link>
            </div>
            <Link to="/press-center/news?product=emission-monitoring">Мониторинг выбросов</Link>
            <Link to="/press-center/news?product=dry-ash-removal">Системы сухого золошлакоудаления</Link>
            <Link to="/press-center/news?product=automation">Автоматизация</Link>
          </div>
          
          <div className="news_filter_div">
            <h5 className="news_filter_toggle_18">По услугам</h5>
            <Link to="/press-center/news?service=feasibility-study">ТЭО и предпроектные работы</Link>
            <Link to="/press-center/news?service=engineering">Инжиниринг</Link>
            <Link to="/press-center/news?service=equipment-supply">Поставка оборудования</Link>
            <Link to="/press-center/news?service=commissioning">Пусконаладка</Link>
          </div>
          
          <Link to="/press-center/news" className="btn_main_border">
            все новости
          </Link>
        </div>
        
        {children}
      </div>
    </>
  )
}

export default NewsFilters
