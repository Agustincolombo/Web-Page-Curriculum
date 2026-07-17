import s from './Contacto.module.sass'

const EMAIL = 'agustin.colombo.dev@gmail.com'

export function Contacto() {
  return (
    <section id="contacto" className={s['contacto-section']}>
      <div className={s.container}>
        <p className={s.eyebrow}>What's next?</p>
        <h2 className={s.title}>Let's talk</h2>
        <div className={s.divider} />
        <p className={s.description}>
          I'm open to new opportunities and collaborations. If you have a
          project in mind, a proposal, or just want to get in
          touch — reach out, I'll get back to you shortly.
        </p>
        <a href={`mailto:${EMAIL}`} className={s['email-button']}>
          {EMAIL} ↗
        </a>
        <div className={s['social-links']}>
          <a
            href="https://www.linkedin.com/in/agustin-colombo-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={s['social-link']}
          >
            LinkedIn
          </a>
          <span className={s.dot} aria-hidden="true">·</span>
          <a
            href="https://github.com/Agustincolombo"
            target="_blank"
            rel="noopener noreferrer"
            className={s['social-link']}
          >
            GitHub
          </a>
        </div>
      </div>
      <footer className={s.footer}>
        Designed and built by Agustín Colombo
      </footer>
    </section>
  )
}
