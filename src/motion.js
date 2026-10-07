import { useEffect, useState } from 'react'

const mq = (query) => typeof window !== 'undefined' && window.matchMedia(query).matches

export const finePointer = () => mq('(hover: hover) and (pointer: fine)')

// Один наблюдатель на весь сайт: [data-reveal] получает .is-in при входе в экран,
// [data-center] получает .is-center, когда элемент доходит до середины экрана.
// На одной странице — один раз. При переходе на другую страницу наблюдатель запускается заново.
export function useRevealObserver(root, deps) {
  useEffect(() => {
    const host = root.current
    if (!host) return undefined
    const show = (selector, cls) => host.querySelectorAll(selector).forEach((el) => el.classList.add(cls))
    if (!('IntersectionObserver' in window)) {
      show('[data-reveal]', 'is-in')
      show('[data-center]', 'is-center')
      return undefined
    }

    const make = (cls, selector, options) => new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add(cls)
        observer.unobserve(entry.target)
      })
      // При быстрой прокрутке элемент может проскочить экран — всё, что уже выше, показываем сразу
      host.querySelectorAll(`${selector}:not(.${cls})`).forEach((el) => {
        if (el.getBoundingClientRect().bottom < 0) {
          el.classList.add(cls)
          observer.unobserve(el)
        }
      })
    }, options)
    const reveal = make('is-in', '[data-reveal]', { rootMargin: '0px 0px -12% 0px', threshold: 0.12 })
    const center = make('is-center', '[data-center]', { rootMargin: '-42% 0px -42% 0px' })

    const scan = () => {
      host.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => reveal.observe(el))
      host.querySelectorAll('[data-center]:not(.is-center)').forEach((el) => center.observe(el))
    }
    scan()
    let frame = 0
    const mutations = new MutationObserver(() => {
      if (!frame) frame = requestAnimationFrame(() => { frame = 0; scan() })
    })
    mutations.observe(host, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(frame)
      mutations.disconnect()
      reveal.disconnect()
      center.disconnect()
    }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

// Прогресс прохождения элемента через экран (0…1): CSS-переменная --p и класс .is-lit у детей.
// Обработчик скролла работает только пока элемент виден.
export function useScrollLine(ref, itemSelector) {
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const items = () => [...el.querySelectorAll(itemSelector)]

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const anchor = window.innerHeight * 0.62
      const p = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height))
      el.style.setProperty('--p', p.toFixed(3))
      const reach = rect.top + p * rect.height
      items().forEach((item) => item.classList.toggle('is-lit', item.getBoundingClientRect().top + 12 <= reach))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', onScroll, { passive: true })
        update()
      } else {
        window.removeEventListener('scroll', onScroll)
      }
    })
    io.observe(el)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [ref, itemSelector])
}

// Позиция и ширина/высота активного элемента внутри контейнера — для «бегущих» индикаторов.
export function useInk(containerRef, activeSelector, deps, axis = 'x') {
  const [ink, setInk] = useState(null)
  useEffect(() => {
    const box = containerRef.current
    if (!box) return undefined
    const measure = () => {
      const active = box.querySelector(activeSelector)
      if (!active) return setInk(null)
      setInk(axis === 'x'
        ? { offset: active.offsetLeft, size: active.offsetWidth }
        : { offset: active.offsetTop, size: active.offsetHeight })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(box)
    document.fonts?.ready.then(measure)
    return () => ro.disconnect()
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
  return ink
}

export const inkStyle = (ink, axis = 'x') => {
  if (!ink) return { opacity: 0 }
  return axis === 'x'
    ? { transform: `translateX(${ink.offset}px)`, width: ink.size }
    : { transform: `translateY(${ink.offset}px)`, height: ink.size }
}
