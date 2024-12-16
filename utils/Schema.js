import { object, string } from "yup";

export const registerSchema = object({
  fullName: string().min(8, "Name must be 8 charactors").required("Required"),
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

export const loginSchema = object({
  email: string().email("Invalid email").required("Required"),
  password: string(),
});

export const businessInfoSchema = object({
  business_name: string()
    .max(50, "Business name must be maximum 50 characters")
    .required("Business Name is required"),
  business_type: string().required("Business Type is required"),
  business_classification: string(),
  business_size: string().required("Business Size is required"),
  pms: string().required("PMS is required"),
});

export const addressSchema = object({
  country: string(),
  provice: string(),
  address: string(),
  city: string(),
  zip: string(),
});
