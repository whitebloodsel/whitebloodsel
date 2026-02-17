import React from 'react';

const StickyNote = () => {
  return (
    <div className="fixed top-27 right-15 bg-yellow-200 shadow-lg rounded-lg transform z-40 w-60 overflow-hidden
            hover:rotate-3 hover:scale-105 hover:shadow-2xl hover:z-50 transition-all duration-300 ease-in-out">
      <div className="relative bg-yellow-400 h-4 ">
      </div>
      <div className='p-4 pt-2'>
        <h3 className="font-bold mb-2 text-gray-800">To-Dos's</h3>
        <ul className=" text-gray-700 text-sm space-y-1">
          <li>Land my first tech job</li>
          <li>Graduate ASAP</li>
          <li>Learn how to swim</li>
          <li className="line-through">make portfolio</li>
          <li>Exercise more!!</li>
        </ul>
      </div>
      
    </div>
  );
};

export default StickyNote;