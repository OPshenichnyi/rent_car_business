import React from 'react';
import SidebarItem from './SidebarItem';
import styles from './sidebar.module.css';
import { useLocale } from 'next-intl';

export default function Sidebar() {
  const locale = useLocale();
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.list_sidebar}>
        <SidebarItem pathname={`/${locale}/profile`}>Dashboard</SidebarItem>
        <SidebarItem pathname={`/${locale}/profile/info`}>My info</SidebarItem>
        <SidebarItem pathname={`/${locale}/profile/cars`}>Cars</SidebarItem>
        <SidebarItem pathname={`/${locale}/profile/bills`}>
          My Bills
        </SidebarItem>
        <SidebarItem pathname={`/${locale}/profile/payments`}>
          My Payments
        </SidebarItem>
      </ul>
    </aside>
  );
}
