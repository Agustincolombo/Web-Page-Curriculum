import { Link } from 'react-router-dom'
import s from './NotFound.module.sass'

export function NotFound() {
  return (
    <div className={s['not-found-container']}>
      <div className={s.content}>
        <h1 className={s['error-code']}>404</h1>
        <h2 className={s.title}>Página no encontrada</h2>
        <p className={s.description}>
          Lo sentimos, la sección que buscas no existe o se encuentra actualmente en desarrollo.
        </p>
        <Link to="/" className={s['home-button']}>Volver al Inicio</Link>
      </div>
    </div>
  )
}
