import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const projectsData = [
  // Текущие
  { name: "Нижнекамская ТЭЦ", city: "Нижнекамск", coords: [55.6313, 51.8144] },
  { name: "ПАО Казаньоргсинтез", city: "Казань", coords: [55.8304, 49.0661] },
  { name: "Приморская ГРЭС", city: "Лучегорск", coords: [46.4769, 134.2669] },
  { name: "Запсибнефтехим", city: "Тобольск", coords: [58.2000, 68.2667] },
  { name: "Набережно-Челнинская ТЭЦ", city: "Набережные Челны", coords: [55.7439, 52.3954] },
  { name: "ПС 110 кВ Стабна", city: "Татарстан", coords: [55.0000, 50.0000] },

  // Завершенные
  { name: "Новоленская ТЭС", city: "Ленск", coords: [60.7253, 114.9270] },
  { name: "Калужский турбинный завод", city: "Калуга", coords: [54.5138, 36.2612] },
  { name: "Ириклинская ГРЭС", city: "Оренбургская область", coords: [51.9170, 58.5670] },
  { name: "Гродно Азот", city: "Гродно", coords: [53.6694, 23.8131] },
  { name: "Пермская ТЭЦ-9", city: "Пермь", coords: [58.0105, 56.2502] },
  { name: "Норильская ТЭЦ-2", city: "Норильск", coords: [69.3558, 88.1893] },
  { name: "Прегольская ТЭЦ", city: "Калининград", coords: [54.7104, 20.4522] },
  { name: "Магнитогорский МК", city: "Магнитогорск", coords: [53.4072, 58.9791] },
  { name: "ТЭС Сирик", city: "Иран", coords: [26.4900, 57.1000] },
  { name: "Минская ТЭЦ-4", city: "Минск", coords: [53.9006, 27.5590] },
  { name: "ОРУ 500 кВ Бугульма", city: "Бугульма", coords: [54.5378, 52.7985] },
  { name: "Зеленодольск ГТУ-ТЭС", city: "Зеленодольск", coords: [55.8438, 48.5203] },
  { name: "Елабуга ГТУ-ТЭЦ", city: "Елабуга", coords: [55.7567, 52.0544] },
  { name: "Первомайская ТЭЦ-14", city: "Санкт-Петербург", coords: [59.9343, 30.3351] },
  { name: "Маяковская ГТУ-ТЭЦ", city: "Калининградская область", coords: [54.8000, 21.0000] },
  { name: "Талаховская ГТУ-ТЭЦ", city: "Калининградская область", coords: [54.7000, 21.2000] },
  { name: "Котельная Морочь", city: "Минская область", coords: [53.9000, 27.3000] },
  { name: "Уралэлектромедь", city: "Верхняя Пышма", coords: [56.9705, 60.5822] },
]

function ProjectsGeo() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([55.7558, 37.6173], 3)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapRef.current)

      projectsData.forEach(project => {
        L.marker(project.coords)
          .addTo(mapRef.current)
          .bindPopup(`<b>${project.name}</b><br/>${project.city}`)
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
