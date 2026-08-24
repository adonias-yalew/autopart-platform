import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { MOCK_PURCHASE_ORDERS } from '../mock/purchases.mock'
import type { PurchaseOrder } from '../mock/purchases.mock'

const STATUS_STYLES: Record<PurchaseOrder['status'], { bg: string; color: string }> = {
  draft:     { bg: 'var(--color-neutral-100)', color: 'var(--color-neutral-600)' },
  sent:      { bg: 'var(--color-primary-50)',  color: 'var(--color-primary-700)' },
  partial:   { bg: 'var(--color-warning-50)',  color: 'var(--color-warning-700)' },
  received:  { bg: 'var(--color-success-50)',  color: 'var(--color-success-700)' },
  cancelled: { bg: 'var(--color-error-50)',    color: 'var(--color-error-700)'   },
}

const thStyle: React.CSSProperties = { padding: '9px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border-default)', background: 'var(--color-neutral-50)', whiteSpace: 'nowrap' }
const tdStyle: React.CSSProperties = { padding: '11px 16px', fontSize: 13 }

export function PurchaseOrdersPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>Purchase Orders</h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{MOCK_PURCHASE_ORDERS.length} orders</p>
        </div>
        <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 38, padding: '0 16px', background: 'var(--color-primary-600)', color: '#fff', borderRadius: 'var(--radius-md)', fontSize: 13, fontWeight: 600 }}>
          <Plus size={15} /> New PO
        </button>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['PO Number', 'Supplier', 'Items', 'Amount (SAR)', 'Expected', 'Status', 'Created'].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_PURCHASE_ORDERS.map((po, idx) => {
              const { bg, color } = STATUS_STYLES[po.status]
              return (
                <tr key={po.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                  <td style={tdStyle}>
                    <Link to={`/purchases/orders/${po.id}`} style={{ color: 'var(--color-brand)', fontWeight: 500 }}>{po.id}</Link>
                  </td>
                  <td style={tdStyle}>{po.supplier}</td>
                  <td style={{ ...tdStyle, color: 'var(--text-secondary)' }}>{po.items}</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>{po.amount.toLocaleString()}</td>
                  <td style={{ ...tdStyle, color: 'var(--text-secondary)', fontSize: 12 }}>{po.expectedDate}</td>
                  <td style={tdStyle}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 99, background: bg, color, fontSize: 11, fontWeight: 600, textTransform: 'capitalize' }}>{po.status}</span>
                  </td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)', fontSize: 12 }}>{po.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
