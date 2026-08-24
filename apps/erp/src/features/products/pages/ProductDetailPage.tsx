import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Edit } from 'lucide-react'
import { MOCK_PRODUCTS } from '../mock/products.mock'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const product = MOCK_PRODUCTS.find((p) => p.id === id)

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
        <p style={{ fontSize: 15 }}>Product not found.</p>
        <Link to="/products" style={{ color: 'var(--color-brand)', fontSize: 13, marginTop: 8, display: 'inline-block' }}>
          ← Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Breadcrumb / header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/products" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}>
            <ArrowLeft size={16} />
          </Link>
          <h2 style={{ fontSize: 18, fontWeight: 600 }}>{product.name}</h2>
        </div>
        <Link
          to={`/products/${id}/edit`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            height: 36,
            padding: '0 14px',
            background: 'var(--color-neutral-100)',
            color: 'var(--text-primary)',
            borderRadius: 'var(--radius-md)',
            fontSize: 13,
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          <Edit size={13} />
          Edit
        </Link>
      </div>

      {/* Detail card */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px 32px',
        }}
      >
        {[
          { label: 'SKU', value: product.sku },
          { label: 'Category', value: product.category },
          { label: 'Brand', value: product.brand },
          { label: 'Price', value: `SAR ${product.price.toLocaleString()}` },
          { label: 'Stock', value: product.stock.toString() },
          { label: 'Status', value: product.status },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
              {label}
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{value}</p>
          </div>
        ))}
      </div>

      {/* Placeholder sections */}
      {['Inventory by Branch', 'Related Products', 'Sales History'].map((section) => (
        <div
          key={section}
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border-default)', fontSize: 14, fontWeight: 600 }}>
            {section}
          </div>
          <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>
            Requires backend integration
          </div>
        </div>
      ))}
    </div>
  )
}
