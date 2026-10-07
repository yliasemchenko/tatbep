import { SectionHead, pad } from '../../ui'

const principles = [
  {
    title: 'Решение под задачу заказчика',
    text: 'Ищем техническое решение, которое одновременно надёжно, экономически оправдано и соответствует отраслевым требованиям.'
  },
  {
    title: 'Опыт передаётся дальше',
    text: 'Наставничество, техническая учёба и поддержка молодых специалистов — так опыт старших инженеров переходит в новые проекты.'
  },
  {
    title: 'Модель до чертежа',
    text: 'Цифровое проектирование, 3D-моделирование и инженерные расчёты в программных комплексах помогают проверить решение до выпуска документации.'
  },
  {
    title: 'Разделы согласованы между собой',
    text: 'Каждый проект ведёт команда специалистов разных направлений. Решения разделов согласуются между отделами до выпуска документации.'
  }
]

function AboutPrinciples() {
  return (
    <section className="sec sec--paper" id="principles">
      <div className="wrap">
        <SectionHead index={2} label="Принципы работы" title="Как мы работаем" />
        <div className="rows">
          {principles.map((p, i) => (
            <div key={p.title} className="rows__item">
              <span className="num">{pad(i + 1)}</span>
              <h3 className="h3">{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutPrinciples
