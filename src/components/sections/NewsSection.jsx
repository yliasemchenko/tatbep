import { Link } from 'react-router-dom'
import { news } from '../../data/news'
import { Arrow, Photo, SectionHead, Todo } from '../ui'

export function NewsMeta({ item }) {
  return (
    <div className="news-card__meta">
      {item.id === news[0].id && <span className="news-card__latest">Последнее</span>}
      <span className="news-card__cat">{item.category}</span>
      <span className="cap">{item.date}</span>
      {item.dateNote && <Todo>{item.dateNote}</Todo>}
    </div>
  )
}

export function NewsPhoto({ item, className }) {
  if (!item.image) return null
  return (
    <Photo
      className={className}
      src={item.image}
      alt={item.illustration ? '' : item.title}
      caption={item.illustration ? 'Иллюстрация' : null}
    />
  )
}

function NewsSection() {
  const [lead, ...rest] = news
  const side = rest.slice(0, 3)

  return (
    <section className="sec sec--paper" id="news">
      <div className="wrap">
        <SectionHead
          index={4}
          label="Новости"
          title="Что происходит в компании"
          aside={<Link to="/news" className="link-arrow">Все новости <Arrow /></Link>}
        />
        <div className="news-ed" data-reveal>
          <article className="news-ed__lead news-card">
            <NewsPhoto className="news-card__media" item={lead} />
            <NewsMeta item={lead} />
            <h3 className="news-card__title">{lead.title}</h3>
            <p className="news-card__lead">{lead.lead}</p>
          </article>
          <div className="news-ed__side">
            {side.map((item) => (
              <article key={item.id} className={`news-row${item.image ? '' : ' news-row--noimg'}`}>
                <div>
                  <NewsMeta item={item} />
                  <h3 className="news-row__title">{item.title}</h3>
                </div>
                <NewsPhoto className="news-row__media" item={item} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
