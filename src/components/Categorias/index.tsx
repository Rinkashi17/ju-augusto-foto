import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import * as S from './styles';
import { useDriveCapa } from '../../hooks/useDriveCapa';

const categorias = [
    { id: 6, title: 'Aniversário', slug: 'aniversario', label: "Aniversário", folderId: import.meta.env.VITE_FOLDER_ANIVERSARIO1, description: 'Clique para explorar esse portfolio' },
    { id: 2, title: 'Casal', slug: 'casal', label: "Casal", folderId: import.meta.env.VITE_FOLDER_CASAL, description: 'Clique para explorar esse portfolio' },
    { id: 3, title: 'Gestantes', slug: 'gestantes', label: "Gestantes", folderId: import.meta.env.VITE_FOLDER_GESTANTES, description: 'Clique para explorar esse portfolio' },
    { id: 4, title: 'Pessoal', slug: 'pessoal', label: "Pessoal", folderId: import.meta.env.VITE_FOLDER_PESSOAL, description: 'Clique para explorar esse portfolio' },
    { id: 5, title: 'Masculino', slug: 'masculino', label: "Masculino", folderId: import.meta.env.VITE_FOLDER_MASCULINO, description: 'Clique para explorar esse portfolio' }
];

interface CategoryProps {
    id: string | number;
    title: string;
    slug: string;
    label: string;
    folderId: string;
    description: string;
}

const CategoryCardItem = ({ cat }: { cat: CategoryProps }) => {
    const { capaUrl, loading } = useDriveCapa(cat.folderId);

    

    return (
    <S.CategoryCard to={`/portfolio/${cat.slug}`} $bgImage={capaUrl}>
        {loading ? (
        <S.Skeleton />
        ) : (
        <S.Image src={capaUrl || ''} alt={cat.label} />
        )}
        <S.HoverContent>
        <S.HoverTitle>{cat.label}</S.HoverTitle>
        <S.HoverDescription>{cat.description}</S.HoverDescription>
        </S.HoverContent>
    </S.CategoryCard>
    );
};

export const Categorias = () => {
    return (
    <S.Section id='categorias'>
        <Swiper
        spaceBetween={30}
        slidesPerView={1.3} // Mobile-first: mostra um pedaço do próximo card
        centeredSlides={true}
        preventClicks={true}
        preventClicksPropagation={false}
        
        loop={true}
        breakpoints={{
            1024: { slidesPerView: 3, centeredSlides: true } // Desktop: mostra mais cards
        }}
    >
        {categorias.map(cat => (
            <SwiperSlide key={cat.id}>
                <CategoryCardItem cat={cat} />
            </SwiperSlide>
        ))}
        </Swiper>
    </S.Section>
    );
};