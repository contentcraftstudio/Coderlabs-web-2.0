import React from "react";
import { useTranslation } from "react-i18next";
import IButton from "../form/Button";

export default function CalendarButton() {
  const { t } = useTranslation();

  return (
    <a
      href="https://wa.me/573506236454"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <IButton label={t("Book_a_call")} variant="outlined" />
    </a>
  );
}
