import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [num, setNum] = useState(initialValue);

  const increment = (value = 1) => {
    setNum(num + value);
  };

  const reset = () => {
    setNum(initialValue);
  };

  const decrement = (value = 1, bool) => {
    if (bool == false && num == 0) return;
    setNum(num - value);
  };

  //   Este componente exporta el siguiente objeto que contiene valores y métodos
  return {
    num,
    increment,
    decrement,
    reset,
  };
};
