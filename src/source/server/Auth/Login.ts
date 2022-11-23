import ApiClient from '@/source/utils/ApiClient';

interface IValues {
  email: string;
  password: string;
}
const handleLoginServer = async (values: IValues) => {
  return ApiClient.post('/auth/login', values)
    .then((data) => {
      return data.data.access_token;
    })
    .catch((err) => {
      return err;
    });
};

export default handleLoginServer;
