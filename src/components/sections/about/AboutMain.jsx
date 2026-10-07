import { PageHero, Photo, Todo } from '../../ui'

function AboutMain() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'О компании', to: '/about' }]}
        label="О компании"
        title="Проектируем объекты энергетики и промышленности с 2015 года"
        lead="ООО «Татбелэнергопроект» разрабатывает документацию для тепловых электростанций, источников тепла и тепловых сетей, объектов общезаводского хозяйства крупных промышленных предприятий — и сопровождает проект до ввода объекта."
      />
      <div className="wrap" style={{ paddingTop: 'clamp(32px, 4vw, 56px)' }}>
        <Photo src="/assets/img/about/our.webp" alt="Сотрудники Татбелэнергопроекта" className="about-photo" />
        <p className="cap figure-cap">Сотрудники компании · <Todo>подпись к фото: событие и год</Todo></p>
      </div>
    </>
  )
}

export default AboutMain
