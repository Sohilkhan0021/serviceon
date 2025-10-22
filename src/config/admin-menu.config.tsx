import { type TMenuConfig } from '@/components/menu';

export const ADMIN_MENU_SIDEBAR: TMenuConfig = [
  {
    title: 'Dashboard',
    icon: 'element-11',
    path: '/'
  },
  {
    title: 'Organization',
    icon: 'office-bag',
    children: [
      {
        title: 'All Garages',
        icon: 'building',
        path: '/admin/garages'
      },
      {
        title: 'Add Garage',
        icon: 'plus',
        path: '/admin/garages/create'
      }
    ]
  },
  {
    title: 'Branding & Output',
    icon: 'color-swatch',
    children: [
      {
        title: 'Branding Settings',
        icon: 'color-swatch',
        path: '/admin/branding'
      },
      {
        title: 'Output Settings',
        icon: 'document',
        path: '/admin/branding/output'
      }
    ]
  },
  {
    title: 'Intake Checklist',
    icon: 'check',
    path: '/admin/checklist'
  },
  {
    title: 'Labor Rates',
    icon: 'dollar',
    path: '/admin/labor-rates'
  },
  {
    heading: 'User Management'
  },
  {
    title: 'Users',
    icon: 'users',
    children: [
      {
        title: 'All Users',
        icon: 'users',
        path: '/admin/users'
      },
      {
        title: 'Add User',
        icon: 'user-plus',
        path: '/admin/users/create'
      },
      {
        title: 'Roles & Permissions',
        icon: 'shield-tick',
        path: '/admin/users/roles'
      }
    ]
  },
  {
    heading: 'System'
  },
  {
    title: 'Activity Log',
    icon: 'notification',
    path: '/admin/activity'
  },
  {
    title: 'Settings',
    icon: 'setting-2',
    children: [
      {
        title: 'General Settings',
        icon: 'setting-2',
        path: '/admin/settings'
      },
      {
        title: 'Security',
        icon: 'shield-tick',
        path: '/admin/settings/security'
      }
    ]
  }
];

export const ADMIN_MENU_ROOT: TMenuConfig = [
  {
    title: 'Dashboard',
    icon: 'element-11',
    rootPath: '/',
    path: '/',
    childrenIndex: 0
  },
  {
    title: 'Garages',
    icon: 'building',
    rootPath: '/admin/garages/',
    path: '/admin/garages',
    childrenIndex: 1
  },
  {
    title: 'Users',
    icon: 'users',
    rootPath: '/admin/users/',
    path: '/admin/users',
    childrenIndex: 2
  },
  {
    title: 'Settings',
    icon: 'setting-2',
    rootPath: '/admin/settings/',
    path: '/admin/settings',
    childrenIndex: 3
  }
];
