import { Link } from 'react-router-dom'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'

const projectCards = [
  {
    title: 'Наши проекты',
    image: '/assets/img/projects/main/1.png',
    link: '/proekty/referenczii',
    className: 'press_div_img_blue',
  },
  {
    title: 'география проектов',
    image: '/assets/img/projects/main/2.png',
    link: '/proekty/geo',
    className: 'press_div_img_green',
  
  },
  {
    title: 'Отзывы',
    image: '/assets/img/projects/main/3.png',
    link: '/not-found',
    className: 'press_div_img_gray',
    textClassName: 'press_div_text_gray',

  }
]

function ProjectsMain() {
  return (
    <section className="section_padding_top">
      <div className="container">
        <div className="breadcrump">
          <Link to="/">Главная</Link>
          <p>&gt;</p>
          <Link to="/proekty">Проекты</Link>
        </div>
        <h1>Проекты</h1>
        <div className="row row_press">
          {projectCards.map((card, index) => (
            <div key={index} className="col-lg-4">
              <Link to={card.link} className={`press_div ${card.className}`}>
                <div className={card.textClassName || 'press_div_text'}>
                  <h2>{card.title}</h2>
                </div>
                <div className={`press_div_img ${card.className === 'press_div_img_green' || card.className === 'press_div_img_gray' ? 'press_div_img_projects' : ''}`}>
                  <img src={card.image} alt={card.title} />
                </div>
              </Link>
              {/* <div className="project_row_a">
                {card.links.map((linkItem, linkIndex) => (
                  <Link key={linkIndex} to={linkItem.link} className="project_div_a">
                    <p>{linkItem.text}</p>
                    <img className="arrow" src={arrowRightIcon} alt="" />
                  </Link>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsMain
