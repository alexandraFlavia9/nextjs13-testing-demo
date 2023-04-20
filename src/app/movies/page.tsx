import MovieList from '@/modules/movies/MovieList';

async function getData() {
    const result = await fetch(`${process.env.BASE_FETCH_URL}/movies/api`, { cache: 'no-store' });
    if (!result.ok) {
        throw new Error('Failed to fetch data');
    }
    const { data } = await result.json();
    return data;
}

export default async function MoviesPage() {
    const movies = await getData();
    return <MovieList movies={movies} />;
}
