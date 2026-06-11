import { personalData } from '../../data/personal.data'
import s from './Presentacion.module.sass'

export function Presentacion() {
  return (
    <div id="presentacion" className={s['presentacion-container']}>
      <section id="inicio" className={s['hero-section']}>
        <div className={s['hero-content']}>
          <div className={s['profile-image-container']}>
            <img
              id="personalImg"
              src="personalImg.png"
              alt={personalData.name}
              className={s['profile-image']}
            />
          </div>
          <section id="personalName" className={s['name-section']}>
            <h2 className={s.name}>{personalData.name}</h2>
            <h1 className={s.profession}>{personalData.profession}</h1>
          </section>
          <section className={s['social-links']}>
            <div className={s['social-icons']}>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s['social-icon']}
              >
                <img
                  id="iconLinkedIn"
                  src="linkedin-logo.png"
                  alt="LinkedIn"
                  className={s.styleIcon}
                />
              </a>
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s['social-icon']}
              >
                <img
                  id="iconGitHub"
                  src="github-logo.png"
                  alt="GitHub"
                  className={s.styleIcon}
                />
              </a>
            </div>
          </section>
        </div>
      </section>

      <section id="sobre-mi" className={s['about-section']}>
        <div className={s['about-content']}>
          <h2 className={s['about-title']}>Sobre mí</h2>
          <p id="aboutMe" className={s['about-text']}>
            {personalData.aboutMe}
          </p>
        </div>
      </section>


    </div>
  )
}
