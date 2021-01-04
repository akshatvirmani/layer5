import styled from "styled-components";

export const MesheryPlatformsWrapper = styled.div`
   margin-top: 5rem;
  .background-wrapper {
        position: absolute;
        width: 100%;
        height: 52rem;
        overflow: hidden;
        transform: skewY(10deg);
        transform-origin: 50% center;
        background-color: ${props => props.theme.secondaryColor};
        z-index: -1;
    }
  
  .content{ 
      text-align: center;
      h2 {
        color: ${props => props.theme.white};
        font-weight: 700;
      }
      .step-1 {
          padding-top: 8rem;
          @media (max-width: 62rem) {
            padding-top: 6rem;
          }
           @media (max-width: 32rem) {
            padding-top: 4rem;
          }
      }
      .supported-platforms{
        padding-top: 2rem;
        align-items: center;
      }
      .step-2{
        padding-top: 4rem;
        padding-bottom: 2rem;
      }
    }
`;
