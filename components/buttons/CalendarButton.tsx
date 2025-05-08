import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import IButton from '../form/Button'

export default function CalendarButton () {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <div onClick={openModal}>
        <IButton label={t('Book_a_call')} variant='outlined' />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50'>
          <div ref={modalRef} className='relative bg-white rounded-[12px] shadow-lg w-full max-w-4xl'>
            {/* Header del modal */}
            <div className='flex justify-between items-center p-6 border-b border-gray-200'>
              <h3 className='text-2xl font-secondary font-medium'>{t('Book_a_call')}</h3>
              <button 
                onClick={closeModal}
                className='text-gray-500 hover:text-gray-700 focus:outline-none'
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            
            {/* Contenido del modal */}
            <div className='p-6'>
              {/* Google Calendar Appointment Scheduling */}
              <iframe 
                src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ3flhoywGSwl1DYigKPTdlYovA8OrPw1wcsrzB4efvYLSpKylLhaOBWkewFFQKpWbfFoBwpJk-p?gv=true' 
                style={{ border: 0 }} 
                width='100%' 
                height='600' 
                frameBorder='0'
              />
            </div>
            
            {/* Footer del modal */}
            <div className='flex justify-end p-6 border-t border-gray-200'>
              <button
                onClick={closeModal}
                className='px-6 py-2 bg-background-dark text-white rounded-[8px] font-primary font-medium hover:bg-gray-700 transition-colors'
              >
                {t('Cerrar')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}