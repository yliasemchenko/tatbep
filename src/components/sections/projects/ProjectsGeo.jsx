import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProjectsGeo() {
  useEffect(() => {
    // Инициализация Yandex карты
    const initMap = () => {
      if (window.ymaps && window.ymaps.Map) {
        const map = new window.ymaps.Map('map', {
          center: [55.7558, 37.6173], // Москва по умолчанию
          zoom: 2,
          controls: ['zoomControl', 'fullscreenControl']
        })

        // Здесь можно добавить метки проектов
        // Пример метки:
        // const placemark = new window.ymaps.Placemark([55.7558, 37.6173], {
        //   balloonContent: 'Проект в Москве'
        // })
        // map.geoObjects.add(placemark)
      }
    }

    if (window.ymaps) {
      window.ymaps.ready(initMap)
    } else {
      // Загружаем Yandex Maps API если еще не загружен
      const script = document.createElement('script')
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=dafcb181-ec35-4c8d-beba-c9778bc2bc13&lang=ru_RU'
      script.async = true
      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(initMap)
        }
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section className="section_padding_top">
      <div className="container">
        <div className="breadcrump">
          <Link to="/">Главная</Link>
          <p>&gt;</p>
          <Link to="/proekty">Проекты</Link>
          <p>&gt;</p>
          <Link to="/proekty/geo">География проектов</Link>
        </div>
        <div className="news_header">
          <h1>география проектов</h1>
        </div>
        <div className="news_section_row">
          <div className="row row_projects"></div>
        </div>
        <div id="map" style={{ width: '100%', height: '740px' }}></div>
      </div>
    </section>
  )
}

export default ProjectsGeo
