import React, { createContext } from 'react';

import { Action, State } from './types';

export const initialState: State = {
  employee: {
    employeeUuid: '',
    ippis: '',
    firstName: '',
    lastName: '',
    ministry: '',
    gradeLevel: 0,
    stepLevel: 0,
    salary: 0,
    phone: '',
    email: '',
    address: '',
    gender: '',
    maritalStatus: '',
    unpaidList: [],
    createdAt: '',
    updatedAt: '',
  },
  lender: {
    lenderUuid: '',
    lenderName: '',
    address: '',
    createdAt: '',
    updatedAt: '',
  },
  unpaid: {
    id: '',
    employeeUuid: '',
    lenderUuid: '',
    amount: 0,
    month: '',
    createdAt: '',
    updatedAt: '',
  }
};

interface Context {
  dispatch: React.Dispatch<Action>;
  state: State;
}

export const FederalStaffContext = createContext<Context>({
  dispatch: () => undefined,
  state: initialState,
});
