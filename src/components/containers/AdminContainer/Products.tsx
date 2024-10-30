import React from 'react'

const Products = () => {
  return (
    <>
    <h1 className='text-2xl font-semibold'>Products</h1>
    <div className='w-full h-full gap-5 flex mt-5 border border-zinc-300'>
      <div className='w-1/2 p-3'>
        <h1 className='text-lg font-medium'>Product List</h1>
      </div>
      <div className='w-1/2 border-l border-zinc-300 p-3'>
        <h1 className='text-lg font-medium'>Add Product</h1>
      </div>
    </div>
    </>
  )
}

export default Products