import { Link } from 'react-router-dom'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'
const arrowRightGreenIcon = '/assets/img/icons/arrow_right_green.svg'

const newsData = {
  featured: {
    date: '30.06.2025',
    themes: ['Энергетика', 'Татбелэнергопроект'],
    title: 'Специалисты Татбелэнергопроект изучили работу Новосибирской ТЭЦ-4 изнутри',
    description: '25-26 июня сотрудники ООО «Татбелэнергопроект» побывали на закрытой экскурсии по Новосибирской ТЭЦ-4, организованной специально для компании.',
    image: '/assets/img/press_center/1.jpg',
    link: '/press-center/news/novosibirsk-chp-4'
  },
  items: [
    {
      date: '16.07.2025',
      themes: ['Энергетика', 'Татбелэнергопроект'],
      title: 'Татбелэнергопроект обсудил развитие угольной генерации на научно-техническом совете ЕЭС',
      image: '/assets/img/press_center/2.jpg',
      link: '/press-center/news/nts2'
    },
    {
      date: '09.07.2025',
      themes: ['ЦБП', 'Промышленность', 'Энергетика', 'Татбелэнергопроект'],
      title: 'Татбелэнергопроект провел переговоры с турецкой компанией SINTEK',
      image: '/assets/img/press_center/3.jpg',
      link: '/press-center/news/sintek'
    },
    {
      date: '07.07.2025',
      themes: ['Татбелэнергопроект'],
      title: 'Татбелэнергопроект развивает внутреннюю структуру: сессия Аркадия Цукера',
      image: '/assets/img/press_center/1.jpg',
      link: '/press-center/news/zuker'
    },
    {
      date: '27.06.2025',
      themes: ['Татбелэнергопроект'],
      title: 'Татбелэнергопроект стал соорганизатором дуатлона памяти Максима Серанта',
      image: '/assets/img/press_center/2.jpg',
      link: '/press-center/news/duatlon'
    }
  ]
}

function NewsSection() {
  return (
    <section id="news">
      <div className="container">
        <h2 className="big">новости</h2>
        <div className="row row_news">
          <div className="col-lg-4 row_news_big">
            <Link to={newsData.featured.link} className="news_div news_div_big">
              <div className="news_img">
                <img src={newsData.featured.image} alt={newsData.featured.title} />
              </div>
              <div className="news_text">
                <div className="news_header">
                  <p className="date">{newsData.featured.date}</p>
                  <div className="theme_abs">
                    {newsData.featured.themes.map((theme, i) => (
                      <p key={i} className={`theme ${theme === 'Татбелэнергопроект' ? 'theme_blue_dark' : ''}`}>
                        {theme}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="news_text_center">
                  <h3>{newsData.featured.title}</h3>
                  <p>{newsData.featured.description}</p>
                </div>
                <div className="news_footer">
                  <p>подробнее</p>
                  <img className="arrow" src={arrowRightGreenIcon} alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-8">
            <div className="row row_news">
              {newsData.items.map((news, index) => (
                <div key={index} className="col-lg-6">
                  <Link to={news.link} className="news_div">
                    <div className="news_img">
                      <img src={news.image} alt={news.title} />
                    </div>
                    <div className="news_text">
                      <div className="news_header">
                        <p className="date">{news.date}</p>
                        <div className="theme_abs">
                          {news.themes.map((theme, i) => (
                            <p
                              key={i}
                              className={`theme ${
                                theme === 'ЦБП' ? 'theme_blue' :
                                theme === 'Промышленность' ? 'theme_gray' :
                                theme === 'Татбелэнергопроект' ? 'theme_blue_dark' : ''
                              }`}
                            >
                              {theme}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="news_text_center">
                        <h3>{news.title}</h3>
                      </div>
                      <div className="news_footer">
                        <p>подробнее</p>
                        <img className="arrow" src={arrowRightIcon} alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
