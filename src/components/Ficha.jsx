import React from 'react'
import {MdOutlineCircle} from 'react-icons/md'
import {RxCross2} from 'react-icons/rx'

export const Ficha = ({valor}) => {
    
  switch (valor) {
    case 1:
        return <RxCross2/>

    case 2:
        return <MdOutlineCircle/>
    default:
        return <></>
  }
}
