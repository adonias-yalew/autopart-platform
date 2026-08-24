import { useState } from 'react'
import type {
  BusinessDetails,
  BusinessInformation,
  OwnerAccount,
  RegistrationFormData,
  RegistrationStep,
  VerificationDocuments,
} from '../types/auth.types'

const INITIAL_BUSINESS_INFO: BusinessInformation = {
  businessName: '',
  businessType: '',
  phone: '',
  email: '',
  country: '',
  city: '',
  address: '',
}

const INITIAL_BUSINESS_DETAILS: BusinessDetails = {
  registrationNumber: '',
  taxIdentificationNumber: '',
  businessDescription: '',
  numberOfBranches: '',
}

const INITIAL_OWNER_ACCOUNT: OwnerAccount = {
  ownerName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
}

const INITIAL_VERIFICATION: VerificationDocuments = {
  businessLicenseAcknowledged: false,
  taxDocumentAcknowledged: false,
  identityDocumentAcknowledged: false,
}

const INITIAL_DATA: RegistrationFormData = {
  businessInfo: INITIAL_BUSINESS_INFO,
  businessDetails: INITIAL_BUSINESS_DETAILS,
  ownerAccount: INITIAL_OWNER_ACCOUNT,
  verification: INITIAL_VERIFICATION,
}

const TOTAL_STEPS = 5

interface UseRegistrationReturn {
  step: RegistrationStep
  data: RegistrationFormData
  isSubmitted: boolean
  isLastStep: boolean
  updateBusinessInfo: (partial: Partial<BusinessInformation>) => void
  updateBusinessDetails: (partial: Partial<BusinessDetails>) => void
  updateOwnerAccount: (partial: Partial<OwnerAccount>) => void
  updateVerification: (partial: Partial<VerificationDocuments>) => void
  nextStep: () => void
  prevStep: () => void
  goToStep: (s: RegistrationStep) => void
  submit: () => void
}

export function useRegistration(): UseRegistrationReturn {
  const [step, setStep] = useState<RegistrationStep>(1)
  const [data, setData] = useState<RegistrationFormData>(INITIAL_DATA)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function updateBusinessInfo(partial: Partial<BusinessInformation>) {
    setData((prev) => ({
      ...prev,
      businessInfo: { ...prev.businessInfo, ...partial },
    }))
  }

  function updateBusinessDetails(partial: Partial<BusinessDetails>) {
    setData((prev) => ({
      ...prev,
      businessDetails: { ...prev.businessDetails, ...partial },
    }))
  }

  function updateOwnerAccount(partial: Partial<OwnerAccount>) {
    setData((prev) => ({
      ...prev,
      ownerAccount: { ...prev.ownerAccount, ...partial },
    }))
  }

  function updateVerification(partial: Partial<VerificationDocuments>) {
    setData((prev) => ({
      ...prev,
      verification: { ...prev.verification, ...partial },
    }))
  }

  function nextStep() {
    if (step < TOTAL_STEPS) {
      setStep((s) => (s + 1) as RegistrationStep)
    }
  }

  function prevStep() {
    if (step > 1) {
      setStep((s) => (s - 1) as RegistrationStep)
    }
  }

  function goToStep(s: RegistrationStep) {
    setStep(s)
  }

  function submit() {
    // NOTE: When backend is ready, replace this with an actual API call.
    // The collected `data` object is the payload for the registration endpoint.
    // On success, navigate to /verification-pending.
    setIsSubmitted(true)
  }

  return {
    step,
    data,
    isSubmitted,
    isLastStep: step === TOTAL_STEPS,
    updateBusinessInfo,
    updateBusinessDetails,
    updateOwnerAccount,
    updateVerification,
    nextStep,
    prevStep,
    goToStep,
    submit,
  }
}
