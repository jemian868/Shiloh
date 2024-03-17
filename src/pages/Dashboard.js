import React from 'react'
import { Header } from '../components/Header'
import Chart from '../components/base/Chart'
import BaseIcon from '../components/base/Icon'

export const Dashboard = () => {
  const data = [
    {name:'Active', value:13},
    {name:'Lukewarm', value:4},
    {name:'Inactive', value:2}
  ]

  const ministry = [
    {name:'Music', value:11},
    {name:'Children', value:13},
    {name:'Youth', value:24},
    {name:'Addult', value:21},
    {name:'Evanlism', value:9},
    {name:'Comfort', value:7},
    {name:'Ushers', value:16},
    {name:'Others', value:11}
  ]

  return (
    <>
      <Header />
      <div className='main-body'>
        <div className='dashboard-header-content-container'>
          <div className='dashboard-wrapper'>
            <center>
              <BaseIcon name='user' size={50} color={'#F76009'} />
              <label>135</label>
              <span>REGISTERED PROFILES</span>
            </center>
          </div>
          <div className='dashboard-wrapper'>
            <center>
              <BaseIcon name='users' size={50} color={'#3A88DB'} />
              <label>54</label>
              <span>TOTAL FAMILY</span>
            </center>
          </div>
          <div className='dashboard-wrapper'>
            <center>
              <BaseIcon name='bookMark' size={50} color={'#21B12C'} />
              <label>3</label>
              <span>MINISTRIES</span>
            </center>
          </div>
          <div className='dashboard-wrapper'>
            <center>
              <BaseIcon name='arrowUpRightDots' size={50} color={'#CD5182'} />
              <label>7</label>
              <span>UPCOMING EVENTS</span>
            </center>
          </div>
        </div>
        
        <div className='dashboard-body-content-container'>
          <span>
            <center>MEMBERSHIP STATUS</center>
            <Chart type='pie' data={data} width={240} height={300}/>
          </span>
          <span>
            <center>MINISTRIES</center>
            <Chart type='bar' data={ministry} width={775} height={300} />
          </span>
        </div>
      </div>
    </>
  )
}
