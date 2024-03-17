import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Modal from '../components/base/Modal'
import Table from '../components/base/Table'
import Button from '../components/base/Button'
import Input from '../components/base/Input'
import useFamily from '../hooks/useFamily'
import storeFamily from '../store/storeFamily'

export const Family = () => {
  const { headerData } = useFamily()
  const store = storeFamily()
  const [data,setData] = useState([])
  const [createFamily,setCreateFamily] = useState(false)

  function openCreateModal() {
    setCreateFamily(true)
  }

  console.log(headerData)
  console.log(store.get())

  useEffect(() => {
    setData(store.get())
  },[])

  const modalData = [
    { label: 'DETAILS', type:'head' },
    { label: 'Family name', width:'100%', type:'input', placeHolder:'Type here...' },
  ]

  return (
    <>
      <Header />
      <div className='main-body' style={{'padding':'65px 10px 20px 10px', 'position':'relative', 'background':'#fff','borderRadius':'5px','border':'1px solid rgba(0,0,0,.1)'}}>
        <div className='family-filters-container'>
          <span>
            <Button action={openCreateModal} class='btn success' text='Create family' icon='plus'/> &ensp;
            <Button class='btn danger' text='Delete' icon='trash'/>
          </span>

          <Input width='250px' icon='search' placeholder='search family here...' />
        </div>

        <Table
          selection={true}
          index={true}
          header={headerData}
          data={data}
        />

        {
          createFamily && <Modal
                            footerPadding='7px 10px'
                            close={true}
                            fullWidthImage='background.png'
                            data={modalData}
                            closeModal={setCreateFamily}
                          />
        }
      </div>
    </>
  )
}
