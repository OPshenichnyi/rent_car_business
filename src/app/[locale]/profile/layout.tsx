import React from 'react';
import Sidebar from '../../shared/components/Sidebar/Sidebar';
import styles from './page.module.css';
import { getServerSession } from 'next-auth';
import { authConfig } from '../../../config/auth';
import { redirect } from 'next/navigation';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const session = await getServerSession(authConfig);
  if (!session) {
    redirect('/');
  }
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
