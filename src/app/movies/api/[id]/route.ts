import { NextResponse } from 'next/server';
import { movieData } from '@/mocks/movies';

export async function PATCH(request: Request, { params }) {
    const { id } = params;
    let movie = movieData.find((movie) => movie.id === Number(id));
    movie.liked = !movie.liked;
    return NextResponse.json({ data: movie });
}
