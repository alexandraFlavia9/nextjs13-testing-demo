'use client';

import { Asset } from '@/types/Asset';
import { AssetCardItem, Text, IconWrapper } from '@/modules/assets/Asset.style';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface AssetCardProps {
    asset: Asset;
    toggleLike: (_: Asset) => void;
}

const AssetCard = ({ asset, toggleLike }: AssetCardProps) => {
    return (
        <AssetCardItem>
            <Text>{asset.name}</Text>
            <Image src={asset.previewImg} alt={asset.name} width="150" height="150" priority />
            <div>
                <Text>Genre: {asset.metadata.join(', ')}</Text>
                <IconWrapper>
                    <FontAwesomeIcon
                        icon={faHeart}
                        color={asset.liked ? '#ec7979' : ''}
                        onClick={() => toggleLike(asset)}
                    />
                </IconWrapper>
            </div>
        </AssetCardItem>
    );
};

export default AssetCard;
