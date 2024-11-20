import {useState} from 'react';
import DropdownList from './DropdownList';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className='dropdown-wrapper'>
            <button className='dropdown-button' onClick={toggleDropdown}>
                Account settings
            </button>
            {isOpen && <DropdownList/>}
        </div>
    );
}

export default Dropdown;
