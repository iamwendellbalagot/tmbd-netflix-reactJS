import React from 'react';
import './MyList.css';
import Navigaition from '../../components/Navigation/Navigation';
import {useSelector} from 'react-redux';
import { getUser } from '../../reduxSlices/userSlice';
import { db, auth } from '../../firebase';

const MyList = () => {
    const user = useSelector(getUser);

    const handleLogout = () => {
        auth.signOut()
    }

    return (
        <div className = 'mylist'>
            <div className='mylist__header'>
                <span onClick={handleLogout} >Home</span>
            </div>
            <div className="mylist__movies">

            </div>
        </div>
    )
}

export default MyList
