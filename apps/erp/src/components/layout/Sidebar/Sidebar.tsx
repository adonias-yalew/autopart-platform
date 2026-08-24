import type { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Package,
  Warehouse,
  ShoppingCart,
  ShoppingBag,
  Users,
  Building2,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-react'
import { useAuth } from '@/app/providers/AuthContext'
import styles from './Sidebar.module.css'

// ── Leaf nav item (no children) ───────────────────────────────

interface NavItemProps {
  to: string
  icon: ReactNode
  label: string
}

function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
      }
    >
      <span className={styles.navIcon}>{icon}</span>
      <span className={styles.navLabel}>{label}</span>
    </NavLink>
  )
}

// ── Child item inside a section ───────────────────────────────

interface SubNavItemProps {
  to: string
  label: string
}

function SubNavItem({ to, label }: SubNavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        `${styles.subNavItem} ${isActive ? styles.subNavItemActive : ''}`
      }
    >
      <span className={styles.subDot} aria-hidden="true" />
      <span>{label}</span>
    </NavLink>
  )
}

// ── Collapsible section item ──────────────────────────────────

interface NavSectionProps {
  label: string
  icon: ReactNode
  pathPrefixes: string[]
  children: ReactNode
}

function NavSection({ label, icon, pathPrefixes, children }: NavSectionProps) {
  const { pathname } = useLocation()
  const isCurrentSection = pathPrefixes.some((p) => pathname.startsWith(p))
  const [isOpen, setIsOpen] = useState(isCurrentSection)

  // Auto-expand when the user navigates into this section
  useEffect(() => {
    if (isCurrentSection) setIsOpen(true)
  }, [isCurrentSection])

  return (
    <div className={styles.section}>
      {/* Row that looks exactly like a nav item but acts as a toggle */}
      <button
        className={`${styles.navItem} ${styles.sectionToggle} ${isCurrentSection ? styles.navItemActive : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className={styles.navIcon}>{icon}</span>
        <span className={styles.navLabel}>{label}</span>
        <span
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          aria-hidden="true"
        >
          <ChevronDown size={13} />
        </span>
      </button>

      {/* CSS Grid collapse — no fixed max-height needed */}
      <div className={`${styles.sectionItems} ${isOpen ? styles.sectionItemsOpen : ''}`}>
        <div className={styles.sectionItemsInner}>{children}</div>
      </div>
    </div>
  )
}

// ── Sidebar ───────────────────────────────────────────────────

const I = 16 // icon size

export function Sidebar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <nav className={styles.sidebar} aria-label="Main navigation">

      {/* Brand */}
      <div className={styles.brand}>
        <div className={styles.brandMark}>A</div>
        <div>
          <div className={styles.brandName}>AutoPart</div>
          <div className={styles.brandSub}>ERP Platform</div>
        </div>
      </div>

      {/* Nav */}
      <div className={styles.nav}>

        <p className={styles.menuLabel}>Menu</p>

        {/* ── Dashboard ─────────────────────── */}
        <NavItem to="/dashboard" icon={<LayoutDashboard size={I} />} label="Dashboard" />

        {/* ── Catalog ───────────────────────── */}
        <NavSection
          label="Catalog"
          icon={<Package size={I} />}
          pathPrefixes={['/products', '/categories', '/brands', '/vehicle-compatibility']}
        >
          <SubNavItem to="/products" label="Products" />
          <SubNavItem to="/categories" label="Categories" />
          <SubNavItem to="/brands" label="Brands" />
          <SubNavItem to="/vehicle-compatibility" label="Compatibility" />
        </NavSection>

        {/* ── Inventory ─────────────────────── */}
        <NavSection
          label="Inventory"
          icon={<Warehouse size={I} />}
          pathPrefixes={['/inventory']}
        >
          <SubNavItem to="/inventory" label="Overview" />
          <SubNavItem to="/inventory/movements" label="Movements" />
          <SubNavItem to="/inventory/low-stock" label="Low Stock" />
          <SubNavItem to="/inventory/adjustments" label="Adjustments" />
        </NavSection>

        {/* ── Sales ─────────────────────────── */}
        <NavSection
          label="Sales"
          icon={<ShoppingCart size={I} />}
          pathPrefixes={['/sales']}
        >
          <SubNavItem to="/sales/orders" label="Orders" />
          <SubNavItem to="/sales/invoices" label="Invoices" />
          <SubNavItem to="/sales/returns" label="Returns" />
        </NavSection>

        {/* ── Purchases ─────────────────────── */}
        <NavSection
          label="Purchases"
          icon={<ShoppingBag size={I} />}
          pathPrefixes={['/purchases']}
        >
          <SubNavItem to="/purchases/orders" label="Orders" />
          <SubNavItem to="/purchases/returns" label="Returns" />
        </NavSection>

        {/* ── People ────────────────────────── */}
        <NavSection
          label="People"
          icon={<Users size={I} />}
          pathPrefixes={['/customers', '/suppliers']}
        >
          <SubNavItem to="/customers" label="Customers" />
          <SubNavItem to="/suppliers" label="Suppliers" />
        </NavSection>

        {/* ── Branches ──────────────────────── */}
        <NavSection
          label="Branches"
          icon={<Building2 size={I} />}
          pathPrefixes={['/branches']}
        >
          <SubNavItem to="/branches" label="Locations" />
          <SubNavItem to="/branches/transfers" label="Transfers" />
        </NavSection>

        {/* ── Reports ───────────────────────── */}
        <NavItem to="/reports" icon={<BarChart3 size={I} />} label="Reports" />

        {/* ── Settings ──────────────────────── */}
        <NavItem to="/settings" icon={<Settings size={I} />} label="Settings" />

      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </nav>
  )
}
