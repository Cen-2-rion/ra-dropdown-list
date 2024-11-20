import {useState} from 'react';
import DropdownItem from './DropdownItem';

const DropdownList = () => {
    const [selected, setSelected] = useState(null);

    const handleClick = (item) => {
        setSelected(item);
    }
    
    return (
        <ul className='dropdown-items'>
            {DropdownItem.map(item => (
                <li key={item.id} className={selected === item.id ? 'item active' : 'item'}>
                    <a href='#' onClick={() => handleClick(item.id)}>
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default DropdownList;
