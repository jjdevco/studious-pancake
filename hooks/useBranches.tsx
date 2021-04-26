import * as React from "react";

const BranchesStateContext = React.createContext<IBranchesState | undefined>(
  undefined
);
BranchesStateContext.displayName = "BranchesStateContext";

const BranchesDispatchContext = React.createContext<
  React.Dispatch<Actions> | undefined
>(undefined);
BranchesDispatchContext.displayName = "BranchesDispatchContext";

const initialState: IBranchesState = {
  activeBranch: null,
  branches: [],
};

export function branchesReducer(state: IBranchesState, action: Actions) {
  switch (action.type) {
    case Types.changeActive:
      return {
        ...state,
        activeBranch: action.data,
      };

    case Types.setBranches:
      return {
        ...state,
        activeBranch: action.branches[0],
        branches: action.branches,
      };

    default:
      throw new Error(`Unsupported action: ${action}`);
      return initialState;
  }
}

export function BranchesProvider({ children }: IBranchesProvider) {
  const [state, dispatch] = React.useReducer(branchesReducer, initialState);

  const memoizedState = React.useMemo(() => state, [state]);
  const memoizedDispatch = React.useMemo(() => dispatch, [dispatch]);

  return (
    <BranchesStateContext.Provider value={memoizedState}>
      <BranchesDispatchContext.Provider value={memoizedDispatch}>
        {children}
      </BranchesDispatchContext.Provider>
    </BranchesStateContext.Provider>
  );
}

export function useBranchesState() {
  const context = React.useContext(BranchesStateContext);
  if (context === undefined) {
    throw new Error("useBranchesState must be used within a BranchesProvider");
  }
  return context;
}

export function useBranchesDispatch() {
  const context = React.useContext(BranchesDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useBranchesDispatch must be used within a BranchesProvider"
    );
  }
  return context;
}

/// *** Types ***
interface IBranchesProvider {
  children: React.ReactNode;
}

interface IBranch {
  name: string;
}

interface IBranchesState {
  activeBranch: IBranch | null;
  branches: IBranch[];
}

export enum Types {
  changeActive = "CHANGEACTIVE",
  setBranches = "SETBRANCHES",
}

type Actions =
  | {
      type: Types.changeActive;
      data: IBranch;
    }
  | {
      type: Types.setBranches;
      branches: IBranch[];
    };
