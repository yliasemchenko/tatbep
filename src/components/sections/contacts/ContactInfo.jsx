function ContactInfo() {
  return (
    <div className="col-lg-6" itemScope itemType="http://schema.org/Organization">
      <h1 className="title_cont">контакты</h1>
      <p className="subtitle_cont" itemProp="name">ООО «Татбелэнергопроект»</p>
      <div className="cont_page_row">
        <div className="cont_page_div" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <img src="/assets/img/icons/cont/1.svg" alt="" />
          <p>
            <strong>Адрес:</strong>{' '}
            <span itemProp="postalCode">220020</span>,{' '}
            <span itemProp="addressLocality">Беларусь, г. Минск</span>,{' '}
            <span itemProp="streetAddress">ул. Ольшевского, 20/11</span>
          </p>
        </div>
        <div className="cont_page_div">
          <img src="/assets/img/icons/cont/2.svg" alt="" />
          <p>
            <strong>Почтовый адрес:</strong> 220020, Беларусь, <br /> г. Минск, ул. Ольшевского, 20/11
          </p>
        </div>
        <div className="cont_page_div">
          <img src="/assets/img/icons/cont/3.svg" alt="" />
          <a href="tel:+375173082601" itemProp="telephone">
            <strong>Тел.:</strong> +375 17 308-26-01
          </a>
        </div>
        <div className="cont_page_div">
          <img src="/assets/img/icons/cont/4.svg" alt="" />
          <a href="mailto:info@tatbep.by" itemProp="email">
            <strong>E-mail:</strong> info@tatbep.by
          </a>
        </div>
        <div className="row news_header">
          <button
            className="btn_main btn_main_blue"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal_zayavka_press"
            style={{ maxWidth: '360px', minWidth: '300px', display: 'block !important' }}
          >
            связаться
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
