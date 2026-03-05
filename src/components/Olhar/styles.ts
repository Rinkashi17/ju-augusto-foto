import styled from 'styled-components';

export const Section = styled.section`
    padding: 80px 24px;
    background-color: ${props => props.theme.colors.background};

    .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.textPrimary};
    }

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 120px 10%;
    }
`;

export const Title = styled.h2`
    font-family: ${props => props.theme.fonts.title};
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 60px;
    color: ${props => props.theme.colors.textPrimary};
`;

export const GalleryGrid = styled.div`
  /* No Mobile: Uma coluna simples ou Swiper */
    display: flex;
    flex-direction: column;
    gap: 20px;

@media (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* No Desktop: Masonry Layout (Estilo Pinterest) */
    display: block;
    column-count: 3; // Divide em 3 colunas
    column-gap: 30px;
    }
`;

export const PhotoWrapper = styled.div`
    break-inside: avoid; // Impede que a foto "corte" entre colunas
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    
    img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
    }

    &:hover img {
        transform: scale(1.03);
    }

  /* Efeito de legenda sutil ao passar o mouse */
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0,0,0,0.1);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover::after {
        opacity: 1;
    }
`;