import React from 'react';

import type { IUser } from '@/source/interface/IUser/IUser';

const UserProfileSection = ({ userData }: { userData: IUser }) => {
  return (
    <div>
      <h1>{userData.id}</h1>
      <h1>{userData.email}</h1>
      <h1>{userData.name}</h1>
      <h1>{userData.role}</h1>
    </div>
  );
};

export default UserProfileSection;
