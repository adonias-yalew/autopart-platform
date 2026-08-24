const inputStyle: React.CSSProperties = {
  height: 38, padding: '0 12px', border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)', fontSize: 13, color: 'var(--text-primary)',
  background: 'var(--bg-surface)', outline: 'none', width: '100%',
}
const labelStyle: React.CSSProperties = {
  fontSize: 12, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 5, display: 'block',
}
const sectionStyle: React.CSSProperties = {
  background: 'var(--bg-surface)', border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 16,
}
const sectionHeadStyle: React.CSSProperties = {
  padding: '14px 20px', borderBottom: '1px solid var(--border-default)',
  fontSize: 14, fontWeight: 600,
}
const sectionBodyStyle: React.CSSProperties = {
  padding: '20px', display: 'flex', flexDirection: 'column', gap: 14,
}

// NOTE: Form data will be pre-populated from backend when business profile API is ready.
export function BusinessSettingsPage() {
  return (
    <div>
      <h2 style={{ fontSize: 17, fontWeight: 600, marginBottom: 16 }}>Business Settings</h2>

      <div style={sectionStyle}>
        <div style={sectionHeadStyle}>Business Profile</div>
        <div style={sectionBodyStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle} htmlFor="bs-name">Business name</label>
              <input id="bs-name" style={inputStyle} type="text" placeholder="Al-Noor Auto Parts" disabled />
            </div>
            <div>
              <label style={labelStyle} htmlFor="bs-type">Business type</label>
              <input id="bs-type" style={inputStyle} type="text" placeholder="Retailer" disabled />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle} htmlFor="bs-reg">Registration number</label>
              <input id="bs-reg" style={inputStyle} type="text" placeholder="—" disabled />
            </div>
            <div>
              <label style={labelStyle} htmlFor="bs-tax">Tax ID</label>
              <input id="bs-tax" style={inputStyle} type="text" placeholder="—" disabled />
            </div>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Business profile fields will be editable once backend integration is complete.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionHeadStyle}>Contact Information</div>
        <div style={sectionBodyStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle} htmlFor="bs-email">Business email</label>
              <input id="bs-email" style={inputStyle} type="email" placeholder="info@business.com" disabled />
            </div>
            <div>
              <label style={labelStyle} htmlFor="bs-phone">Phone</label>
              <input id="bs-phone" style={inputStyle} type="tel" placeholder="+966 5x xxx xxxx" disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
