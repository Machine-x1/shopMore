import { getCookie } from 'cookies-next';
import React from 'react';

import type { IUser } from '@/source/interface/IUser/IUser';
import handleUserProfileServer from '@/source/server/Auth/UserProfile';
import UserProfileSection from '@/ui/sections/Auth/UserProfileSection';

const UserProfile = ({ userData }: { userData: IUser }) => {
  return <UserProfileSection userData={userData} />;
};
export async function getServerSideProps({ req, res }: { req: any; res: any }) {
  const accessToken = getCookie('access_token', { req, res });
  if (!accessToken || typeof accessToken === 'boolean') {
    return {
      notFound: true,
    };
  }
  const userProfile = await handleUserProfileServer(accessToken);
  const userData: IUser = {
    id: userProfile.id,
    email: userProfile.email,
    name: userProfile.name,
    role: userProfile.role,
    avatar: userProfile.avatar,
  };
  return {
    props: { userData },
  };
}
export default UserProfile;
