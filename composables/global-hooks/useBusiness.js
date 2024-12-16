export const submitBusinessInfo = async (data, token, method) => {
  const formData = new FormData();
  const url = useRuntimeConfig().public?.API_URL;

  formData.append("companyName", data?.business_name);
  formData.append("companyType", data?.business_type);
  formData.append("buisnessClassification", data?.business_classification);
  formData.append("companySize", data?.business_size);
  formData.append("pms", data?.pms);

  // Log the FormData entries
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  try {
    const response = await fetch(url + "buisness", {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const FormRes = await response.json();
    return FormRes;
  } catch (error) {
    console.log(error);
  }
};
