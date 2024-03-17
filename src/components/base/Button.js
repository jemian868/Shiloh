import './style.css'
import BaseIcon from './Icon'

const button = props => {
    return props.action ?
        <button onClick={()=>props.action(false)} className={props.class}>
            { props.icon && <BaseIcon name={props.icon}/> }
            { props.text }
        </button>
        :
        <button className={props.class}>
            { props.icon && <BaseIcon name={props.icon}/> }
            { props.text }
        </button>
}

export default button