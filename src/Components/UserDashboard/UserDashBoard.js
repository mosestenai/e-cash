import React from 'react'

import CreateContribution from '../CreateContribution/CreateContribution'
import UserDropDown from './UserDropDown'

function UserDashBoard() {
    return (
        <div>
            <UserDropDown/>

            <CreateContribution/>
            
        </div>
    )
}

export default UserDashBoard
