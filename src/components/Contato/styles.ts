import styled, { keyframes } from 'styled-components';

    const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
    `;

    export const ContactSection = styled.section`
    padding: 120px 8%;
    background-color: #050505; // Preto profundo para fechar o site
    color: #fff;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;

    // Um detalhe de luz no fundo para não ficar chapado
    &::before {
        content: '';
        position: absolute;
        top: -10%;
        right: -10%;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(212, 163, 115, 0.1) 0%, transparent 70%);
        pointer-events: none;
    }
    `;

    export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    `;

    export const InfoSide = styled.div`
    animation: ${fadeIn} 0.8s ease forwards;
    `;

    export const Tag = styled.span`
    display: inline-block;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 24px;
    color: #d4a373; // Tom bronze/dourado para luxo
    `;

    export const BigTitle = styled.h2`
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-family: 'Playfair Display', serif; // Ou a fonte elegante que você estiver usando
    line-height: 1.1;
    margin-bottom: 30px;
    `;

    export const Subtitle = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #a0a0a0;
    max-width: 500px;

    @media (max-width: 968px) {
        margin: 0 auto;
    }
    `;

    export const ActionSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    animation: ${fadeIn} 1s ease forwards;
    `;

    export const ContactCard = styled.a`
    display: flex;
    align-items: center;
    padding: 30px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    text-decoration: none;
    color: inherit;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    .icon {
        font-size: 2.5rem;
        margin-right: 25px;
        color: #fff;
        transition: 0.3s;
    }

    .text {
        span {
        display: block;
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 4px;
        }
        small {
        color: #707070;
        font-size: 0.9rem;
        }
    }

    &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: #d4a373;
        transform: scale(1.02) translateX(10px);

        .icon {
        color: #d4a373;
        transform: scale(1.1);
        }
    }
    `;

    export const InstagramGrid = styled.a`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 20px;
    color: #a0a0a0;
    text-decoration: none;
    font-size: 0.9rem;
    transition: 0.3s;

    svg {
        font-size: 1.2rem;
    }

    &:hover {
        color: #fff;
    }
    `;

    export const Footer = styled.footer`
    margin-top: 100px;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
    color: #555;
    font-size: 0.85rem;
    `;