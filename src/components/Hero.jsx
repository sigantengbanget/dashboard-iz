import React from "react"
import BannerImg from '../assets/images/landing.png'
import IzLogo from '../assets/images/izzatstore.png'
import { MdArrowDropUp, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md'

const Hero = () => {
 return(
    <main className="w-full bg-gradient-to-b from-purple-900 to-[#e2e4e8] h-8/12 pb-4">
        <div className="px-2">
            <img src={BannerImg} alt={'banner-img'} className='object-fill w-full'/>
        </div>
        <div className="grid grid-cols-9 gap-4 p-2">
            <div className="col-span-4 bg-white flex gap-2 p-4 rounded-lg">
                <img src={IzLogo} alt={'izzat-logo'} className='w-14 h-14' />
                <div className="flex flex-col w-full text-sm">
                    <span className="text-2xl font-bold">IZZAT STORE</span>
                    <span>Kategori Utama <span className="border rounded-full px-[0.35rem] border-black text-xs">?</span> : Kecantikan</span>
                    <div className="flex items-center gap-2"><span>Rank <span className="border rounded-full px-[0.35rem] border-black text-xs">?</span><span className="text-lg font-semibold"> : 577</span></span><span className="flex">(<MdKeyboardArrowUp className="text-red-500" size={24}/> up vs. kemarin)</span></div>
                    <div className="flex gap-3 items-center justify-between text-orange-700 font-medium text-xs">
                        <span>Level 5</span>
                        <div className="w-8/12 bg-gray-300 h-2 rounded-full">
                            <div className="h-full w-1/4 bg-orange-600 rounded-full"></div>
                        </div>
                        <span>Level 6</span>
                    </div>
                    <div className="flex justify-between text-orange-700 font-medium text-xs">
                        <span>Penapatan <span className="border rounded-full px-[0.35rem] border-black text-xs">?</span> IDR 58.6JT</span>
                        <div className="flex gap-1 items-center">
                            <span>IDR 43.4JT lebih untuk naik level</span>
                            <MdKeyboardArrowRight size={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-5 flex gap-4">
                <div className="w-2/3 rounded-lg">
                    <iframe height={164} src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="w-full aspect-video rounded-lg"></iframe>
                </div>
                <div className="h-[164px] bg-white border-2 border-blue-600 w-full rounded-lg">
                    <div className="flex flex-col gap-2 p-2 relative">
                        <span className="text-base font-bold">Announcement</span>
                        <span className="capitalize text-lg font-bold">daftar pesta gajian oktober & 11.11 Daily sale sekarang</span>
                        <span className="text-blue-600 font-medium text-sm">Pendaftaran ditutup 23 Oktober pukul 23 WIB. Kami tunggu ya. Klik di sini untuk daftar!</span>
                        <MdKeyboardArrowRight size={28} className="absolute right-0 top-1/2 mr-3"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
 )
}

export default Hero