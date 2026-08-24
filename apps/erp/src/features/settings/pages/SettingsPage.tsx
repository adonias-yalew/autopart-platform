import { NavLink, Outlet } from 'react-router-dom'
import { Building2, Users, Bell, ShoppingBag } from 'lucide-react'

const NAV_ITEMS = [
  { to: '/settings/business',      label: 'Business',       icon: <Building2 size={14} /> },
  { to: '/settings/users',         label: 'Users',          icon: <Users size={14} /> },
  { to: '/settings/notifications', label: 'Notifications',  icon: <Bell size={14} /> },
  { to: '/settings/marketplace',   label: 'Marketplace',    icon: <ShoppingBag size={14} /> },
]

export function SettingsPage() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {/* Settings nav */}
      <nav
        style={{
          width: 200,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          padding: '8px 0',
          flexShrink: 0,
        }}
      >
        <p style={{ padding: '4px 14px 8px', fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Settings
        </p>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={({ isActive }: { isActive: boolean }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 14px',
              fontSize: 13,
              fontWeight: isActive ? 500 : 400,
              color: isActive ? 'var(--color-brand)' : 'var(--text-secondary)',
              background: isActive ? 'var(--color-primary-50)' : 'transparent',
              borderRadius: 0,
              textDecoration: 'none',
            })}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Content area */}
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  )
}
