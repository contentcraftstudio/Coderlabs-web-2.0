import React from "react";

export default function SaveToContacts() {
  const contactInfo = {
    name: "Coder Labs",
    email: "contact@coderlabs.co",
    phone: "+573002771564",
    address:
      "Calle 35A No. 17-74, piso 3, Barranquilla, Atlantico, Colombia, 080006",
    businessHours: "Lunes - viernes 9:00 a.m - 18:00 p.m",
    notes: "Confirmar antes de llegar",
  };

  const handleDownload = () => {
    // Build the content of the vCard in vCard 4.0 format
    const vCardContent = `
    BEGIN:VCARD
    VERSION:4.0
    N:Gump;Forrest;;Mr.;
    FN:Forrest Gump
    ORG:CoderLabs.
    TITLE:Shrimp Man
    TEL;TYPE=work,voice;VALUE=uri:tel:+57-300-277-1564
    ADR;TYPE=WORK;PREF=1;LABEL="100 Waters Edge\nBaytown\, LA 30314\nUnited States of America":;;100 Waters Edge;Baytown;LA;30314;United States of America
    ADR;TYPE=HOME;LABEL="42 Plantation St.\nBaytown\, LA 30314\nUnited States of America":;;42 Plantation St.;Baytown;LA;30314;United States of America
    EMAIL:contact@coderlabs.co
    REV:20080424T195243Z
    x-qq:21588891
    END:VCARD`;

    // Create a Blob object for the content and create a URL for downloading it
    const blob = new Blob([vCardContent], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);

    // Create a download link and simulate a click to download the file
    const a = document.createElement("a");
    a.href = url;
    a.download = "CoderLabs.vcf";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button
        className="flex w-full justify-center items-center px-2 py-2 mt-16 text-black border rounded-[50px] border-gray-200 font-semibold text-xs"
        onClick={handleDownload}
      >
        Save to contacts
      </button>
    </div>
  );
}
