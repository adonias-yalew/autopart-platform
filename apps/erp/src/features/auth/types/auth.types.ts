// ── Business Types ──────────────────────────────────────────────────────────

export type BusinessType =
  | 'retailer'
  | 'wholesaler'
  | 'distributor'
  | 'manufacturer'
  | 'importer'
  | 'other'

// ── Registration Steps ───────────────────────────────────────────────────────

export type RegistrationStep = 1 | 2 | 3 | 4 | 5

// ── Step Form Data ───────────────────────────────────────────────────────────

export interface BusinessInformation {
  businessName: string
  businessType: BusinessType | ''
  phone: string
  email: string
  country: string
  city: string
  address: string
}

export interface BusinessDetails {
  registrationNumber: string
  taxIdentificationNumber: string
  businessDescription: string
  numberOfBranches: number | ''
}

export interface OwnerAccount {
  ownerName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

// Verification documents are uploaded later via the backend.
// For now we track acknowledgement checkboxes.
export interface VerificationDocuments {
  businessLicenseAcknowledged: boolean
  taxDocumentAcknowledged: boolean
  identityDocumentAcknowledged: boolean
}

// ── Full Registration Form Data ──────────────────────────────────────────────

export interface RegistrationFormData {
  businessInfo: BusinessInformation
  businessDetails: BusinessDetails
  ownerAccount: OwnerAccount
  verification: VerificationDocuments
}

// ── Login ────────────────────────────────────────────────────────────────────

export interface LoginFormData {
  email: string
  password: string
}
