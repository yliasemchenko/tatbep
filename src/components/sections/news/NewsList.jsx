import { NewsMeta, NewsPhoto } from '../NewsSection'

// Ритм раскладки: после главной публикации чередуются широкие и узкие материалы
const widthFor = (i) => ([0, 3].includes(i % 5) ? 'news-wall__item--wide' : '')

function NewsList({ items }) {
  if (!items.length) {
    return (
      <div className="empty">
        <p>По выбранным условиям публикаций нет.</p>
      </div>
    )
  }

  const [lead, ...rest] = items

  return (
    <div className="news-wall">
      <article className={`news-wall__lead${lead.image ? '' : ' no-media'}`} style={{ '--i': 0 }}>
        <NewsPhoto className="news-card__media" item={lead} />
        <div className="news-wall__text">
          <NewsMeta item={lead} />
          <h2 className="news-card__title">{lead.title}</h2>
          <p className="news-card__lead">{lead.lead}</p>
        </div>
      </article>
      {rest.map((item, i) => (
        <article key={item.id} className={`news-wall__item news-card ${widthFor(i)}`} style={{ '--i': Math.min(i + 1, 8) }}>
          <NewsPhoto className="news-card__media" item={item} />
          <NewsMeta item={item} />
          <h3 className="news-card__title">{item.title}</h3>
          <p className="news-card__lead">{item.lead}</p>
        </article>
      ))}
    </div>
  )
}

export default NewsList
