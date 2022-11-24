import type { Key } from 'react';

import ApiClientLocal from '@/source/utils/ApiClientLocal';

export default function Products({ products }: any) {
  return (
    <main className="w-full bg-[#f2f2f2]">
      <h2> products</h2>
      <div className="grid grid-cols-4 gap-5">
        {products.map((pro: any, Idx: Key) => {
          return (
            <div key={Idx}>
              <p>{pro.title}</p>
              <img src={pro.category.image} alt={pro.title} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
export async function getServerSideProps() {
  const products = await ApiClientLocal.get('api/products')
    .then((data) => {
      return data.data.message;
    })
    .catch((error) => {
      return error;
    });

  return {
    props: { products },
  };
}
