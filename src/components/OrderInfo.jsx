import React from 'react'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

function OrderInfo() {
  return (
    <section className='p-4'>
        <div className="flex flex-col gap-4">
            <div className='flex justify-between'>
                <span className='font-semibold text-xl'>Pesananku</span>
                <Link to={'#'} className='flex items-center text-blue-500' >
                    <span className='capitalize'>lebih banyak</span>
                    <MdOutlineKeyboardArrowRight size={20} />
                </Link>
            </div>
            <div className="flex items-center justify-evenly py-8">
                <div className="flex flex-col gap-2 items-center text-blue-600">
                    <span className='text-2xl font-semibold'>16</span>
                    <div className='flex items-center justify-center text-gray-500 text-sm'>
                        <span className='capitalize'>Pesanan Tertunda</span>
                        <MdOutlineKeyboardArrowRight size={24}/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center text-blue-600">
                    <span className='text-2xl font-semibold'>18</span>
                    <div className='flex items-center justify-center text-gray-500 text-sm'>
                        <span className='capitalize'>Pesanan tidak dibayar</span>
                        <MdOutlineKeyboardArrowRight size={24}/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center text-blue-600">
                    <span className='text-2xl font-semibold'>1</span>
                    <div className='flex items-center justify-center text-gray-500 text-sm'>
                        <span className='capitalize'>Pengembalian Tertunda/Refund</span>
                        <MdOutlineKeyboardArrowRight size={24}/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center text-blue-600">
                    <span className='text-2xl font-semibold'>520</span>
                    <div className='flex items-center justify-center text-gray-500 text-sm'>
                        <span className='capitalize'>Untuk ditinjau</span>
                        <MdOutlineKeyboardArrowRight size={24}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OrderInfo