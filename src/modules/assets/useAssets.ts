import { Asset } from '@/types/Asset';
import { useEffect, useMemo, useState } from 'react';

export const useAssets = (items: Asset[]) => {
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<{ label: string; value: string }>(null);
    const [filteredMovies, setFilteredMovies] = useState<Asset[]>([]);

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

    const toggleLike = (asset: Asset) => {
        setFilteredMovies((assets) => {
            return assets.map((assetData) =>
                assetData.id === asset.id ? { ...assetData, liked: !assetData.liked } : assetData,
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
