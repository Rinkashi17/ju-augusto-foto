import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 20px;
    min-height: 100vh;
    `;

    export const Title = styled.h1`
    font-size: 2.5rem;
    text-transform: capitalize;
    margin-bottom: 40px;
    text-align: center;
    font-family: 'Playfair Display', serif;
    `;

    export const Grid = styled.div`
    /* Layout Masonry (Estilo Pinterest) */
    column-count: 3;
    column-gap: 20px;
    width: 100%;

    @media (max-width: 1100px) {
        column-count: 2;
    }

    @media (max-width: 700px) {
        column-count: 1;
    }
    `;

    export const PhotoItem = styled.div`
    margin-bottom: 20px;
    break-inside: avoid;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f0f0f0; /* Fundo cinza caso a imagem demore */
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }

    img {
        width: 100%;
        height: auto;
        display: block; /* Remove o espaço vazio abaixo da imagem */
        object-fit: cover;
        font-size: 0;
    }
`;