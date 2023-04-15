import React, {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useState,
} from 'react';

interface ShowCompletedContextProps {
  showCompleted: boolean;
  setShowCompleted: (show: boolean) => void;
}

export const ShowCompletedContext = createContext<ShowCompletedContextProps>({
  showCompleted: false,
  setShowCompleted: () => {},
});

export const ShowCompletedContextProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <ShowCompletedContext.Provider
      value={{
        showCompleted: showCompleted,
        setShowCompleted: setShowCompleted,
      }}
    >
      {props.children}
    </ShowCompletedContext.Provider>
  );
};
