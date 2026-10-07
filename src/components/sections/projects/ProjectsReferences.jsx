import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { references, referenceYears, IN_WORK } from '../../../data/projects'
import { PageHero, Todo } from '../../ui'
import FollowPreview from '../../FollowPreview'
import Pager from '../../Pager'

const PER_PAGE = 10

function ProjectsReferences() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tableRef = useRef(null)
  const yearParam = searchParams.get('year')
  const selectedYear = referenceYears.find((y) => String(y) === yearParam) ?? null
  const filtered = selectedYear === null ? references : references.filter((r) => r.year === selectedYear)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const page = Math.min(Math.max(1, parseInt(searchParams.get('page'), 10) || 1), totalPages)
  const rows = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const update = (year, nextPage) => {
    const params = new URLSearchParams()
    if (year !== null) params.set('year', String(year))
    if (nextPage > 1) params.set('page', String(nextPage))
    setSearchParams(params)
    document.getElementById('registry')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const label = (y) => (y === IN_WORK ? 'В работе' : y)

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Проекты', to: '/proekty' }, { label: 'Реестр проектов', to: '/proekty/referenczii' }]}
        label="Реестр проектов"
        title="Реестр проектов"
        lead="Заказчик, объект и выполненные стадии — по годам, начиная с 2017-го. Шифры стадий расшифрованы на странице «Услуги»."
      />
      <section className="sec" id="registry">
        <div className="wrap" ref={tableRef}>
          <div className="toolbar">
            <div className="chips" role="group" aria-label="Фильтр по годам">
              <button type="button" className={`chip${selectedYear === null ? ' active' : ''}`} onClick={() => update(null, 1)}>
                Все годы
              </button>
              {referenceYears.map((y) => (
                <button key={y} type="button" className={`chip${selectedYear === y ? ' active' : ''}`} onClick={() => update(y, 1)}>
                  {label(y)}
                </button>
              ))}
            </div>
            <span className="cap">Записей: <span className="flip" key={filtered.length}>{filtered.length}</span></span>
          </div>

          {rows.length === 0 ? (
            <div className="empty"><p>За выбранный период записей нет.</p></div>
          ) : (
            <table className="registry">
              <thead>
                <tr>
                  <th scope="col">Период</th>
                  <th scope="col">Объект</th>
                  <th scope="col">Заказчик</th>
                  <th scope="col">Стадии</th>
                </tr>
              </thead>
              <tbody className="registry__body" key={`${yearParam}-${page}`}>
                {rows.map((r, i) => (
                  <tr key={r.id} style={{ '--i': i }} data-preview={r.image || undefined}>
                    <td className="yr">{r.year === IN_WORK ? <span className="yr-badge">В работе</span> : r.year}</td>
                    <td className="obj">{r.object}</td>
                    <td className="cust">{r.customer || <Todo>заказчик</Todo>}</td>
                    <td className="st">{r.stages}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <FollowPreview targetRef={tableRef} />

          <Pager current={page} total={totalPages} onChange={(p) => update(selectedYear, p)} />
        </div>
      </section>
    </>
  )
}

export default ProjectsReferences
