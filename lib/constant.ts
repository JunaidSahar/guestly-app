export const PAGES_PATHS = () => {
  return {
    DASHBOARD: '/',
    ONBOARDING_PRICING: '/choose-plan',
    LOGIN: '/login',
    REGISTER: '/register',
    ONBOARDING_CREATE_BUSINESS: '/create-business'
  }
}

export const UNPROTECTED_ROUTES = [
  PAGES_PATHS().LOGIN,
  PAGES_PATHS().REGISTER
]

export const ONBOARDING_ROUTES = [
  PAGES_PATHS().ONBOARDING_PRICING,
  PAGES_PATHS().ONBOARDING_CREATE_BUSINESS
]