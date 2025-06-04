import React from 'react';

const TreasureQuality: React.FC = () => {
  const treasures = [
    { name: '普通', image: '/images/treasure-normal.jpg' },
    { name: '稀有', image: '/images/treasure-rare.jpg' },
    { name: '神器', image: '/images/treasure-artifact.jpg' },
    { name: '太初', image: '/images/treasure-primordial.jpg' },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8">宝物品质展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {treasures.map((treasure, index) => (
          <div key={index} className="text-center p-4 bg-base-200 rounded-lg shadow">
            <img
              src={treasure.image} 
              alt={treasure.name}
              className="rounded-lg mb-2 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold">{treasure.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreasureQuality;