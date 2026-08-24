import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { MOCK_BRANCHES } from '../mock/branches.mock'

export function BranchDetailPage() {
  const { id } = useParams<{ id: string }>()
  const branch = MOCK_BRANCHES.find((b) => b.id === id)

  if (!branch) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
        <p>Branch not found.</p>
        <Link to="/branches" style={{ color: 'var(--color-brand)', fontSize: 13, marginTop: 8, display: 'inline-block' }}>← Back to Branches</Link>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 800 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/branches" style={{ color: 'var(--text-secondary)', display: 'flex' }}><ArrowLeft size={16} /></Link>
          <h2 style={{ fontSize: 18, fontWeight: 600 }}>{branch.name}</h2>
        </div>
        <Link
          to={`/branches/${id}/inventory`}
          style={{ height: 36, padding: '0 14px', display: 'inline-flex', alignItems: 'center', background: 'var(--color-neutral-100)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)', fontSize: 13, fontWeight: 500 }}
        >
          View Inventory
        </Link>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px 32px' }}>
        {[
          { label: 'City', value: branch.city },
          { label: 'Address', value: branch.address },
          { label: 'Phone', value: branch.phone },
          { label: 'Manager', value: branch.manager },
          { label: 'Products', value: branch.productCount.toLocaleString() },
          { label: 'Staff', value: branch.staffCount.toString() },
          { label: 'Type', value: branch.isMain ? 'Main Warehouse' : 'Branch' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</p>
            <p style={{ fontSize: 14, fontWeight: 500 }}>{value}</p>
          </div>
        ))}
      </div>

      {['Sales Performance', 'Staff', 'Recent Transfers'].map((section) => (
        <div key={section} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border-default)', fontSize: 14, fontWeight: 600 }}>{section}</div>
          <div style={{ padding: 32, textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>Requires backend integration</div>
        </div>
      ))}
    </div>
  )
}
