import { ONBOARDING_ROUTES, PAGES_PATHS, UNPROTECTED_ROUTES } from "~/lib/constant"

export default defineNuxtRouteMiddleware(
  async (to, from) => {
    if (import.meta.server) {
      const config = useRuntimeConfig()
      let user = null
      let isLoggedIn = false
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
        useCookie("user").value = JSON.stringify(user)
      } else {
        console.log('failed')
      }
      console.log(isLoggedIn)

      const isPublicRoute = UNPROTECTED_ROUTES.includes(to.path)
      const isOnboardingRoute = ONBOARDING_ROUTES.includes(to.path)
      const isProtectedRoute = !isPublicRoute
      const userDetails = {
        isPaymentRequired: user?.currentOrganization?.subscription,
        isBusinessCreated: user?.currentOrganization?.buisness?.length
      }

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
      if (to.path !== targetRoute) {
        return targetRoute
      }

    }
  }
)