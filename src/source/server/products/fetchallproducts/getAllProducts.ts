import ApiClient from '@/source/utils/ApiClient';

export const getAllProducts = async () => {
  return ApiClient.get('products')
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};
