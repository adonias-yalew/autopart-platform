import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { MOCK_BRANCHES } from '../mock/branches.mock'
import { MOCK_INVENTORY } from '@/features/inventory/mock/inventory.mock'

export function BranchInventoryPage() {
  const { id } = useParams<{ id: string }>()
  const branch = MOCK_BRANCHES.find((b) => b.id === id)
  const items = MOCK_INVENTORY.filter((item) =>
    branch ? item.branchName === branch.name : false,
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link to={`/branches/${id}`} style={{ color: 'var(--text-secondary)', display: 'flex' }}><ArrowLeft size={16} /></Link>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>
          {branch ? branch.name : 'Branch'} — Inventory
        </h2>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['SKU', 'Product', 'Quantity', 'Min. Qty', 'Status'].map((h) => (
                <th key={h} style={{ padding: '9px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border-default)', background: 'var(--color-neutral-50)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? items.map((item, idx) => {
              const isOut = item.quantity === 0
              const isLow = item.quantity > 0 && item.quantity < item.minimumQuantity
              return (
                <tr key={item.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                  <td style={{ padding: '11px 16px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{item.sku}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 500 }}>{item.productName}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 600, color: isOut ? 'var(--color-error-600)' : isLow ? 'var(--color-warning-600)' : 'var(--text-primary)' }}>{item.quantity}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{item.minimumQuantity}</td>
                  <td style={{ padding: '11px 16px' }}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 99, background: isOut ? 'var(--color-error-50)' : isLow ? 'var(--color-warning-50)' : 'var(--color-success-50)', color: isOut ? 'var(--color-error-700)' : isLow ? 'var(--color-warning-700)' : 'var(--color-success-700)', fontSize: 11, fontWeight: 600 }}>
                      {isOut ? 'Out of Stock' : isLow ? 'Low Stock' : 'OK'}
                    </span>
                  </td>
                </tr>
              )
            }) : (
              <tr>
                <td colSpan={5} style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>
                  No inventory data found for this branch.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
