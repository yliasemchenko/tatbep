import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import NewsMain from '../components/sections/news/NewsMain'
import NewsFilters from '../components/sections/news/NewsFilters'
import NewsList from '../components/sections/news/NewsList'
import NewsPagination from '../components/sections/news/NewsPagination'

function News() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedYear, setSelectedYear] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const year = searchParams.get('year')
    const page = searchParams.get('page')
    
    if (year) {
      setSelectedYear(parseInt(year))
    } else {
      setSelectedYear(null)
    }
    
    if (page) {
      setCurrentPage(parseInt(page))
    } else {
      setCurrentPage(1)
    }
  }, [searchParams])

  const handleYearChange = (year) => {
    const params = new URLSearchParams(searchParams)
    if (year) {
      params.set('year', year.toString())
    } else {
      params.delete('year')
    }
    params.delete('page') // Reset to first page when changing filters
    setSearchParams(params)
  }

  return (
    <section className="section_padding_top">
      <NewsMain />
      <div className="container">
        <NewsFilters selectedYear={selectedYear} onYearChange={handleYearChange}>
          <NewsList />
        </NewsFilters>
        <NewsPagination currentPage={currentPage} totalPages={15} />
      </div>
    </section>
  )
}

export default News
