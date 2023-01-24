import { useState } from 'react';

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const increase = (number: number = 1) : void => {
    setCounter(counter + number);
  }

  return (
    <div>
      <h3>Counter</h3>
      <span>Valor: { counter }</span>
      <br />

      <button onClick={() => increase(1) } className='btn btn-outline-primary mt-2'>+1</button>
      <button onClick={() => increase(2) } className='btn btn-outline-primary mt-2'>+2</button>
      <button onClick={() => setCounter(0) } className='btn btn-outline-danger mt-2'>Reset</button>
    </div>
  )
}
