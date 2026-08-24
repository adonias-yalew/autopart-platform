// MOCK DATA — Replace with API calls when backend is ready.

export type ProductStatus = 'active' | 'inactive' | 'draft'

export interface Product {
  id: string
  sku: string
  name: string
  category: string
  brand: string
  status: ProductStatus
  price: number
  stock: number
}

export interface Category {
  id: string
  name: string
  productCount: number
}

export interface Brand {
  id: string
  name: string
  productCount: number
}

export const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', sku: 'BRK-001', name: 'Front Brake Pad Set — Toyota Camry 2018-2022', category: 'Brakes', brand: 'Bosch', status: 'active', price: 185, stock: 143 },
  { id: 'p2', sku: 'FLT-012', name: 'Oil Filter — Universal 3/4-16 Thread', category: 'Filters', brand: 'Mann', status: 'active', price: 22, stock: 580 },
  { id: 'p3', sku: 'ALT-004', name: 'Alternator 90A — Nissan Patrol Y62', category: 'Electrical', brand: 'Denso', status: 'active', price: 1240, stock: 8 },
  { id: 'p4', sku: 'SUS-007', name: 'Front Shock Absorber Pair — Hilux 2016+', category: 'Suspension', brand: 'KYB', status: 'active', price: 640, stock: 32 },
  { id: 'p5', sku: 'BLT-022', name: 'Serpentine Belt — Honda Accord 2.4L', category: 'Belts', brand: 'Gates', status: 'draft', price: 78, stock: 0 },
  { id: 'p6', sku: 'SPK-009', name: 'Iridium Spark Plug Set (4pc)', category: 'Ignition', brand: 'NGK', status: 'active', price: 210, stock: 215 },
  { id: 'p7', sku: 'RAD-003', name: 'Radiator — Corolla E170 2013-2019', category: 'Cooling', brand: 'Nissens', status: 'inactive', price: 890, stock: 4 },
]

export const MOCK_CATEGORIES: Category[] = [
  { id: 'c1', name: 'Brakes', productCount: 142 },
  { id: 'c2', name: 'Filters', productCount: 218 },
  { id: 'c3', name: 'Electrical', productCount: 95 },
  { id: 'c4', name: 'Suspension', productCount: 176 },
  { id: 'c5', name: 'Belts & Chains', productCount: 64 },
  { id: 'c6', name: 'Ignition', productCount: 88 },
  { id: 'c7', name: 'Cooling', productCount: 53 },
]

export const MOCK_BRANDS: Brand[] = [
  { id: 'b1', name: 'Bosch', productCount: 284 },
  { id: 'b2', name: 'Mann', productCount: 189 },
  { id: 'b3', name: 'Denso', productCount: 142 },
  { id: 'b4', name: 'KYB', productCount: 98 },
  { id: 'b5', name: 'Gates', productCount: 76 },
  { id: 'b6', name: 'NGK', productCount: 115 },
  { id: 'b7', name: 'Nissens', productCount: 62 },
]
