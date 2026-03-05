import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';
import * as S from './styles';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para o modal
    const [galleryId, setGalleryId] = useState(''); // Estado para o input do ID

    const handleAccessGallery = (e: React.FormEvent) => {
        e.preventDefault();
        if (galleryId) {
        // Limpa o ID pegando apenas a última parte se colarem o link todo
        const slug = galleryId.trim().split('/').filter(Boolean).pop();
        // Redireciona para o seu Pixieset
        window.open(`https://juaugustofoto2.pixieset.com/${slug}/`, '_blank');
        
        setIsModalOpen(false);
        setGalleryId('');
        }
    };

    return (
        <>
        <S.HeaderContainer>
            <Link to="/">
            <h2>Ju Augusto</h2>
            </Link>

            <S.MenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            </S.MenuButton>

            <S.NavMenu $isOpen={isOpen}>
            <S.NavLink to="/" onClick={() => setIsOpen(false)}>Início</S.NavLink>
            <S.NavLink to="/sobre" onClick={() => setIsOpen(false)}>Sobre</S.NavLink>
            <S.NavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfólio</S.NavLink>
            
            {/* Alterado de Link para botão que abre o modal */}
            <button
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'white',
                    background: 'black',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                }}
                onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false); // Fecha o menu mobile ao abrir o modal
                }}
            >
                <Lock size={16} /> Área do Cliente
            </button>
            </S.NavMenu>
        </S.HeaderContainer>

        {/* Estrutura do Modal */}
        {isModalOpen && (
            <S.ModalOverlay onClick={() => setIsModalOpen(false)}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
                <S.CloseButton onClick={() => setIsModalOpen(false)}>
                <X size={20} />
                </S.CloseButton>
                
                <h3>Acessar Galeria</h3>
                <p>Insira o código da sua galeria enviado por e-mail ou WhatsApp.</p>
                
                <form onSubmit={handleAccessGallery}>
                <input 
                    type="text" 
                    placeholder="Ex: galeriadeselecaoteste"
                    value={galleryId}
                    onChange={(e) => setGalleryId(e.target.value)}
                    autoFocus
                />
                <button type="submit">Visualizar Fotos</button>
                </form>
                
                <span>A senha será solicitada na próxima tela.</span>
            </S.ModalContent>
            </S.ModalOverlay>
        )}
        </>
    );
};