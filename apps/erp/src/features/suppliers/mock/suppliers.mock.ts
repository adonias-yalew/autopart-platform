// MOCK DATA — Replace with API calls when backend is ready.

export interface Supplier {
  id: string
  name: string
  email: string
  phone: string
  country: string
  city: string
  categories: string[]
  totalOrders: number
  since: string
}

export const MOCK_SUPPLIERS: Supplier[] = [
  { id: 's1', name: 'Bosch Arabia', email: 'sales@bosch-arabia.com', phone: '+966 11 234 5678', country: 'Saudi Arabia', city: 'Riyadh', categories: ['Electrical', 'Brakes', 'Ignition'], totalOrders: 24, since: '2024-06-01' },
  { id: 's2', name: 'Mann Filters MENA', email: 'orders@mann-mena.com', phone: '+971 4 567 8901', country: 'UAE', city: 'Dubai', categories: ['Filters'], totalOrders: 18, since: '2024-09-15' },
  { id: 's3', name: 'KYB Gulf', email: 'gulf@kyb.com', phone: '+966 13 345 6789', country: 'Saudi Arabia', city: 'Dammam', categories: ['Suspension'], totalOrders: 12, since: '2025-02-01' },
  { id: 's4', name: 'NGK Distributors', email: 'info@ngk-gulf.com', phone: '+971 2 456 7890', country: 'UAE', city: 'Abu Dhabi', categories: ['Ignition'], totalOrders: 8, since: '2025-05-20' },
  { id: 's5', name: 'Gates Middle East', email: 'me@gates.com', phone: '+966 11 678 9012', country: 'Saudi Arabia', city: 'Riyadh', categories: ['Belts & Chains'], totalOrders: 6, since: '2025-07-10' },
]
