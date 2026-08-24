import { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { MOCK_PRODUCTS } from '../mock/products.mock'
import type { ProductStatus } from '../mock/products.mock'

interface ProductFormPageProps {
  mode: 'create' | 'edit'
}

interface FormState {
  sku: string
  name: string
  category: string
  brand: string
  price: string
  stock: string
  status: ProductStatus
  description: string
}

const EMPTY_FORM: FormState = {
  sku: '',
  name: '',
  category: '',
  brand: '',
  price: '',
  stock: '',
  status: 'draft',
  description: '',
}

const inputStyle: React.CSSProperties = {
  height: 38,
  padding: '0 12px',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)',
  fontSize: 13,
  color: 'var(--text-primary)',
  background: 'var(--bg-surface)',
  outline: 'none',
  width: '100%',
}

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  color: 'var(--text-primary)',
  marginBottom: 5,
  display: 'block',
}

export function ProductFormPage({ mode }: ProductFormPageProps) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const existing = mode === 'edit' ? MOCK_PRODUCTS.find((p) => p.id === id) : undefined

  const [form, setForm] = useState<FormState>(
    existing
      ? {
          sku: existing.sku,
          name: existing.name,
          category: existing.category,
          brand: existing.brand,
          price: existing.price.toString(),
          stock: existing.stock.toString(),
          status: existing.status,
          description: '',
        }
      : EMPTY_FORM,
  )

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // NOTE: Replace with API call when backend is ready.
    // POST /products (create) or PATCH /products/:id (edit)
    navigate('/products')
  }

  const title = mode === 'create' ? 'New Product' : `Edit: ${existing?.name ?? 'Product'}`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 720 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link to="/products" style={{ color: 'var(--text-secondary)', display: 'flex' }}>
          <ArrowLeft size={16} />
        </Link>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>{title}</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {/* Row: SKU + Status */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="pf-sku">SKU *</label>
            <input id="pf-sku" style={inputStyle} name="sku" value={form.sku} onChange={handleChange} placeholder="BRK-001" required />
          </div>
          <div>
            <label style={labelStyle} htmlFor="pf-status">Status</label>
            <select id="pf-status" style={{ ...inputStyle, cursor: 'pointer' }} name="status" value={form.status} onChange={handleChange}>
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Name */}
        <div>
          <label style={labelStyle} htmlFor="pf-name">Product name *</label>
          <input id="pf-name" style={inputStyle} name="name" value={form.name} onChange={handleChange} placeholder="Front Brake Pad Set — Toyota Camry 2018-2022" required />
        </div>

        {/* Row: Category + Brand */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="pf-category">Category</label>
            <input id="pf-category" style={inputStyle} name="category" value={form.category} onChange={handleChange} placeholder="Brakes" />
          </div>
          <div>
            <label style={labelStyle} htmlFor="pf-brand">Brand</label>
            <input id="pf-brand" style={inputStyle} name="brand" value={form.brand} onChange={handleChange} placeholder="Bosch" />
          </div>
        </div>

        {/* Row: Price + Stock */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="pf-price">Price (SAR) *</label>
            <input id="pf-price" style={inputStyle} type="number" min={0} name="price" value={form.price} onChange={handleChange} placeholder="185" required />
          </div>
          <div>
            <label style={labelStyle} htmlFor="pf-stock">Initial stock</label>
            <input id="pf-stock" style={inputStyle} type="number" min={0} name="stock" value={form.stock} onChange={handleChange} placeholder="0" />
          </div>
        </div>

        {/* Description */}
        <div>
          <label style={labelStyle} htmlFor="pf-description">Description</label>
          <textarea
            id="pf-description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product description, specifications, compatibility notes…"
            style={{ ...inputStyle, height: 'auto', padding: '10px 12px', minHeight: 80, resize: 'vertical' }}
          />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10, paddingTop: 4 }}>
          <button
            type="submit"
            style={{
              height: 38,
              padding: '0 20px',
              background: 'var(--color-primary-600)',
              color: '#fff',
              borderRadius: 'var(--radius-md)',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {mode === 'create' ? 'Create Product' : 'Save Changes'}
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{
              height: 38,
              padding: '0 16px',
              background: 'transparent',
              border: '1px solid var(--border-default)',
              color: 'var(--text-secondary)',
              borderRadius: 'var(--radius-md)',
              fontSize: 13,
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
