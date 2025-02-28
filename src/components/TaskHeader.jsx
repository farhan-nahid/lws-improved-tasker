import { useContext, useEffect, useState } from 'react';
import { ModalContext, TaskContext } from '../context';

export default function TaskHeader({ data = [] }) {
  const { dispatch } = useContext(TaskContext);
  const { modalDispatch } = useContext(ModalContext);

  const [search, setSearch] = useState('');

  const onChange = (value) => {
    dispatch({ type: 'SEARCH_TASK', payload: value });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(search.trim());
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const handelAddTask = () => {
    modalDispatch({
      type: 'OPEN_FROM_MODAL',
      modalType: 'ADD_NEW_TASK',
      payload: {
        title: 'Add New Task',
        buttonText: 'Create new Task',
      },
    });
  };

  const handelDeleteTask = () => {
    modalDispatch({
      type: 'OPEN_DELETE_MODAL',
      modalType: 'ALL_DELETE',
      payload: {
        title: 'Delete All Task',
        buttonText: 'Delete All Task',
      },
    });
  };

  return (
    <div className='mb-14 items-center justify-between sm:flex'>
      <h2 className='text-2xl font-semibold max-sm:mb-4'>Your Tasks</h2>
      <div className='flex items-center space-x-5'>
        <form>
          <div className='flex'>
            <div className='relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]'>
              <input
                type='search'
                id='search-dropdown'
                className='z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none'
                placeholder='Search Task'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <button
                type='submit'
                className='absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4'
              >
                <svg
                  className='h-4 w-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
                <span className='sr-only'>Search</span>
              </button>
            </div>
          </div>
        </form>
        <button
          className='rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold'
          onClick={handelAddTask}
        >
          Add Task
        </button>
        <button
          className='rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={handelDeleteTask}
          disabled={!data?.length}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
