import styled from "styled-components";

export const Button = styled.button<{Variant?: string}>`
    color: ${(props) => 
        props.Variant === 'menu' ?
        'blue' : 'red'
    };
`;