import React, { useState } from 'react'
import BaseIcon from './base/Icon'
import { nav } from '../composable/nav'
import { useNavigate, useLocation } from 'react-router-dom'

const Navigation = () => {
  const { list } = nav()

  const navigate = useNavigate()
  const [navList, setNavList] = useState(list)

  const currentLocation = useLocation().pathname.split('/')[1]
  list.map(item => {
    item.active = item.route === currentLocation ? true : false

    return item
  })
  
  function activeNav(route,key) {
    const temp = list.map((item, i)=>{
      item.active = i === key ? true : false

      return item
    })

    setNavList(temp)
    navigate(route, {
      state: {
          title: route
      }
    })
  }

  return (
    <div className='navigation-container'>
      <div style={{padding: 50}}>

      </div>

      <ul>
          {
            navList.map((item,key) => {
              return (
                <li key={key}>
                  <span onClick={()=> activeNav(item.route,key)} className={item.active ?'active':''}><BaseIcon name={item.icon} color={'#598FA7'} />  { item.name }</span>
                </li>  
              )
            })
          }
      </ul>
    </div>
  )
}

export{ Navigation }
