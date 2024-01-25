import { useReducer } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import TaskContainer from './components/TaskContainer';
import { TaskContext } from './context';
import { TaskReducer, initialState } from './reducers/TaskReducer';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <Navigation />
      <Hero />
      <TaskContainer />
      <Footer />
      <ToastContainer />
    </TaskContext.Provider>
  );
}

export default App;
