import './style.css'

const table = props => {
    return(
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        { props.selection && <th style={{'width':'10px'}}><input type="checkbox" style={{'cursor':'pointer'}}/></th> }
                        { props.index && <th style={{'width':'10px'}}>No.</th> }
                        {
                            props.header.map((item, i) => {
                                return(
                                    <th key={i}>{item.name}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item, i) => {
                            return(
                                <tr key={i}>
                                    { props.selection && <td><input onChange={e=>{
                                                                                console.log(e.target.checked)
																				props.setSelectedItems(prevData=>([
																					...prevData,
                                                                                    ...[+e.target.value]
                                                                                ]))
																			}} value={item.id} type="checkbox" style={{'cursor':'pointer'}}/></td> }
                                    { props.index && <td>{i+1}</td> }
                                    
                                    {
                                        props.header.map((head, key) => {
                                            return props.action ?
                                            <td onClick={()=> props.action(item)} key={key} style={{'cursor':'pointer'}}>
                                                {
                                                    head.field === 'img_name' ?
                                                        <img src={require('../../images/'+item[head.field])} alt={'image'+key} />
                                                        :
                                                        item[head.field]
                                                }
                                            </td>
                                            :
                                            <td key={key}>
                                                {
                                                    head.field === 'img_name' ?
                                                        <img src={require('../../images/'+item[head.field])} alt={'image'+key} />
                                                        :
                                                        item[head.field] 
                                                }
                                            </td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default table