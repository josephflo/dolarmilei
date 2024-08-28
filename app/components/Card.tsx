import React from 'react'

const Card = ({ width = '307px', height = '367px' }) => {
  return (
    <div className={`flex flex-col bg-white border-t-2 border-primary p-6 items-center shadow-xl`}
    style={{ width, height }}>
      <div className='my-10'>
        <h1 className='text-xl font-bold text-center text-secondary'>DÓLAR BLUE</h1>
      </div>
      <div className='flex items-center justify-center gap-8'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h2 className='text-2xl text-secondary'>Compra</h2>
          <h3 className='text-3xl text-primary font-bold'>$1320</h3>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h2 className='text-2xl text-secondary'>Venta</h2>
          <h3 className='text-3xl text-primary font-bold'>$1340</h3>
        </div>
      </div>
      <p className='text-secondary text-sm my-auto'>Actualizado el 27/08/24 08:31 PM</p>
    </div>
  )
}

export default Card