import styled from 'styled-components';



export const StyledNav = styled.nav`
        display: flex;
        justify-content: space-between;
        padding: 0em 3em;
        align-items: center;
        flex-wrap: wrap;

        ul {
            display: flex;
            align-items:center;

            li{
                list-style: none;
                margin: 0px 10px;
                
            }
            img {
              height: 24px;
              border: 1px solid blue;
              width: 24px;
              border-radius: 50%;
            }

            div {
              a {
                text-decoration:none;
              }
              button {
                background:none;
                color: #333;
                font-weight: 300;
                border:none;
                font-size: 16px;
                padding: 0px;
                cursor:pointer;
              }
            }
        }
`;