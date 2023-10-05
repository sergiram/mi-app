import React, { useEffect, useState } from 'react'

export const BookingForm = ({availableTimes, dispatch, onSubmitForm}) => {

  const today = new Date();
  const [date, setDate] = useState(today.toISOString().split('T')[0]);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const [isFormValid, setIsFormValid] = useState(false);


  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate)
    validateForm()

    dispatch({type: 'UPDATE_TIMES', payload: selectedDate})
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value)
    validateForm()
  }

  const handleGuestChange = (event) => {
    setGuests(parseInt(event.target.value, 10))
    validateForm()
  }

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value)
    validateForm()
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if(isFormValid){
      const formData = {
        date,
        time,
        guests,
        occasion
      }
      onSubmitForm(formData);
    }
  }

  useEffect(() => {
    if(availableTimes.length > 0 && !time){
      setTime(availableTimes[0])
    }else if (!availableTimes.includes(time)){
      setTime(availableTimes[0])
    }
    validateForm();

  }, [availableTimes, time])

  const validateForm = () => {

    const isDateValid = date != ""
    const isTimeValid = availableTimes.includes(time)
    const isGuestsValid = guests >= 1 && guests <= 10
    const isOccasionValid = occasion != "" && (occasion === "Birthday" || occasion === "Anniversary")

    const isValid = isDateValid && isTimeValid && isGuestsValid && isOccasionValid;
    setIsFormValid(isValid)
  }

  return (
    <>
    <h1>Reservations</h1>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
          {
            availableTimes && availableTimes.map( (availableTime) => {
              return <option key={availableTime}>{availableTime}</option>
            })
          }
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestChange}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input aria-label="On Click" type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  </>
  )
}
