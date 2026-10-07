import { Link } from 'react-router-dom'
import { Arrow, PageHero, Todo } from '../../ui'

function ProjectsReviews() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Проекты', to: '/proekty' }, { label: 'Отзывы', to: '/proekty/otzyvy' }]}
        label="Отзывы"
        title="Отзывы заказчиков"
        lead="Здесь будут опубликованы отзывные письма заказчиков — с указанием объекта, стадии работ и года."
      />
      <section className="sec">
        <div className="wrap">
          <div className="empty">
            <p className="h3">Раздел готовится к публикации</p>
            <Todo>отзывные письма: скан, заказчик, объект, стадия, год и согласие заказчика на публикацию</Todo>
            <Link to="/proekty/referenczii" className="link-arrow">Пока можно посмотреть реестр проектов <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsReviews
