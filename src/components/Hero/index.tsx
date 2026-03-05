import { Autoplay, EffectFade } from 'swiper/modules';
import { useDriveHero } from '../../hooks/useDriveHero';
import * as S from './styles';
import { SwiperSlide, Swiper } from 'swiper/react';

export const Hero = () => {
    // Insira aqui o ID da pasta do Drive que contém as fotos da Hero
    const { fotosHero } = useDriveHero(import.meta.env.VITE_FOLDER_PATROA);

    const scrollToSection = () => {
    const element = document.getElementById('#Categorias');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    };

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
            Especialista em ensaios de Marca Pessoal e Gestante. Registrando suas fases sem abrir mão da sua essência.
        </S.BioText>
        <a href="#Categorias">
        <S.CTAButton onClick={scrollToSection}>Conhecer Trabalho</S.CTAButton>
        </a>
        </S.HeroContent>
    </S.HeroContainer>
    );
};