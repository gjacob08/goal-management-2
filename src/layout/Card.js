import React from 'react';

const Card = (props) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center px-6 my-12">
        <div className="w-96 mx-auto bg-white rounded shadow">
          <div
            className="mx-16 py-4 px-8 
            text-black text-xl font-bold
            border-b border-grey-500"
          >
            Student Application
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
