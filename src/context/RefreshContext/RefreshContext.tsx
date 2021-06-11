import React, { createContext, useContext, useState } from 'react';

interface RefProviderProps {
  refHabit: boolean;
  refLabel: boolean;
  handleRefHabit: Function;
  handleRefLabel: Function;
}

const RefreshContext = createContext<RefProviderProps>({
  refHabit: false,
  refLabel: false,
  handleRefHabit: () => {},
  handleRefLabel: () => {},
});

const { Provider } = RefreshContext;

type RefProps = {
  children: Object;
};

const RefreshProvider = ({ children }: RefProps) => {
  const [refHabit, setRefHabit] = useState(false);
  const [refLabel, setRefLabel] = useState(false);

  const refresh: RefProviderProps = {
    refHabit,
    refLabel,
    handleRefHabit: () => setRefHabit((prev) => !prev),
    handleRefLabel: () => setRefLabel((prev) => !prev),
  };

  return <Provider value={refresh}>{children}</Provider>;
};

export const useRefreshContext = () => useContext(RefreshContext);

export default RefreshProvider;
