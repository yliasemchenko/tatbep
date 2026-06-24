import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import L from '@/utils/leafletSetup'
import "leaflet/dist/leaflet.css"

export const projectsGeoData = [
  {
    name: "Минск",
    city: "Минск",
    coords: [53.9006, 27.5590],
    description: "РУП Минскэнерго<br/>Минская ТЭЦ-4"
  },
  {
    name: "Гродно",
    city: "Гродно",
    coords: [53.6694, 23.8131],
    description: "ОАО «Гродно-Азот»"
  },
  {
    name: "Борисов",
    city: "Минская обл., г. Борисов",
    coords: [54.2279, 28.5050],
    description: "РК-3 ПГУ-65 МВт"
  },
  {
    name: "Пружаны",
    city: "Брестская обл., г. Пружаны",
    coords: [52.5560, 24.4570],
    description: "Мини ТЭЦ на местных видах топлива"
  },
  {
    name: "Казань",
    city: "Казань",
    coords: [55.7963, 49.1088],
    description: "Казанская ТЭЦ-1<br/>Казанская ТЭЦ-2"
  },
  {
    name: "Елабуга",
    city: "Елабуга",
    coords: [55.7567, 52.0544],
    description: "ТЭС-ГТУ"
  },
  {
    name: "Нижнекамск",
    city: "Нижнекамск",
    coords: [55.6313, 51.8144],
    description: "Лемаевская ТЭЦ-ПГУ-495 МВт"
  },
  {
    name: "Тобольск",
    city: "Тобольск",
    coords: [58.2000, 68.2667],
    description: "ООО «Запсибнефтехим» производство ЭТПГ<br/>АО «Криогенмаш» воздухо-разделительная установка"
  },
  {
    name: "Ленск",
    city: "Ленск",
    coords: [60.7253, 114.9270],
    description: "Новоленская ТЭЦ"
  },
  {
    name: "Норильск",
    city: "Норильск",
    coords: [69.3558, 88.1893],
    description: "Норильская ТЭС"
  },
  {
    name: "Калининград",
    city: "Калининград",
    coords: [54.7104, 20.4522],
    description: "Прегольская ТЭС-ПГУ"
  },
  {
    name: "Лучегорск",
    city: "Лучегорск, Приморский край",
    coords: [46.4769, 134.2669],
    description: "Приморская ГРЭС"
  },
  {
    name: "Хормозган",
    city: "Провинция Хормозган",
    coords: [27.1832, 56.2666],
    description: "ТЭС «Сирик»"
  },
]

function ProjectsGeo() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([55.7558, 37.6173], 3)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapRef.current)

      projectsGeoData.forEach(project => {
        L.marker(project.coords)
          .addTo(mapRef.current)
          .bindPopup(`<b>${project.name}</b><br/>${project.city}`)
          .bindTooltip(`<b>${project.name}</b><br/>${project.description}`, {
            direction: "top",
            offset: [0, -8],
            opacity: 0.95
          })
      })
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

        <div
          id="map"
          style={{ width: "100%", height: "640px" }}
        ></div>
      </div>
    </section>
  )
}

export default ProjectsGeo
