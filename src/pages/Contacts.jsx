import ContactsMain from '../components/sections/contacts/ContactsMain'
import ContactInfo from '../components/sections/contacts/ContactInfo'
import ContactForm from '../components/sections/contacts/ContactForm'
import { Photo } from '../components/ui'

function Contacts() {
  return (
    <>
      <ContactsMain />
      <section className="sec">
        <div className="wrap contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="wrap">
          <Photo className="about-photo wide-photo" src="/assets/img/main_bg2.jpg" alt="" caption="Иллюстрация" />
        </div>
      </section>
    </>
  )
}

export default Contacts
