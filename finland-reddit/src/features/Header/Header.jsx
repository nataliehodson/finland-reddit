import React from 'react';
import { useDispatch } from 'react-redux';
import {  searchPosts, setSortMethod } from '../../store/redditSlice';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {

    const dispatch = useDispatch();

    const search = () => {
        dispatch(searchPosts(document.getElementById('searchText').value))
    }

    return (
        <header className="header">
            <div className='title-image'>
                <h1>Finland on Reddit</h1>
            </div>
            <div className='search-link'>
                <div className='search'>
                    <input placeholder='Search...' id='searchText'/>
                    <FaSearch className='icon' type='submit' onClick={search}/>
                </div>
                <div className='sortMethod'>
                    <a id='sort' value='hot' onClick={() => dispatch(setSortMethod('hot'))}>Hot</a>
                    <a id='sort' value='top' onClick={() => dispatch(setSortMethod('top'))}>Top</a>
                    <a id='sort' value='new' onClick={() => dispatch(setSortMethod('new'))}>New</a>
                </div>
                <a className='reddit' href='https://reddit.com'>To Reddit</a>
            </div>

        </header>
    )
}

export default Header;