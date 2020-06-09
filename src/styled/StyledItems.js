import styled from 'styled-components'

export const StyledDiv = styled.div`
    margin-top: 10%;
    background: #209cee;
    padding: 30px;

    .addTodo{
        display: block;
        position: relative;
        right:-80%;
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

    div {
        background: #e8e8e8;
        border-radius: 4px;
        padding: 5px;
        max-width: 400px;
    }

`