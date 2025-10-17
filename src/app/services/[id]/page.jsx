import React from 'react';

const Page = ({ params }) => {
  const id = parseInt(params.id); // ✅ Convert string to number

  const data = [
    { id: 1, name: 'Rahim', btn: 'Click me 1' },
    { id: 2, name: 'Kahim', btn: 'Click me 2' },
    { id: 3, name: 'Tahim', btn: 'Click me 3' },
  ];

  // ✅ Find the matching object
  const singleData = data.find((item) => item.id === id);

  // ✅ Handle if no data found
  if (!singleData) {
    return <h2>No data found for ID: {id}</h2>;
  }

  return (
    <div>
      <h2>{singleData.name}</h2>
      <h1>{singleData.btn}</h1>
    </div>
  );
};

export default Page;
