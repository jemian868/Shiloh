import { useEffect, useState } from 'react'
import BaseIcon from './Icon'
import Button from './Button'
import Input from './Input'
import Table from './Table'

const Modal = (props)=> {
    // console.log(props.data[28].headerData)
    // console.log(props)
		const [formData,setFormData] = useState({})

	useEffect(() => {
		for (const key in props.activeData) {
			setFormData(prevData=>({
				...prevData,
				[key]:props.activeData[key]
			}))
		}
	},[])

    return(
        <div className="modal-container">
          <div className="modal-content" style={{padding:props.contentPadding}}>
						{
							props.close && <button className='modal-close' onClick={() => props.closeModal(false)}> <BaseIcon name='xmark' size={16}/> </button>
						}
						{ 
							props.title &&  <div className="modal-header" style={{padding:props.headerPadding}}> <label>{ props.title }</label> </div>
						}
            <div className="modal-body" style={{padding:props.bodyPadding}}>
							{
								props.fullWidthImage && <img src={require('../../images/'+props.fullWidthImage)} alt={'image2'} style={{width:'100%'}} />
							}
							{
								props.data.map((item, i)=>{
									return(<>
										{ 
											item.type === 'head' && <span key={i} style={{padding:'5px 10px', fontWeight:'600', display:'block'}}><u>{ item.label }</u></span>
										}
										{
											item.type === 'input' && <Input
																			key={i}
																			padding='0 10px'
																			display='inline-block'
																			label={item.label}
																			width={item.width}
																			placeholder={item.placeHolder}
																			value={props.activeData[item.state]}
																			action={e=>{
																				setFormData(prevData=>({
																					...prevData,
																					[item.state]:e.target.value
																				}))
																			}}
																	/>
										}
										{
											item.type === 'list' && <ul>
																		{
																			item.data.map((data,key)=>{
																				return <li key={key} style={{padding:item.listPadding}}>{key+1}.&nbsp;{ data }</li>
																			})
																		}
																	</ul>
										}
										{
											item.type === 'table' && <table>
																		<tbody>
																			{
																				item.data.map((data,key)=>{
																					return item.action ?
																						<tr key={key} onClick={()=>item.action()} className='hover'>
																							{
																								item.headerData.map((head,index)=>{
																									return <td key={index} style={{padding:item.tablePadding}}>
																										{
																											head.field === 'image' ?
																											<img src={require('../../images/'+data[head.field])} alt={'image'+index} style={{height:'30px'}}/>
																											:
																											data[head.field]
																										}
																									</td>
																								})
																							}
																						</tr>
																						:
																						<tr key={key}>
																							{
																								item.headerData.map((head,index)=>{
																									return <td key={index} style={{padding:item.tablePadding}}>
																												{
																													head.field === 'image' ?
																													<img src={require('../../images/'+data[head.field])} alt={'image'+index} style={{height:'30px'}}/>
																													:
																													data[head.field]
																												}
																											</td>
																								})
																							}
																						</tr>
																				})
																			}
																		</tbody>
																	</table>
										}
										{
											item.type === 'textarea' && <div style={{padding:item.textareaPadding}}>
																			<textarea defaultValue={item.note} placeholder={item.placeHolder}></textarea>
																		</div>
										}
									</>)
								})
							}

                    {/* <Input label='First name' padding='0 10px' display='inline-block' width='50%' placeholder='Type here...' />
                    <Input label='Last name' padding='0 10px' display='inline-block' width='50%' placeholder='Type here...' />
                    <Input label='Gender' padding='0 10px' placeholder='Type here...' />
                    <Input label='Address' padding='0 10px' placeholder='Type here...' /> */}
                    {/* <Input label='Address' labelIcon='edit' labelIconSize={10} value="Bogo Capalaran" placeholder='Type here...' disabled={true}/> */}
            </div>
						<div className="modal-footer" style={{padding:props.footerPadding}}>
							{/* <Button action={()=>{
								console.log(formData)
								props.action(formData)
							}} text='Submit' icon='save' class='btn success'/> */}
							
							{
								<Button action={()=>{
													props.action(formData)
												}} text='Save' icon='save' class='btn success' />
							}
						</div>
          </div>
        </div>
    )
}

export default Modal