// MOCK DATA — Replace with API calls when backend is ready.

export interface Customer {
  id: string
  name: string
  type: 'individual' | 'business'
  email: string
  phone: string
  city: string
  totalOrders: number
  totalSpent: number
  since: string
}

export const MOCK_CUSTOMERS: Customer[] = [
  { id: 'c1', name: 'Ahmed Al-Mutairi', type: 'individual', email: 'ahmed@example.com', phone: '+966 50 111 2233', city: 'Riyadh', totalOrders: 14, totalSpent: 28400, since: '2025-03-10' },
  { id: 'c2', name: 'Saad Trading Co.', type: 'business', email: 'orders@saadtrading.com', phone: '+966 11 444 5566', city: 'Riyadh', totalOrders: 38, totalSpent: 214000, since: '2024-11-01' },
  { id: 'c3', name: 'Gulf Auto Services', type: 'business', email: 'procurement@gulfauto.sa', phone: '+966 13 222 3344', city: 'Dammam', totalOrders: 22, totalSpent: 98500, since: '2025-01-15' },
  { id: 'c4', name: 'Riyadh Garage LLC', type: 'business', email: 'info@riyadhgarage.com', phone: '+966 11 555 6677', city: 'Riyadh', totalOrders: 55, totalSpent: 362000, since: '2024-08-20' },
  { id: 'c5', name: 'Al-Farhan Motors', type: 'business', email: 'parts@alfarhan.sa', phone: '+966 12 333 4455', city: 'Jeddah', totalOrders: 9, totalSpent: 18200, since: '2026-01-05' },
  { id: 'c6', name: 'Hassan Auto Parts', type: 'individual', email: 'hassan.parts@gmail.com', phone: '+966 55 777 8899', city: 'Riyadh', totalOrders: 7, totalSpent: 12600, since: '2025-09-12' },
]
