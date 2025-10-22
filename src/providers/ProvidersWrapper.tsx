import { PropsWithChildren, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/auth/providers/JWTProvider';
import {
  LayoutProvider,
  LoadersProvider,
  MenusProvider,
  SettingsProvider,
  SnackbarProvider,
  TranslationProvider,
  useMenus
} from '@/providers';
import { HelmetProvider } from 'react-helmet-async';
import { MENU_SIDEBAR, ADMIN_MENU_SIDEBAR } from '@/config/menu.config';

const queryClient = new QueryClient();

const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SettingsProvider>
          <TranslationProvider>
            <HelmetProvider>
              <LayoutProvider>
                <LoadersProvider>
                  <MenusProvider>
                    <MenuInitializer />
                    {children}
                  </MenusProvider>
                </LoadersProvider>
              </LayoutProvider>
            </HelmetProvider>
          </TranslationProvider>
        </SettingsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

const MenuInitializer = () => {
  const { setMenuConfig } = useMenus();

  useEffect(() => {
    // Initialize menu configurations
    setMenuConfig('primary', MENU_SIDEBAR);
    setMenuConfig('admin', ADMIN_MENU_SIDEBAR);
  }, [setMenuConfig]);

  return null;
};

export { ProvidersWrapper };
