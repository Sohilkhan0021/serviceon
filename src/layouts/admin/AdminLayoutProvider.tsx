import { createContext, useContext, useState, ReactNode } from 'react';

interface IAdminLayoutContext {
  layout: {
    options: {
      sidebar: {
        fixed: boolean;
        collapse: boolean;
      };
      header: {
        fixed: boolean;
      };
    };
  };
  setLayout: (layout: any) => void;
  currentGarage: any;
  setCurrentGarage: (garage: any) => void;
}

const AdminLayoutContext = createContext<IAdminLayoutContext | undefined>(undefined);

export const useAdminLayout = () => {
  const context = useContext(AdminLayoutContext);
  if (!context) {
    throw new Error('useAdminLayout must be used within an AdminLayoutProvider');
  }
  return context;
};

interface IAdminLayoutProviderProps {
  children: ReactNode;
}

const AdminLayoutProvider = ({ children }: IAdminLayoutProviderProps) => {
  const [layout, setLayout] = useState({
    options: {
      sidebar: {
        fixed: true,
        collapse: false,
      },
      header: {
        fixed: true,
      },
    },
  });

  const [currentGarage, setCurrentGarage] = useState(null);

  return (
    <AdminLayoutContext.Provider
      value={{
        layout,
        setLayout,
        currentGarage,
        setCurrentGarage,
      }}
    >
      {children}
    </AdminLayoutContext.Provider>
  );
};

export { AdminLayoutProvider };

