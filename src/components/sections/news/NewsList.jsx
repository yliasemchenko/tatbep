import { Link } from 'react-router-dom'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'
const arrowRightGreenIcon = '/assets/img/icons/arrow_right_green.svg'

// Пример данных новостей - в реальном приложении это будет приходить из API или пропсов
const mockNewsData = [
  {
    id: 1,
    date: '30.06.2025',
    themes: ['Энергетика', 'Татбелэнергопроект'],
    title: 'Специалисты Татбелэнергопроект изучили работу Новосибирской ТЭЦ-4 изнутри',
    description: '25-26 июня сотрудники ООО «Татбелэнергопроект» побывали на закрытой экскурсии по Новосибирской ТЭЦ-4, организованной специально для компании.',
    image: '/assets/img/press_center/1.jpg',
    link: '/press-center/news/novosibirsk-chp-4',
    isBig: true
  },
  {
    id: 2,
    date: '16.07.2025',
    themes: ['Энергетика', 'Татбелэнергопроект'],
    title: 'Татбелэнергопроект обсудил развитие угольной генерации на научно-техническом совете ЕЭС',
    image: '/assets/img/press_center/2.jpg',
    link: '/press-center/news/nts2',
    isBig: true
  },
  {
    id: 3,
    date: '09.07.2025',
    themes: ['ЦБП', 'Промышленность', 'Энергетика', 'Татбелэнергопроект'],
    title: 'Татбелэнергопроект провел переговоры с турецкой компанией SINTEK',
    image: '/assets/img/press_center/3.jpg',
    link: '/press-center/news/sintek',
    isBig: true
  },
  {
    id: 4,
    date: '07.07.2025',
    themes: ['Татбелэнергопроект'],
    title: 'Татбелэнергопроект развивает внутреннюю структуру: сессия Аркадия Цукера',
    image: '/assets/img/press_center/1.jpg',
    link: '/press-center/news/zuker'
  },
  {
    id: 5,
    date: '27.06.2025',
    themes: ['Татбелэнергопроект'],
    title: 'Татбелэнергопроект стал соорганизатором дуатлона памяти Максима Серанта',
    image: '/assets/img/press_center/2.jpg',
    link: '/press-center/news/duatlon'
  },
  {
    id: 6,
    date: '20.06.2025',
    themes: ['Энергетика'],
    title: 'Новая разработка в области энергетики',
    image: '/assets/img/press_center/3.jpg',
    link: '/press-center/news/new-development'
  },
  {
    id: 7,
    date: '15.06.2025',
    themes: ['Промышленность', 'Татбелэнергопроект'],
    title: 'Расширение производственных мощностей',
    image: '/assets/img/press_center/3.jpg',
    link: '/press-center/news/expansion'
  },
  {
    id: 8,
    date: '10.06.2025',
    themes: ['ЦБП'],
    title: 'Новые проекты в целлюлозно-бумажной промышленности',
    image: '/assets/img/press_center/3.jpg',
    link: '/press-center/news/cbp-projects'
  },
  {
    id: 9,
    date: '05.06.2025',
    themes: ['Энергетика', 'Татбелэнергопроект'],
    title: 'Инновационные решения для энергетики',
    image: '/assets/img/press_center/3.jpg',
    link: '/press-center/news/innovations'
  },
  {
    id: 10,
    date: '01.06.2025',
    themes: ['Татбелэнергопроект'],
    title: 'Встреча с партнерами компании',
    image: '/assets/img/press_center/3.jpg',
    link: '/press-center/news/partners'
  },
  {
    id: 11,
    date: '28.05.2025',
    themes: ['Промышленность'],
    title: 'Новые технологии в промышленности',
    image: '/assets/img/press_center/3.jpg',
    link: '/press-center/news/industrial-tech'
  },
  {
    id: 12,
    date: '25.05.2025',
    themes: ['Энергетика', 'ЦБП'],
    title: 'Совместные проекты с целлюлозно-бумажными предприятиями',
    image: '/assets/img/press_center/3.jpg',
    link: '/press-center/news/joint-projects'
  }
]

function NewsList({ news = mockNewsData }) {
  const bigNews = news.filter(item => item.isBig).slice(0, 3)
  const regularNews = news.filter(item => !item.isBig)

  const getThemeClass = (theme) => {
    if (theme === 'ЦБП') return 'theme_blue'
    if (theme === 'Промышленность') return 'theme_gray'
    if (theme === 'Татбелэнергопроект') return 'theme_blue_dark'
    return ''
  }

  return (
    <div className="news_body">
      <div className="row row_news row_news_page">
        <div className="col-lg-4 row_news_big">
          {bigNews.map((item) => (
            <Link key={item.id} to={item.link} className="news_div news_div_big">
              <div className="news_img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news_text">
                <div className="news_header">
                  <p className="date">{item.date}</p>
                  <div className="theme_abs">
                    {item.themes.map((theme, i) => (
                      <p key={i} className={`theme ${getThemeClass(theme)}`}>
                        {theme}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="news_text_center">
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                </div>
                <div className="news_footer">
                  <p>подробнее</p>
                  <img className="arrow" src={arrowRightGreenIcon} alt="" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="col-lg-8">
          <div className="row row_news">
            {regularNews.map((item) => (
              <div key={item.id} className="col-lg-6">
                <Link to={item.link} className="news_div">
                  <div className="news_img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news_text">
                    <div className="news_header">
                      <p className="date">{item.date}</p>
                      <div className="theme_abs">
                        {item.themes.map((theme, i) => (
                          <p key={i} className={`theme ${getThemeClass(theme)}`}>
                            {theme}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="news_text_center">
                      <h3>{item.title}</h3>
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
  )
}

export default NewsList
