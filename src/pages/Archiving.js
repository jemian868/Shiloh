import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Modal from '../components/base/Modal'
import Table from '../components/base/Table'
import Button from '../components/base/Button'
import Input from '../components/base/Input'
import useArchiving from '../hooks/useArchiving'
import storeArchiving from '../store/storeArchiving'

export const Archiving = () => {
  const { headerData } = useArchiving()
  const store = storeArchiving()
  const [data,setData] = useState([])
  const [updateModal, setUpdateModal] = useState(false)
  const [selectedItems,setSelectedItems] = useState([])

  useEffect(() => {

    getArchive()
  },[])

  async function getArchive() {
    // console.log(await store.get())
    const gettedArchive = await store.get()
    setData(gettedArchive)

    // console.log(data)
  }
  

  const [formData,setFormData] = useState({})

  async function insertArchiving(data) {
    const response = await store.create(data)

    console.log(response)
    if(response[0] > 0) {
      getArchive()
      alert('Archive Added!')
    }
  }

  const [activeModalData,setActiveModalData] = useState({})
  function openUpdateModal(val) {
    console.log(val)
    setActiveModalData(val)

    setUpdateModal(true)
  }

  const modalData = [
    { label: 'DETAILS', type:'head' },
    { label: 'First name', state:'firstname', type:'input', placeHolder:'Type here...' },
    { label: 'Last name', state:'lastname', type:'input', placeHolder:'Type here...' }
  ]

  async function updateArchive(data) {
    const response = await store.modify(data)

    console.log(response)
    if(response === 'OK') {
      getArchive()
      alert('Archive Updated!')
    }
  }

  async function removeArchive() {
    if(!selectedItems.length) {
      return alert('Please select items first! Bogo')
    }
    const response = await store.remove(selectedItems)

    console.log(response)
    if(response === 'OK') {
      getArchive()
      setSelectedItems([])
      alert('Archive Deleted!')
    }

    console.log(selectedItems)
  }

  return (
    <>
      <Header />
      <div className='main-body' style={{'padding':'65px 10px 20px 10px', 'position':'relative', 'background':'#fff','borderRadius':'5px','border':'1px solid rgba(0,0,0,.1)'}}>
        <div className='archiving-filters-container'>
          <Button action={removeArchive} class='btn danger' text='Delete' icon='trash' />
          <Button class='btn success' text='Add' icon='plus' action={()=>{
                                                                      insertArchiving(formData)
                                                                    }}/> &nbsp;
          <Input width='250px' action={e=>{
																				setFormData(prevData=>({
																					...prevData,
																					'firstname':e.target.value
																				}))
																			}}/>
          <Input width='250px' action={e=>{
																				setFormData(prevData=>({
																					...prevData,
																					'lastname':e.target.value
																				}))
																			}}/>
        </div>

        <Table
          selection={true}
          index={true}
          header={headerData}
          data={data}
          setSelectedItems={setSelectedItems}
          action={openUpdateModal}
        />

        
        {
          updateModal && <Modal 
                            footerPadding='7px 10px'
                            close={true}
                            data={modalData}
                            activeData={activeModalData}
                            closeModal={setUpdateModal}
                            action={updateArchive}
                          />
        }
      </div>
    </>
  )
}
