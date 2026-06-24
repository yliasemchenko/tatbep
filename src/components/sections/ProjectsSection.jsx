import { useState } from 'react'
import { Link } from 'react-router-dom'

const projectsData = [
  {
    id: 1,
    title: 'Борисовская ТЭЦ ПГУ - 65 МВт',
    subtitle: 'Борисовская ТЭЦ ПГУ - 65 МВт, Республика Беларусь',
    image: '/assets/img/projects/main/borisov.jpg',
    type: 'Архитектурный проект, строительный проект.',
    maintech: [
      '1 ГТУ типа SGT-800 фирмы «Siemens» мощностью 46,38 МВт',
      '1 КУ SteamGen TM8 фирмы «Aalborg Engineering Slovakia, s.r.o»',
      '1 ПТУ типа SST-400 фирмы «Siemens» мощностью 20,0 МВт'
    ],
    text: [
      'Проектом предусмотрен к установке парогазовый конденсационный блок электрической мощностью 65 МВт.'
    ],
    time: '2014 г.'
  },

  {
    id: 2,
    title: 'ПГУ - 220 МВт Казанской ТЭЦ-2',
    subtitle: 'ПГУ - 220 МВт Казанской ТЭЦ-2, Российская Федерация',
    image: '/assets/img/projects/main/kazan.JPG',
    type: 'Проектная и рабочая документация.',
    maintech: [
      '1 ГТУ типа PG6111FA фирмы «General Electric» мощностью 77,2 МВт',
      '1 котел-утилизатор (КУ) ОАО «ЭМАльянс»',
      '1 ПТУ типа Т-26/36-7,5/0,12 мощностью 36 МВт, ОАО «Калужский Турбинный Завод»'
    ],
    text: [
      'Проектом предусмотрена установка двух блоков ПГУ-110 МВт.'
    ],
    time: '2014 г.'
  },

  {
    id: 3,
    title: 'Елабужская ГТУ-ТЭС - 20 МВт',
    subtitle: 'Елабужская ГТУ-ТЭС - 20 МВт, Российская Федерация',
    image: '/assets/img/projects/main/elabug.jpg',
    type: 'Проектная и рабочая документация.',
    maintech: [
      '4 ГТУ типа Taurus 60 фирмы «Solar Turbines» мощностью 5,2 МВт',
      '4 КУ типа WHBW-GT-9000 фирмы «NNG ENERGY» (Япония) мощностью 3,85 МВт'
    ],
    text: [
      'Проектом предусмотрена установка четырех газотурбинных установок общей электрической мощностью 20 МВт с котлами-утилизаторами.'
    ],
    time: '2018 г.'
  },

  {
    id: 4,
    title: 'Лемаевская ПГУ - 495 МВт',
    subtitle: 'Лемаевская ПГУ - 495 МВт ПАО «Нижнекамскнефтехим», Российская Федерация',
    image: '/assets/img/projects/main/nknx.jpg',
    type: 'Проектная и рабочая документация.',
    maintech: [
      '2 ГТУ SGT5-2000E фирмы «Siemens» электрической мощностью 167,9 МВт каждая',
      '2 барабанных котла-утилизатора производства «CMI Co.»',
      '1 ПТУ конденсационного типа SST5-600 фирмы «Siemens» мощностью 159,7 МВт'
    ],
    text: [
      'Проектом предусмотрен к установке парогазовый конденсационный блок электрической мощностью не менее 495 МВт по схеме 2хГТУ + 2хКУ + 1хПТУ.'
    ],
    time: '2021 г.'
  },

  {
    id: 5,
    title: 'Лушниковская ПГУ - 250 МВт',
    subtitle: 'Лушниковская ПГУ - 250 МВт ПАО «Казаньоргсинтез», Российская Федерация',
    image: '/assets/img/projects/main/kos.jpg',
    type: 'Проектная и рабочая документация.',
    maintech: [
      '1 ГТУ SGT5-2000E фирмы «Siemens» мощностью 188,8 МВт',
      '1 барабанный котел-утилизатор производства «John Cockerill»',
      '1 ПТУ SST-600 фирмы «Siemens» мощностью 95,6 МВт'
    ],
    text: [
      'Проектом предусмотрен к установке парогазовый конденсационный блок электрической мощностью не менее 250 МВт (в условиях ISO) по схеме 1хГТУ + 1хКУ + 1хПТУ.'
    ],
    time: '2025 г.'
  },

  {
    id: 6,
    title: 'ВРУ ООО «ЗапСибНефтехим»',
    subtitle: 'ВРУ ООО «ЗапСибНефтехим», Российская Федерация',
    image: '/assets/img/projects/main/zabniftehim.jpeg',
    type: 'Проектная и рабочая документация.',
    maintech: [
      '2 воздухоразделительные установки А-16-2 производства АО «КРИОГЕНМАШ»',
      '5 центробежных воздушных компрессоров',
      '5 воздушных фильтров',
      '2 системы предварительного охлаждения воздуха и др.',
    ],
    text: [
      'Проектом предусмотрено строительство двух воздухоразделительных установок мощностью 611097,6 тыс. нм³/год для обеспечения техническими газами ООО «ЗапСибНефтехим».'
    ],
    time: '2026 г.'
  },

  {
    id: 7,
    title: 'Модернизация Приморской ГРЭС',
    subtitle: 'Модернизация Приморской ГРЭС, Российская Федерация',
    image: '/assets/img/projects/main/promgres.JPG',
    type: 'Рабочая документация.',
    maintech: [
      'Модернизация блока №6 (200 МВт)',
      'Модернизация блока №7 (200 МВт)',
      'Модернизация блока №9 (200 МВт)',
      'Модернизация блока №3 (100 МВт)',
      'Модернизация блока №4 (100 МВт)'
    ],
    text: [
      'Проектом предусмотрена модернизация Приморской ГРЭС для увеличения проектного числа часов использования установленной мощности до 6500 часов.',
    ],
    time: '2024–2027 гг.'
  }
];

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(1)

  return (
    <section id="for_who">
      <div className="container">
        <h2 className="big">значимые <span>проекты</span></h2>
        <div className="row">
          {projectsData.map((project, index) => (
            <div key={project.id} className="col-lg-4">
              <button
                className={`for_who_button for_who_button_${index === 0 ? 'one' : index === 1 ? 'two' : index === 2 ? 'three' : index === 3 ? 'four' : 'five'} ${activeProject === project.id ? 'for_who_button_active' : ''}`}
                onClick={() => setActiveProject(project.id)}
              >
                {project.title}
              </button>
            </div>
          ))}
        </div>
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`for_who_row for_who_row_${index === 0 ? 'one' : index === 1 ? 'two' : index === 2 ? 'three' : index === 3 ? 'four' : 'five'} ${activeProject === project.id ? 'for_who_row_active' : ''}`}
          >
            <div className="for_who_img">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="for_who_text">
              <div className="for_who_text_column">
                <h3 style={{ fontWeight: 700 }}>{project.subtitle}</h3>
                <p style={{fontStyle:'italic'}}>{project.type}</p>
                {project.text.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <p>Основное оборудование блока: </p>
                <ul style={{paddingLeft: '1rem'}}>
                  {project.maintech.map((paragraph, i) => (
                    <li key={i}>{paragraph}</li>
                  ))}
                </ul>
                <p>Ввод в эксплуатацию: {project.time}</p>
              </div>
              <div className="btn_width_center">
                <Link to="/proekty" className="btn_main btn_main_green">Подробнее</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
