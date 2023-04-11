import React, {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useState,
} from 'react';

//Context is global whereas state is local to component

export const QuestionStatusChangeContext = createContext({
  updated: false,
  toggle: () => {},
});

export const QuestionStatusChangedContextProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  const [updated, setUpdated] = useState(false);

  function toggleHandler() {
    updated ? setUpdated(false) : setUpdated(true);
  }
  return (
    <QuestionStatusChangeContext.Provider
      value={{
        updated: updated,
        toggle: toggleHandler,
      }}
    >
      {props.children}
    </QuestionStatusChangeContext.Provider>
  );
};
