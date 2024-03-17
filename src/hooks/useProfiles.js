const hook = ()=>{
    const headerData = [
        {name: 'Image', field: 'img_name'},
        {name: 'First name', field: 'firstname'},
        {name: 'Last name', field: 'lastname'},
        {name: 'Gender', field: 'gender'},
        {name: 'Address', field: 'address'}
    ]

    return {
        headerData
    }
}

export default hook