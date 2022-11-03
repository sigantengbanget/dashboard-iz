import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import arrow from '../assets/icons/arrowdown.png'
import person from '../assets/icons/person.png'
import productIcon from '../assets/icons/product.png'
import izzatstore from '../assets/images/izzatstore.png'

const Sidebar = ({children}) => {
    const [isActive, setIsActive] = useState(false)
    const menuItem = [
        {
            path : "/product",
            name : "Produk",
            icon : productIcon,
            submenu :[
                {
                    path : "/add-product",
                    name : "Tambah Produk",
                    icon : ""
                },
                {
                    path : "/set-product",
                    name : "Atur Produk",
                    icon : ""
                },
            ],
        },
        {
            path : "/user",
            name : "Pengguna",
            icon : person,
            submenu :[
                {
                    path : "/add-user",
                    name : "Tambah Pengguna",
                    icon : ""
                },
                {
                    path : "/set-user",
                    name : "Atur Pengguna",
                    icon : ""
                },
            ],
        },
    ]
  return (
    <div className="container">
        <div className="sidebar">
            <div className="top-sidebar">
                <img src={izzatstore} height="80px" alt="" />
            </div>
            {menuItem.map((item, index)=>(
                <>
                <div onClick={()=>{setIsActive(!isActive)}} className={isActive ? "menu active" : "menu"} key={index}>
                    <div className="menuitem">
                        <img src={item.icon} alt="" />
                        <span>{item.name}</span>
                    </div>
                    <img className='arrow' src={arrow} alt="" />
                </div>
                {item.submenu.map((item, index)=>(
                    <NavLink className="submenu active" to={item.path}>{item.name}</NavLink>
                ))}
                </>
            ))}
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar