import React from "react";
import './styles.scss';

const FloatingMenu = ({ onClick }) => (
    <div className='floating-menu' aria-label="Menu Flutuante">
        <button onClick={onClick} >
            1
        </button>
        <button onClick={onClick} >
            2
        </button>
        <button onClick={onClick} >
            3
        </button>
    </div>
);

export default FloatingMenu;