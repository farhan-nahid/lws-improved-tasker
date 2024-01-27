import { useReducer } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import TaskContainer from './components/TaskContainer';
import { ModalContext, TaskContext } from './context';
import { ModalReducer, modalInitialState } from './reducers/ModalReducers';
import { TaskReducer, initialState } from './reducers/TaskReducer';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  const [modalState, modalDispatch] = useReducer(ModalReducer, modalInitialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <ModalContext.Provider value={{ modalState, modalDispatch }}>
        <Navigation />
        <Hero />
        <TaskContainer />
        <Footer />
        <ToastContainer />
      </ModalContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
