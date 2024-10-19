// import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterComponent = () => {
  // Se puede decir que esto es un hooks
  const { increment, reset, decrement, num } = useCounter(0);

  return (
    <>
      <h1>Counter: {num}</h1>
      <button className="btn btn-success" onClick={() => { increment(1) }}>+1</button>
      <button className="btn btn-danger" onClick={() => { reset() }}>RESET</button>
      <button className="btn btn-warning" onClick={() => { decrement(1, false) }}>-1</button>
    </>
  );
};
