import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    border: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    background-color: #E0D7EC
  }

  @media only screen and (max-width: 850px){
    html{
      font-size: 85%;
    }
  }
  @media only screen and (max-width: 600px){
    html{
      font-size: 75%;
    }
  }
  @media only screen and (max-width: 450px){
    html{
      font-size: 68%;
    }
  }
  @media only screen and (max-width: 280px){
    html{
      font-size: 60%;
    }
  }
  
`;
