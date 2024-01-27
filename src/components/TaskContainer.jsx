import { useContext, useEffect, useState } from 'react';

import { ModalContext, TaskContext } from '../context';
import DeleteAlert from './DeleteAlert';
import TaskForm from './TaskForm';
import TaskHeader from './TaskHeader';
import TaskTable from './TaskTable';
import Modal from './core/Modal';

export default function TaskContainer() {
  const { state, dispatch } = useContext(TaskContext);
  const { modalState, modalDispatch } = useContext(ModalContext);
  const [filteredTaskData, setFilteredTaskData] = useState(state?.tasks);

  useEffect(() => {
    if (state?.taskSearch) {
      const filteredBooks = state?.tasks.filter((book) =>
        book.title.toLowerCase().includes(state?.taskSearch.toLowerCase())
      );
      setFilteredTaskData(filteredBooks);
    } else {
      setFilteredTaskData(state?.tasks);
    }
  }, [state?.taskSearch, state?.tasks]);

  const handelFromModalClose = () => {
    dispatch({ type: 'RESET_TASK_ID' });
    modalDispatch({ type: 'CLOSE_FROM_MODAL' });
  };

  const handelDeleteModalClose = () => {
    dispatch({ type: 'RESET_TASK_ID' });
    modalDispatch({ type: 'CLOSE_DELETE_MODAL' });
  };

  return (
    <>
      <section className='mb-20'>
        <div className='container'>
          <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
            <TaskHeader data={filteredTaskData} />
            <div className='overflow-auto'>
              <TaskTable data={filteredTaskData} />
            </div>
          </div>
        </div>
      </section>

      <Modal onCloseModal={handelFromModalClose} isModalOpen={modalState.isFromModalOpen}>
        <TaskForm />
      </Modal>

      <Modal
        onCloseModal={handelDeleteModalClose}
        isModalOpen={modalState.isDeleteModalOpen}
      >
        <DeleteAlert />
      </Modal>
    </>
  );
}
