import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import L from '@/utils/leafletSetup'
import 'leaflet/dist/leaflet.css'
import { projectsGeoData } from './projects/ProjectsGeo'

const HOME_MAP_ID = 'projects-geo-home-map'

function ProjectsGeoSection() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) {
      return undefined
    }

    const mapInstance = L.map(HOME_MAP_ID, { scrollWheelZoom: false })
      .setView([55.7558, 37.6173], 3)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapInstance)

    projectsGeoData.forEach((project) => {
      L.marker(project.coords)
        .addTo(mapInstance)
        .bindPopup(`<b>${project.name}</b><br/>${project.city}`)
    })

    mapRef.current = mapInstance

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <section id="projects-geo" className="projects_geo_section">
      <div className="container">
        <div className="proects_header projects_geo_header">
          <h2 className="big">география <span>проектов</span></h2>
          <Link to="/proekty/geo" className="btn_main btn_main_blue">
            смотреть на карте
          </Link>
        </div>
        <div
          id={HOME_MAP_ID}
          className="projects_geo_map"
          aria-label="Карта проектов"
        ></div>
      </div>
    </section>
  )
}

export default ProjectsGeoSection
