import * as React from "react";
import type { GraphQlQueryResponseData } from "@octokit/graphql";

export function asyncReducer(_state: any, action: any) {
  switch (action.type) {
    case "pending": {
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      return { status: "resolved", data: action.data, error: null };
    }
    case "rejected": {
      return { status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useSafeDispatch(dispatch: any) {
  const mountedRef = React.useRef(false);

  // this is a workaround to silence a warning from calling useLayoutEfftect on SSR
  // more info: https://reactjs.org/link/uselayouteffect-ssr
  const useBrowserLayoutEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : () => {};

  useBrowserLayoutEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return React.useCallback(
    (...args) => (mountedRef.current ? dispatch(...args) : void 0),
    [dispatch]
  );
}

export function useAsyncFetch(
  initialState: any,
  reducer: ReducerProps = asyncReducer
) {
  const [state, unsafeDispatch] = React.useReducer(reducer, {
    status: "idle",
    data: null,
    error: null,
    ...initialState,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  const { data, error, status } = state;

  const run = React.useCallback(
    (promise) => {
      if (!promise || typeof promise.then !== "function")
        throw new Error(
          `The run function expect a promise, but the folowing parameter was provided: "${promise}"`
        );
      dispatch({ type: "pending" });
      promise.then(
        (data: any) => {
          dispatch({ type: "resolved", data });
        },
        (error: any) => {
          dispatch({ type: "rejected", error });
        }
      );
    },
    [dispatch]
  );

  return {
    error,
    status,
    data,
    run,
    dispatch,
  };
}

// *** Types ***
export type ReducerProps = (
  _state: any,
  action: any
) => {
  status: string;
  data: any;
  error: null | GraphQlQueryResponseData;
};
