import {useState} from 'react';
import DropdownItem from './DropdownItem';

const DropdownList = ({items}) => {
    const [selected, setSelected] = useState(null);
    
    const handleClick = (item) => {
        setSelected(selected === item ? 'active' : '');
    }

    items = [
        {label: 'Option 1', value: 'option1'}
    ];
    
    return (
        <>
            {items.map(item => (
                <DropdownItem key={item} item={item} onClick={() => handleClick(item)} />
            ))}
        </>
    );
}

export default DropdownList;
