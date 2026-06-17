import s from './Contacto.module.sass'

const EMAIL = 'aguscolombo2009@hotmail.com'

export function Contacto() {
  return (
    <section id="contacto" className={s['contacto-section']}>
      <div className={s.container}>
        <p className={s.eyebrow}>¿Qué sigue?</p>
        <h2 className={s.title}>Hablemos</h2>
        <div className={s.divider} />
        <p className={s.description}>
          Estoy abierto a nuevas oportunidades y colaboraciones. Si tenés un
          proyecto en mente, una propuesta o simplemente querés ponerte en
          contacto — escribime, te respondo a la brevedad.
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
        Diseñado y desarrollado por Agustín Colombo
      </footer>
    </section>
  )
}
