import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { MOCK_SALES_ORDERS } from '../mock/sales.mock'

export function SalesOrderDetailPage() {
  const { id } = useParams<{ id: string }>()
  const order = MOCK_SALES_ORDERS.find((o) => o.id === id)

  if (!order) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
        <p>Order not found.</p>
        <Link to="/sales/orders" style={{ color: 'var(--color-brand)', fontSize: 13, marginTop: 8, display: 'inline-block' }}>← Back to Orders</Link>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 800 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link to="/sales/orders" style={{ color: 'var(--text-secondary)', display: 'flex' }}>
          <ArrowLeft size={16} />
        </Link>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>{order.id}</h2>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px 32px' }}>
        {[
          { label: 'Customer', value: order.customer },
          { label: 'Status', value: order.status },
          { label: 'Amount', value: `SAR ${order.amount.toLocaleString()}` },
          { label: 'Items', value: order.items.toString() },
          { label: 'Branch', value: order.branch },
          { label: 'Date', value: order.date },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</p>
            <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'capitalize' }}>{value}</p>
          </div>
        ))}
      </div>

      {['Order Lines', 'Shipping Details', 'Payment', 'Activity Log'].map((section) => (
        <div key={section} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border-default)', fontSize: 14, fontWeight: 600 }}>{section}</div>
          <div style={{ padding: 32, textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>Requires backend integration</div>
        </div>
      ))}
    </div>
  )
}
