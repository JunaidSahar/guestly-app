import { ONBOARDING_ROUTES, PAGES_PATHS, UNPROTECTED_ROUTES } from "~/lib/constant"
import { useUserStore } from "~/store/userStore"

export default defineNuxtRouteMiddleware(
  async (to, from) => {
    if (import.meta.server) {
      const config = useRuntimeConfig()
      let user = null
      let isLoggedIn = false
      const store = useUserStore();
      const url = `${config.public.API_URL}user/get-me`
      const access_token = useCookie("token").value
      const response = await fetch(url, {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      })
      if (response.status == 200) {
        user = await response.json()
        isLoggedIn = true
        store.user = user
      } else {
        console.log('failed')
      }
      // console.log(isLoggedIn)

      const isPublicRoute = UNPROTECTED_ROUTES.includes(to.path)
      const isOnboardingRoute = ONBOARDING_ROUTES.includes(to.path)
      const isProtectedRoute = !isPublicRoute
      const userDetails = {
        isPaymentRequired: user?.currentOrganization?.subscription,
        isBusinessCreated: user?.currentOrganization?.buisness?.length,
        isOnboarded: user?.currentOrganization?.buisness?.some((business: any) => business?.isOnBoarded)
      }
      // console.log(userDetails)
      // return
      // return
      // console.log(user)

      let targetRoute = to.path

      if (!isLoggedIn && isProtectedRoute) {
        targetRoute = PAGES_PATHS().LOGIN
      }
      else if (isLoggedIn && isProtectedRoute && !userDetails.isPaymentRequired) {
        targetRoute = PAGES_PATHS().ONBOARDING_PRICING
      }
      else if (isLoggedIn && isProtectedRoute && !userDetails.isBusinessCreated) {
        targetRoute = PAGES_PATHS().ONBOARDING_CREATE_BUSINESS
      }
      else if (isLoggedIn && isProtectedRoute && !userDetails.isOnboarded) {
        targetRoute = PAGES_PATHS().ONBOARDING_INTEGRATIONS
      }
      else if (isLoggedIn && isOnboardingRoute && userDetails.isBusinessCreated && userDetails.isOnboarded && userDetails.isPaymentRequired) {
        targetRoute = PAGES_PATHS().DASHBOARD
      }
      if (to.path !== targetRoute) {
        return targetRoute
      }

    }
  }
)