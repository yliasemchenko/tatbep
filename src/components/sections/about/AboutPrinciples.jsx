const principles = [
  {
    icon: '/assets/gif/icon3.gif',
    title: 'НАИЛУЧШЕЕ РЕШЕНИЕ',
    description: 'Используем все компетенции команды для формирования наилучшего решения'
  },
  {
    icon: '/assets/gif/icon1.gif',
    title: 'БЕЗОПАСНОСТЬ, ЭФФЕКТИВНОСТЬ, ЭКОЛОГИЧНОСТЬ',
    description: 'Фокусируемся на на безопасности, эффективности и экологичности при разработке и утверждении основных технических решений'
  },
  {
    icon: '/assets/gif/icon4.gif',
    title: 'ПРОЕКТНЫЙ ПОДХОД',
    description: 'Под каждый проект формируем  проектную команду профессионалов для наилучшего решения поставленных задач'
  },
  {
    icon: '/assets/gif/icon2.gif',
    title: 'ОТВЕТСТВЕННОСТЬ ЗА РЕЗУЛЬТАТ',
    description: 'Несём ответственность за результат, напрямую связанный с внедрением проектных решений и последующей эксплуатацией'
  }
]

function AboutPrinciples() {
  return (
    <section id="prinz">
      <div className="container">
        <h2 className="big">
          <p>КЛЮЧЕВЫЕ ПРИНЦИПЫ<br />
            РАБОТЫ</p>
        </h2>
        <div className="row">
          {principles.map((principle, index) => (
            <div key={index} className="col-lg-6">
              <div className="prinz_div">
                <img src={principle.icon} alt={principle.title} />
                <div className="prinz_text">
                  <h2>{principle.title}</h2>
                  <p>{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutPrinciples
