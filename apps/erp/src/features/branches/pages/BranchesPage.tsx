import { Link } from 'react-router-dom'
import { MOCK_BRANCHES } from '../mock/branches.mock'

const thStyle: React.CSSProperties = { padding: '9px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border-default)', background: 'var(--color-neutral-50)' }
const tdStyle: React.CSSProperties = { padding: '11px 16px', fontSize: 13 }

export function BranchesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>Branches</h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{MOCK_BRANCHES.length} locations</p>
        </div>
        <button style={{ height: 38, padding: '0 16px', background: 'var(--color-primary-600)', color: '#fff', borderRadius: 'var(--radius-md)', fontSize: 13, fontWeight: 600 }}>
          + Add Branch
        </button>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Branch', 'City', 'Manager', 'Products', 'Staff', 'Type'].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_BRANCHES.map((branch, idx) => (
              <tr key={branch.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                <td style={tdStyle}>
                  <Link to={`/branches/${branch.id}`} style={{ color: 'var(--color-brand)', fontWeight: 500 }}>{branch.name}</Link>
                </td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{branch.city}</td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{branch.manager}</td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{branch.productCount.toLocaleString()}</td>
                <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{branch.staffCount}</td>
                <td style={tdStyle}>
                  {branch.isMain && (
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 99, background: 'var(--color-primary-50)', color: 'var(--color-primary-700)', fontSize: 11, fontWeight: 600 }}>
                      Main
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
