import styled from "styled-components";

const AppBox = styled.div`
   background-color: #282c34;
   min-height: 100vh;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;
`;

const App = () => {
   return <AppBox></AppBox>;
};
export default App;
