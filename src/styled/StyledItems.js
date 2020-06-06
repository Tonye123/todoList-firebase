import styled from 'styled-components'

export const StyledDiv = styled.div`
    margin-top: 10%;

    .addTodo{
        display: block;
        position: relative;
        right:-90%;
    }

    label {
        display: block;
    }

    li {
        list-style: none;
    }

    .strike {
        text-decoration: line-through;
    }

    button:disabled {
        cursor: not-allowed;
        opacity: 0.5;

    }

`