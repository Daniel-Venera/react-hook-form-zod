import { Fields, Gender } from "../utils/validation-schemas/fields";

const fr = {
  gender: {
    [Gender.M]: "Mr",
    [Gender.F]: "Mrs",
  },
  form: {
    labels: {
      [Fields.FIRST_NAME]: "Firstname",
      [Fields.LAST_NAME]: "Lastname",
      [Fields.EMAIL]: "Email",
      [Fields.PASSWORD]: "Password",
      [Fields.CONFIRM_PASSWORD]: "Confirm Password",
      [Fields.TERMS]: "Accept terms & conditions",
      [Fields.GENDER]: "Gender",
    },
    errorMessages: {
      fieldRequired: "{{field}} is required",
      mustBeValidEmail: "Must be a valid email",
      passwordLength: "Password must be at least 6 characters",
      acceptTerms: "You must accept Terms and Conditions",
      passwordNotMatch: "Password don't match",
    },
    createAccount: {
      title: "Create Account",
      submit: "Create",
    },
    alert: {
      thanks: "Thank you {{firstname}} for submitting !",
    },
  },
};

export default fr;
