import { useContext } from 'react';
import { TaskContext } from '../context';
import { colors } from '../data/data';

export default function TaskList({
  item,
  onModalIsOpenChange,
  onModalDeleteIsOpenChange,
}) {
  const { dispatch } = useContext(TaskContext);

  const handleEditTask = () => {
    onModalIsOpenChange(true, 'Edit Task');

    dispatch({ type: 'ADD_TASKId', payload: item.id });
  };

  const handelDeleteTask = () => {
    dispatch({ type: 'ADD_TASKId', payload: item.id });

    onModalDeleteIsOpenChange(true, 'Delete');
  };

  const toggleFavorite = () => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: item.id });
  };

  return (
    <tr className='border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2'>
      <td>
        <svg
          onClick={toggleFavorite}
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
          {item.tags.split(',').map((tag) => (
            <li key={tag}>
              <span
                className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]  ${
                  colors[Math.floor(Math.random() * colors.length)]
                }`}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className='text-center capitalize'>{item.priority}</td>
      <td>
        <div className='flex items-center justify-center space-x-3'>
          <button className='text-red-500' onClick={handelDeleteTask}>
            Delete
          </button>
          <button className='text-blue-500' onClick={handleEditTask}>
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
