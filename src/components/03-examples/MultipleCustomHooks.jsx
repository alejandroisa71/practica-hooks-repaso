import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {

  const{increment, counter}= useCounter(1)

  const { loading,data } = useFetch(`https://pokeapi.co/api/v2/berry/${counter}/`);
  const{name, size} =  !!data && data



  return (
    <div>
      <h1>Pokemones</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{name}</p>
          <footer className="blockquote-footer">{size}</footer>
        </blockquote>
      )}
      <button onClick={increment} className='btn btn-primary'>Siguiente Pokemon</button>
    </div>
  );
};
