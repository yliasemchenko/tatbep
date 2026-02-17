import ContactsMain from '../components/sections/contacts/ContactsMain'
import ContactInfo from '../components/sections/contacts/ContactInfo'
import ContactForm from '../components/sections/contacts/ContactForm'

function Contacts() {
  return (
    <section className="section_padding_top">
      <ContactsMain />
      <div className="container">
        <div className="row">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contacts
