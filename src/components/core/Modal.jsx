// export default function Modal({ title, children, isOpen }) {
//   return (
//     isOpen && (
//       <div
//         className={`bg-black h-screen w-screen absolute top-[50%] left-[50%] translate-x-[-50%] opacity-0 ${
//           isOpen && 'opacity-100'
//         }`}
//       >
//         <div className='mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11'>
//           <h2 className='mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]'>
//             {title}
//           </h2>

//           {children}
//         </div>
//       </div>
//     )
//   );
// }

function Modal({ showModal, setShowModal, title, children }) {
  const closeModal = () => {
    setShowModal(false);
  };

  if (showModal) {
    return (
      <div
        className='fixed top-0 z-[100] left-0 right-0 bottom-0 w-full mx-auto bg-gray-900/80 rounded-xl backdrop-blur-md'
        onClick={closeModal}
      >
        <div className='mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11'>
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
