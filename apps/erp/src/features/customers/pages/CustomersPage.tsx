import { Link } from 'react-router-dom'
import { MOCK_CUSTOMERS } from '../mock/customers.mock'

const thStyle: React.CSSProperties = { padding: '9px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border-default)', background: 'var(--color-neutral-50)' }
const tdStyle: React.CSSProperties = { padding: '11px 16px', fontSize: 13 }

export function CustomersPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>Customers</h2>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{MOCK_CUSTOMERS.length} customers</p>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Name', 'Type', 'City', 'Phone', 'Orders', 'Total Spent (SAR)', 'Since'].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_CUSTOMERS.map((c, idx) => (
              <tr key={c.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                <td style={tdStyle}>
                  <Link to={`/customers/${c.id}`} style={{ color: 'var(--color-brand)', fontWeight: 500 }}>{c.name}</Link>
                </td>
                <td style={tdStyle}>
                  <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 99, background: c.type === 'business' ? 'var(--color-primary-50)' : 'var(--color-neutral-100)', color: c.type === 'business' ? 'var(--color-primary-700)' : 'var(--color-neutral-600)', fontSize: 11, fontWeight: 600, textTransform: 'capitalize' }}>
                    {c.type}
                  </span>
                </td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{c.city}</td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)', fontSize: 12 }}>{c.phone}</td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{c.totalOrders}</td>
                <td style={{ ...tdStyle, fontWeight: 500 }}>{c.totalSpent.toLocaleString()}</td>
                <td style={{ ...tdStyle, color: 'var(--text-muted)', fontSize: 12 }}>{c.since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
