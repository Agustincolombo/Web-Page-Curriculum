import { Link } from 'react-router-dom'
import s from './NotFound.module.sass'

export function NotFound() {
  return (
    <div className={s['not-found-container']}>
      <div className={s.content}>
        <h1 className={s['error-code']}>404</h1>
        <h2 className={s.title}>Page not found</h2>
        <p className={s.description}>
          Sorry, the section you're looking for doesn't exist or is currently under development.
        </p>
        <Link to="/" className={s['home-button']}>Back to Home</Link>
      </div>
    </div>
  )
}
