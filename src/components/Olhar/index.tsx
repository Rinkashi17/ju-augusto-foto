import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';
import { useDrivePhotos } from '../../hooks/useDrivePhotos';

export const MeuOlhar = () => {
    const { fotos, loading } = useDrivePhotos(import.meta.env.VITE_FOLDER_HOME);

    if (loading) return null; // O site fica limpo enquanto carrega

    return (
    <S.Section>
        <S.Title>Meu Olhar</S.Title>
        
        <Swiper
        modules={[Autoplay, EffectCreative]}
        effect='fade'
        speed={1000}
        
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          // Mobile
        320: { slidesPerView: 1 },
          // Desktop (usando valor padrão ou do seu theme)
        1024: { slidesPerView: 3 }
        }}
        >
        {fotos.map((foto) => (
            <SwiperSlide key={foto.id}>
            <S.PhotoWrapper>
            <img src={foto.url} loading="lazy" />
            </S.PhotoWrapper>
        </SwiperSlide>
        ))}
        </Swiper>
    </S.Section>
    );
};