import TaskTable from './TaskTable';
import TaskTableHeader from './TaskTableHeader';

export default function TaskContainer() {
  return (
    <section className='mb-20'>
      <div className='container'>
        <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
          <TaskTableHeader />
          <div className='overflow-auto'>
            <TaskTable />
          </div>
        </div>
      </div>
    </section>
  );
}
