import React from 'react';
import { useDispatch } from 'react-redux';
import {  setSortMethod } from '../../store/redditSlice';
import './Header.css';

const Header = () => {

    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className='title-image'>
                <img src='../../public/finland.png'/>
                <h1>Finland on Reddit</h1>
            </div>
            <div className='search-link'>
                <div className='search'>
                    <input placeholder='Search...'/>
                    <button>Search</button>
                </div>
                <div className='sortMethod'>
                    <a id='sort' value='hot' onClick={() => dispatch(setSortMethod('hot'))}>Hot</a>
                    <a id='sort' value='top' onClick={() => dispatch(setSortMethod('top'))}>Top</a>
                    <a id='sort' value='new' onClick={() => dispatch(setSortMethod('new'))}>New</a>
                </div>
                <a className='reddit' href='https://reddit.com'>Reddit</a>
            </div>

        </header>
    )
}

export default Header;