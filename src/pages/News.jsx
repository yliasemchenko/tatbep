import { useSearchParams } from 'react-router-dom'
import NewsMain from '../components/sections/news/NewsMain'
import NewsFilters from '../components/sections/news/NewsFilters'
import NewsList from '../components/sections/news/NewsList'
import Pager from '../components/Pager'
import { news, newsCategories, newsYears } from '../data/news'

const PER_PAGE = 7

function News() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = newsCategories.includes(searchParams.get('category')) ? searchParams.get('category') : null
  const year = newsYears.find((y) => String(y) === searchParams.get('year')) ?? null

  const filtered = news.filter((n) => (!category || n.category === category) && (!year || n.year === year))
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const page = Math.min(Math.max(1, parseInt(searchParams.get('page'), 10) || 1), totalPages)
  const items = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const update = (next) => {
    const merged = { category, year, page: 1, ...next }
    const params = new URLSearchParams()
    if (merged.category) params.set('category', merged.category)
    if (merged.year) params.set('year', String(merged.year))
    if (merged.page > 1) params.set('page', String(merged.page))
    setSearchParams(params)
    document.getElementById('news-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <NewsMain />
      <section className="sec" id="news-list">
        <div className="wrap">
          <NewsFilters
            category={category}
            year={year}
            count={filtered.length}
            onCategory={(c) => update({ category: c })}
            onYear={(y) => update({ year: y })}
          />
          <NewsList key={`${category}-${year}-${page}`} items={items} />
          <Pager current={page} total={totalPages} onChange={(p) => update({ page: p })} />
        </div>
      </section>
    </>
  )
}

export default News
