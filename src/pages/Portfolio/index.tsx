import { useParams, Link } from 'react-router-dom';
import { useDrivePortfolio } from '../../hooks/useDrivePortfolio';
import * as S from './styles';

export const Portfolio = () => {
    // Pega o parâmetro ":category" definido no App.tsx
    const { category } = useParams<{ category: string }>();
    
    // Usa o hook que você já criou para buscar as fotos no Drive
    const { images } = useDrivePortfolio(category || '');

    return (
    <S.Container>
        {/* Link de voltar e Título fora do Grid de fotos para não quebrar o layout */}
        <Link to="/" style={{ textDecoration: 'none', color: '#666' }}>
            ← VOLTAR PARA INÍCIO
        </Link>
        <S.Title>{category?.replace('-', ' ')}</S.Title>

        <S.Grid>
            {images.map((url, index) => (
            <S.PhotoItem key={index}>
                <img 
                src={url} 
                alt={`Trabalho ${category}`} 
                loading="lazy" 
                />
            </S.PhotoItem>
            ))}
        </S.Grid>
        </S.Container>
    );
};