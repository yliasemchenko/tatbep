import { company, contacts } from '../../../data/company'
import { Todo } from '../../ui'

function ContactInfo() {
  return (
    <div className="contact-grid__info" itemScope itemType="https://schema.org/Organization">
      <dl className="dl">
        <div className="dl__row">
          <dt>Организация</dt>
          <dd itemProp="name">{company.legalName}</dd>
        </div>
        <div className="dl__row" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <dt>Адрес</dt>
          <dd>
            <span itemProp="postalCode">{contacts.postalCode}</span>,{' '}
            <span itemProp="addressLocality">{contacts.city}</span>,{' '}
            {contacts.street ? <span itemProp="streetAddress">{contacts.street}</span> : <Todo>улица и дом</Todo>}
          </dd>
        </div>
        <div className="dl__row">
          <dt>Телефон</dt>
          <dd>
            {contacts.phone
              ? <a href={`tel:${contacts.phone.replace(/[^\d+]/g, '')}`} itemProp="telephone">{contacts.phone}</a>
              : <Todo>телефон</Todo>}
          </dd>
        </div>
        <div className="dl__row">
          <dt>E-mail</dt>
          <dd>
            {contacts.email
              ? <a href={`mailto:${contacts.email}`} itemProp="email">{contacts.email}</a>
              : <Todo>e-mail</Todo>}
          </dd>
        </div>
        <div className="dl__row">
          <dt>Филиал</dt>
          <dd>{contacts.branch}{contacts.branchAddress ? `, ${contacts.branchAddress}` : <>{', '}<Todo>адрес филиала</Todo></>}</dd>
        </div>
      </dl>
    </div>
  )
}

export default ContactInfo
