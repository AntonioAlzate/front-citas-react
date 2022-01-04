import { getCitas, getCitasByIdPaciente } from './store/actions/citas-action';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react'
import citasReducer from './store/reducers/citas-reducer';

function App() {
  
  const dispatch = useDispatch();
  
  const citas = useSelector(state => state.citasReducer.citas)

  useEffect(() => {
    dispatch(getCitasByIdPaciente(7))
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Front Citas</h1>
    </div>
  );
}

export default App;
