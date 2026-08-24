import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { MOCK_SALES_ORDERS } from '../mock/sales.mock'
import type { OrderStatus } from '../mock/sales.mock'

const STATUS_STYLES: Record<OrderStatus, { bg: string; color: string }> = {
  pending:    { bg: 'var(--color-warning-50)',  color: 'var(--color-warning-700)' },
  processing: { bg: 'var(--color-primary-50)',  color: 'var(--color-primary-700)' },
  shipped:    { bg: 'var(--color-primary-100)', color: 'var(--color-primary-700)' },
  completed:  { bg: 'var(--color-success-50)',  color: 'var(--color-success-700)' },
  cancelled:  { bg: 'var(--color-error-50)',    color: 'var(--color-error-700)'   },
}

const thStyle: React.CSSProperties = {
  padding: '9px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600,
  color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em',
  borderBottom: '1px solid var(--border-default)', background: 'var(--color-neutral-50)',
  whiteSpace: 'nowrap',
}
const tdStyle: React.CSSProperties = { padding: '11px 16px', fontSize: 13 }

export function SalesOrdersPage() {
  const total = MOCK_SALES_ORDERS.reduce((s, o) => s + o.amount, 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>Sales Orders</h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
            {MOCK_SALES_ORDERS.length} orders · SAR {total.toLocaleString()} total
          </p>
        </div>
        <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 38, padding: '0 16px', background: 'var(--color-primary-600)', color: '#fff', borderRadius: 'var(--radius-md)', fontSize: 13, fontWeight: 600 }}>
          <Plus size={15} /> New Order
        </button>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Order ID', 'Customer', 'Items', 'Amount (SAR)', 'Branch', 'Status', 'Date'].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_SALES_ORDERS.map((order, idx) => {
              const { bg, color } = STATUS_STYLES[order.status]
              return (
                <tr key={order.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                  <td style={tdStyle}>
                    <Link to={`/sales/orders/${order.id}`} style={{ color: 'var(--color-brand)', fontWeight: 500 }}>{order.id}</Link>
                  </td>
                  <td style={tdStyle}>{order.customer}</td>
                  <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{order.items}</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>{order.amount.toLocaleString()}</td>
                  <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{order.branch}</td>
                  <td style={tdStyle}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 99, background: bg, color, fontSize: 11, fontWeight: 600, textTransform: 'capitalize' }}>{order.status}</span>
                  </td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)', fontSize: 12 }}>{order.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
