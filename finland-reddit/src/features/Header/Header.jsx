import './Header.css';

const Header = () => {
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
                <a className='reddit' href='reddit.com'>Reddit</a>
            </div>

        </header>
    )
}

export default Header;