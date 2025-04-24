import styled from 'styled-components';

const ComponentTitle = styled.h1`
    color: red;

`;

const ComponentContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const ManoMygtukas = styled.button`
    color: ${ props => props.$danger ? 'red' : 'black'};
    background-color: ${ props => props.pavojingas ? 'red' : 'grey' };
`;

const Text = styled.p`
    color: ${ props => props.$spalva ? 'red'  : 'pink' };
`;

const ComponentSubTitle = styled(ComponentTitle)`
    text-decoration: underline;
`;

const ManoDiv = styled.div`
    color: ${ props => props.spalva};
` ;

const StyledComponentsExample = () => {
    return (
        <div>
            <h2>style-components example</h2>
            <ComponentContainer>
                <ComponentTitle>Mano pirmasis styled-componentas</ComponentTitle>
                <ComponentSubTitle>component title paveldejimas</ComponentSubTitle>
            </ComponentContainer>

            <ManoMygtukas>pvz</ManoMygtukas>
            
            <ManoMygtukas $danger>pvz</ManoMygtukas>
            <ManoMygtukas pavojingas='true'>pvz</ManoMygtukas>

            <Text $spalva>pvz</Text>

            <ManoDiv spalva='red'>pvz222</ManoDiv>
        </div>
    )
};

export default StyledComponentsExample