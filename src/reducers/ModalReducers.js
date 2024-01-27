const initialState = {
  isFromModalOpen: false,
  isDeleteModalOpen: false,
  modalType: '',
  modalProps: {
    buttonText: '',
    title: '',
  },
};

function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_FROM_MODAL':
      return {
        ...state,
        isFromModalOpen: true,
        modalType: action.modalType,
        modalProps: action.payload,
      };

    case 'CLOSE_FROM_MODAL':
      return {
        ...state,
        isFromModalOpen: false,
        modalType: '',
        modalProps: {
          buttonText: '',
          title: '',
        },
      };

    case 'OPEN_DELETE_MODAL':
      return {
        ...state,
        isDeleteModalOpen: true,
        modalType: action.modalType,
        modalProps: action.payload,
      };

    case 'CLOSE_DELETE_MODAL':
      return {
        ...state,
        isDeleteModalOpen: false,
        modalType: '',
        modalProps: {
          buttonText: '',
          title: '',
        },
      };
    default:
      return state;
  }
}

export { ModalReducer, initialState as modalInitialState };
