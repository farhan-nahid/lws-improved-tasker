import { useContext } from 'react';
import { toast } from 'react-toastify';
import alert from '../assets/alert.png';
import { ModalContext, TaskContext } from '../context';

export default function DeleteAlert() {
  const { state, dispatch } = useContext(TaskContext);
  const { modalState, modalDispatch } = useContext(ModalContext);

  const handleDeleteTask = () => {
    if (modalState.modalType === 'SINGLE_DELETE') {
      dispatch({ type: 'DELETE_TASK', payload: state?.taskId });
    } else {
      dispatch({ type: 'DELETE_All_TASK' });
    }

    modalDispatch({ type: 'CLOSE_DELETE_MODAL' });
    toast.success('Task Deleted Successfully');
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <img src={alert} alt='' className='h-36 w-36' />
        <p className='mt-16  text-2xl font-bold '>Are You Sure?</p>
      </div>

      <div className='mt-16 flex justify-center lg:mt-20'>
        <button
          type='submit'
          className='rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80'
          onClick={handleDeleteTask}
        >
          {modalState.modalProps.buttonText}
        </button>
      </div>
    </>
  );
}
