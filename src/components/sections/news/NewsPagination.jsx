import { Link, useSearchParams } from 'react-router-dom'

function NewsPagination({ currentPage = 1, totalPages = 15 }) {
  const [searchParams] = useSearchParams()
  const year = searchParams.get('year')
  const industry = searchParams.get('industry')
  const product = searchParams.get('product')
  const service = searchParams.get('service')

  const buildUrl = (page) => {
    const params = new URLSearchParams()
    if (year) params.set('year', year)
    if (industry) params.set('industry', industry)
    if (product) params.set('product', product)
    if (service) params.set('service', service)
    params.set('page', page)
    return `/press-center/news?${params.toString()}`
  }

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 10
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 5) {
        for (let i = 1; i <= 10; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 4) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 9; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 4; i <= currentPage + 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="wp-pagenavi" role="navigation">
      <span className="pages">Страница {currentPage} из {totalPages}</span>
      
      {pageNumbers.map((page, index) => {
        if (page === '...') {
          return <span key={`ellipsis-${index}`} className="extend">...</span>
        }
        
        return (
          <Link
            key={page}
            to={buildUrl(page)}
            className={`page larger ${currentPage === page ? 'current' : ''}`}
            title={`Страница ${page}`}
          >
            {page}
          </Link>
        )
      })}
      
      {currentPage < totalPages && (
        <Link
          to={buildUrl(currentPage + 1)}
          className="nextpostslink"
          rel="next"
          aria-label="Следующая страница"
        >
          »
        </Link>
      )}
      
      {currentPage < totalPages && (
        <Link
          to={buildUrl(totalPages)}
          className="last"
          aria-label="Last Page"
        >
          Последняя »
        </Link>
      )}
    </div>
  )
}

export default NewsPagination
