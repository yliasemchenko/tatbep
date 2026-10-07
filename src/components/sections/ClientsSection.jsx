import { clients } from '../../data/company'
import { SectionHead } from '../ui'

function ClientsSection() {
  return (
    <section className="sec sec--paper" id="clients">
      <div className="wrap">
        <SectionHead
          index={6}
          label="Заказчики"
          title="С кем мы работаем"
          lead="Генерирующие компании, нефтехимические, химические и металлургические предприятия, производители энергетического оборудования."
        />
        <div className="logo-wall">
          {clients.map((c) => (
            <div key={c.name} className="logo-cell">
              <img src={c.logo} alt="" loading="lazy" />
              <p>{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
