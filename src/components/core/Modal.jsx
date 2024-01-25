import cross from '../../assets/cross.png';

function Modal({ isModalOpen, onCloseModal, title, children }) {
  if (isModalOpen) {
    return (
      <div
        className='fixed top-0 z-[100] left-0 right-0 bottom-0 w-full mx-auto bg-gray-900/80 rounded-xl backdrop-blur-md'
        onClick={onCloseModal}
      >
        <div
          className='mx-auto relative my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='absolute right-5 top-5 cursor-pointer' onClick={onCloseModal}>
            <img src={cross} alt='cross' className='h-5 w-5' />
          </div>

          <h2 className='mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]'>
            {title}
          </h2>
          {children}
        </div>
      </div>
    );
  } else {
    return '';
  }
}

export default Modal;
