import { useState } from 'react';
import TaskForm from './TaskForm';
import Modal from './core/Modal';

export default function TaskTable() {
  const data = [
    {
      id: 1,
      title: 'Integration API',
      description:
        'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
      tags: ['Web', 'Python', 'API'],
      priority: 'High',
      isFavorite: true,
    },
    {
      id: 2,
      title: 'API Data Synchronization with Python',
      description:
        'Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.',
      tags: ['Python', 'API', 'Data Synchronization'],
      priority: 'High',
      isFavorite: false,
    },
    {
      id: 3,
      title: 'Efficient Web API Connectivity in Python',
      description:
        'Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.',
      tags: ['Web', 'Python', 'API'],
      priority: 'High',
      isFavorite: false,
    },
    {
      id: 4,
      title: 'Data Handling',
      description:
        'Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.',
      tags: ['Web', 'Python', 'Security'],
      priority: 'High',
      isFavorite: true,
    },
  ];

  const colors = [
    'bg-[#00D991A1]',
    'bg-[#1C92FFB0]',
    'bg-[#FE1A1AB5]',
    'bg-[#00B2D9CC]',
    'bg-[#8407E6A8]',
    'bg-[#07AC67D6]',
    'bg-[#2F43F8BF]',
    'bg-[#AE6D0BDB]',
    'bg-[#10FBEDB2]',
    'bg-[#BD560BB2]',
    'bg-[#2E3443]',
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalIsOpen = () => {
    setIsModalOpen(() => true);
  };

  console.log(isModalOpen);

  return (
    <>
      <table className='table-fixed overflow-auto xl:w-full'>
        <thead>
          <tr>
            <th className='p-4 pb-8 text-sm font-semibold capitalize w-[48px]'></th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize w-[300px]'>
              {' '}
              Title{' '}
            </th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize w-full'>
              {' '}
              Description{' '}
            </th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]'>
              {' '}
              Tags{' '}
            </th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]'>
              {' '}
              Priority{' '}
            </th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]'>
              {' '}
              Options{' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item?.id}
              className='border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2'
            >
              <td>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-star'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke={item.isFavorite ? 'yellow' : 'currentColor'}
                  fill={item.isFavorite ? 'yellow' : 'none'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
                </svg>
              </td>
              <td>{item.title}</td>
              <td>
                <div>{item.description}</div>
              </td>
              <td>
                <ul className='flex justify-center gap-1.5 flex-wrap'>
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <span
                        className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6] ${
                          colors[Math.floor(Math.random() * colors.length)]
                        }`}
                      >
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className='text-center'>{item.priority}</td>
              <td>
                <div className='flex items-center justify-center space-x-3'>
                  <button className='text-red-500'>Delete</button>
                  <button className='text-blue-500' onClick={handleModalIsOpen}>
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal title='Add New Task' setShowModal={setIsModalOpen} showModal={isModalOpen}>
        <TaskForm />
      </Modal>
    </>
  );
}
