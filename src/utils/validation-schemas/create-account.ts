import { z } from "zod";
import i18n from "../../i18n";
import { Fields, Gender } from "./fields";

const { t } = i18n;

export const fieldRequiredMessage = (field: Fields) => {
  return t("form.errorMessages.fieldRequired", {
    field: t(`form.labels.${field}`),
  });
};

export const validationSchema = z
  .object({
    [Fields.GENDER]: z.nativeEnum(Gender, {
      invalid_type_error: fieldRequiredMessage(Fields.GENDER),
    }),
    [Fields.FIRST_NAME]: z.string().min(1, {
      message: fieldRequiredMessage(Fields.FIRST_NAME),
    }),
    [Fields.LAST_NAME]: z
      .string()
      .min(1, { message: fieldRequiredMessage(Fields.LAST_NAME) }),
    [Fields.EMAIL]: z
      .string()
      .min(1, { message: fieldRequiredMessage(Fields.EMAIL) })
      .email({
        message: t("form.errorMessages.mustBeValidEmail"),
      }),
    [Fields.PASSWORD]: z
      .string()
      .min(6, { message: t("form.errorMessages.passwordLength") }),
    [Fields.CONFIRM_PASSWORD]: z.string().min(1, {
      message: fieldRequiredMessage(Fields.CONFIRM_PASSWORD),
    }),
    [Fields.TERMS]: z.literal(true, {
      errorMap: () => {
        return { message: t("form.errorMessages.acceptTerms") };
      },
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: [Fields.CONFIRM_PASSWORD],
    message: t("form.errorMessages.passwordNotMatch"),
  });

export type CreateAccountSchema = z.infer<typeof validationSchema>;
