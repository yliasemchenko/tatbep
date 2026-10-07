import { SectionHead, Todo, pad } from '../../ui'

const tones = ['duo--blue', 'duo--yellow', 'duo--navy']

const terms = [
  {
    title: 'Опыт',
    image: '/assets/img/about/opit.webp',
    text: 'Основу компании составили специалисты АО «Зарубежэнергопроект». Они работали над ПГУ-450 ТЭЦ-22 «Южная», Черепетской и Березовской ГРЭС, Казанской ТЭЦ-2 и другими объектами России и Беларуси.'
  },
  {
    title: 'Люди',
    image: '/assets/img/about/cadri.jpg',
    text: 'Девять проектных отделов — от теплотехнического и строительного до электротехнического и 3D-проектирования. Над каждым объектом работают специалисты нескольких дисциплин.'
  },
  {
    title: 'Инструменты',
    image: '/assets/img/about/tehnologii.gif',
    text: 'Отдел 3D-проектирования ведёт информационные модели объектов, координирует разделы и выявляет коллизии до выпуска документации.',
    note: 'используемые программные комплексы'
  }
]

function AboutTerms() {
  return (
    <section className="sec" id="about_terms">
      <div className="wrap">
        <SectionHead
          index={1}
          label="Кто мы"
          title="Инженерная проектная организация в составе группы ИЦ «Энергопрогресс»"
          lead="Компания создана в июне 2015 года как дочернее предприятие УК «КЭР-Холдинг» (г. Казань). С июля 2025 года — дочернее предприятие ООО ИЦ «Энергопрогресс». Офис в Минске, филиал в Казани."
        />
        <div className="terms" data-reveal>
          {terms.map((t, i) => (
            <article key={t.title} className={`term duo duo-hover ${tones[i % tones.length]}`}>
              <img src={t.image} alt="" loading="lazy" />
              <span className="ticks" aria-hidden="true" />
              <span className="term__big">{pad(i + 1)}</span>
              <div className="term__body">
                <h3 className="h2">{t.title}</h3>
                <p>{t.text}</p>
                {t.note && <Todo>{t.note}</Todo>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTerms
