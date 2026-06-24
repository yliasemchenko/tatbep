const terms = [
  {
    id: 'one',
    title: 'Экологичность',
    image: '/assets/img/about/terms/1.webp',
    description:
      'Предлагаем к внедрению на энергообъектах современные мировые экологические и энергоэффективные решения'
  },
  {
    id: 'two',
    title: 'Инновационность',
    image: '/assets/img/about/terms/2.webp',
    description:
      'Разрабатываем и внедряем собственные инновационные решения для экологизации промышленной и большой энергетики'
  },
  {
    id: 'three',
    title: 'Профессионализм',
    image: '/assets/img/about/terms/3.webp',
    description:
      'Используем компетенции и экспертность в большой энергетике для повышения эффективности работы энергообъектов промышленных и целлюлозно-бумажных предприятий'
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
