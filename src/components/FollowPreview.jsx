import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { finePointer } from '../motion'

// Превью у курсора для строк таблицы с атрибутом data-preview="url".
function FollowPreview({ targetRef }) {
  const ref = useRef(null)
  const [src, setSrc] = useState(null)

  useEffect(() => {
    const target = targetRef.current
    const box = ref.current
    if (!target || !box || !finePointer()) return undefined

    let frame = 0
    let tx = 0
    let ty = 0
    let x = 0
    let y = 0
    const tick = () => {
      x += (tx - x) * 0.22
      y += (ty - y) * 0.22
      box.style.transform = `translate(${x}px, ${y}px)`
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0
    }
    const move = (e) => {
      const row = e.target.closest('tr[data-preview]')
      if (!row) {
        box.classList.remove('is-on')
        return
      }
      const nextSrc = row.dataset.preview
      setSrc((prev) => (prev === nextSrc ? prev : nextSrc))
      const flip = e.clientX + 260 > window.innerWidth
      tx = flip ? e.clientX - 244 : e.clientX + 24
      ty = e.clientY - 70
      if (!box.classList.contains('is-on')) {
        x = tx
        y = ty
        box.classList.add('is-on')
      }
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const leave = () => box.classList.remove('is-on')

    target.addEventListener('pointermove', move)
    target.addEventListener('pointerleave', leave)
    window.addEventListener('scroll', leave, { passive: true })
    return () => {
      target.removeEventListener('pointermove', move)
      target.removeEventListener('pointerleave', leave)
      window.removeEventListener('scroll', leave)
      cancelAnimationFrame(frame)
    }
  }, [targetRef])

  return createPortal(
    <span className="follow-preview duo" ref={ref} aria-hidden="true">
      {src && <img src={src} alt="" />}
    </span>,
    document.body
  )
}

export default FollowPreview
