import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import './Navigation.css';

function Navigaiton({handleSearch}) {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState(false);
    const [searchName, setSearchName] = useState('');

    const history = useHistory()

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            if (window.scrollY > 200){
                setShow(true)
            } else setShow(false);
        });
    }, []);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchName)
        setSearchName('');
    }

    const showForm = () => {
        setForm(!form);
    }

    return (
        <div className={`navigation ${show && 'navigation__black'}`} >
            <div className='navigation__form'>
                {form?<form onSubmit = {handleSearchSubmit}>
                    <input type='text' placeholder='Search' value={searchName} className='form__input' onChange={e => setSearchName(e.target.value)} />
                    <SearchIcon type='submit' className="form__btn"/>
                </form>: null}
            </div>
            
            <ul>
                <li>Home</li>
                <li onClick={showForm}>Search</li>
                <li onClick = {() => history.push('/mylist')}>My List</li>
            </ul>
        </div>
    )
}

export default Navigaiton;
