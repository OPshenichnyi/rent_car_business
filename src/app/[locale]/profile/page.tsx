import React from 'react';
//  getServerSession is a function that returns the session object if the user is authenticated, otherwise it returns null.

type LayoutProps = {
  children: React.ReactNode;
};

const Page: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <span>Daschboard</span>
      {children}
    </div>
  );
};

export default Page;

// const Profile: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div>
//       <span>Dashboard</span>
//       {children}
//     </div>
//   );
// };

// export default Profile;

// https://www.youtube.com/watch?v=Eh3EpwqT4cM private route video
