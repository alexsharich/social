import React from 'react'
import { UserType } from '../../api/api'


export const updateObjectInArray = (item, itemId, objPropName , newObjProps) => {
    return item.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps }
        }
        return u
    })
}