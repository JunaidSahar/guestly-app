export const submitBusinessInfo = async (data, token, method, image) => {
  const formData = new FormData();
  const url = useRuntimeConfig().public?.API_URL;

  formData.append("companyName", data?.business_name);
  formData.append("companyType", data?.business_type);
  formData.append("buisnessClassification", data?.business_classification);
  formData.append("companySize", data?.business_size);
  formData.append("pms", data?.pms);
  formData.append("image", image);
  formData.append("address[country]", data.country);
  formData.append("address[street]", data.street);
  formData.append("address[city]", data.city);
  formData.append("address[zip]", data.zip);
  formData.append("address[province]", data.province);
  formData.append("taxIdNo", data.vat_number);
  formData.append("codice", data?.invoice_code || "");
  formData.append("email", data?.certified_email_address || "");
  formData.append("phoneNo", data.phone_number);
  formData.append("website", data?.website || "");

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

export const skipIntegration = async (businessId, token) => {
  try {
    const res = await fetch(
      `${useRuntimeConfig().public?.API_URL}buisness/update-on-boarding-flag`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isOnBoarded: true,
          buisnessId: businessId,
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const FormRes = await res.json();
    return FormRes;
  } catch (error) {
    console.log(error);
  }
};
