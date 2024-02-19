import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/Features/counter/counterSlice";
import { getCountry } from "./redux/Features/country/countrySlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state.counter);
  const { country } = useSelector((state) => state.country);
  console.log(country);

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <div className="App">
      <span onClick={() => dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(increment())}>+</span>

      <div>
        {country.map((countryItem) => (
          <div key={countryItem.name.common}>
            <img
              key={countryItem.name.common}
              src={countryItem.flags.svg}
              alt={countryItem.name.common}
              style={{ width: "100px", height: "auto", margin: "5px" }}
            />
            <p>{countryItem.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
