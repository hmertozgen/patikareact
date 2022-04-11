import { object, string, number, date, InferType, ref, yup } from "yup";

let validations = object({
  email: string().email("Geçerli bir email girin.").required("Zorunlu alan."),
  password: string()
    .min(5, "Parola en az 5 karakter olmalıdır.")
    .required("Zorunlu alan."),
  repassword: string()
    .oneOf([ref("password")], "Parolalar uyuşmuyor")
    .required("Zorunlu alan."),
});

export default validations;
