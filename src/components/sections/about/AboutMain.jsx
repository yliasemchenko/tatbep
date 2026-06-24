import { Link } from 'react-router-dom'

const arrowDownIcon = '/assets/img/icons/arrow_down.svg'
const icon1 = '/assets/img/icons/main_slide/1.svg'
const icon2 = '/assets/img/icons/main_slide/2.svg'
const icon3 = '/assets/img/icons/main_slide/3.svg'
const icon4 = '/assets/img/icons/main_slide/4.svg'
const icon5 = '/assets/img/icons/main_slide/5.svg'

function AboutMain() {
  return (
    <section id="about_main">
      <div className="container">
        <div className="about_main_text">
          <h1>Промышленное проектирование объектов энергетики</h1>
        </div>
      </div>
      <div className="about_main_bg">
        <img src="/assets/video/about_page.gif" alt="" />
      </div>
      <a href="#about_terms" className="abs_arrow">
        <img src={arrowDownIcon} alt="" />
      </a>
    </section>
  )
}

export default AboutMain
