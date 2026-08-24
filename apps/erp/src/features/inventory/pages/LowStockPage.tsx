import { MOCK_INVENTORY } from '../mock/inventory.mock'

export function LowStockPage() {
  const lowStock = MOCK_INVENTORY.filter((item) => item.quantity <= item.minimumQuantity)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>Low Stock</h2>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
          {lowStock.length} items at or below minimum quantity threshold
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
              {['SKU', 'Product', 'Branch', 'Current Qty', 'Min. Qty', 'Status'].map((h) => (
                <th key={h} style={{ padding: '9px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border-default)', background: 'var(--color-neutral-50)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lowStock.map((item, idx) => {
              const isOut = item.quantity === 0
              return (
                <tr key={item.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                  <td style={{ padding: '11px 16px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{item.sku}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 500 }}>{item.productName}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{item.branchName}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 600, color: isOut ? 'var(--color-error-600)' : 'var(--color-warning-600)' }}>{item.quantity}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{item.minimumQuantity}</td>
                  <td style={{ padding: '11px 16px' }}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 99, background: isOut ? 'var(--color-error-50)' : 'var(--color-warning-50)', color: isOut ? 'var(--color-error-700)' : 'var(--color-warning-700)', fontSize: 11, fontWeight: 600 }}>
                      {isOut ? 'Out of Stock' : 'Low Stock'}
                    </span>
                  </td>
                </tr>
              )
            })}
            {lowStock.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>
                  All items are above their minimum quantity threshold.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
