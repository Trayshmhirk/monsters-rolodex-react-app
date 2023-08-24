import './search-box.style.css';

import PropTypes from 'prop-types';

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input 
            className='search'
            type="search" 
            placeholder={placeholder} 
            onChange={handleChange}
        />
    )
}

SearchBox.propTypes = {
    placeholder: PropTypes.node.isRequired,
    handleChange: PropTypes.func.isRequired,
}

