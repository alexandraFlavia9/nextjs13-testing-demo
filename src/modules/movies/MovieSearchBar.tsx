import { SearchBar } from '@/modules/movies/Movie.style';
import Select from 'react-select';

interface MovieSearchBarProps {
    selectedCategory: { label: string; value: string };
    categories: { label: string; value: string }[];
    changeCategory: (_: { label: string; value: string }) => void;
    searchByKeyword: (_: string) => void;
}
function MovieSearchBar({ selectedCategory, categories, changeCategory, searchByKeyword }: MovieSearchBarProps) {
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            background:
                'linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))',
        }),
        singleValue: (styles) => ({ ...styles, color: 'rgb(204, 204, 204)' }),
        input: (styles) => ({ ...styles, color: 'rgb(204, 204, 204)' }),
        option: (styles, { isSelected }) => ({ ...styles, background: isSelected && 'rgb(204, 204, 204)' }),
        menuList: (styles) => ({
            ...styles,
            background:
                'linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))',
        }),
    };
    return (
        <SearchBar>
            <input type="text" onChange={(ev) => searchByKeyword(ev.target.value)} />
            <Select value={selectedCategory} onChange={changeCategory} options={categories} styles={colourStyles} />
        </SearchBar>
    );
}

export default MovieSearchBar;
