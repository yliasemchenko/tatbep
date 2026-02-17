import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    request: ''
  })
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formatPhone = (value) => {
    // Удаляем все нецифровые символы
    const numbers = value.replace(/\D/g, '')
    
    // Форматируем по маске +375 (__) ___-__-__
    if (numbers.length === 0) return ''
    if (numbers.length <= 3) return `+${numbers}`
    if (numbers.length <= 5) return `+${numbers.slice(0, 3)} (${numbers.slice(3)}`
    if (numbers.length <= 8) return `+${numbers.slice(0, 3)} (${numbers.slice(3, 5)}) ${numbers.slice(5)}`
    if (numbers.length <= 10) return `+${numbers.slice(0, 3)} (${numbers.slice(3, 5)}) ${numbers.slice(5, 8)}-${numbers.slice(8)}`
    return `+${numbers.slice(0, 3)} (${numbers.slice(3, 5)}) ${numbers.slice(5, 8)}-${numbers.slice(8, 10)}-${numbers.slice(10, 12)}`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'phone') {
      setFormData(prev => ({
        ...prev,
        [name]: formatPhone(value)
      }))
    } else if (name === 'name') {
      // Только буквы и пробелы для имени
      const filteredValue = value.replace(/[0-9]/g, '')
      setFormData(prev => ({
        ...prev,
        [name]: filteredValue
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!agreed) {
      alert('Необходимо согласие на обработку персональных данных')
      return
    }
    
    setIsSubmitting(true)
    // Здесь будет логика отправки формы
    // В реальном приложении здесь будет вызов API
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Спасибо! Ваше сообщение отправлено.')
      setFormData({ name: '', phone: '', request: '' })
      setAgreed(false)
    }, 1000)
  }

  return (
    <div className="col-lg-6">
      <form className="wpcf7-form cont_page_form" onSubmit={handleSubmit}>
        <p className="cont_form_text">
          Если Вы хотите получить консультацию, коммерческое предложение, развернутую информацию или задать вопрос — оставьте нам свои контакты, и мы с Вами свяжемся.
        </p>
        <p>
          <input
            type="text"
            name="name"
            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required border_black"
            id="onlyChars"
            aria-required="true"
            placeholder="Ваше ФИО"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="tel"
            name="phone"
            className="wpcf7-form-control wpcf7-mask wpcf7-validates-as-required wpcf7mf-mask border_black"
            aria-required="true"
            placeholder="+375 (__) ___-__-__"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={19}
          />
          <br />
          <input
            type="text"
            name="request"
            className="wpcf7-form-control wpcf7-text border_black"
            placeholder="Запрос"
            value={formData.request}
            onChange={handleChange}
          />
        </p>
        <div className="check_agree">
          <p>
            <input
              type="checkbox"
              name="acceptance"
              id="contact-agreement"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
          </p>
          <p>
            Согласен с{' '}
            <a href="/politika-obrabotki-personalnyh-dannyh.html" target="_blank" rel="noopener noreferrer">
              политикой конфиденциальности сайта
            </a>{' '}
            и даю{' '}
            <a href="/politika-obrabotki-personalnyh-dannyh.html" target="_blank" rel="noopener noreferrer">
              согласие на обработку персональных данных, разрешенных для распространения
            </a>
          </p>
        </div>
        <p>
          <input
            type="submit"
            className={`wpcf7-form-control wpcf7-submit has-spinner blue_btn_send ${isSubmitting ? 'submitting' : ''}`}
            value={isSubmitting ? 'Отправка...' : 'Отправить'}
            disabled={isSubmitting}
          />
        </p>
      </form>
    </div>
  )
}

export default ContactForm
