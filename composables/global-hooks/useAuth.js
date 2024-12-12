// const baseUrl = useRuntimeConfig().public.API_URL;

export const useRegister = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: data.password,
        name: data.fullName,
        lang: "en",
      }),
    });

    return res.json();
  } catch (error) {
    return error;
  }
};

export const useLogin = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        lang: "en",
      }),
    });

    return res.json();
  } catch (error) {
    return error;
  }
};
