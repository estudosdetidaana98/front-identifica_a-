import React from 'react';
import './navBar.css';

function navBar() {
  return (
    <>
      <div className='w-full text-white flex justify-center py-4'>
        <div className="container flex justify-between items-center">
          <div className='text-2xl font-bold uppercase'>ODS ONU</div>

          <div className='flex gap-4'>
            <div className='hover:underline'>Nossa História</div>
            <div className='hover:underline'>Sobre Nós</div>
            <div className='hover:underline'>Nossas Causas</div>
            <div className='hover:underline'>Eventos</div>
            <div className='hover:underline'>Contatos</div>
          </div>

          <div className='flex gap-4'>
            <button className='bg-white text-indigo-900 px-4 py-2 rounded hover:bg-indigo-100'>Registrar</button>
            <button className='bg-white text-indigo-900 px-4 py-2 rounded hover:bg-indigo-100'>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default navBar;
