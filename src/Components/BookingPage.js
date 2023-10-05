import React from 'react'
import { BookingForm } from './BookingForm'

export const BookingPage = ({ availableTimes, dispatch, onSubmit }) => {
  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmitForm={onSubmit}/>
    </>
  )
}
