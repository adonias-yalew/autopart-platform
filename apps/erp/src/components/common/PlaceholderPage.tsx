import type { ReactNode } from 'react'
import styles from './PlaceholderPage.module.css'

interface PlaceholderPageProps {
  title: string
  description?: string
  action?: ReactNode
}

/**
 * Reusable shell for modules that are routed but not yet fully implemented.
 * Replace this component's usage with the real page when ready.
 */
export function PlaceholderPage({ title, description, action }: PlaceholderPageProps) {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>

      <div className={styles.body}>
        <span className={styles.comingSoonLabel}>Coming Soon</span>
        <p className={styles.comingSoonText}>
          This module is under development and will be available when the backend service is
          integrated.
        </p>
      </div>
    </div>
  )
}
