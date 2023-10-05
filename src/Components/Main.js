import React, { useEffect, useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { HomePage } from './HomePage';
import { BookingPage } from './BookingPage'
import { Hero } from './Hero'
import { About } from './About'
import { Specials } from './Specials'
import { Testimonials } from './Testimonials'
import { ConfirmedBooking } from './ConfirmedBooking';
import { availableTimesByDate, fetchAPI, submitAPI } from '../api';

export const Main = () => {

    const navigate = useNavigate();

    const reducer = (state, action) => {
        if (action.type === 'INITIALIZE_TIMES') {
            return action.payload;
        }
        if(action.type === 'UPDATE_TIMES'){
            const selectedDate = action.payload;
            return availableTimesByDate[selectedDate] || []
        }

        return state;
      }

    const [availableTimes, dispatch] = useReducer(reducer, []);

    const initializeTimes = async () =>{
         try {
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            const availableTimes = await fetchAPI(formattedDate);
            dispatch({type: 'INITIALIZE_TIMES', payload: availableTimes})
         } catch (error) {
            console.error('Error fetching available times:', error);
         }
    }

      const updateTimes = async (selectedDate) => {
        try {
            const availableTimes = await fetchAPI(selectedDate);
            dispatch({type: 'INITIALIZE_TIMES', payload: availableTimes})
        } catch (error) {
            console.error(error)
        }
      }

      const submitForm = async (formData) => {
        try {
            const isSubmitted = await submitAPI(formData)
            if(isSubmitted){
                navigate('/confirmed');
            }
        } catch (error) {
            console.error(error)
        }
      }


    useEffect(() => {
      initializeTimes(dispatch)
    }, [])


    return (
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} onSubmit={submitForm} />}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />} />
                <Route path="/hero" element={<Hero />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/specials" element={<Specials />}></Route>
                <Route path="/testimonials" element={<Testimonials />}></Route>
            </Routes>
    )
}
