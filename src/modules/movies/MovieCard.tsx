'use client';

import { Movie } from '@/types/Movie';
import { MovieCardItem, Text, IconWrapper } from '@/modules/movies/Movie.style';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface MovieCardProps {
    movie: Movie;
    toggleLike: (_: Movie) => void;
}

const MovieCard = ({ movie, toggleLike }: MovieCardProps) => {
    return (
        <MovieCardItem>
            <Text>{movie.name}</Text>
            <Image src={movie.previewImg} alt={movie.name} width="150" height="150" priority />
            <div>
                <Text>Genre: {movie.metadata.join(', ')}</Text>
                <IconWrapper>
                    <FontAwesomeIcon
                        icon={faHeart}
                        color={movie.liked ? '#ec7979' : ''}
                        onClick={() => toggleLike(movie)}
                    />
                </IconWrapper>
            </div>
        </MovieCardItem>
    );
};

export default MovieCard;
