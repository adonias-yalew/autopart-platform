import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useRegistration } from '../hooks/useRegistration'
import { StepIndicator } from '../components/StepIndicator'
import type { RegistrationStep } from '../types/auth.types'
import styles from './RegisterPage.module.css'

// ── Step 1: Business Information ─────────────────────────────────────────────

function Step1({
  data,
  onChange,
}: {
  data: ReturnType<typeof useRegistration>['data']['businessInfo']
  onChange: ReturnType<typeof useRegistration>['updateBusinessInfo']
}) {
  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-businessName">
            Business name *
          </label>
          <input
            id="reg-businessName"
            className={styles.input}
            type="text"
            value={data.businessName}
            onChange={(e) => onChange({ businessName: e.target.value })}
            placeholder="Al-Noor Auto Parts"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-businessType">
            Business type *
          </label>
          <select
            id="reg-businessType"
            className={styles.select}
            value={data.businessType}
            onChange={(e) =>
              onChange({
                businessType: e.target.value as typeof data.businessType,
              })
            }
            required
          >
            <option value="">Select type…</option>
            <option value="retailer">Retailer</option>
            <option value="wholesaler">Wholesaler</option>
            <option value="distributor">Distributor</option>
            <option value="manufacturer">Manufacturer</option>
            <option value="importer">Importer</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-phone">
            Phone number *
          </label>
          <input
            id="reg-phone"
            className={styles.input}
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            placeholder="+966 5x xxx xxxx"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-email">
            Business email *
          </label>
          <input
            id="reg-email"
            className={styles.input}
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="info@business.com"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-country">
            Country *
          </label>
          <input
            id="reg-country"
            className={styles.input}
            type="text"
            value={data.country}
            onChange={(e) => onChange({ country: e.target.value })}
            placeholder="Saudi Arabia"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-city">
            City *
          </label>
          <input
            id="reg-city"
            className={styles.input}
            type="text"
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            placeholder="Riyadh"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="reg-address">
          Address
        </label>
        <input
          id="reg-address"
          className={styles.input}
          type="text"
          value={data.address}
          onChange={(e) => onChange({ address: e.target.value })}
          placeholder="Street, building, district"
        />
      </div>
    </div>
  )
}

// ── Step 2: Business Details ──────────────────────────────────────────────────

function Step2({
  data,
  onChange,
}: {
  data: ReturnType<typeof useRegistration>['data']['businessDetails']
  onChange: ReturnType<typeof useRegistration>['updateBusinessDetails']
}) {
  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-regNum">
            Registration number *
          </label>
          <input
            id="reg-regNum"
            className={styles.input}
            type="text"
            value={data.registrationNumber}
            onChange={(e) => onChange({ registrationNumber: e.target.value })}
            placeholder="1234567890"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-taxId">
            Tax identification number *
          </label>
          <input
            id="reg-taxId"
            className={styles.input}
            type="text"
            value={data.taxIdentificationNumber}
            onChange={(e) =>
              onChange({ taxIdentificationNumber: e.target.value })
            }
            placeholder="300xxxxxxxxxx"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="reg-branches">
          Number of branches
        </label>
        <input
          id="reg-branches"
          className={styles.input}
          type="number"
          min={1}
          value={data.numberOfBranches}
          onChange={(e) =>
            onChange({
              numberOfBranches: e.target.value ? parseInt(e.target.value) : '',
            })
          }
          placeholder="1"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="reg-description">
          Business description
        </label>
        <textarea
          id="reg-description"
          className={styles.textarea}
          value={data.businessDescription}
          onChange={(e) => onChange({ businessDescription: e.target.value })}
          placeholder="Briefly describe your business, specialties, and the types of auto parts you deal in…"
        />
      </div>
    </div>
  )
}

// ── Step 3: Owner Account ─────────────────────────────────────────────────────

function Step3({
  data,
  onChange,
}: {
  data: ReturnType<typeof useRegistration>['data']['ownerAccount']
  onChange: ReturnType<typeof useRegistration>['updateOwnerAccount']
}) {
  return (
    <div className={styles.body}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="reg-ownerName">
          Owner full name *
        </label>
        <input
          id="reg-ownerName"
          className={styles.input}
          type="text"
          value={data.ownerName}
          onChange={(e) => onChange({ ownerName: e.target.value })}
          placeholder="Mohammed Al-Rashidi"
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-ownerEmail">
            Email address *
          </label>
          <input
            id="reg-ownerEmail"
            className={styles.input}
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="owner@business.com"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-ownerPhone">
            Phone number *
          </label>
          <input
            id="reg-ownerPhone"
            className={styles.input}
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            placeholder="+966 5x xxx xxxx"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-password">
            Password *
          </label>
          <input
            id="reg-password"
            className={styles.input}
            type="password"
            value={data.password}
            onChange={(e) => onChange({ password: e.target.value })}
            placeholder="Min. 8 characters"
            autoComplete="new-password"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="reg-confirmPassword">
            Confirm password *
          </label>
          <input
            id="reg-confirmPassword"
            className={styles.input}
            type="password"
            value={data.confirmPassword}
            onChange={(e) => onChange({ confirmPassword: e.target.value })}
            placeholder="Repeat password"
            autoComplete="new-password"
          />
        </div>
      </div>
    </div>
  )
}

// ── Step 4: Verification Documents ───────────────────────────────────────────

