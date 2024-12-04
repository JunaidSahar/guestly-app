import { object, string } from "yup";

export const registerSchema = object({
  fullName: string().min(8, "Name must be 8 charactors").required("Required"),
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});
