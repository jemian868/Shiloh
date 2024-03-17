import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCoffee,
    faGauge,
    faUser,
    faUsers,
    faBookmark,
    faHandHoldingHeart,
    faSackDollar,
    faBoxesPacking,
    faUserSecret,
    faFolder,
    faArrowUpRightDots,
    faEllipsis,
    faPlus,
    faTrash,
    faPenToSquare,
    faBars,
    faPencil,
    faMagnifyingGlass,
    faXmark,
    faFloppyDisk
} from '@fortawesome/free-solid-svg-icons'

const Icon = props => {
    let icons = {
        coffee: faCoffee,
        dashboard: faGauge,
        user: faUser,
        users: faUsers,
        bookMark: faBookmark,
        handHoldingHeart: faHandHoldingHeart,
        sackDollar: faSackDollar,
        boxesPacking: faBoxesPacking,
        userSecret: faUserSecret,
        folder: faFolder,
        arrowUpRightDots: faArrowUpRightDots,
        ellipsis: faEllipsis,
        plus:faPlus,
        trash:faTrash,
        edit:faPenToSquare,
        bars:faBars,
        pencil:faPencil,
        search:faMagnifyingGlass,
        xmark:faXmark,
        save:faFloppyDisk
    }
    return (
        <FontAwesomeIcon icon={icons[props.name]} fontSize={props.size} color={props.color} />
    )
}

export default Icon