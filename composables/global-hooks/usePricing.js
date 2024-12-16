export const createCheckout = async (planId) => {
  const token = useCookie("token").value;
  const config = useRuntimeConfig().public;
  try {
    const res = await fetch(
      `${config.API_URL}package/subscribe?planId=${planId}&lang=en`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error(`Error creating checkout: ${res.statusText}`);
    }
    const data = await res.json();
    return data.url;
  } catch (error) {
    console.log(error);
  }
};
