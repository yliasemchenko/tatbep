import { Link } from 'react-router-dom'
import GeoBlock from '../GeoBlock'
import { Arrow, SectionHead } from '../ui'

function ProjectsGeoSection() {
  return (
    <section className="sec" id="projects-geo">
      <div className="wrap">
        <SectionHead
          index={5}
          label="География"
          title="Объекты в Беларуси, России и за их пределами"
          aside={<Link to="/proekty/geo" className="link-arrow">Карта на весь экран <Arrow /></Link>}
        />
        <GeoBlock mapId="projects-geo-home-map" />
      </div>
    </section>
  )
}

export default ProjectsGeoSection
