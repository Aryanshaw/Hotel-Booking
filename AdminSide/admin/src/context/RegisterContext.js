import { createContext, useReducer, useEffect } from "react";

const INITIAL_STATE = {
  name: JSON.parse(localStorage.getItem("name")) || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const RegisterContext = createContext(INITIAL_STATE);

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return {
        name:null,
        user: null,
        loading: true,
        error: null,
      };
    case "REGISTER_SUCCESS":
      return {
        name: action.payload,
        user: action.payload,
        loading: false,
        error: null,
      };
    case "REGISTER_FAILURE":
      return {
        name: null,
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const RegisterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegisterReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <RegisterContext.Provider
      value={{
        name: state.name,
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
