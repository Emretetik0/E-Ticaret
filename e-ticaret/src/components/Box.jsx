import React from 'react';

const Box = ({ product }) => {
  return (
    <div className="w-1/5 p-4 border-black border rounded ">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm">Kategori: {product.category}</p>
      <p className="text-sm">Yıl: {product.year}</p>
      <p className="text-lg font-semibold">{product.price} TL</p>
    </div>
  );
};

export default Box;
