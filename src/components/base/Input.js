import './style.css'
import BaseIcon from './Icon'

const input = props => {
    // console.log(props)

    return(
        <div className='input-container' style={{padding:props.padding, width:props.width, display:props.display}}>
            { 
                props.label && <label> { props.labelIcon && <BaseIcon name={props.labelIcon} size={props.labelIconSize}/> } {props.label}</label>
            }

            {
                props.icon ?
                <div className='input-wrapper'>
                    <BaseIcon size={props.iconSize} name={props.icon}/>
                    <input onChange={props.action} defaultValue={props.value} disabled={props.disabled} placeholder={props.placeholder}/>
                </div>
                :
                <input onChange={props.action} defaultValue={props.value} disabled={props.disabled} placeholder={props.placeholder}/>
            }
            
        </div>
    )
}

export default input