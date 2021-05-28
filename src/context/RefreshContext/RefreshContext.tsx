import React, { createContext, useContext, useState } from 'react';

interface RefProviderProps {
  refHabbit: boolean;
  refLabel: boolean;
  handleRefHabbit: Function;
  handleRefLabel: Function;
}

const RefreshContext = createContext<RefProviderProps>({
  refHabbit: false,
  refLabel: false,
  handleRefHabbit: () => {},
  handleRefLabel: () => {},
});

const { Provider } = RefreshContext;

type RefProps = {
  children: Object;
};

const RefreshProvider = ({ children }: RefProps) => {
  const [refHabbit, setRefHabbit] = useState(false);
  const [refLabel, setRefLabel] = useState(false);

  const refresh: RefProviderProps = {
    refHabbit,
    refLabel,
    handleRefHabbit: () => setRefHabbit((prev) => !prev),
    handleRefLabel: () => setRefLabel((prev) => !prev),
  };

  return <Provider value={refresh}>{children}</Provider>;
};

export const useRefreshContext = () => useContext(RefreshContext);

export default RefreshProvider;
