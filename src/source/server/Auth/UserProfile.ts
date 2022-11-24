import ApiClient from '@/source/utils/ApiClient';

const handleUserProfileServer = async (accessToken: string) => {
  return ApiClient.get('/auth/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};

export default handleUserProfileServer;
