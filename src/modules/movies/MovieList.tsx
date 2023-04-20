'use client';

import { Movie } from '@/types/Movie';
import MovieCard from '@/modules/movies/MovieCard';
import { MovieListWrapper, Container } from '@/modules/movies/Movie.style';
import { useMovies } from '@/modules/movies/useMovies';
import MovieSearchBar from '@/modules/movies/MovieSearchBar';
import { Suspense } from 'react';

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
    const { filteredMovies, selectedCategory, categoryOptions, changeCategory, searchMovieByKeyword, toggleLike } =
        useMovies(movies);

    return (
        <Suspense fallback={'Loading....'}>
            <Container>
                <MovieSearchBar
                    selectedCategory={selectedCategory}
                    categories={categoryOptions}
                    changeCategory={changeCategory}
                    searchByKeyword={searchMovieByKeyword}
                />
                <MovieListWrapper>
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} toggleLike={toggleLike} />
                    ))}
                </MovieListWrapper>
            </Container>
        </Suspense>
    );
};

export default MovieList;
