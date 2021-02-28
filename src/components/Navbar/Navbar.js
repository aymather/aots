const Navbar = () => {

    const log = () => {
        console.log('Complete');
    }

    return (
        <div className='navbar'>
            <div className='nav-item' onClick={log}>Home</div>
            <div className='nav-item'>About</div>
            <div className='nav-item'>Contact</div>
        </div>
    )

}

export default Navbar