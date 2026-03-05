import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import * as S from './styles';

const depoimentos = [
    {
    id: 1,
    text: "Com você o medo foi embora, e com o ambiente leve a timidez nem teve espaço! Você foi sensacional, o espaço excelente, a comidade, enfim... foi um conjunto dentro de uma experiência incrível",
    name: "Michele",
    type: "Marca Pessoal",
    avatar: "/Michele.png"
    },
    {
    id: 2,
    text: "Obrigada meu amor, você foi a primeira a soltar meu sorriso.",
    name: "Cássia",
    type: "Marca Pessoal",
    avatar: "/Cassia.png"
    },
    {
    id: 3,
    text: "Eu fiquei muito nervosa mas você já chegou acalmando tudo e foi lindo demais. Te adoro!",
    name: "Juliana",
    type: "Marca Pessoal",
    avatar: "/Juliana.png"
    }
];

export const Depoimentos = () => {
    return (
    <S.Section>
        <S.SwiperContainer>
        <Swiper
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
        >
            {depoimentos.map((item) => (
            <SwiperSlide key={item.id}>
                <S.TestimonialCard>
                <S.Avatar src={item.avatar} alt={item.name} />
                <S.FeedbackText>{item.text}</S.FeedbackText>
                <S.ClientInfo>
                {/* <S.QuoteIcon>“</S.QuoteIcon> */}
                    <S.ClientName>{item.name}</S.ClientName>
                    <S.EventType>{item.type}</S.EventType>
                </S.ClientInfo>
                </S.TestimonialCard>
            </SwiperSlide>
            ))}
        </Swiper>
        </S.SwiperContainer>
    </S.Section>
    );
};