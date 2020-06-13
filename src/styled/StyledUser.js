import styled from 'styled-components'


export const StyledUser = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em;
    border-radius:2px;
    margin-top: 1em;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
                0px 1px 1px 0px rgba(0,0,0,0.14), 
                0px 1px 3px 0px rgba(0,0,0,0.12);




    .userDetails {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        img {
            height: 150px;
            width: 150px;
            margin-bottom: 1em;
            border-radius: 4px;
            margin: auto;
        }

        div {
            h2 {
            text-align: center;
            color: indianred;

            }

            a {
                text-decoration: none;
            }
        }

       

    }

  



`