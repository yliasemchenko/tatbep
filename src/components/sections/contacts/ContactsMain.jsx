import { PageHero } from '../../ui'

function ContactsMain() {
  return (
    <PageHero
      crumbs={[{ label: 'Контакты', to: '/contacts' }]}
      label="Контакты"
      title="Контакты"
      lead="Вопросы о проектах, сотрудничестве и работе в компании можно задать по телефону, почте или через форму на этой странице."
    />
  )
}

export default ContactsMain
