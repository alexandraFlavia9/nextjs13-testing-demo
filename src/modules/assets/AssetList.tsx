'use client';

import { Asset } from '@/types/Asset';
import AssetCard from '@/modules/assets/AssetCard';
import { AssetListWrapper, Container } from '@/modules/assets/Asset.style';
import { useAssets } from '@/modules/assets/useAssets';
import AssetsSearchBar from '@/modules/assets/AssetsSearchBar';
import { Suspense } from 'react';

interface AssetListProps {
    assets: Asset[];
}

const AssetList = ({ assets }: AssetListProps) => {
    const { filteredMovies, selectedCategory, categoryOptions, changeCategory, searchMovieByKeyword, toggleLike } =
        useAssets(assets);

    return (
        <Suspense fallback={'Loading....'}>
            <Container>
                <AssetsSearchBar
                    selectedCategory={selectedCategory}
                    categories={categoryOptions}
                    changeCategory={changeCategory}
                    searchByKeyword={searchMovieByKeyword}
                />
                <AssetListWrapper>
                    {filteredMovies.map((movie) => (
                        <AssetCard key={movie.id} asset={movie} toggleLike={toggleLike} />
                    ))}
                </AssetListWrapper>
            </Container>
        </Suspense>
    );
};

export default AssetList;
