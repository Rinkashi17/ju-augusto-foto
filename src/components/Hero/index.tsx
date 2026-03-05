import { Autoplay, EffectFade } from 'swiper/modules';
import { useDriveHero } from '../../hooks/useDriveHero';
import * as S from './styles';
import { SwiperSlide, Swiper } from 'swiper/react';

export const Hero = () => {
    // Insira aqui o ID da pasta do Drive que contém as fotos da Hero
    const { fotosHero } = useDriveHero(import.meta.env.VITE_FOLDER_PATROA);

    return (
        <S.HeroContainer>
        {fotosHero.length > 0 && (
            <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            className="mySwiper"
            fadeEffect={{ crossFade: true }}
            speed={4000} // Transição suave de 2 segundos
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            loop={true}
            >
            {fotosHero.map((url, index) => (
                <SwiperSlide key={index}>
                    <S.HeroImage $bgImage={url} />
                </SwiperSlide>
            ))}
            </Swiper>
        )}

        <S.HeroContent>
        <S.Title>Eternizando a <br/> sua essência</S.Title>
        <S.BioText>
            Especialista em retratos femininos e momentos reais. 
            Transformo luz em memórias que você poderá tocar.
        </S.BioText>
        <S.CTAButton>Conhecer Trabalho</S.CTAButton>
        </S.HeroContent>
    </S.HeroContainer>
    );
};