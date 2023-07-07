import { useRef } from 'react';
import '../02-useEffect/effect.css';

export const FocusScreen = () => {

const inputRef = useRef();
// console.log(ref);

const handleClick=()=>{
  // document.querySelector('input').select() esto se reemplaza con la linea de abajo
  inputRef.current.select()
}

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} type="text" className="form-control" placeholder="Su Nombre" />

      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
