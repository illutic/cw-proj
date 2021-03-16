import styled from 'styled-components';

export const Subheading = styled.h3`
    position: relative;
    display: inline-block;
    font-family: ${({ theme }) => theme.typography.secondary};
    font-size: ${({ theme }) => theme.typography.large};
    font-weight: 700;
    z-index: 1;
    &::after {
        content: '';
        display: ${({ underlined }) => (underlined ? 'block' : 'none')};
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
        width: 75%;
        height: 10px;
        opacity: 0.4;
        background: ${({ theme }) => theme.colors.attention};
    }
`;
