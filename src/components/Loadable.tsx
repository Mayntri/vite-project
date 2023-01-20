import { Loader } from "@mayntri/frontend-core";
import { Suspense } from "react";

export const Loadable = (Component: any) => (props: {}) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
