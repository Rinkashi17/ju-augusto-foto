import * as S from './styles';

const passos = [
    {
    id: '01',
    title: 'O Planejamento',
    description: 'Conversamos e alinhamos as expectativas, planejamos os looks e acessórios para que seu ensaio transmita a mensagem que você deseja.'
    },
    {
    id: '02',
    title: 'O Ensaio',
    description: 'É um momento para ser vivido com leveza, vai ser divertido e você vai descobrir que gosta disso mais do que imaginava.'
    },
    {
    id: '03',
    title: 'A Entrega',
    description: 'Suas fotos serão selecionadas por você e todas essas serão editadas com cuidado e capricho, para que você tenha um material profissional e ao nível que merece.'
    }
];

export const Experiencia = () => {
    return (
    <S.Section>
        <S.Header>
        <S.Subtitle>Como funciona</S.Subtitle>
        <S.Title>A Experiência</S.Title>
        </S.Header>

        <S.Grid>
        {passos.map((passo) => (
            <S.StepCard key={passo.id}>
            <S.Number>{passo.id}</S.Number>
            <S.StepTitle>{passo.title}</S.StepTitle>
            <S.StepDescription>{passo.description}</S.StepDescription>
            </S.StepCard>
        ))}
        </S.Grid>
    </S.Section>
    );
};