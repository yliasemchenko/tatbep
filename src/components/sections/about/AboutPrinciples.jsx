const principles = [
  {
    icon: '/assets/gif/icon3.gif',
    title: 'ОРИЕНТАЦИЯ НА ЗАКАЗЧИКА',
    description: 'Интересы заказчика находятся в центре каждого проекта. Мы предлагаем технические решения, которые сочетают надежность, экономическую эффективность и соответствие современным отраслевым требованиям'
  },
  {
    icon: '/assets/gif/icon1.gif',
    title: 'РАЗВИТИЕ СПЕЦИАЛИСТОВ',
    description: 'Постоянно повышаем квалификацию сотрудников, развиваем систему наставничества, поддерживаем молодых специалистов и внедряем лучшие инженерные практики'
  },
  {
    icon: '/assets/gif/icon4.gif',
    title: 'СОВРЕМЕННЫЕ ТЕХНОЛОГИИ',
    description: 'Используем передовые программные комплексы, цифровое проектирование, 3D-моделирование и современные методы инженерных расчетов для создания надежных и эффективных проектов'
  },
  {
    icon: '/assets/gif/icon2.gif',
    title: 'КОМАНДНАЯ РАБОТА',
    description: 'Каждый проект реализует команда специалистов разных направлений. Совместная работа, обмен опытом и скоординированные действия позволяют находить оптимальные инженерные решения'
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
