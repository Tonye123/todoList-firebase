import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        color: #333;
        font-family: sans-serif;
        font-weight: 300;
    }

    input[type=text] {
            width: auto;
            padding: 12px 15px;
            margin: 8px 0;
            box-sizing: border-box;
}

    button, .upload, .signin {
        padding: 8px 12px;
        background: lightcoral;
        border: 0;
        font-weight: bold;
        font-family: inherit;
        color: white;
        cursor: pointer;
        font-weight: 400;
    }


`