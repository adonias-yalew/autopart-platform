// MOCK DATA — Replace with real API calls when backend is ready.

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'completed' | 'cancelled'

export interface SalesOrder {
  id: string
  customer: string
  amount: number
  status: OrderStatus
  items: number
  branch: string
  date: string
}

export const MOCK_SALES_ORDERS: SalesOrder[] = [
  { id: 'ORD-2026-0091', customer: 'Ahmed Al-Mutairi', amount: 4200, status: 'completed', items: 3, branch: 'Main Warehouse', date: '2026-08-24' },
  { id: 'ORD-2026-0090', customer: 'Saad Trading Co.', amount: 12800, status: 'processing', items: 8, branch: 'Main Warehouse', date: '2026-08-24' },
  { id: 'ORD-2026-0089', customer: 'Gulf Auto Services', amount: 6450, status: 'pending', items: 5, branch: 'Riyadh Branch', date: '2026-08-23' },
  { id: 'ORD-2026-0088', customer: 'Riyadh Garage LLC', amount: 9100, status: 'completed', items: 12, branch: 'Main Warehouse', date: '2026-08-23' },
  { id: 'ORD-2026-0087', customer: 'Al-Farhan Motors', amount: 2350, status: 'cancelled', items: 2, branch: 'Riyadh Branch', date: '2026-08-22' },
  { id: 'ORD-2026-0086', customer: 'Hassan Auto Parts', amount: 7600, status: 'shipped', items: 6, branch: 'Main Warehouse', date: '2026-08-22' },
  { id: 'ORD-2026-0085', customer: 'Al-Nouri Workshop', amount: 3200, status: 'completed', items: 4, branch: 'Riyadh Branch', date: '2026-08-21' },
]
