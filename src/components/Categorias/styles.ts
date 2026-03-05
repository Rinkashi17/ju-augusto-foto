import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 80px 10%;
  background-color: ${props => props.theme.colors.background};
`;



export const HoverContent = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(248, 245, 242, 0.85); // Nosso Off-White com transparência
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
  /* Escondido por padrão */
  opacity: 0;
  transition: opacity 0.4s ease;
  transform: translateY(10px); 
  transition: all 0.4s ease;
  

`;

export const CategoryCard = styled(Link)<{ $bgImage?: string | null }>`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4 / 5; /* Formato vertical elegante */
  background-color: ${props => props.theme.colors.divider};

  background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover, &:active {
    ${HoverContent} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 350px; 
    margin: 0 auto; // Centraliza o card dentro do espaço do slide
  }
`;



export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
`;


export const HoverTitle = styled.h3`
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.textPrimary};
  font-size: 1.8rem;
  margin-bottom: 12px;
  transform: translateY(20px);
  transition: transform 0.4s ease;

  ${CategoryCard}:hover & {
    transform: translateY(0);
  }
`;

export const HoverDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Skeleton = styled.div`
  width: 100%;
  /* Ajuste a altura para bater com a altura da sua imagem dos cards */
  height: 450px; 
  border-radius: 8px;
  
  /* Se o seu card tiver bordas ou sombras, repita aqui para manter a silhueta */
  display: block;
`;

export const SwiperContainer = styled.div`
  .swiper-slide {
    /* Impede que o link seja acionado se o usuário arrastar mais que 5px */
    user-select: none;
  }

  /* Classe nativa do Swiper aplicada durante o movimento */
  .swiper-active-drag .swiper-slide {
    pointer-events: none; 
  }
`;