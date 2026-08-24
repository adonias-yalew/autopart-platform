import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell/AppShell'
import { ProtectedRoute } from '@/components/common/ProtectedRoute'
import { AuthLayout } from '@/features/auth/components/AuthLayout'
import { LoginPage } from '@/features/auth/pages/LoginPage'
import { RegisterPage } from '@/features/auth/pages/RegisterPage'
import { VerificationPendingPage } from '@/features/auth/pages/VerificationPendingPage'
import { DashboardPage } from '@/features/dashboard/pages/DashboardPage'
import { ProductsPage } from '@/features/products/pages/ProductsPage'
import { ProductDetailPage } from '@/features/products/pages/ProductDetailPage'
import { ProductFormPage } from '@/features/products/pages/ProductFormPage'
import { CategoriesPage } from '@/features/products/pages/CategoriesPage'
import { BrandsPage } from '@/features/products/pages/BrandsPage'
import { VehicleCompatibilityPage } from '@/features/products/pages/VehicleCompatibilityPage'
import { InventoryPage } from '@/features/inventory/pages/InventoryPage'
import { InventoryMovementsPage } from '@/features/inventory/pages/InventoryMovementsPage'
import { LowStockPage } from '@/features/inventory/pages/LowStockPage'
import { StockAdjustmentsPage } from '@/features/inventory/pages/StockAdjustmentsPage'
import { SalesOrdersPage } from '@/features/sales/pages/SalesOrdersPage'
import { SalesOrderDetailPage } from '@/features/sales/pages/SalesOrderDetailPage'
import { SalesInvoicesPage } from '@/features/sales/pages/SalesInvoicesPage'
import { SalesReturnsPage } from '@/features/sales/pages/SalesReturnsPage'
import { PurchaseOrdersPage } from '@/features/purchases/pages/PurchaseOrdersPage'
import { PurchaseOrderDetailPage } from '@/features/purchases/pages/PurchaseOrderDetailPage'
import { PurchaseReturnsPage } from '@/features/purchases/pages/PurchaseReturnsPage'
import { CustomersPage } from '@/features/customers/pages/CustomersPage'
import { CustomerDetailPage } from '@/features/customers/pages/CustomerDetailPage'
import { SuppliersPage } from '@/features/suppliers/pages/SuppliersPage'
import { SupplierDetailPage } from '@/features/suppliers/pages/SupplierDetailPage'
import { BranchesPage } from '@/features/branches/pages/BranchesPage'
import { BranchDetailPage } from '@/features/branches/pages/BranchDetailPage'
import { BranchInventoryPage } from '@/features/branches/pages/BranchInventoryPage'
import { BranchTransfersPage } from '@/features/branches/pages/BranchTransfersPage'
import { ReportsPage } from '@/features/reports/pages/ReportsPage'
import { SettingsPage } from '@/features/settings/pages/SettingsPage'
import { BusinessSettingsPage } from '@/features/settings/pages/BusinessSettingsPage'
import { UsersSettingsPage } from '@/features/settings/pages/UsersSettingsPage'
import { NotificationsSettingsPage } from '@/features/settings/pages/NotificationsSettingsPage'
import { MarketplaceSettingsPage } from '@/features/settings/pages/MarketplaceSettingsPage'

export function AppRouter() {
  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* ── Auth routes (no AppShell) ── */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verification-pending" element={<VerificationPendingPage />} />
      </Route>

      {/* ── Protected ERP routes (with AppShell) ── */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Catalog */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/new" element={<ProductFormPage mode="create" />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/products/:id/edit" element={<ProductFormPage mode="edit" />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/vehicle-compatibility" element={<VehicleCompatibilityPage />} />

          {/* Inventory */}
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/movements" element={<InventoryMovementsPage />} />
          <Route path="/inventory/low-stock" element={<LowStockPage />} />
          <Route path="/inventory/adjustments" element={<StockAdjustmentsPage />} />

          {/* Sales */}
          <Route path="/sales/orders" element={<SalesOrdersPage />} />
          <Route path="/sales/orders/:id" element={<SalesOrderDetailPage />} />
          <Route path="/sales/invoices" element={<SalesInvoicesPage />} />
          <Route path="/sales/returns" element={<SalesReturnsPage />} />

          {/* Purchases */}
          <Route path="/purchases/orders" element={<PurchaseOrdersPage />} />
          <Route path="/purchases/orders/:id" element={<PurchaseOrderDetailPage />} />
          <Route path="/purchases/returns" element={<PurchaseReturnsPage />} />

          {/* Customers */}
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/customers/:id" element={<CustomerDetailPage />} />

          {/* Suppliers */}
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/suppliers/:id" element={<SupplierDetailPage />} />

          {/* Branches — static route before dynamic */}
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/branches/transfers" element={<BranchTransfersPage />} />
          <Route path="/branches/:id" element={<BranchDetailPage />} />
          <Route path="/branches/:id/inventory" element={<BranchInventoryPage />} />

          {/* Reports */}
          <Route path="/reports" element={<ReportsPage />} />

          {/* Settings — nested so SettingsPage renders its side-nav + Outlet */}
          <Route path="/settings" element={<SettingsPage />}>
            <Route index element={<Navigate to="/settings/business" replace />} />
            <Route path="business" element={<BusinessSettingsPage />} />
            <Route path="users" element={<UsersSettingsPage />} />
            <Route path="notifications" element={<NotificationsSettingsPage />} />
            <Route path="marketplace" element={<MarketplaceSettingsPage />} />
          </Route>
        </Route>
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
