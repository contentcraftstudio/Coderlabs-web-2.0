import React from 'react'

export default function SaveToContacts () {
  const handleDownload = () => {
    // Build the content of the vCard in vCard 4.0 format
    const vCardContent = `
    BEGIN:VCARD
    VERSION:4.0
    N:CoderLabs;
    FN:CoderLabs
    ORG:CoderLabs.
    TITLE:Company
    TEL;TYPE=work,voice;VALUE=uri:tel:+57-300-277-1564
    ADR;TYPE=WORK;PREF=1;LABEL="Calle 35A No. 17-74, piso 3;Barranquilla;Atlantico;080006;Colombia"
    BUSINESS:Lunes - viernes 9:00 a.m - 18:00 p.m
    EMAIL:contact@coderlabs.co
    REV:20231018T195243Z
    END:VCARD`

    // Create a Blob object for the content and create a URL for downloading it
    const blob = new Blob([vCardContent], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)

    // Create a download link and simulate a click to download the file
    const a = document.createElement('a')
    a.href = url
    a.download = 'CoderLabs.vcf'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div>
      <button
        className='flex w-full justify-center items-center px-2 py-2 mt-16 text-black border rounded-[50px] border-gray-200 font-semibold text-xs'
        onClick={handleDownload}
      >
        Save to contacts
      </button>
    </div>
  )
}
