import styled from 'styled-components';

const Button = styled.button`
    color: var(--purpleLight);
    border: 1px solid var(--purpleLight);
    box-sizing: border-box;
    cursor: pointer;
    padding: 13px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: 1;
        background-color: var(--purpleLight);
        color: var(--black);
    }
`;

export default Button;
