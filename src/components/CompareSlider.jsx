import { useEffect, useRef, useState } from 'react'
function CompareSlider({ src, caption, className = '' }) {
  const [pos, setPos] = useState(50)
  const [touched, setTouched] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || touched || !('IntersectionObserver' in window)) return undefined
    const timers = []
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      timers.push(setTimeout(() => setPos(32), 500), setTimeout(() => setPos(50), 1300))
    }, { threshold: 0.6 })
    io.observe(el)
    return () => {
      io.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [touched])

  const [glide, setGlide] = useState(true)
  const set = (value, smooth) => {
    setTouched(true)
    setGlide(smooth)
    setPos(value)
  }

  return (
    <figure className={`cmp${glide ? ' is-glide' : ''} ${className}`} ref={ref} style={{ '--pos': `${pos}%` }}>
      <div className="cmp__frame">
        <img className="cmp__model" src={src} alt="Информационная модель объекта" loading="lazy" />
        <div className="cmp__draft" aria-hidden="true">
          <img src={src} alt="" loading="lazy" />
        </div>
        <span className="cmp__handle" aria-hidden="true" />
        <span className="cmp__tag cmp__tag--l" aria-hidden="true">Чертёж</span>
        <span className="cmp__tag cmp__tag--r" aria-hidden="true">Модель</span>
        <input
          className="cmp__range"
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => set(Number(e.target.value), false)}
          aria-label="Граница между чертежом и моделью"
          aria-valuetext={`Чертёж ${pos}%, модель ${100 - pos}%`}
        />
      </div>
      <div className="cmp__bar">
        <button type="button" className="cmp__btn" aria-pressed={pos === 100} onClick={() => set(100, true)}>Чертёж</button>
        <button type="button" className="cmp__btn" aria-pressed={pos === 50} onClick={() => set(50, true)}>50 / 50</button>
        <button type="button" className="cmp__btn" aria-pressed={pos === 0} onClick={() => set(0, true)}>Модель</button>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default CompareSlider
