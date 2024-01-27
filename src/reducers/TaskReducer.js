import { initialTasks } from '../data/data';

const initialState = {
  tasks: initialTasks,
  taskId: null,
  taskSearch: '',
};

function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case 'DELETE_All_TASK':
      return {
        ...state,
        tasks: [],
      };

    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action?.payload?.id ? action.payload : task
        ),
      };

    case 'TOGGLE_FAVORITE': {
      console.log(action.payload);
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action?.payload ? { ...task, isFavorite: !task.isFavorite } : task
        ),
      };
    }

    case 'ADD_TASK_ID':
      return {
        ...state,
        taskId: action.payload,
      };

    case 'RESET_TASK_ID':
      return {
        ...state,
        taskId: null,
      };

    case 'SEARCH_TASK':
      return {
        ...state,
        taskSearch: action.payload,
      };

    default:
      return state;
  }
}

export { TaskReducer, initialState };
