import { render, screen } from "@testing-library/react";
import { BookingForm } from "./Components/BookingForm";
import { initializeTimes, updateTimes } from "./Components/Main";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];
  
    const times = initializeTimes;
    expect(times).toEqual(expectedTimes);
  })

  test('updateTimes returns the same state provided as argument', () => {
    const initialState = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];
  
    const selectedDate = '2023-10-10';
  
    const updatedTimes = updateTimes(initialState, selectedDate);
    expect(updatedTimes).toEqual(initialState);
  });