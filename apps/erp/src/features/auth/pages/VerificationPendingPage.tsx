import { Link } from 'react-router-dom'

export function VerificationPendingPage() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 480,
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-md)',
        padding: '40px 32px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--color-primary-50)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
        }}
      >
        ⏳
      </div>

      <h1
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}
      >
        Application submitted
      </h1>

      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 340 }}>
        Your business registration has been received. Our team will review your information and
        documents and contact you within <strong>2–5 business days</strong>.
      </p>

      <div
        style={{
          width: '100%',
          background: 'var(--color-neutral-50)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 16px',
          textAlign: 'left',
          marginTop: 8,
        }}
      >
        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
          What happens next?
        </p>
        {['We review your submitted business information', 'Documents are verified with relevant authorities', 'You receive approval and login credentials by email'].map(
          (step, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, fontSize: 12, color: 'var(--text-secondary)', padding: '3px 0' }}>
              <span style={{ color: 'var(--color-primary-600)', fontWeight: 600, flexShrink: 0 }}>
                {i + 1}.
              </span>
              {step}
            </div>
          )
        )}
      </div>

      <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>
        Have an account already?{' '}
        <Link to="/login" style={{ color: 'var(--color-brand)', fontWeight: 500 }}>
          Sign in
        </Link>
      </p>
    </div>
  )
}