function Step4({
  data,
  onChange,
}: {
  data: ReturnType<typeof useRegistration>['data']['verification']
  onChange: ReturnType<typeof useRegistration>['updateVerification']
}) {
  return (
    <div className={styles.body}>
      <p className={styles.docNotice}>
        Document upload will be available once the verification system is integrated. For now,
        please acknowledge the documents you will be required to provide.
      </p>

      <div className={styles.field}>
        <div className={styles.checkRow}>
          <input
            id="reg-license"
            type="checkbox"
            checked={data.businessLicenseAcknowledged}
            onChange={(e) =>
              onChange({ businessLicenseAcknowledged: e.target.checked })
            }
          />
          <div>
            <label className={styles.checkLabel} htmlFor="reg-license">
              Business License / Commercial Registration
            </label>
            <p className={styles.checkHint}>
              Official government-issued business registration document
            </p>
          </div>
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles.checkRow}>
          <input
            id="reg-taxDoc"
            type="checkbox"
            checked={data.taxDocumentAcknowledged}
            onChange={(e) =>
              onChange({ taxDocumentAcknowledged: e.target.checked })
            }
          />
          <div>
            <label className={styles.checkLabel} htmlFor="reg-taxDoc">
              Tax Certificate / VAT Registration
            </label>
            <p className={styles.checkHint}>
              Tax authority certificate confirming your registration number
            </p>
          </div>
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles.checkRow}>
          <input
            id="reg-idDoc"
            type="checkbox"
            checked={data.identityDocumentAcknowledged}
            onChange={(e) =>
              onChange({ identityDocumentAcknowledged: e.target.checked })
            }
          />
          <div>
            <label className={styles.checkLabel} htmlFor="reg-idDoc">
              Owner Identity Document
            </label>
            <p className={styles.checkHint}>
              National ID or passport of the registered owner
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Step 5: Review & Submit ───────────────────────────────────────────────────

function Step5({ data }: { data: ReturnType<typeof useRegistration>['data'] }) {
  const { businessInfo: bi, businessDetails: bd, ownerAccount: oa } = data

  return (
    <div className={styles.body}>
      <div className={styles.reviewSection}>
        <div className={styles.reviewTitle}>Business Information</div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Business name</span>
          <span className={styles.reviewValue}>{bi.businessName || '—'}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Type</span>
          <span className={styles.reviewValue}>{bi.businessType || '—'}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Email</span>
          <span className={styles.reviewValue}>{bi.email || '—'}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Phone</span>
          <span className={styles.reviewValue}>{bi.phone || '—'}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Location</span>
          <span className={styles.reviewValue}>
            {[bi.city, bi.country].filter(Boolean).join(', ') || '—'}
          </span>
        </div>
      </div>

      <div className={styles.reviewSection}>
        <div className={styles.reviewTitle}>Business Details</div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Registration no.</span>
          <span className={styles.reviewValue}>{bd.registrationNumber || '—'}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Tax ID</span>
          <span className={styles.reviewValue}>{bd.taxIdentificationNumber || '—'}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Branches</span>
          <span className={styles.reviewValue}>{bd.numberOfBranches || '1'}</span>
        </div>
      </div>

      <div className={styles.reviewSection}>
        <div className={styles.reviewTitle}>Owner Account</div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Name</span>
          <span className={styles.reviewValue}>{oa.ownerName || '—'}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Email</span>
          <span className={styles.reviewValue}>{oa.email || '—'}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewKey}>Phone</span>
          <span className={styles.reviewValue}>{oa.phone || '—'}</span>
        </div>
      </div>
    </div>
  )
}

// ── RegisterPage ──────────────────────────────────────────────────────────────

const STEP_LABELS: Record<number, string> = {
  1: 'Business Information',
  2: 'Business Details',
  3: 'Owner Account',
  4: 'Verification',
  5: 'Review & Submit',
}

export function RegisterPage() {
  const navigate = useNavigate()
  const reg = useRegistration()

  // When submission completes, navigate to verification-pending
  useEffect(() => {
    if (reg.isSubmitted) {
      navigate('/verification-pending', { replace: true })
    }
  }, [reg.isSubmitted, navigate])

  return (
    <div className={styles.panel}>
      <div className={styles.brand}>
        <div className={styles.brandMark}>A</div>
        <span className={styles.brandName}>AutoPart ERP</span>
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>Register your business</h1>
        <p className={styles.subtitle}>
          Step {reg.step} of 5 — {STEP_LABELS[reg.step]}
        </p>
      </div>

      <StepIndicator
        currentStep={reg.step}
        onGoToStep={(s) => reg.goToStep(s as RegistrationStep)}
      />

      {reg.step === 1 && (
        <Step1 data={reg.data.businessInfo} onChange={reg.updateBusinessInfo} />
      )}
      {reg.step === 2 && (
        <Step2 data={reg.data.businessDetails} onChange={reg.updateBusinessDetails} />
      )}
      {reg.step === 3 && (
        <Step3 data={reg.data.ownerAccount} onChange={reg.updateOwnerAccount} />
      )}
      {reg.step === 4 && (
        <Step4 data={reg.data.verification} onChange={reg.updateVerification} />
      )}
      {reg.step === 5 && <Step5 data={reg.data} />}

      <div className={styles.actions} style={{ padding: '0 32px 28px' }}>
        {reg.step > 1 && (
          <button className={styles.btnSecondary} onClick={reg.prevStep}>
            Back
          </button>
        )}

        {reg.isLastStep ? (
          <button className={styles.btnPrimary} onClick={reg.submit}>
            Submit for verification
          </button>
        ) : (
          <button className={styles.btnPrimary} onClick={reg.nextStep}>
            Continue
          </button>
        )}
      </div>

      {reg.step === 1 && (
        <p className={styles.footerLink} style={{ paddingBottom: 24 }}>
          Already registered?{' '}
          <Link to="/login" className={styles.link}>
            Sign in
          </Link>
        </p>
      )}
    </div>
  )
}
