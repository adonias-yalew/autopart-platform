import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search } from 'lucide-react'
import { MOCK_PRODUCTS } from '../mock/products.mock'
import type { Product, ProductStatus } from '../mock/products.mock'

const STATUS_COLORS: Record<ProductStatus, { bg: string; color: string }> = {
  active:   { bg: 'var(--color-success-50)',  color: 'var(--color-success-700)' },
  inactive: { bg: 'var(--color-neutral-100)', color: 'var(--color-neutral-500)' },
  draft:    { bg: 'var(--color-warning-50)',  color: 'var(--color-warning-700)' },
}

function StatusBadge({ status }: { status: ProductStatus }) {
  const { bg, color } = STATUS_COLORS[status]
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 99,
        background: bg,
        color,
        fontSize: 11,
        fontWeight: 600,
        textTransform: 'capitalize',
      }}
    >
      {status}
    </span>
  )
}

export function ProductsPage() {
  const [search, setSearch] = useState('')

  const filtered: Product[] = MOCK_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>Products</h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
            {MOCK_PRODUCTS.length} products in catalog
          </p>
        </div>
        <Link
          to="/products/new"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            height: 38,
            padding: '0 16px',
            background: 'var(--color-primary-600)',
            color: '#fff',
            borderRadius: 'var(--radius-md)',
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          <Plus size={15} />
          New Product
        </Link>
      </div>

      {/* Toolbar */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          padding: 14,
        }}
      >
        <div style={{ position: 'relative', flex: 1, maxWidth: 320 }}>
          <Search
            size={14}
            style={{
              position: 'absolute',
              left: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
            }}
          />
          <input
            type="search"
            placeholder="Search by name or SKU…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              height: 34,
              paddingLeft: 30,
              paddingRight: 12,
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              fontSize: 13,
              outline: 'none',
              color: 'var(--text-primary)',
            }}
          />
        </div>
      </div>

      {/* Table */}
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
              {['SKU', 'Product Name', 'Category', 'Brand', 'Price (SAR)', 'Stock', 'Status'].map((h) => (
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
                    whiteSpace: 'nowrap',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((product, idx) => (
              <tr
                key={product.id}
                style={{ background: idx % 2 !== 0 ? 'var(--color-neutral-50)' : undefined }}
              >
                <td style={{ padding: '11px 16px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                  {product.sku}
                </td>
                <td style={{ padding: '11px 16px', fontSize: 13 }}>
                  <Link to={`/products/${product.id}`} style={{ color: 'var(--color-brand)', fontWeight: 500 }}>
                    {product.name}
                  </Link>
                </td>
                <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{product.category}</td>
                <td style={{ padding: '11px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>{product.brand}</td>
                <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 500 }}>{product.price.toLocaleString()}</td>
                <td
                  style={{
                    padding: '11px 16px',
                    fontSize: 13,
                    color: product.stock === 0 ? 'var(--color-error-600)' : product.stock < 10 ? 'var(--color-warning-600)' : 'var(--text-primary)',
                    fontWeight: product.stock < 10 ? 600 : 400,
                  }}
                >
                  {product.stock}
                </td>
                <td style={{ padding: '11px 16px' }}>
                  <StatusBadge status={product.status} />
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>
                  No products found for &ldquo;{search}&rdquo;
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
