import { Link } from 'react-router-dom'
import { BarChart3, TrendingUp, Package, Users, ShoppingCart } from 'lucide-react'

const REPORT_CARDS = [
  { icon: <TrendingUp size={20} />, title: 'Sales Report', description: 'Revenue, orders, and customer trends over time.' },
  { icon: <Package size={20} />, title: 'Inventory Report', description: 'Stock levels, movements, and valuation across branches.' },
  { icon: <ShoppingCart size={20} />, title: 'Purchase Report', description: 'Supplier spend, order frequency, and delivery performance.' },
  { icon: <Users size={20} />, title: 'Customer Report', description: 'Customer acquisition, retention, and spending analysis.' },
  { icon: <BarChart3 size={20} />, title: 'Branch Performance', description: 'Sales and inventory comparison across branches.' },
]

export function ReportsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>Reports</h2>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
          Business analytics and performance insights
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {REPORT_CARDS.map((card) => (
          <div
            key={card.title}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ color: 'var(--color-brand)', opacity: 0.8 }}>{card.icon}</div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{card.title}</p>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>{card.description}</p>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4, fontStyle: 'italic' }}>
              Available after backend integration
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: 13,
        }}
      >
        Report generation requires backend analytics service integration.{' '}
        <Link to="/dashboard" style={{ color: 'var(--color-brand)' }}>View dashboard overview →</Link>
      </div>
    </div>
  )
}
