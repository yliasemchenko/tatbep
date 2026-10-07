import { useEffect, useImperativeHandle, useRef } from 'react'
import L from '@/utils/leafletSetup'
import 'leaflet/dist/leaflet.css'
import { geoPoints } from '../data/projects'
const MINSK = L.latLng(53.9, 27.56)
const order = [...geoPoints]
  .sort((a, b) => MINSK.distanceTo(a.coords) - MINSK.distanceTo(b.coords))
  .map((p) => p.name)

const pinFor = (name) => L.divIcon({
  className: '',
  html: `<div class="map-pin" style="--d:${Math.min(order.indexOf(name), 14) * 70}ms"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -8]
})

function ProjectsMap({ id, scrollWheelZoom = false, className = '', activeName = null, onHover, apiRef }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const markersRef = useRef(new Map())
  const hoverRef = useRef(onHover)
  hoverRef.current = onHover

  useEffect(() => {
    const map = L.map(containerRef.current, { scrollWheelZoom, worldCopyJump: true })
    mapRef.current = map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    const markers = geoPoints.map((p) => {
      const marker = L.marker(p.coords, { icon: pinFor(p.name), title: p.name })
        .addTo(map)
        .bindPopup(`<b>${p.name}</b><br/>${p.description}`)
      marker.on('mouseover', () => hoverRef.current?.(p.name))
      marker.on('mouseout', () => hoverRef.current?.(null))
      markersRef.current.set(p.name, marker)
      return marker
    })
    map.fitBounds(L.featureGroup(markers).getBounds(), { padding: [40, 40] })

    return () => {
      markersRef.current.clear()
      mapRef.current = null
      map.remove()
    }
  }, [scrollWheelZoom])

  useEffect(() => {
    markersRef.current.forEach((marker, name) => {
      marker.getElement()?.querySelector('.map-pin')?.classList.toggle('is-active', name === activeName)
      if (name === activeName) marker.setZIndexOffset(1000)
      else marker.setZIndexOffset(0)
    })
  }, [activeName])

  useImperativeHandle(apiRef, () => ({
    focus(name) {
      const map = mapRef.current
      const marker = markersRef.current.get(name)
      if (!map || !marker) return
      const zoom = Math.max(map.getZoom(), 7)
      map.once('moveend', () => marker.openPopup())
      map.flyTo(marker.getLatLng(), zoom, { duration: 0.8 })
    },
    element: () => containerRef.current
  }), [])

  return <div id={id} ref={containerRef} className={className} aria-label="Карта объектов" role="region" data-reveal />
}

export default ProjectsMap
