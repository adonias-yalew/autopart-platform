import { useLocation, useNavigate } from 'react-router-dom'
import { Bell, Search, ChevronDown, Settings } from 'lucide-react'
import styles from './Topbar.module.css'

// Maps route pathnames to human-readable page titles + subtitles
const ROUTE_META: Record<string, { title: string; sub: string }> = {
  '/dashboard':                { title: 'Dashboard',           sub: 'Business overview & recent activity'      },
  '/products':                 { title: 'Products',            sub: 'Manage your product catalog'              },
  '/products/new':             { title: 'New Product',         sub: 'Add a new item to the catalog'            },
  '/categories':               { title: 'Categories',          sub: 'Organise products by category'            },
  '/brands':                   { title: 'Brands',              sub: 'Manage product brands'                    },
  '/vehicle-compatibility':    { title: 'Compatibility',       sub: 'Map parts to vehicle models'              },
  '/inventory':                { title: 'Inventory',           sub: 'Stock levels across all branches'         },
  '/inventory/movements':      { title: 'Movements',           sub: 'All stock-in, stock-out and transfers'    },
  '/inventory/low-stock':      { title: 'Low Stock',           sub: 'Items at or below minimum quantity'       },
  '/inventory/adjustments':    { title: 'Adjustments',         sub: 'Manual stock corrections and write-offs'  },
  '/sales/orders':             { title: 'Sales Orders',        sub: 'Track and manage customer orders'         },
  '/sales/invoices':           { title: 'Invoices',            sub: 'Customer invoices and billing'            },
  '/sales/returns':            { title: 'Sales Returns',       sub: 'Process return requests and refunds'      },
  '/purchases/orders':         { title: 'Purchase Orders',     sub: 'Orders sent to suppliers'                 },
  '/purchases/returns':        { title: 'Purchase Returns',    sub: 'Returns and credit notes to suppliers'    },
  '/customers':                { title: 'Customers',           sub: 'View and manage your customer base'       },
  '/suppliers':                { title: 'Suppliers',           sub: 'Manage supplier relationships'            },
  '/branches':                 { title: 'Branches',            sub: 'All business locations'                   },
  '/branches/transfers':       { title: 'Transfers',           sub: 'Stock transfers between branches'         },
  '/reports':                  { title: 'Reports',             sub: 'Analytics and business performance'       },
  '/settings':                 { title: 'Settings',            sub: 'Business configuration'                   },
  '/settings/business':        { title: 'Business Settings',   sub: 'Company profile and details'              },
  '/settings/users':           { title: 'User Management',     sub: 'Roles, access and team members'           },
  '/settings/notifications':   { title: 'Notifications',       sub: 'Alert preferences and channels'           },
  '/settings/marketplace':     { title: 'Marketplace',         sub: 'Customer-facing listing settings'         },
}

function resolveMeta(pathname: string): { title: string; sub: string } {
  if (ROUTE_META[pathname]) return ROUTE_META[pathname]
  if (/^\/products\/[^/]+\/edit$/.test(pathname)) return { title: 'Edit Product',              sub: 'Update product details'         }
  if (/^\/products\/[^/]+$/.test(pathname))       return { title: 'Product Details',           sub: 'View product information'       }
  if (/^\/sales\/orders\/[^/]+$/.test(pathname))  return { title: 'Order Details',             sub: 'View order information'         }
  if (/^\/purchases\/orders\/[^/]+$/.test(pathname)) return { title: 'Purchase Order',         sub: 'View purchase order details'    }
  if (/^\/customers\/[^/]+$/.test(pathname))      return { title: 'Customer Details',          sub: 'View customer information'      }
  if (/^\/suppliers\/[^/]+$/.test(pathname))      return { title: 'Supplier Details',          sub: 'View supplier information'      }
  if (/^\/branches\/[^/]+\/inventory$/.test(pathname)) return { title: 'Branch Inventory',    sub: 'Stock levels for this location'  }
  if (/^\/branches\/[^/]+$/.test(pathname))       return { title: 'Branch Details',           sub: 'Location information'           }
  return { title: 'AutoPart ERP', sub: '' }
}

export function Topbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { title, sub } = resolveMeta(pathname)

  // NOTE: Replace with real user data from auth context when backend is ready.
  const user = { name: 'Admin User', role: 'Owner', initials: 'AU' }

  return (
    <header className={styles.topbar}>

      {/* ── Left: page title + subtitle ── */}
      <div className={styles.left}>
        <div>
          <h1 className={styles.pageTitle}>{title}</h1>
          {sub && <p className={styles.pageSub}>{sub}</p>}
        </div>
      </div>

      {/* ── Right: search, bell, user ── */}
      <div className={styles.right}>

        {/* Search */}
        <div className={styles.searchBox}>
          <Search size={15} className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search anything…"
            aria-label="Global search"
          />
          <kbd className={styles.searchKbd}>⌘K</kbd>
        </div>

        {/* Notifications */}
        <button className={styles.iconBtn} aria-label="Notifications">
          <Bell size={18} />
          <span className={styles.badge} aria-hidden="true" />
        </button>

        {/* Settings shortcut */}
        <button
          className={styles.iconBtn}
          aria-label="Settings"
          onClick={() => navigate('/settings')}
        >
          <Settings size={18} />
        </button>

        <div className={styles.divider} />

        {/* User */}
        <button
          className={styles.userBtn}
          aria-label="User menu"
          onClick={() => navigate('/settings/users')}
        >
          <div className={styles.avatar}>{user.initials}</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name}</span>
            <span className={styles.userRole}>{user.role}</span>
          </div>
          <ChevronDown size={14} className={styles.userChevron} />
        </button>

      </div>
    </header>
  )
}
