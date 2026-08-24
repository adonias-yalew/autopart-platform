import { MOCK_CATEGORIES } from '../mock/products.mock'

export function CategoriesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>Categories</h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
            {MOCK_CATEGORIES.length} categories
          </p>
        </div>
        <button
          style={{
            height: 38,
            padding: '0 16px',
            background: 'var(--color-primary-600)',
            color: '#fff',
            borderRadius: 'var(--radius-md)',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          + New Category
        </button>
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
              {['Category Name', 'Products'].map((h) => (
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
            {MOCK_CATEGORIES.map((cat, idx) => (
              <tr key={cat.id} style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}>
                <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 500 }}>{cat.name}</td>
                <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{cat.productCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
