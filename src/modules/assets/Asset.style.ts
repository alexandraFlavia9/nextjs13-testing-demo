import styled from 'styled-components';

export const Container = styled.div`
    padding: 2.5rem;
`;
export const AssetListWrapper = styled.div`
    display: grid;
    margin: 5rem;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;

export const SearchBar = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    > input {
        margin-right: 3rem;
        min-width: 15rem;
        background-color: linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb)))
            rgb(var(--background-start-rgb));
        border: 1px solid rgb(204, 204, 204);
    }
    > div {
        width: 20rem;
        background-color: rgb(118, 118, 118);
    }
`;

export const Text = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 1rem;
`;

export const IconWrapper = styled.div`
    padding-left: 1rem;
`;
export const AssetCardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
        rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    background-color: rgb(18, 18, 18);
    color: rgba(255, 255, 255, 0.7);
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    padding-bottom: 1rem;
    > img {
        object-fit: contain;
        min-width: 100%;
        max-width: 100%;
        height: auto;
        padding: 0;
    }
`;
