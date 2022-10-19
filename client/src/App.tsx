import {useEffect} from  "react";

import './App.css';
import { signIn } from "./slices/login/action";
import { useDispatch } from './store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signIn());
  }, [dispatch]);

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
