import { management } from '../../../data/company'
import { PhotoSlot, SectionHead, Todo, pad } from '../../ui'

function AboutManagement() {
  const [head, ...rest] = management
  const missing = management.some((p) => !p.photo)

  return (
    <section className="sec sec--paper" id="management">
      <div className="wrap">
        <SectionHead
          index={4}
          label="Руководство"
          title="Руководство компании"
          aside={missing && <Todo>портретные фото руководителей — сейчас стоят заглушки</Todo>}
        />

        <div className="leader">
          <PhotoSlot className="leader__photo" src={head.photo} alt={head.name} note="Портрет" />
          <div className="leader__text">
            <span className="num">01</span>
            <p className="cap">{head.position}</p>
            <h3 className="h2">{head.name}</h3>
          </div>
        </div>

        <ul className="leaders">
          {rest.map((person, i) => (
            <li key={person.name} className="leaders__item">
              <PhotoSlot className="leaders__photo" src={person.photo} alt={person.name} note="Портрет" />
              <span className="num">{pad(i + 2)}</span>
              <strong>{person.name}</strong>
              <span className="pos">{person.position}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutManagement
