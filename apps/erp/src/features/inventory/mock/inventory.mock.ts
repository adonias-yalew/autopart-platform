// MOCK DATA — Replace with API calls when backend is ready.

export type MovementType = 'in' | 'out' | 'adjustment' | 'transfer'

export interface InventoryItem {
  id: string
  sku: string
  productName: string
  branchName: string
  quantity: number
  minimumQuantity: number
  updatedAt: string
}

export interface InventoryMovement {
  id: string
  sku: string
  productName: string
  type: MovementType
  quantity: number
  branchName: string
  reason: string
  createdAt: string
}

export interface StockAdjustment {
  id: string
  sku: string
  productName: string
  branchName: string
  previousQuantity: number
  newQuantity: number
  reason: string
  createdAt: string
}

export const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'inv1', sku: 'BRK-001', productName: 'Front Brake Pad Set — Toyota Camry', branchName: 'Main Warehouse', quantity: 143, minimumQuantity: 20, updatedAt: '2026-08-24' },
  { id: 'inv2', sku: 'FLT-012', productName: 'Oil Filter — Universal', branchName: 'Main Warehouse', quantity: 580, minimumQuantity: 50, updatedAt: '2026-08-24' },
  { id: 'inv3', sku: 'ALT-004', productName: 'Alternator 90A — Nissan Patrol', branchName: 'Main Warehouse', quantity: 8, minimumQuantity: 10, updatedAt: '2026-08-23' },
  { id: 'inv4', sku: 'SUS-007', productName: 'Front Shock Absorber Pair', branchName: 'Riyadh Branch', quantity: 32, minimumQuantity: 5, updatedAt: '2026-08-22' },
  { id: 'inv5', sku: 'BLT-022', productName: 'Serpentine Belt — Honda Accord', branchName: 'Main Warehouse', quantity: 0, minimumQuantity: 15, updatedAt: '2026-08-20' },
  { id: 'inv6', sku: 'SPK-009', productName: 'Iridium Spark Plug Set', branchName: 'Riyadh Branch', quantity: 215, minimumQuantity: 30, updatedAt: '2026-08-24' },
]

export const MOCK_MOVEMENTS: InventoryMovement[] = [
  { id: 'm1', sku: 'BRK-001', productName: 'Front Brake Pad Set', type: 'in', quantity: 50, branchName: 'Main Warehouse', reason: 'Purchase Order PO-2026-0044', createdAt: '2026-08-24' },
  { id: 'm2', sku: 'FLT-012', productName: 'Oil Filter — Universal', type: 'out', quantity: 12, branchName: 'Main Warehouse', reason: 'Sales Order ORD-2026-0091', createdAt: '2026-08-24' },
  { id: 'm3', sku: 'SUS-007', productName: 'Front Shock Absorber Pair', type: 'transfer', quantity: 10, branchName: 'Riyadh Branch', reason: 'Branch Transfer TR-2026-0008', createdAt: '2026-08-23' },
  { id: 'm4', sku: 'ALT-004', productName: 'Alternator 90A', type: 'adjustment', quantity: -2, branchName: 'Main Warehouse', reason: 'Damage write-off', createdAt: '2026-08-22' },
]

export const MOCK_ADJUSTMENTS: StockAdjustment[] = [
  { id: 'adj1', sku: 'ALT-004', productName: 'Alternator 90A', branchName: 'Main Warehouse', previousQuantity: 10, newQuantity: 8, reason: 'Damage write-off — 2 units', createdAt: '2026-08-22' },
  { id: 'adj2', sku: 'BLT-022', productName: 'Serpentine Belt', branchName: 'Main Warehouse', previousQuantity: 15, newQuantity: 0, reason: 'Annual stockcount correction', createdAt: '2026-08-20' },
]
