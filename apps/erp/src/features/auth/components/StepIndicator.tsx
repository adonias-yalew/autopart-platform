import type { RegistrationStep } from '../types/auth.types'
import styles from './StepIndicator.module.css'

interface Step {
  number: RegistrationStep
  label: string
}

const STEPS: Step[] = [
  { number: 1, label: 'Business Info' },
  { number: 2, label: 'Details' },
  { number: 3, label: 'Owner Account' },
  { number: 4, label: 'Verification' },
  { number: 5, label: 'Review' },
]

interface StepIndicatorProps {
  currentStep: RegistrationStep
  onGoToStep?: (step: RegistrationStep) => void
}

export function StepIndicator({ currentStep, onGoToStep }: StepIndicatorProps) {
  return (
    <div className={styles.indicator}>
      {STEPS.map((step, index) => {
        const isCompleted = step.number < currentStep
        const isActive = step.number === currentStep

        return (
          <div key={step.number} className={styles.stepWrapper}>
            <button
              className={`${styles.step} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
              onClick={() => isCompleted && onGoToStep?.(step.number)}
              disabled={!isCompleted}
              aria-label={`Step ${step.number}: ${step.label}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className={styles.number}>
                {isCompleted ? '✓' : step.number}
              </span>
            </button>
            <span className={`${styles.label} ${isActive ? styles.labelActive : ''}`}>
              {step.label}
            </span>
            {index < STEPS.length - 1 && (
              <div
                className={`${styles.connector} ${isCompleted ? styles.connectorDone : ''}`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
