import React, { useMemo, useReducer } from 'react';

import { FederalStaffContext, rootReducer, rootState } from './context';

export const FederalEmployeeProvider = (props: any) => {
  const [state, dispatch] = useReducer(rootReducer, rootState);
  const storeValue = useMemo(() => ({ dispatch, state }), [dispatch, state]);
  return (
    // @ts-ignore
    <FederalStaffContext.Provider value={storeValue}>
      {props.children}
    </FederalStaffContext.Provider>
  );
};
