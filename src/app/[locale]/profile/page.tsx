import React from 'react';
import styles from './page.module.css';
//  getServerSession is a function that returns the session object if the user is authenticated, otherwise it returns null.

export interface LayoutProps {
  children: React.ReactNode;
}

const Profile = async ({ children }: LayoutProps) => {
  return (
    <div>
      <span>Dashboard</span>
      {children}
    </div>
  );
};

export default Profile;

// https://www.youtube.com/watch?v=Eh3EpwqT4cM private route video
