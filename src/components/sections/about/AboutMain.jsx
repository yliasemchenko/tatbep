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
      <div className="main_column_right">
        <div className="main_column">
          <a href="#monitoring" className="main_div_column">
            <p>система контроля <br />выбросов</p>
            <div className="main_div_column_img">
              <img src={icon1} alt="" />
            </div>
          </a>
          <a href="#bezmazutnyj" className="main_div_column">
            <p>безмазутный <br />розжиг</p>
            <div className="main_div_column_img">
              <img src={icon2} alt="" />
            </div>
          </a>
          <a href="#srk" className="main_div_column">
            <p><span>СРК</span><br />СДЕЛАНО В РОССИИ</p>
            <div className="main_div_column_img">
              <img src={icon3} alt="" />
            </div>
          </a>
          <a href="#kolczevoj" className="main_div_column">
            <p>КОЛЬЦЕВОЙ <br />КОТЕЛ</p>
            <div className="main_div_column_img">
              <img src={icon4} alt="" />
            </div>
          </a>
          <div className="main_div_column main_div_column_white">
            <div className="main_div_column_white_plashka">
              <p>Узнайте больше о проектах и компетенциях ООО «Татбелэнергопроект» — промышленное проектирование объектов энергетики с 2015 года</p>
            </div>
            <div className="main_div_column_img">
              <img src={icon5} alt="" />
            </div>
          </div>
        </div>
      </div>
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
