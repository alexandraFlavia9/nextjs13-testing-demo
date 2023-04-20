import { Movie } from '@/types/Movie';
import { useEffect, useMemo, useState } from 'react';

export const useMovies = (items: Movie[]) => {
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<{ label: string; value: string }>(null);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

    useEffect(() => {
        setFilteredMovies(items);
    }, [items]);

    const categories = useMemo(() => {
        const categories = items.reduce((accumulator, item) => [...accumulator, ...item.metadata], []);
        categories.sort();
        return [...new Set(categories)];
    }, [items]);

    const categoryOptions = useMemo(
        () => categories.map((category) => ({ value: category, label: category })),
        [categories],
    );

    const toggleLike = async (movieData: Movie) => {
        const result = await fetch(`movies/api/${movieData.id}`, { method: 'PATCH' });
        const resultData = await result.json();
        const updatedMovie = resultData.data;
        setFilteredMovies((movies) => {
            return movies.map((movie) =>
                movie.id === updatedMovie.id ? { ...movie, liked: updatedMovie.liked } : movie,
            );
        });
    };

    useEffect(() => {
        const result = items.filter(
            (item) =>
                item.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
                item.metadata.some((genre) => (selectedCategory ? selectedCategory.value === genre : true)),
        );
        setFilteredMovies(result);
    }, [searchKeyword, selectedCategory, items]);

    const searchMovieByKeyword = (keyword: string) => {
        setSearchKeyword(keyword);
    };
    const changeCategory = async (option: { label: string; value: string }) => {
        setSelectedCategory(option);
    };

    return {
        selectedCategory,
        filteredMovies,
        categoryOptions,
        changeCategory,
        searchMovieByKeyword,
        toggleLike,
    };
};
