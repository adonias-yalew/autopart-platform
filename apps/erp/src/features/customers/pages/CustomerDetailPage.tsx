import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { MOCK_CUSTOMERS } from '../mock/customers.mock'

export function CustomerDetailPage() {
  const { id } = useParams<{ id: string }>()
  const customer = MOCK_CUSTOMERS.find((c) => c.id === id)

  if (!customer) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
        <p>Customer not found.</p>
        <Link to="/customers" style={{ color: 'var(--color-brand)', fontSize: 13, marginTop: 8, display: 'inline-block' }}>← Back to Customers</Link>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 800 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link to="/customers" style={{ color: 'var(--text-secondary)', display: 'flex' }}><ArrowLeft size={16} /></Link>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>{customer.name}</h2>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px 32px' }}>
        {[
          { label: 'Type', value: customer.type },
          { label: 'Email', value: customer.email },
          { label: 'Phone', value: customer.phone },
          { label: 'City', value: customer.city },
          { label: 'Total Orders', value: customer.totalOrders.toString() },
          { label: 'Total Spent', value: `SAR ${customer.totalSpent.toLocaleString()}` },
          { label: 'Customer Since', value: customer.since },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</p>
            <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'capitalize' }}>{value}</p>
          </div>
        ))}
      </div>

      {['Order History', 'Outstanding Balance', 'Notes'].map((section) => (
        <div key={section} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border-default)', fontSize: 14, fontWeight: 600 }}>{section}</div>
          <div style={{ padding: 32, textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>Requires backend integration</div>
        </div>
      ))}
    </div>
  )
}
