import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { finePointer } from '../motion'

function DragCursor({ targetRef, label = 'Тянуть' }) {
  const ref = useRef(null)

  useEffect(() => {
    const target = targetRef.current
    const cursor = ref.current
    if (!target || !cursor || !finePointer()) return undefined
    target.classList.add('has-drag-cursor')

    let frame = 0
    let x = 0
    let y = 0
    const paint = () => {
      frame = 0
      cursor.style.transform = `translate(${x}px, ${y}px)`
    }
    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const enter = (e) => {
      move(e)
      cursor.classList.add('is-on')
    }
    const leave = () => cursor.classList.remove('is-on', 'is-down')
    const down = () => cursor.classList.add('is-down')
    const up = () => cursor.classList.remove('is-down')
    const overControl = (e) => cursor.classList.toggle('is-hidden', !!e.target.closest('a, button'))

    target.addEventListener('pointerenter', enter)
    target.addEventListener('pointermove', move)
    target.addEventListener('pointerover', overControl)
    target.addEventListener('pointerleave', leave)
    target.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    return () => {
      target.classList.remove('has-drag-cursor')
      target.removeEventListener('pointerenter', enter)
      target.removeEventListener('pointermove', move)
      target.removeEventListener('pointerover', overControl)
      target.removeEventListener('pointerleave', leave)
      target.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      cancelAnimationFrame(frame)
    }
  }, [targetRef])

  return createPortal(
    <span className="drag-cursor" ref={ref} aria-hidden="true">
      <span className="drag-cursor__box">{label}</span>
    </span>,
    document.body
  )
}

export default DragCursor
