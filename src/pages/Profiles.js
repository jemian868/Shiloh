import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Modal from '../components/base/Modal'
import Table from '../components/base/Table'
import Button from '../components/base/Button'
import Input from '../components/base/Input'
import useProfiles from '../hooks/useProfiles'
import storeProfiles from '../store/storeProfiles'

const Profiles = () => {
  const { headerData } = useProfiles()
  const store = storeProfiles()
  const [data,setData] = useState([])
  const [updateModal, setUpdateModal] = useState(false)

  useEffect(() => {
    // get process
    async function getProfiles() {
      console.log(await store.get())
      const gettedProfiles = await store.get()
      setData(gettedProfiles)

      console.log(data)
    }

    getProfiles()
  },[])
  
  // insert process
  async function insertProfiles(data) {
    const response = await store.create(data)

    console.log(response)
  }

  const viewData = (val)=> { 
    // console.log(val)

    setCheckbox(val)
    setUpdateModal(true)
  }

  const [checkbox,setCheckbox] = useState([])
  useEffect(() => {
    // console.log('checkbox changes')
  },[checkbox])

  // Double click
  // function sample() {
  //   console.log('double click')
  // }

  function test() {
    console.log('test')
  }
  const createBtnFooterProfile = [
    {
      icon: 'xmark',
      text: 'Close',
      class: 'btn warning',
      action: setUpdateModal
    },
    {
      icon: 'save',
      text: 'Save',
      class: 'btn success',
      action: test
    }
  ]

  const modalData = [
    { label: 'DETAILS', type:'head' },
    { label: 'First name', state:'firstname', type:'input', placeHolder:'Type here...' },
    { label: 'Last name', state:'lastname', type:'input', placeHolder:'Type here...' },
    { label: 'Middle name', state:'middlename', type:'input', placeHolder:'Type here...' },
    { label: 'Birthdate', state:'birthdate', type:'input', placeHolder:'Type here...' },
    { label: 'Gender', state:'gender', type:'input', placeHolder:'Type here...' },
    { label: 'Civil status', state:'civil_status', type:'input', placeHolder:'Type here...' },
    { label: 'Citizenship', state:'citizenship', type:'input', placeHolder:'Type here...' },
    { label: 'Contact No.', state:'contact_number', type:'input', placeHolder:'Type here...' },
    { label: 'Facebook', state:'facebook', type:'input', placeHolder:'Type here...' },
    { label: 'Email', state:'email', type:'input', placeHolder:'Type here...' },
    { label: 'Address', state:'address', type:'input', placeHolder:'Type here...' },
    { label: 'Membership status', state:'membership_status', type:'input', placeHolder:'Type here...' },
    { label: 'Membership date', state:'membership_date', type:'input', placeHolder:'Type here...' },
    { label: 'EDUCATION', type:'head' },
    { label: 'Elementary', state:'elementary', type:'input', placeHolder:'Type here...' },
    { label: 'Secondary', state:'secondary', type:'input', placeHolder:'Type here...' },
    { label: 'Tertiary', state:'tertiary', type:'input', placeHolder:'Type here...' },
    { label: 'PROFESSION', type:'head' },
    { label: 'Occupation', state:'occupation', type:'input', placeHolder:'Type here...' },
    { label: 'Company name', state:'companyname', type:'input', placeHolder:'Type here...' },
    { label: 'Company address', state:'companyaddress', type:'input', placeHolder:'Type here...' },
    { label: 'Company No.', state:'companynumber', type:'input', placeHolder:'Type here...' },
    { label: 'SKILLS', type:'head' },
    { label: 'Skills', state:'skills', type:'input', placeHolder:'Type here...' },
    // { data: ['Singing','Dancing','Acting'], state:'skills', type: 'list', listPadding: '5px 10px' },
    { label: 'MINISTRIES', type:'head' },
    { label: 'Skills', state:'skills', type:'input', placeHolder:'Type here...' },
    // { data: ['Music','Children','Youth'], type: 'list', listPadding: '5px 10px' },
    { label: 'FAMILY', type:'head' },
    { label: 'Family', state:'family', type:'input', placeHolder:'Type here...' },
    // { 
    //   headerData:[
    //                 {name:'Image', field:'image'},
    //                 {name:'Family name', field:'familyname'}
    //   ],
    //   data: [
    //           { image:'background.png', familyname:'Villarubia' },
    //           { image:'background.png', familyname:'Tatoy' },
    //           { image:'background.png', familyname:'Lamis' }
    //         ], type: 'table', tablePadding: '5px 10px', action: test },
    { label: 'CERTIFICATE', type:'head' },
    { label: 'Certificate', state:'certificate', type:'input', placeHolder:'Type here...' },
    // { 
    //   headerData: [
    //     {name:'Image', field:'image'},
    //     {name:'Certificate name', field:'certificatename'}
    //   ],
    //   data: [
    //           {
    //             image:'background.png',
    //             certificatename:'Baptism certificate'
    //           }
    //         ], type: 'table', tablePadding: '5px 10px' },
    { label: 'NOTES', type:'head' },
    { note:'sample note', type: 'textarea', placeHolder:'Type here...', textareaPadding: '0 10px' }
  ]

  return (
    <>
      <Header />
      <div className='main-body' style={{'padding':'65px 10px 20px 10px', 'position':'relative', 'background':'#fff','borderRadius':'5px','border':'1px solid rgba(0,0,0,.1)'}}>
        {/* <Input label='Username' width='300px' icon='user' placeholder='Type here...' />
        <Input label='Password' width='300px' icon='trash' placeholder='Type here...' />
        <Input placeholder='First name' /> */}

        {/* <Button class='btn success' text='Create profile' icon='plus'/>
        <Button class='btn primary' text='Create profile' icon='bars'/>
        <Button class='btn warning' text='Create profile' icon='edit'/>
        <Button class='btn danger' text='Create profile' icon='trash'/>
        <Button class='btn secondary' text='Create profile' icon='pencil'/> */}

        <div className='profiles-filters-container'>
          <span>
            <Button class='btn success' text='Create profile' icon='plus'/> &ensp;
            <Button class='btn danger' text='Delete' icon='trash'/>
            {/* <button onDoubleClick={sample}>click</button> */}
          </span>

          <Input width='250px' icon='search' placeholder='search profile here...' />
        </div>

        <Table
          selection={true}
          index={true}
          header={headerData}
          data={data}
          action={viewData}
        />
        
        {
          updateModal && <Modal 
                            footerPadding='7px 10px'
                            close={true}
                            fullWidthImage='background.png'
                            data={modalData}
                            closeModal={setUpdateModal}
                            btnFooter={createBtnFooterProfile}
                            action={insertProfiles}
                          />
        }
      </div>
    </>
  )
}

export default Profiles