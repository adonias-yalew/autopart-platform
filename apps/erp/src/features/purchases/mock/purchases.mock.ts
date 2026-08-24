// MOCK DATA — Replace with API calls when backend is ready.

export interface PurchaseOrder {
  id: string
  supplier: string
  amount: number
  status: 'draft' | 'sent' | 'received' | 'partial' | 'cancelled'
  items: number
  expectedDate: string
  date: string
}

export const MOCK_PURCHASE_ORDERS: PurchaseOrder[] = [
  { id: 'PO-2026-0044', supplier: 'Bosch Arabia', amount: 28500, status: 'received', items: 12, expectedDate: '2026-08-20', date: '2026-08-14' },
  { id: 'PO-2026-0043', supplier: 'Mann Filters MENA', amount: 9200, status: 'sent', items: 5, expectedDate: '2026-08-28', date: '2026-08-18' },
  { id: 'PO-2026-0042', supplier: 'KYB Gulf', amount: 15600, status: 'partial', items: 8, expectedDate: '2026-08-25', date: '2026-08-15' },
  { id: 'PO-2026-0041', supplier: 'NGK Distributors', amount: 6400, status: 'draft', items: 3, expectedDate: '2026-09-02', date: '2026-08-22' },
]
