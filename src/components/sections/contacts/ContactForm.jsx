import { useState } from 'react'
import { Arrow, Todo } from '../../ui'

const initial = { name: '', organization: '', contact: '', message: '' }

function ContactForm() {
  const [form, setForm] = useState(initial)
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    if (!agreed) {
      setError('Отметьте согласие на обработку персональных данных.')
      return
    }
    setError('')
    setStatus('sending')
    // Отправка не подключена: адрес обработчика формы не подтверждён
    setTimeout(() => {
      setStatus('done')
      setForm(initial)
      setAgreed(false)
    }, 600)
  }

  return (
    <div className="contact-grid__form" id="form">
      <form className="form" onSubmit={onSubmit} noValidate={false}>
        <div>
          <h2 className="h3">Написать в компанию</h2>
          <p className="text-muted" style={{ marginTop: 8 }}>Ответим на почту или по телефону, который вы укажете.</p>
        </div>
        <div className="field">
          <label htmlFor="cf-name">Имя</label>
          <input id="cf-name" name="name" required value={form.name} onChange={onChange} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-org">Организация (необязательно)</label>
          <input id="cf-org" name="organization" value={form.organization} onChange={onChange} autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="cf-contact">Телефон или e-mail</label>
          <input id="cf-contact" name="contact" required value={form.contact} onChange={onChange} />
        </div>
        <div className="field">
          <label htmlFor="cf-message">Сообщение</label>
          <textarea id="cf-message" name="message" required value={form.message} onChange={onChange} />
        </div>
        <label className="check" htmlFor="cf-agree">
          <input id="cf-agree" type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
          <span>
            Согласен на обработку персональных данных в соответствии с политикой конфиденциальности.{' '}
            <Todo>ссылка на политику обработки персональных данных</Todo>
          </span>
        </label>
        {error && <p className="form__error" role="alert">{error}</p>}
        {status === 'done' ? (
          <div className="form__done" role="status">
            <strong>Сообщение принято.</strong> Спасибо, что написали.
            <Todo block>форма не подключена к почте — нужен адрес, куда отправлять сообщения</Todo>
          </div>
        ) : (
          <div>
            <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
              {status === 'sending' ? 'Отправляем…' : 'Отправить'} <Arrow />
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm
