import styled from 'styled-components';

export const Section = styled.section`
    padding: 100px 24px;
    background-color: ${props => props.theme.colors.background}; // Off-white
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 60px;
`;

export const Title = styled.h2`
    font-family: ${props => props.theme.fonts.title};
    font-size: 2.5rem;
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: 10px;
`;

export const Subtitle = styled.p`
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
`;

export const Grid = styled.div`
    display: grid;
    gap: 40px;
    max-width: 1100px;
    margin: 0 auto;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    }
`;

export const StepCard = styled.div`
    text-align: center;
    padding: 20px;
`;

export const Number = styled.span`
    display: block;
    font-family: ${props => props.theme.fonts.title};
    font-size: 3rem;
    color: ${props => props.theme.colors.divider}; // Um tom bem clarinho
    margin-bottom: -20px;
    opacity: 0.5;
`;

export const StepTitle = styled.h3`
    font-family: ${props => props.theme.fonts.title};
    font-size: 1.5rem;
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: 15px;
    position: relative;
`;

export const StepDescription = styled.p`
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
    font-size: 0.95rem;
`;