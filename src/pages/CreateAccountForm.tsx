import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import Checkbox from "../components/fields/Checkbox";
import RadioButtons, {
  RadioButtonsOptions,
} from "../components/fields/RadioButtons";
import TextField from "../components/fields/TextField";
import i18n from "../i18n";
import {
  CreateAccountSchema,
  validationSchema,
} from "../utils/validation-schemas/create-account";
import { Fields, Gender } from "../utils/validation-schemas/fields";

const CreateAccountForm = () => {
  const { t } = i18n;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountSchema>({
    resolver: zodResolver(validationSchema),
  });

  const genderOptions: RadioButtonsOptions = [
    { label: t(`gender.${Gender.M}`), value: Gender.M },
    { label: t(`gender.${Gender.F}`), value: Gender.F },
  ];

  const onSubmit: SubmitHandler<CreateAccountSchema> = (data) => {
    alert(t("form.alert.thanks", { firstname: data.firstName }));
  };

  return (
    <>
      <h1 className='pt-4 text-2xl text-center font-bold'>
        {t("form.createAccount.title")}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='px-8 pt-6 pb-8 mb-5'>
        <RadioButtons
          name={Fields.GENDER}
          className='mb-3'
          options={genderOptions}
          label={t(`form.labels.${Fields.GENDER}`)}
          register={register(Fields.GENDER)}
          error={errors[Fields.GENDER]}
        />
        <div className='md:flex md:justify-between'>
          <TextField
            className='mb-5 md:mr-2 md:mb-0'
            register={register(Fields.FIRST_NAME)}
            name={Fields.FIRST_NAME}
            label={t(`form.labels.${Fields.FIRST_NAME}`)}
            error={errors[Fields.FIRST_NAME]}
          />
          <TextField
            className='mb-5 md:ml-2'
            register={register(Fields.LAST_NAME)}
            name={Fields.LAST_NAME}
            label={t(`form.labels.${Fields.LAST_NAME}`)}
            error={errors[Fields.LAST_NAME]}
          />
        </div>

        <TextField
          className='mb-5'
          register={register(Fields.EMAIL)}
          name={Fields.EMAIL}
          label={t(`form.labels.${Fields.EMAIL}`)}
          type='email'
          error={errors[Fields.EMAIL]}
        />

        <div className='md:flex md:justify-between'>
          <TextField
            className='mb-5 md:mr-2 md:mb-0'
            register={register(Fields.PASSWORD)}
            name={Fields.PASSWORD}
            label={t(`form.labels.${Fields.PASSWORD}`)}
            type='password'
            error={errors[Fields.PASSWORD]}
          />
          <TextField
            className='mb-5 md:ml-2'
            register={register(Fields.CONFIRM_PASSWORD)}
            name={Fields.CONFIRM_PASSWORD}
            label={t(`form.labels.${Fields.CONFIRM_PASSWORD}`)}
            type='password'
            error={errors[Fields.CONFIRM_PASSWORD]}
          />
        </div>

        <Checkbox
          className='mb-5'
          register={register(Fields.TERMS)}
          name={Fields.TERMS}
          label={t(`form.labels.${Fields.TERMS}`)}
          error={errors[Fields.TERMS]}
        />
        <Button
          data-test='button'
          type='submit'
          className='text-white bg-blue-500 w-full hover:bg-blue-700'
        >
          {t("form.createAccount.submit")}
        </Button>
      </form>
    </>
  );
};

export default CreateAccountForm;
