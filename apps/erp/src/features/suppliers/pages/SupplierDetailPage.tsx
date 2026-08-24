import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { MOCK_SUPPLIERS } from '../mock/suppliers.mock'

export function SupplierDetailPage() {
  const { id } = useParams<{ id: string }>()
  const supplier = MOCK_SUPPLIERS.find((s) => s.id === id)

  if (!supplier) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
        <p>Supplier not found.</p>
        <Link to="/suppliers" style={{ color: 'var(--color-brand)', fontSize: 13, marginTop: 8, display: 'inline-block' }}>← Back to Suppliers</Link>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 800 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link to="/suppliers" style={{ color: 'var(--text-secondary)', display: 'flex' }}><ArrowLeft size={16} /></Link>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>{supplier.name}</h2>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px 32px' }}>
        {[
          { label: 'Email', value: supplier.email },
          { label: 'Phone', value: supplier.phone },
          { label: 'Country', value: supplier.country },
          { label: 'City', value: supplier.city },
          { label: 'Total Orders', value: supplier.totalOrders.toString() },
          { label: 'Since', value: supplier.since },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</p>
            <p style={{ fontSize: 14, fontWeight: 500 }}>{value}</p>
          </div>
        ))}
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Categories</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {supplier.categories.map((cat) => (
              <span key={cat} style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 99, background: 'var(--color-primary-50)', color: 'var(--color-primary-700)', fontSize: 12, fontWeight: 500 }}>{cat}</span>
            ))}
          </div>
        </div>
      </div>

      {['Purchase Order History', 'Products Supplied', 'Documents'].map((section) => (
        <div key={section} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border-default)', fontSize: 14, fontWeight: 600 }}>{section}</div>
          <div style={{ padding: 32, textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>Requires backend integration</div>
        </div>
      ))}
    </div>
  )
}
