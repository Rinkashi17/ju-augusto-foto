import * as S from './styles';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const Contato = () => {
    return (
        <S.ContactSection id="contato">
        <S.Container>
            <S.InfoSide>
            <S.Tag>Disponível para novas histórias</S.Tag>
            <S.BigTitle>Vamos eternizar o seu momento?</S.BigTitle>
            <S.Subtitle>
                Seja um ensaio feminino, um aniversário ou um olhar sobre o cotidiano. 
                Estou a uma mensagem de distância.
            </S.Subtitle>
            </S.InfoSide>

            <S.ActionSide>
            {/* Card de CTA Rápido */}
            <S.ContactCard href="https://wa.me/message/H2BTTVSFQSG3B1" target="_blank">
                <div className="icon"><FaWhatsapp /></div>
                <div className="text">
                <span>Chamar no WhatsApp</span>
                <small>Resposta em até 1 hora</small>
                </div>
            </S.ContactCard>

            <S.ContactCard href="https://instagram.com/perfil">
                <div className="icon"><FaInstagram /></div>
                <div className="text">
                <span>Chamar no Instagram</span>
                <small>Para orçamentos detalhados</small>
                </div>
            </S.ContactCard>

            <S.InstagramGrid href="https://instagram.com/perfil" target="_blank">
                <FaInstagram />
                <span>Acompanhe o dia a dia no @perfil</span>
            </S.InstagramGrid>
            </S.ActionSide>
        </S.Container>

        <S.Footer>
            <p>© 2026 — Júlia Augusto. Todos os direitos reservados.</p>
        </S.Footer>
        </S.ContactSection>
    );
};