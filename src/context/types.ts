export interface State {
  employee?: Employee;
  lender?: Lender;
  unpaid?: Unpaid;
  unpaidList?: Unpaid[];
  ui?: Ui;
}

export type EmployeeState = Employee;
export type LenderState = Lender;
export type UnpaidState = Unpaid;
export type UnpaidListState = Unpaid[];
export type UiState = Ui;

export type Action =
  | SetReady
  | SetError
  | SetUnpaid
  | SetUnpaidList
  | SetEmployee;

export interface SetReady {
  type: 'READY_SET';
  payload: {
    loading: boolean;
  };
}

export interface SetError {
  type: 'ERROR_SET';
  payload: {
    error: 'unknownLoad' | 'permission' | null;
  };
}

export interface SetUnpaid {
  type: 'UNPAID_SET';
  payload: {
    unpaid: Unpaid;
  };
}

export interface SetUnpaidList {
  type: 'UNPAIDLIST_SET';
  payload: {
    unpaidList: Unpaid[];
  };
}

export interface SetEmployee {
  type: 'EMPLOYEE_SET'
  payload: {
    employee: Employee;
  };
}

export interface Employee {
  employeeUuid: string;
  ippis: string;
  firstName: string;
  lastName: string;
  ministry: string;
  gradeLevel: number;
  stepLevel: number;
  salary: number;
  phone: string;
  email: string;
  address: string;
  gender: string;
  maritalStatus: string;
  unpaidList: Unpaid[];
  createdAt: string;
  updatedAt: string;
}

export interface Lender {
  lenderUuid: string;
  lenderName: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export interface Unpaid {
  id: string;
  employeeUuid: string;
  lenderUuid: string;
  amount: number;
  month: string;
  createdAt: string;
  updatedAt: string;
}

export interface Ui {
  loading?: boolean;
  error?: 'unknownLoad' | 'permission' | null;
}
