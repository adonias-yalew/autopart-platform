import { MOCK_INVENTORY } from '../mock/inventory.mock'
import type { InventoryItem } from '../mock/inventory.mock'

function StockLevel({ item }: { item: InventoryItem }) {
  const isOut = item.quantity === 0
  const isLow = item.quantity > 0 && item.quantity < item.minimumQuantity

  let color = 'var(--color-success-600)'
  if (isOut) color = 'var(--color-error-600)'
  else if (isLow) color = 'var(--color-warning-600)'

  return (
    <span style={{ color, fontWeight: isLow || isOut ? 600 : 400, fontSize: 13 }}>
      {item.quantity} {isOut ? '(Out)' : isLow ? '(Low)' : ''}
    </span>
  )
}

export function InventoryPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>Inventory Overview</h2>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
          {MOCK_INVENTORY.length} tracked items across all branches
        </p>
      </div>

      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['SKU', 'Product', 'Branch', 'Quantity', 'Min. Qty', 'Updated'].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: '9px 16px',
                    textAlign: 'left',
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    borderBottom: '1px solid var(--border-default)',
                    background: 'var(--color-neutral-50)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_INVENTORY.map((item, idx) => (
              <tr key={item.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                <td style={{ padding: '11px 16px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{item.sku}</td>
                <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 500 }}>{item.productName}</td>
                <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{item.branchName}</td>
                <td style={{ padding: '11px 16px' }}><StockLevel item={item} /></td>
                <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{item.minimumQuantity}</td>
                <td style={{ padding: '11px 16px', fontSize: 12, color: 'var(--text-muted)' }}>{item.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
