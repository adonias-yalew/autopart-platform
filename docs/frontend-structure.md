# AutoPart ERP — Frontend Structure

## Purpose

The ERP is a separate frontend application for verified auto-parts businesses.

It is not part of the customer marketplace or platform admin application.

The ERP uses a persistent application shell with:

- Sidebar
- Topbar
- Main content area

The sidebar remains visible while navigating between ERP sections.

---

# Application Routes

## Authentication

- `/login`

Authentication pages do not use the main ERP sidebar.

---

## Main ERP

- `/dashboard`

### Catalog

- `/products`
- `/products/new`
- `/products/:id`
- `/products/:id/edit`
- `/categories`
- `/brands`
- `/vehicle-compatibility`

### Inventory

- `/inventory`
- `/inventory/movements`
- `/inventory/low-stock`
- `/inventory/adjustments`

### Sales

- `/sales/orders`
- `/sales/orders/:id`
- `/sales/invoices`
- `/sales/returns`

### Purchases

- `/purchases/orders`
- `/purchases/orders/:id`
- `/purchases/returns`

### Customers

- `/customers`
- `/customers/:id`

### Suppliers

- `/suppliers`
- `/suppliers/:id`

### Branches

- `/branches`
- `/branches/:id`
- `/branches/:id/inventory`
- `/branches/transfers`

### Reports

- `/reports`

### Settings

- `/settings`
- `/settings/business`
- `/settings/users`
- `/settings/notifications`
- `/settings/marketplace`

---

# ERP Layout

The main ERP pages use:

```text
AppShell
├── Sidebar
├── Topbar
└── PageContainer
    └── Current Page
```
