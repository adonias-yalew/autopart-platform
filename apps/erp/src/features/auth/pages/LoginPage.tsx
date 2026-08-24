import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/app/providers/AuthContext'
import type { LoginFormData } from '../types/auth.types'
import styles from './LoginPage.module.css'

const INITIAL: LoginFormData = { email: '', password: '' }

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState<LoginFormData>(INITIAL)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // NOTE: Replace with real API call when backend is ready.
    // POST /auth/login with { email, password }
    login()
    navigate('/dashboard', { replace: true })
  }

  function handleDevLogin() {
    login()
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className={styles.panel}>
      <div className={styles.brand}>
        <div className={styles.brandMark}>A</div>
        <span className={styles.brandName}>AutoPart ERP</span>
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>Sign in</h1>
        <p className={styles.subtitle}>Access your business dashboard</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="login-email">
            Email address
          </label>
          <input
            id="login-email"
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@business.com"
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            autoComplete="current-password"
            required
          />
        </div>

        <button className={styles.submitBtn} type="submit">
          Sign in
        </button>

        {/* Development bypass — remove when real auth is integrated */}
        <button
          className={styles.devBypass}
          type="button"
          onClick={handleDevLogin}
        >
          [Dev] Skip login → Dashboard
        </button>

        <p className={styles.footer}>
          Don&apos;t have an account?{' '}
          <Link to="/register" className={styles.link}>
            Register your business
          </Link>
        </p>
      </form>
    </div>
  )
}
