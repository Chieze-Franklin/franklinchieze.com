import { combineReducers } from './combineReducers';
import { initialState } from './context';
import {
  Action,
  EmployeeState,
  UnpaidState,
  UnpaidListState,
  UiState,
} from './types';

const uiReducer = (state: UiState, action: Action): UiState => {
  switch (action.type) {
    case 'READY_SET': {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }

    case 'ERROR_SET': {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};

const employeeReducer = (state: EmployeeState, action: Action): EmployeeState => {
  switch (action.type) {
    case 'EMPLOYEE_SET': {
      return {
        ...state,
        ...action.payload.employee,
      };
    }

    default:
      return state;
  }
};

const unpaidReducer = (state: UnpaidState, action: Action): UnpaidState => {
  switch (action.type) {
    case 'UNPAID_SET': {
      return {
        ...state,
        ...action.payload.unpaid,
      };
    }

    default:
      return state;
  }
};

const unpaidListReducer = (state: UnpaidListState, action: Action): UnpaidListState => {
  switch (action.type) {
    case 'UNPAIDLIST_SET': {
      return {
        ...state,
        ...action.payload.unpaidList,
      };
    }

    default:
      return state;
  }
};

export const [rootReducer, rootState] = combineReducers({
  employee: [employeeReducer, initialState.employee],
  unpaid: [unpaidReducer, initialState.unpaid],
  unpaidList: [unpaidListReducer, initialState.unpaidList],
  ui: [uiReducer, initialState.ui],
});

