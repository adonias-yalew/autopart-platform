import { Link } from 'react-router-dom'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { MOCK_STAT_CARDS, MOCK_RECENT_ORDERS } from '../mock/dashboard.mock'
import type { RecentOrder, StatCard } from '../mock/dashboard.mock'

// ── Styles (inline — will be refactored in later design pass) ────────────────

const s = {
  page: { display: 'flex', flexDirection: 'column' as const, gap: 24 },
  pageHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  pageTitle: { fontSize: 20, fontWeight: 600, color: 'var(--text-primary)' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 16,
  },
  card: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-lg)',
    padding: '18px 20px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 6,
  },
  cardLabel: { fontSize: 12, color: 'var(--text-secondary)', fontWeight: 500 },
  cardValue: { fontSize: 24, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em' },
  cardChange: { fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 },
  section: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
  },
  sectionHead: {
    padding: '14px 20px',
    borderBottom: '1px solid var(--border-default)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: { fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' },
  sectionLink: { fontSize: 12, color: 'var(--color-brand)', fontWeight: 500 },
  table: { width: '100%', borderCollapse: 'collapse' as const },
  th: {
    padding: '8px 20px',
    textAlign: 'left' as const,
    fontSize: 11,
    fontWeight: 600,
    color: 'var(--text-muted)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    borderBottom: '1px solid var(--border-default)',
    background: 'var(--color-neutral-50)',
  },
  td: {
    padding: '11px 20px',
    fontSize: 13,
    color: 'var(--text-primary)',
    borderBottom: '1px solid var(--border-default)',
  },
}

const STATUS_COLORS: Record<RecentOrder['status'], { bg: string; color: string }> = {
  pending:    { bg: 'var(--color-warning-50)',  color: 'var(--color-warning-700)' },
  processing: { bg: 'var(--color-primary-50)',  color: 'var(--color-primary-700)' },
  completed:  { bg: 'var(--color-success-50)',  color: 'var(--color-success-700)' },
  cancelled:  { bg: 'var(--color-error-50)',    color: 'var(--color-error-700)'   },
}

function TrendIcon({ trend }: { trend: StatCard['trend'] }) {
  if (trend === 'up')   return <TrendingUp size={12} color="var(--color-success-600)" />
  if (trend === 'down') return <TrendingDown size={12} color="var(--color-error-600)" />
  return <Minus size={12} color="var(--text-muted)" />
}

function StatusBadge({ status }: { status: RecentOrder['status'] }) {
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

export function DashboardPage() {
  return (
    <div style={s.page}>
      <div style={s.pageHeader}>
        <h2 style={s.pageTitle}>Overview</h2>
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          Last updated: 24 Aug 2026
        </span>
      </div>

      {/* Stat cards */}
      <div style={s.grid}>
        {MOCK_STAT_CARDS.map((card) => (
          <div key={card.label} style={s.card}>
            <span style={s.cardLabel}>{card.label}</span>
            <span style={s.cardValue}>{card.value}</span>
            <span style={{ ...s.cardChange, color: card.trend === 'down' ? 'var(--color-error-600)' : card.trend === 'up' ? 'var(--color-success-600)' : 'var(--text-muted)' }}>
              <TrendIcon trend={card.trend} />
              {card.change}
            </span>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div style={s.section}>
        <div style={s.sectionHead}>
          <span style={s.sectionTitle}>Recent Orders</span>
          <Link to="/sales/orders" style={s.sectionLink}>
            View all →
          </Link>
        </div>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Order ID</th>
              <th style={s.th}>Customer</th>
              <th style={s.th}>Amount</th>
              <th style={s.th}>Status</th>
              <th style={s.th}>Date</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_RECENT_ORDERS.map((order, idx) => (
              <tr
                key={order.id}
                style={{
                  ...(idx % 2 === 0 ? {} : { background: 'var(--color-neutral-50)' }),
                }}
              >
                <td style={s.td}>
                  <Link
                    to={`/sales/orders/${order.id}`}
                    style={{ color: 'var(--color-brand)', fontWeight: 500 }}
                  >
                    {order.id}
                  </Link>
                </td>
                <td style={s.td}>{order.customer}</td>
                <td style={{ ...s.td, fontWeight: 500 }}>{order.amount}</td>
                <td style={s.td}>
                  <StatusBadge status={order.status} />
                </td>
                <td style={{ ...s.td, color: 'var(--text-secondary)' }}>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart placeholder */}
      <div style={s.section}>
        <div style={s.sectionHead}>
          <span style={s.sectionTitle}>Revenue Trend</span>
        </div>
        <div
          style={{
            height: 180,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            fontSize: 13,
          }}
        >
          Chart will be rendered here (backend data required)
        </div>
      </div>
    </div>
  )
}
