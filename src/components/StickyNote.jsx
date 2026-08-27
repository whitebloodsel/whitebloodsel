import React from 'react';

const StickyNote = () => {
  return (
    <div className="
      /* Position: Fixed below navbar */
      fixed z-40 
      top-[72px] right-4      /* Mobile: 72px from top (16px below a 56px navbar) */
      md:top-24 md:right-15   /* Desktop: More spacing for larger screens */
      
      /* Sizing: Responsive width */
      w-[180px]              /* Default width for small screens */
      md:w-60                /* Full width for desktop */
      
      /* Visuals & Animation */
      bg-yellow-200 shadow-lg rounded-lg overflow-hidden
      transform transition-all duration-300 ease-in-out
      hover:rotate-2 hover:-translate-y-1 hover:shadow-2xl
    ">
      {/* Tape Effect */}
      <div className="bg-yellow-400 h-3 opacity-80"></div>
      
      <div className='p-4 pt-2'>
        <h3 className="font-bold mb-1 text-gray-800 text-sm md:text-base border-b border-yellow-300/50 pb-1">
          To-Do's
        </h3>
        <ul className="text-gray-700 text-xs md:text-sm space-y-1 mt-2">
          <li className="flex gap-1">land my first tech job</li>
          <li className="flex gap-1">graduate ASAP</li>
          <li className="line-through text-gray-800 opacity-60">build portfolio</li>
          <li className="flex gap-1">. ܁₊ ⊹ . ܁ ⟡ ܁ . ⊹ ₊ ܁. </li>
        </ul>
      </div>
      
      {/* Subtle bottom shadow/fold effect for Safari */}
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-br from-transparent to-black/5"></div>
    </div>
  );
};

export default StickyNote;