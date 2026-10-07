import { Link } from 'react-router-dom'
import { Arrow, PageHero } from '../../ui'

function NewsMain() {
  return (
    <PageHero
      crumbs={[{ label: 'Новости', to: '/news' }]}
      label="Новости"
      title="Новости компании"
      lead="Новые и завершённые проекты, профессиональные события, жизнь команды."
    >
      <Link to="/contacts" className="link-arrow">Связаться с компанией <Arrow /></Link>
    </PageHero>
  )
}

export default NewsMain
