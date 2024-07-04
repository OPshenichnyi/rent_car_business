import styles from './page.module.css';
//  getServerSession is a function that returns the session object if the user is authenticated, otherwise it returns null.
import { getServerSession } from 'next-auth';
// authConfig is the configuration of the authentication providers.
import { authConfig } from '@/config/auth';
// redirect is a function that redirects the user to the specified path.
import { redirect } from 'next/navigation';

const Profile = async () => {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect('/');
  }
  // await console.log(session.user.id, 'id');
  return (
    <div className={styles.container}>
      <p>Profile</p>
      <span>GO TO PAGE PROFILE</span>
    </div>
  );
};

export default Profile;

// https://www.youtube.com/watch?v=Eh3EpwqT4cM private route video
