import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ModalContext, TaskContext } from '../context';

export default function TaskForm() {
  const { state, dispatch } = useContext(TaskContext);
  const { modalState, modalDispatch } = useContext(ModalContext);
  const [errorMessageShow, setErrorMessageShow] = useState(false);
  const [fromData, setFormData] = useState(
    state?.taskId && state.tasks.find((item) => item.id === state.taskId)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getMaxId = (data) => {
    const maxId = data.length
      ? data.reduce((prev, current) =>
          prev && prev.id > current.id ? prev.id : current.id
        )
      : -1;

    return maxId + 1;
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (
      !fromData?.title ||
      !fromData?.description ||
      !fromData?.tags ||
      !fromData?.priority
    ) {
      setErrorMessageShow(true);
      return;
    }

    if (modalState.modalType === 'UPDATE_TASK') {
      dispatch({ type: 'UPDATE_TASK', payload: fromData });
      toast.success('Task Updated Successfully');
    } else {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          id: getMaxId(state.tasks),
          title: fromData.title,
          description: fromData.description,
          tags: fromData.tags,
          priority: fromData.priority,
          isFavorite: false,
        },
      });
      toast.success('Task Added Successfully');
    }
    e.target.reset();
    setFormData(() => ({}));
    modalDispatch({ type: 'CLOSE_FROM_MODAL' });
  };

  return (
    <form action='' onSubmit={handelSubmit}>
      <div className='space-y-9 text-white lg:space-y-10'>
        <div className='space-y-2 lg:space-y-3'>
          <label htmlFor='title'>Title</label>
          <input
            className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
            type='text'
            name='title'
            id='title'
            value={fromData?.title ?? ''}
            onChange={handleChange}
          />
          {errorMessageShow && !fromData?.title && (
            <p className='text-red-500 text-sm'>Title is required</p>
          )}
        </div>

        <div className='space-y-2 lg:space-y-3'>
          <label htmlFor='description'>Description</label>
          <textarea
            className='block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]'
            type='text'
            name='description'
            id='description'
            value={fromData?.description ?? ''}
            onChange={handleChange}
          ></textarea>
          {errorMessageShow && !fromData?.description && (
            <p className='text-red-500 text-sm'>Description is required</p>
          )}
        </div>

        <div className='grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20'>
          <div className='space-y-2 lg:space-y-3'>
            <label htmlFor='tags'>Tags</label>
            <input
              className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
              type='text'
              name='tags'
              id='tags'
              value={fromData?.tags ?? ''}
              onChange={handleChange}
            />

            {errorMessageShow && !fromData?.tags && (
              <p className='text-red-500 text-sm'>Tags is required</p>
            )}
          </div>

          <div className='space-y-2 lg:space-y-3'>
            <label htmlFor='priority'>Priority</label>
            <select
              className='block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5'
              name='priority'
              id='priority'
              value={fromData?.priority ?? ''}
              onChange={handleChange}
            >
              <option value=''>Select Priority</option>
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>

            {errorMessageShow && !fromData?.priority && (
              <p className='text-red-500 text-sm'>Priority is required</p>
            )}
          </div>
        </div>
      </div>

      <div className='mt-16 flex justify-center lg:mt-20'>
        <button
          type='submit'
          className='rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80'
        >
          {modalState.modalProps.buttonText}
        </button>
      </div>
    </form>
  );
}
