import styled from 'styled-components';
import {shade} from 'polished';
export const Container = styled.footer`
    position: relative;
    width: 100%;
    height: 100px;
    left: 0px;
    top: 465px;
    bottom: 0%;
    background: #14D0AE;
    border-radius: 60px 60px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;

a {
    display: inline-block;
    margin: 25px 25px 0 25px;
    color: #E5E5E5;
    text-decoration: none;
    transition: color 0.2s;
    &:hover{
        color: ${shade(0.2, '#888989')}
    }
}
`;

export default Container;

