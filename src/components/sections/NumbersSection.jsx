import { Link } from 'react-router-dom'

const arrowIcon = '/assets/img/icons/arrow_right.svg'

function NumbersSection() {
  return (
    <section id="numbers">
      <div className="container">
        <h2 className="big">Татбелэнергопроект <br/><span>в цифрах</span></h2>
        <div className="row">
        <div className="col-lg-4">
            <Link to="/proekty" className="numbers_div toggle_text_two_div">
              <div className="number_div_text">
                <div className="numbers_div_header">
                  <p className="number_big">50+</p>
                  <p>проектов</p>
                </div>
                <p>Мы выполнили более 50 проектов в сфере промышленного проектирования объектов энергетики</p>
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
              <div className="numbers_div_bg">
                <img src="/assets/img/mask2.png" alt="" />
              </div>
              {/* <div className="numbers_div_bg numbers_div_bg_acative">
                <img src="/assets/img/mask2.png" alt="" />
              </div> */}
            </Link>
          </div>
          <div className="col-lg-8">
            <Link to="/proekty" className="numbers_div numbers_div_active">
              <div className="number_div_text">
                <div className="numbers_div_header">
                  <p className="number_big">10</p>
                  <p>лет</p>
                </div>
                <p>С 2015 года мы добросовестно <br /> трудимся и проектируем для вас</p>
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
              <div className="numbers_div_bg numbers_div_bg_acative">
                <img src="/assets/img/mask4.webp" alt="" />
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/proekty" className="numbers_div numbers_div_active" style={{background:'var(--main)'}}>
              <div className="number_div_text">
                <div className="numbers_div_header">
                  <p className="number_big">25</p>
                  <p>стран</p>
                </div>
                <p>Проекты в 25 <br /> странах мира</p>
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
              <div className="numbers_div_bg numbers_div_bg_acative">
                <img src="/assets/img/projects/main/2.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/karera" className="numbers_div toggle_text_two_div">
              <div className="number_div_text">
                <div className="numbers_div_header">
                  <p className="number_big">150+</p>
                  <p>человек</p>
                </div>
                <p className="toggle_text_two">В нашей команде более 150 специалистов, более 95% — инженерно-технический персонал</p>
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
              <div className="numbers_div_bg">
                <img src="/assets/img/mask4.webp" alt="" />
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/uslugi" className="numbers_div toggle_text_three_div">
              <div className="number_div_text">
                <div className="numbers_div_header">
                  <p className="number_big">6</p>
                  <p>видов услуг</p>
                </div>
                <p className="toggle_text_three">Предпроектные работы, проектная документация, BIM, HAZOP, авторский надзор и другие направления</p>
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
              <div className="numbers_div_bg">
                <img src="/assets/img/mask2.png" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NumbersSection
