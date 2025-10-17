import Link from 'next/link';
import React from 'react';

const Page = () => {
  const data = [
    { id: 1, name: 'Rahim', btn: 'Click me 1' },
    { id: 2, name: 'Kahim', btn: 'Click me 2' },
    { id: 3, name: 'Tahim', btn: 'Click me 3' },
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <Link href={`/services/${item.id}`}>{item.btn}</Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
