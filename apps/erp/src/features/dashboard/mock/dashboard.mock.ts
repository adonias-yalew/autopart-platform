// MOCK DATA — Replace with real API calls when backend is ready.
// Service boundary: features/dashboard/services/dashboard.service.ts (to be created)

export interface StatCard {
  label: string
  value: string
  change: string
  trend: 'up' | 'down' | 'neutral'
}

export interface RecentOrder {
  id: string
  customer: string
  amount: string
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  date: string
}

export const MOCK_STAT_CARDS: StatCard[] = [
  { label: 'Total Revenue', value: 'SAR 284,500', change: '+12.4% this month', trend: 'up' },
  { label: 'Sales Orders', value: '1,284', change: '+8.1% this month', trend: 'up' },
  { label: 'Active Products', value: '3,491', change: '+24 this week', trend: 'up' },
  { label: 'Low Stock Items', value: '47', change: '5 critical', trend: 'down' },
]

export const MOCK_RECENT_ORDERS: RecentOrder[] = [
  { id: 'ORD-2026-0091', customer: 'Ahmed Al-Mutairi', amount: 'SAR 4,200', status: 'completed', date: '24 Aug 2026' },
  { id: 'ORD-2026-0090', customer: 'Saad Trading Co.', amount: 'SAR 12,800', status: 'processing', date: '24 Aug 2026' },
  { id: 'ORD-2026-0089', customer: 'Gulf Auto Services', amount: 'SAR 6,450', status: 'pending', date: '23 Aug 2026' },
  { id: 'ORD-2026-0088', customer: 'Riyadh Garage LLC', amount: 'SAR 9,100', status: 'completed', date: '23 Aug 2026' },
  { id: 'ORD-2026-0087', customer: 'Al-Farhan Motors', amount: 'SAR 2,350', status: 'cancelled', date: '22 Aug 2026' },
]
