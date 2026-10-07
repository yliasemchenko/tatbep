import { useRef, useState } from 'react'
import ProjectsMap from './ProjectsMap'
import GeoList from './GeoList'
function GeoBlock({ mapId, full = false, scrollWheelZoom = false }) {
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)
  const mapApi = useRef(null)

  const select = (name) => {
    setSelected(name)
    mapApi.current?.focus(name)
    const el = mapApi.current?.element()
    if (el && window.matchMedia('(max-width: 960px)').matches) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const active = hovered || selected

  return (
    <div className={`geo${full ? ' geo--full' : ''}`}>
      <ProjectsMap
        id={mapId}
        className="geo__map"
        scrollWheelZoom={scrollWheelZoom}
        activeName={active}
        onHover={setHovered}
        apiRef={mapApi}
      />
      <GeoList activeName={active} onHover={setHovered} onSelect={select} />
    </div>
  )
}

export default GeoBlock
