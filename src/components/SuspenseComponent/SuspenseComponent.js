import React, { Suspense } from "react";
// import { DefaultWaitingComponent } from "components/suspense-component/style";
// import Loader from "components/loader";

const SuspenseComponent = (ComposedComponent, WaitingComponent = undefined) => (
  props
) => {
  if (typeof WaitingComponent === "undefined") {
    // WaitingComponent = (
    //   <DefaultWaitingComponent>
    //     <Loader />
    //   </DefaultWaitingComponent>
    // );
    WaitingComponent = <div>Loading...</div>;
  }

  return (
    <Suspense fallback={WaitingComponent}>
      <ComposedComponent {...props} />
    </Suspense>
  );
};

export default SuspenseComponent;
