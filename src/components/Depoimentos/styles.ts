import styled from 'styled-components';

export const Section = styled.section`
    padding: 80px 24px;
    background-color: ${props => props.theme.colors.background};
    overflow: hidden;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 120px 10%;
    }
`;

export const SwiperContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    
    .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.textPrimary};
    }
`;

export const TestimonialCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px;
`;

export const QuoteIcon = styled.span`
    font-family: ${props => props.theme.fonts.title};
    font-size: 4rem;
    line-height: 1;
    color: ${props => props.theme.colors.divider};
    margin-bottom: -20px;
`;

export const FeedbackText = styled.p`
  font-family: ${props => props.theme.fonts.title}; // Usar a fonte elegante aqui
    font-size: 1.4rem;
    font-style: italic;
    line-height: 1.6;
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: 30px;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 1.8rem;
    }
`;

export const ClientInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const ClientName = styled.span`
    font-family: ${props => props.theme.fonts.body};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textPrimary};
`;

export const EventType = styled.span`
    font-family: ${props => props.theme.fonts.body};
    font-size: 0.8rem;
    color: ${props => props.theme.colors.textSecondary};
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    border: 1px solid ${props => props.theme.colors.divider};
    /* Opcional: filtro para manter a estética clean */
    backface-visibility: hidden;
    image-rendering: auto;
    image-rendering: crisp-edges;
`;
