import React from 'react'
import Analytic from '../components/Analytic'
import Hero from '../components/Hero'
import OrderInfo from '../components/OrderInfo'

const Dashboard = () => {
  return (
    <section>
      <Hero/>
      <div className='mx-2 bg-white rounded-lg'>
        <OrderInfo/>
        <Analytic/>
      </div>
    </section>
  )
}

export default Dashboard