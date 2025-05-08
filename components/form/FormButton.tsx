import React from "react";
import { useFormikContext } from "formik";
import { useTranslation } from "react-i18next";

export default function FormButton() {
  const { submitForm } = useFormikContext();
  const { t } = useTranslation();
  return (
    <button
      className="w-[133px] h-[44px] rounded-[8px] bg-background-dark text-white text-[14px] font-primary font-medium text-center"
      type="submit"
      onClick={() => submitForm()}
    >
      {t("Submit")}
    </button>
  );
}
