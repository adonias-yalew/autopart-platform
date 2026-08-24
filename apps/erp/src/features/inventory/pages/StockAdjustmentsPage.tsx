import { MOCK_ADJUSTMENTS } from '../mock/inventory.mock'

export function StockAdjustmentsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>Stock Adjustments</h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>Manual inventory corrections and write-offs</p>
        </div>
        <button style={{ height: 38, padding: '0 16px', background: 'var(--color-primary-600)', color: '#fff', borderRadius: 'var(--radius-md)', fontSize: 13, fontWeight: 600 }}>
          + New Adjustment
        </button>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['SKU', 'Product', 'Branch', 'Previous Qty', 'New Qty', 'Change', 'Reason', 'Date'].map((h) => (
                <th key={h} style={{ padding: '9px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border-default)', background: 'var(--color-neutral-50)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_ADJUSTMENTS.map((adj, idx) => {
              const change = adj.newQuantity - adj.previousQuantity
              return (
                <tr key={adj.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                  <td style={{ padding: '11px 16px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{adj.sku}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 500 }}>{adj.productName}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{adj.branchName}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13 }}>{adj.previousQuantity}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 500 }}>{adj.newQuantity}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 600, color: change < 0 ? 'var(--color-error-600)' : 'var(--color-success-700)' }}>
                    {change > 0 ? `+${change}` : change}
                  </td>
                  <td style={{ padding: '11px 16px', fontSize: 12, color: 'var(--text-secondary)' }}>{adj.reason}</td>
                  <td style={{ padding: '11px 16px', fontSize: 12, color: 'var(--text-muted)' }}>{adj.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
