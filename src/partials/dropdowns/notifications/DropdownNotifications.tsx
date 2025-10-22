import { useLanguage } from '@/i18n';
import { KeenIcon } from '@/components';
import { MenuSub } from '@/components/menu';
import { DropdownNotificationsItem5 } from './items';

interface IDropdownNotificationProps {
  menuTtemRef: any;
}

const DropdownNotifications = ({ menuTtemRef }: IDropdownNotificationProps) => {
  const { isRTL } = useLanguage();

  const handleClose = () => {
    if (menuTtemRef.current) {
      menuTtemRef.current.hide(); // Call the closeMenu method to hide the submenu
    }
  };

  const buildHeader = () => {
    return (
      <div className="flex items-center justify-between gap-2.5 text-sm text-gray-900 font-semibold px-5 py-2.5 border-b border-b-gray-200">
        Notifications
        <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={handleClose}>
          <KeenIcon icon="cross" />
        </button>
      </div>
    );
  };

  const buildContent = () => {
    return (
      <div className="flex flex-col gap-5 pt-3 pb-4">
        <DropdownNotificationsItem5
          userName="Raymond Pawell"
          avatar="300-11.png"
          badgeColor="badge-success"
          description="posted a new article"
          link="2024 Roadmap"
          day=""
          date="1 hour ago"
          info="Roadmap"
        />
      </div>
    );
  };

  return (
    <MenuSub rootClassName="w-full max-w-[460px]" className="light:border-gray-300">
      {buildHeader()}
      {buildContent()}
    </MenuSub>
  );
};

export { DropdownNotifications };
