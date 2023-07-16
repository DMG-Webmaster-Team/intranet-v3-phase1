import React from "react";
import { Route, Redirect } from "react-router-dom";
import VoiceRecorder from "../Pages/Voice-Recorder/VoiceRecorder";

function PublicRoute({ children, isAuthenticated, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          !isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: `${process.env.PUBLIC_URL}/`,
                state: { from: location },
              }}
            />
          )
        }
      />
      <Route
        path={`${process.env.PUBLIC_URL}/voice-record`}
        component={VoiceRecorder}
      />
    </>
  );
}

export default PublicRoute;
