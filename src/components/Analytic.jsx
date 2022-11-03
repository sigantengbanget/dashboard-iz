import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {Line} from 'react-chartjs-2/dist'

function Analytic() {
    const tabMenu = [{val: '1.84JT', tabName: 'pendapatan'}, {val: 396, tabName: 'pengunjung'}, {val: '4.80%', tabName: 'tingkat konversi'}]
    const [selectedIndex, setSelectedIndex] = React.useState(0)
  return (
    <section className='grid grid-flow-col grid-cols-2 gap-3 bg-[#e2e4e8]'>
        <div className='p-4 bg-white'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='capitalize font-semibold text-xl'>bisnis analisis</span>
                    <span>Zona waktuHTML+7 22:33:59</span>
                </div>
                <Link to={'#'} className='flex text-blue-500'>
                    <span>Lihat lebih lanjut</span>
                    <MdKeyboardArrowRight size={24}/>
                </Link>
            </div>
            <div className='flex flex-col py-8'>
                <div className='flex justify-between'>
                    {tabMenu.map((e, i) => {
                        return(
                            <div className='flex flex-col cursor-pointer' onClick={() => setSelectedIndex(i)}>
                                <span className='text-xl font-semibold'>{i === 0 ? 'RP' + e.val : e.val}</span>
                                <span className={` font-medium ${selectedIndex === i ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}>{e.tabName}</span>
                            </div>
                        )
                    })}
                </div>
                <span className='text-gray-500 font-medium '>vs. Kemarin Periode yang Sama -22.02%</span>
            </div>
        </div>
        <div className='p-4 bg-white'>
            
        </div>
    </section>  
  )
}

export default Analytic