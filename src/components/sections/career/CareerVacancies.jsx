import { Link } from 'react-router-dom'

const vacancies = [
  {
    id: 1,
    title: 'Инженер-наладчик по турбинному оборудованию (пусконаладочные, режимно-наладочные работы)',
    description: 'Ищем инженера-наладчика по турбинному оборудованию (пусконаладочные и режимно-наладочные работы)',
    link: '#'
  },
  {
    id: 2,
    title: 'Инженер-наладчик по котельному оборудованию (пусконаладочные, режимно-наладочные работы)',
    description: 'Ищем инженера-наладчика по котельному оборудованию (пусконаладочные, режимно-наладочные работы)',
    link: '#'
  },
  {
    id: 3,
    title: 'Ведущий инженер конструкторского отдела (топочно-горелочные устройства)',
    description: 'Ищем инженера конструкторского отдела для работы над топочно-горелочными устройствами',
    link: '#'
  },
  {
    id: 4,
    title: 'Инженер-проектировщик КИПиА и АСУ ТП',
    description: 'Ищем инженера проектировщика для разработки технической документации стадия ОТР/ТЭО, ПД, РД раздел АТХ.',
    link: '#'
  },
  {
    id: 5,
    title: 'Главный специалист по турбинному оборудованию (пусконаладочные и режимно-наладочные работы)',
    description: 'Ищем квалифицированного специалиста с опытом работы от 3 лет',
    link: '#'
  },
  {
    id: 6,
    title: 'BIM-координатор',
    description: 'Ищем опытного специалиста по работе с информационными моделями',
    link: '#'
  },
  {
    id: 7,
    title: 'Помощник руководителя проекта (начинающий специалист)',
    description: 'ООО «Татбелэнергопроект» ищет молодого, но перспективного помощника руководителя проекта в команду для решения интересных и амбициозных задач.',
    link: '#'
  }
]

function CareerVacancies() {
  return (
    <>
      <section id="career_main" className="career_main_short">
        <div className="container">
          <h1>Вакансии</h1>
        </div>
        <div className="career_main_bg">
          <img src="/wp-content/uploads/2024/01/image-9.png" alt="" />
        </div>
      </section>

      <section id="vacantion_text">
        <div className="container">
          <div className="breadcrump">
            <Link to="/">Главная</Link>
            <p>&gt;</p>
            <Link to="/karera">Карьера</Link>
            <p>&gt;</p>
            <Link to="/karera/vakansii">Вакансии</Link>
          </div>
          <div className="vacantion_text_div">
            <h3>Мы ищем выдающихся людей!</h3>
            <p>Если Вас заинтересовали наши вакансии, пожалуйста, вышлите свое резюме с пометкой "Резюме на вакансию &lt;должность&gt;", на которую Вы претендуете, на почту <a href="mailto:info@tatbep.by">info@tatbep.by</a>. Данные, которые Вы считаете нужным сообщить о себе, будут рассмотрены с соблюдением конфиденциальности. Если интересующей Вас вакансии в данный момент нет, Вы все-равно можете выслать резюме. Ваши данные сохранятся в нашем резерве и будут рассмотрены в первую очередь в момент появления соответствующей вакансии.</p>
            <h4>Актуальные вакансии:</h4>
          </div>
          <div className="vacantion_row_post">
            {vacancies.map((vacancy) => (
              <div key={vacancy.id} className="vacantion_div_post">
                <h2>{vacancy.title}</h2>
                <p><strong>Краткое описание:</strong></p>
                <p>{vacancy.description}</p>
                <a href={vacancy.link} className="btn_vacantion_main">Подробнее</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="zayavka_big_plashka zayavka_big_plashka_career">
            <div className="row">
              <div className="col-lg-4">
                <h3>Свяжитесь с нами!</h3>
                <p>Заполните форму <br /> и прикрепите резюме</p>
                <div className="zayavka_big_plashka_img">
                  <img src="/assets/img/icons/product_plashka.svg" alt="" />
                </div>
              </div>
              <div className="col-lg-8">
                <form className="career_form">
                  <select name="vacancy" className="form-control">
                    <option value="">Выберите вакансию</option>
                    <option value="ИНЖЕНЕР-ТЕПЛОТЕХНИК (ЭНЕРГЕТИКА)">ИНЖЕНЕР-ТЕПЛОТЕХНИК (ЭНЕРГЕТИКА)</option>
                    <option value="СПЕЦИАЛИСТ ПО ВЫПУСКУ ДОКУМЕНТАЦИИ (НОРМОКОНТРОЛЬ)">СПЕЦИАЛИСТ ПО ВЫПУСКУ ДОКУМЕНТАЦИИ (НОРМОКОНТРОЛЬ)</option>
                    <option value="ПОМОЩНИК РУКОВОДИТЕЛЯ ПРОЕКТА (НАЧИНАЮЩИЙ СПЕЦИАЛИСТ)">ПОМОЩНИК РУКОВОДИТЕЛЯ ПРОЕКТА (НАЧИНАЮЩИЙ СПЕЦИАЛИСТ)</option>
                    <option value="ИНЖЕНЕР-КОНСТРУКТОР (НАЧИНАЮЩИЙ СПЕЦИАЛИСТ)">ИНЖЕНЕР-КОНСТРУКТОР (НАЧИНАЮЩИЙ СПЕЦИАЛИСТ)</option>
                    <option value="ВЕДУЩИЙ ИНЖЕНЕР КОНСТРУКТОРСКОГО ОТДЕЛА / ГЛАВНЫЙ СПЕЦИАЛИСТ КОНСТРУКТОРСКОГО ОТДЕЛА">ВЕДУЩИЙ ИНЖЕНЕР КОНСТРУКТОРСКОГО ОТДЕЛА / ГЛАВНЫЙ СПЕЦИАЛИСТ КОНСТРУКТОРСКОГО ОТДЕЛА</option>
                    <option value="ВЕДУЩИЙ ИНЖЕНЕР-ПРОЕКТИРОВЩИК ВК">ВЕДУЩИЙ ИНЖЕНЕР-ПРОЕКТИРОВЩИК ВК</option>
                  </select>
                  <input type="text" name="name" placeholder="Ваше ФИО" className="form-control" required />
                  <input type="email" name="email" placeholder="E-mail" className="form-control" required />
                  <input type="tel" name="phone" placeholder="Телефон" className="form-control" required />
                  <h5>Загрузить резюме: pdf, txt, jpeg, doc, docx</h5>
                  <input type="file" name="resume" accept=".pdf,.txt,.jpeg,.doc,.docx" className="form-control" />
                  <div className="check_agree">
                    <input type="checkbox" name="agree" id="career_agree" required />
                    <label htmlFor="career_agree">
                      Согласен с <a href="#privacy">политикой конфиденциальности сайта</a> и даю <a href="#privacy">согласие на обработку персональных данных, разрешенных для распространения</a>
                    </label>
                  </div>
                  <button type="submit" className="btn_main btn_main_blue">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareerVacancies
