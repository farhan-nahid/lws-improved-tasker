import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import alert from '../assets/alert.png';
import { TaskContext } from '../context';
import TaskForm from './TaskForm';
import TaskTable from './TaskTable';
import TaskTableHeader from './TaskTableHeader';
import Modal from './core/Modal';

export default function TaskContainer() {
  const { state, dispatch } = useContext(TaskContext);

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

  const [formModal, setFormModal] = useState({
    isModalOpen: false,
    title: '',
  });

  const [deleteModal, setDeleteModal] = useState({
    isModalOpen: false,
    buttonText: '',
  });

  const handleModalIsOpenChange = (isOpen, title) => {
    setFormModal((prev) => ({
      ...prev,
      isModalOpen: isOpen,
      title,
    }));
  };

  const handleDeleteModalIsOpenChange = (isOpen, buttonText) => {
    setDeleteModal((prev) => ({
      ...prev,
      isModalOpen: isOpen,
      buttonText,
    }));
  };

  const handelFromModalClose = () => {
    dispatch({ type: 'RESET_TASK' });
    setFormModal((prev) => ({
      ...prev,
      isModalOpen: false,
    }));
  };

  const handelDeleteModalClose = () => {
    dispatch({ type: 'RESET_TASK' });
    setDeleteModal((prev) => ({
      ...prev,
      isModalOpen: false,
    }));
  };

  const handleDeleteTask = () => {
    if (deleteModal.buttonText === 'Delete') {
      dispatch({ type: 'DELETE_TASK', payload: state?.taskId });
    } else {
      dispatch({ type: 'DELETE_All_TASK' });
    }
    handelDeleteModalClose();
    toast.success('Task Deleted Successfully');
  };

  return (
    <>
      <section className='mb-20'>
        <div className='container'>
          <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
            <TaskTableHeader
              onDeleteTask={handleDeleteModalIsOpenChange}
              onModalIsOpenChange={handleModalIsOpenChange}
              data={filteredTaskData}
            />
            <div className='overflow-auto'>
              <TaskTable
                data={filteredTaskData}
                onModalIsOpenChange={handleModalIsOpenChange}
                onModalDeleteIsOpenChange={handleDeleteModalIsOpenChange}
              />
            </div>
          </div>
        </div>
      </section>

      <Modal
        title={formModal.title}
        onCloseModal={handelFromModalClose}
        isModalOpen={formModal.isModalOpen}
      >
        <TaskForm buttonText={formModal?.title} onCloseModal={handelFromModalClose} />
      </Modal>

      <Modal onCloseModal={handelDeleteModalClose} isModalOpen={deleteModal.isModalOpen}>
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
            {deleteModal.buttonText}
          </button>
        </div>
      </Modal>
    </>
  );
}
