import React from 'react';

function Navbar(props) {
    return (
        <div className=''>
            <ul className='flex justify-around h-20 bg-slate-400 items-center text-xl font-semibold'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
        </div>
    )
}

export default Navbar;