import empty from '../assets/empty.png';
import TaskList from './TaskList';

export default function TaskTable({ data = [] }) {
  return (
    <>
      {data?.length > 0 ? (
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
            {data?.map((item) => (
              <TaskList key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className='flex items-center justify-center h-[300px]'>
          <div className='flex flex-col items-center'>
            <img src={empty} alt='' className='h-20 w-20' />
            <p className='text-2xl font-semibold mt-5 text-[#FE1A1AB5]'>
              Task List is empty!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
