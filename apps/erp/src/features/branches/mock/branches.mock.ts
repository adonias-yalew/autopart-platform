// MOCK DATA — Replace with API calls when backend is ready.

export interface Branch {
  id: string
  name: string
  city: string
  address: string
  phone: string
  manager: string
  isMain: boolean
  productCount: number
  staffCount: number
}

export const MOCK_BRANCHES: Branch[] = [
  { id: 'br1', name: 'Main Warehouse', city: 'Riyadh', address: 'Industrial Area, King Abdullah Rd', phone: '+966 11 111 2222', manager: 'Khalid Al-Dosari', isMain: true, productCount: 3491, staffCount: 12 },
  { id: 'br2', name: 'Riyadh Branch', city: 'Riyadh', address: 'Olaya District, Prince Sultan St', phone: '+966 11 333 4444', manager: 'Omar Al-Qahtani', isMain: false, productCount: 1240, staffCount: 6 },
  { id: 'br3', name: 'Jeddah Branch', city: 'Jeddah', address: 'Al-Balad, Al-Malek Rd', phone: '+966 12 555 6666', manager: 'Faisal Al-Zahrani', isMain: false, productCount: 980, staffCount: 5 },
]
