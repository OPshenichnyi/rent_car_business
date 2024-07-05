import React from 'react';
import Link from 'next/link';
import styles from './sidebar.module.css';
export interface SidebarItemProps {
  //   current?: boolean;
  pathname: string;
  children: React.ReactNode;
}
export default function SidebarItem({
  // current,
  pathname,
  children,
}: SidebarItemProps) {
  return (
    <li>
      <Link className={styles.link_sidebar} href={pathname}>
        <span>{children}</span>
      </Link>
    </li>
  );
}
