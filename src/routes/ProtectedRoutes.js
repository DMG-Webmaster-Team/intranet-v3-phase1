import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes"; // Route list
import SkeletonLoader from "../Components/Skeleton/SkeletonLoader";

const ProtectedRoutes = () => {
  return (
    <Switch>
      <Suspense fallback={<SkeletonLoader />}>
        <div className="app-content">
          {routes.map(({ component, path, exact }, idx) => {
            return (
              <Route
                path={`${path}`}
                key={idx}
                exact={exact}
                component={component}
              />
            );
          })}
        </div>
      </Suspense>
    </Switch>
  );
};

export default ProtectedRoutes;
