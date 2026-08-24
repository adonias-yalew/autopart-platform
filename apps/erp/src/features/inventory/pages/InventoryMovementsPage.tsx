import { MOCK_MOVEMENTS } from '../mock/inventory.mock'
import type { MovementType } from '../mock/inventory.mock'

const TYPE_COLORS: Record<MovementType, { bg: string; color: string; label: string }> = {
  in:         { bg: 'var(--color-success-50)',  color: 'var(--color-success-700)', label: 'Stock In' },
  out:        { bg: 'var(--color-error-50)',    color: 'var(--color-error-700)',   label: 'Stock Out' },
  adjustment: { bg: 'var(--color-warning-50)', color: 'var(--color-warning-700)', label: 'Adjustment' },
  transfer:   { bg: 'var(--color-primary-50)', color: 'var(--color-primary-700)', label: 'Transfer' },
}

export function InventoryMovementsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>Inventory Movements</h2>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>All stock ins, outs, transfers, and adjustments</p>
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
              {['SKU', 'Product', 'Type', 'Qty', 'Branch', 'Reason', 'Date'].map((h) => (
                <th key={h} style={{ padding: '9px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border-default)', background: 'var(--color-neutral-50)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_MOVEMENTS.map((mov, idx) => {
              const { bg, color, label } = TYPE_COLORS[mov.type]
              return (
                <tr key={mov.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                  <td style={{ padding: '11px 16px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{mov.sku}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13 }}>{mov.productName}</td>
                  <td style={{ padding: '11px 16px' }}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 99, background: bg, color, fontSize: 11, fontWeight: 600 }}>{label}</span>
                  </td>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 600, color: mov.quantity < 0 ? 'var(--color-error-600)' : 'var(--color-success-700)' }}>
                    {mov.quantity > 0 ? `+${mov.quantity}` : mov.quantity}
                  </td>
                  <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{mov.branchName}</td>
                  <td style={{ padding: '11px 16px', fontSize: 12, color: 'var(--text-secondary)' }}>{mov.reason}</td>
                  <td style={{ padding: '11px 16px', fontSize: 12, color: 'var(--text-muted)' }}>{mov.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
