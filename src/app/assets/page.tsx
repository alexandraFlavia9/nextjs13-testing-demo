import AssetList from '@/modules/assets/AssetList';

async function getData() {
    const result = await fetch(`${process.env.BASE_FETCH_URL}/assets/api`, { cache: 'no-store' });
    if (!result.ok) {
        throw new Error('Failed to fetch data');
    }
    const { data } = await result.json();
    return data;
}

export default async function AssetsPage() {
    const assets = await getData();
    return <AssetList assets={assets} />;
}
