import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'
import '../02-useEffect/effect.css'
import { useState } from 'react';

export const RealExampleRef = () => {

  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />

      

      {show && <MultipleCustomHooks/>}

      <button className='btn btn-primary mt-5'
      onClick={()=> setShow(prev => !prev)}
      >Show/Hide</button>
    </div>
  );
};
