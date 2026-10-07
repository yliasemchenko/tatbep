import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export function Todo({ children, block = false }) {
  return (
    <mark className={`todo${block ? ' todo-block' : ''}`}>[УТОЧНИТЬ: {children}]</mark>
  )
}

export function Arrow({ dir = 'right' }) {
  const d = dir === 'left' ? 'M15 6H1m0 0 5-5M1 6l5 5' : 'M1 6h14m0 0-5-5m5 5-5 5'
  return (
    <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export const pad = (n) => String(n).padStart(2, '0')

export function SectionHead({ index, label, title, lead, aside, as: Tag = 'h2' }) {
  return (
    <div className="sec-head" data-reveal>
      <div className="sec-head__index">
        {index != null && <span className="num">{pad(index)}</span>}
        <span className="cap">{label}</span>
      </div>
      <div className="sec-head__body">
        <div className="sec-head__row">
          <Tag className="h2">{title}</Tag>
          {aside}
        </div>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </div>
  )
}

export function Crumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Навигационная цепочка">
      <Link to="/">Главная</Link>
      {items.map((item, i) => (
        <Fragment key={item.to || item.label}>
          <span className="sep">/</span>
          {item.to && i < items.length - 1 ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
        </Fragment>
      ))}
    </nav>
  )
}

export function PageHero({ crumbs, label, title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <Crumbs items={crumbs} />
        <div className="page-hero__grid">
          <div className="page-hero__label">
            <span className="cap cap--blue">{label}</span>
          </div>
          <div className="page-hero__body">
            <h1 className="h1">{title}</h1>
            {lead && <p className="lead">{lead}</p>}
            {children && <div className="page-hero__aside">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Photo({ src, alt, caption, className = '' }) {
  return (
    <figure className={`photo ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

const initials = (name = '') => {
  const words = name.split(/\s+/).filter(Boolean)
  return words.length > 1 ? words[0][0] + words[words.length - 1][0] : (words[0] || '').slice(0, 2)
}

export function PhotoSlot({ src, alt, mark, note = 'Фото', className = '' }) {
  if (src) return <Photo className={className} src={src} alt={alt} />
  return (
    <div className={`slot ${className}`} role="img" aria-label={`${alt} — фото будет добавлено`}>
      <span className="slot__note">{note} · заглушка</span>
      <span className="slot__mark">{mark ?? initials(alt)}</span>
    </div>
  )
}

export function Blueprint({ label, className = '' }) {
  return (
    <div className={`blueprint ${className}`} aria-hidden="true">
      <span className="blueprint__label">{label}</span>
    </div>
  )
}
