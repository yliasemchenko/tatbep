import GeoBlock from '../../GeoBlock'
import { PageHero } from '../../ui'

function ProjectsGeo() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Проекты', to: '/proekty' }, { label: 'География проектов', to: '/proekty/geo' }]}
        label="География"
        title="География проектов"
        lead="Точки на карте — площадки, для которых компания выполняла проектные работы. Нажмите на точку, чтобы увидеть объект."
      />
      <section className="sec">
        <div className="wrap">
          <GeoBlock mapId="map" full scrollWheelZoom />
        </div>
      </section>
    </>
  )
}

export default ProjectsGeo
