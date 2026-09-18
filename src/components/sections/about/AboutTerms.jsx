const terms = [
  {
    id: 'one',
    title: 'Опыт',
    image: '/assets/img/about/opit.webp',
    description:
      'Используем многолетний практический опыт реализации проектов в энергетике и промышленности для решения задач любой сложности'
  },
  {
    id: 'two',
    title: 'Кадры',
    image: '/assets/img/about/cadri.jpg',
    description:
      'Объединяем команду высококвалифицированных специалистов, обладающих глубокой отраслевой экспертизой и опытом реализации сложных инженерных проектов'
  },
  {
    id: 'three',
    title: 'Технологии',
    image: '/assets/img/about/tehnologii.gif',
    description:
      'Применяем современные технологии, передовые инженерные решения и собственные разработки для повышения эффективности, надежности и экологичности энергетических объектов'
  }
]

function AboutTerms() {
  const [first, second, third] = terms

  return (
    <section id="about_terms">
      <div className="container">
        <h2 className="big">
          <p>КТО МЫ </p>
            
        </h2>
        <div className="about_terms_cards">
          <div className="about_terms_cards_row about_terms_cards_row_top">
            {[first, second].map((term) => (
              <article
                key={term.id}
                className={`about_terms_card about_terms_card_${term.id}`}
              >
                <div className="about_terms_card_img">
                  <img src={term.image} alt={term.title} />
                </div>
                <div className="about_terms_card_body">
                  <h3>{term.title}</h3>
                  <p>{term.description}</p>
                </div>
              </article>
            ))}
          </div>

          <article className={`about_terms_card about_terms_card_${third.id} about_terms_card_wide`}>
            <div className="about_terms_card_img">
              <img src={third.image} alt={third.title} />
            </div>
            <div className="about_terms_card_body">
              <h3>{third.title}</h3>
              <p>{third.description}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutTerms
