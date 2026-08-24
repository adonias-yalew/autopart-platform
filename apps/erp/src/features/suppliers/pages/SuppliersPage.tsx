import { Link } from 'react-router-dom'
import { MOCK_SUPPLIERS } from '../mock/suppliers.mock'

const thStyle: React.CSSProperties = { padding: '9px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border-default)', background: 'var(--color-neutral-50)' }
const tdStyle: React.CSSProperties = { padding: '11px 16px', fontSize: 13 }

export function SuppliersPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>Suppliers</h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{MOCK_SUPPLIERS.length} suppliers</p>
        </div>
        <button style={{ height: 38, padding: '0 16px', background: 'var(--color-primary-600)', color: '#fff', borderRadius: 'var(--radius-md)', fontSize: 13, fontWeight: 600 }}>
          + Add Supplier
        </button>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Name', 'Country / City', 'Categories', 'Orders', 'Phone', 'Since'].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_SUPPLIERS.map((s, idx) => (
              <tr key={s.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                <td style={tdStyle}>
                  <Link to={`/suppliers/${s.id}`} style={{ color: 'var(--color-brand)', fontWeight: 500 }}>{s.name}</Link>
                </td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{s.city}, {s.country}</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {s.categories.map((cat) => (
                      <span key={cat} style={{ display: 'inline-block', padding: '1px 6px', borderRadius: 99, background: 'var(--color-neutral-100)', color: 'var(--color-neutral-600)', fontSize: 11, fontWeight: 500 }}>{cat}</span>
                    ))}
                  </div>
                </td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{s.totalOrders}</td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)', fontSize: 12 }}>{s.phone}</td>
                <td style={{ ...tdStyle, color: 'var(--text-muted)', fontSize: 12 }}>{s.since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
