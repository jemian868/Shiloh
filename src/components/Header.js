import React from 'react'
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const { title } = useLocation().state

  return (
    <div className='main-header'>
      <label>≡ { title.replace(/[-]/g, ' ') }</label>
    </div>
  )
}
