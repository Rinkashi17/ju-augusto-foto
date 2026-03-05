import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: ${props => props.theme.colors.background};
    position: fixed;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid ${props => props.theme.colors.divider};

    h2{
        font-family: "DreamAvenue";
        font-size: 2.8rem;
        
        line-height: 1;
        padding-left: 4px;
        padding-top: 6px;

        @media (max-width: ${props => props.theme.breakpoints.mobile}){
            font-size: 2.4rem;
        }
    }
    `;

    export const NavMenu = styled.nav<{ $isOpen: boolean }>`
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: ${props => props.theme.colors.background};
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    gap: 30px;
    z-index: 999;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        position: static;
        display: flex;
        flex-direction: row;
        height: auto;
        width: auto;
        padding: 0;
        background-color: transparent;
        gap: 40px;
    }
    `;

    export const NavLink = styled(Link)`
    font-family: ${props => props.theme.fonts.title};
    font-size: 1.5rem;
    color: ${props => props.theme.colors.textPrimary};

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        display: none;
    }
    `;

    // O botão do Pixieset com o cadeado
    export const Button = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${props => props.theme.colors.textPrimary};
    color: ${props => props.theme.colors.background};
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 0.9rem;
    `;

    export const MenuButton = styled.button`
    display: block; // Visível no mobile

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none; // Some no PC
    }
`;

    export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

export const ModalContent = styled.div`
    background: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
    position: relative;
    text-align: center;

    h3 {
        margin-bottom: 10px;
        font-size: 1.5rem;
    }

    p {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 25px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        input {
        padding: 14px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        outline: none;
        &:focus { border-color: #000; }
        }

        button {
        padding: 14px;
        background: #1a1a1a;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s;
        &:hover { background: #333; }
        }
    }

    span {
        display: block;
        margin-top: 20px;
        font-size: 0.75rem;
        color: #999;
    }
`;

    export const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    color: #999;
    &:hover { color: #000; }
`;