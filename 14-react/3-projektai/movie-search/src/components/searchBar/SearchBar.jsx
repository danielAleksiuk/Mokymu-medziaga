import Form from 'react-bootstrap/Form';

const SearchBar = ({onChangeMethod, onEnterPressMethod}) => {
    return (
        <Form.Control
            type="text" 
            placeholder="Search" 
            id='SearchBox'
            onChange={onChangeMethod}
            onKeyUp={onEnterPressMethod}
        />
    );
}

export default SearchBar;