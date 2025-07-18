import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "./styles.scss";

const SearchBar = () => {
    const [value, setValue] = useState('');

    return (
            <FormControl className="searchbar__container" variant='filled'>
                <InputLabel htmlFor="search-input" shrink={value.length > 0}>מה נאכל היום?</InputLabel>
                <FilledInput
                    id="search-input"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    startAdornment={<SearchIcon/>}
                />
            </FormControl>
    );
};

export default SearchBar;
