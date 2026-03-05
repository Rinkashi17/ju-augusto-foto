import styled from 'styled-components';

// export const HeroContainer = styled.section<{ bgImage: string }>`
//   width: 100%;
//   height: 90vh; // Quase a tela cheia, instigando o scroll
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 0 24px;
  
//   /* Background */
//   background: linear-gradient(
//       rgba(248, 245, 242, 0.2), 
//       rgba(248, 245, 242, 0.4)
//     ), 
//     url(${props => props.bgImage});
//   background-size: cover;
//   background-position: center;
  
//   @media (min-width: ${props => props.theme.breakpoints.desktop}) {
//     height: 100vh;
//   }
// `;

// export const HeroContent = styled.div`
//   max-width: 800px;
//   text-align: center;
// `;

// export const Title = styled.h1`
//   font-family: ${props => props.theme.fonts.title};
//   font-size: 2.8rem;
//   color: ${props => props.theme.colors.textPrimary};
//   line-height: 1.2;
//   margin-bottom: 16px;

//   @media (min-width: ${props => props.theme.breakpoints.desktop}) {
//     font-size: 4.5rem;
//   }
// `;

// export const BioText = styled.p`
//     font-family: ${props => props.theme.fonts.body};
//     font-size: 1.1rem;
//     color: ${props => props.theme.colors.textSecondary};
//     max-width: 450px;
//     margin: 0 auto 32px;
//     line-height: 1.6;
// `;

// export const CTAButton = styled.button`
//     padding: 16px 32px;
//     border: 1px solid ${props => props.theme.colors.textPrimary};
//     background: transparent;
//     color: ${props => props.theme.colors.textPrimary};
//     font-family: ${props => props.theme.fonts.body};
//     text-transform: uppercase;
//     letter-spacing: 2px;
//     font-size: 0.8rem;
//     transition: all 0.3s ease;

//     &:hover {
//     background: ${props => props.theme.colors.textPrimary};
//     color: ${props => props.theme.colors.background};
//     }
// `;

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column; // Empilhado no Mobile
  background-color: ${props => props.theme.colors.background};
  margin-top: 70px; // Espaço para o Header fixo
  position: relative;

  .mySwiper {
    width: 100%;
    height: 50vh;
    
    
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 50%;
      height: 100%; /* Ocupa a altura total do container centralizado */
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row; // Lado a lado no Desktop
    align-items: center;
    justify-content: center;
    margin-top: 0;
    height: 100vh;
  }
`;

export const HeroImage = styled.div<{ $bgImage: string }>`
  width: 100%;
  height: 50vh; // Metade da tela no Mobile
  background: url(${props => props.$bgImage}) no-repeat center center;
  background-size: cover;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 100%; // Metade da largura no Desktop
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // Centralizado no Mobile
  text-align: center;
  position: relative;
  z-index: 2;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 50%;
    height: 100%;
    padding: 0 80px;
    align-items: flex-start; // Alinhado à esquerda no Desktop
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  font-size: 2.4rem;
  color: ${props => props.theme.colors.textPrimary};
  line-height: 1.1;
  margin-bottom: 20px;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 4rem;
  }
`;

export const BioText = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 450px;
`;

export const CTAButton = styled.button`
  padding: 16px 40px;
  background-color: transparent;
  color: ${props => props.theme.colors.textPrimary};
  border: 1px solid ${props => props.theme.colors.textPrimary};
  font-family: ${props => props.theme.fonts.body};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.textPrimary};
    color: ${props => props.theme.colors.background};
  }
`;
