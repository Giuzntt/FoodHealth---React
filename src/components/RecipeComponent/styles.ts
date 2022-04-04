import styled from "styled-components";

interface CardProps{
    backgroundImage: string;
}

export const Card = styled.div<CardProps>`
  //usar variaveis no css

  color: var(--clr-neutral-100);
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  padding: 8rem 0 0;
  max-width: 35ch;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 500ms ease;

  .card-content {
    --padding: 1.5rem;
    padding: var(--padding);
    background: linear-gradient(
      hsl(0 0% 0% / 0),
      hsl(20 0% 30% / 0.3) 20%,
      hsl(0 0% 0% / 1)
    );
    transform: translateY(66%);
    transition: transform 500ms ease;

    .card-title {
      position: relative;
      width: max-content;
      margin: 20px 0;
      //caso o titulo passe do tamanho do card
      max-width: 100%;

      &::after {
        content: "";
        position: absolute;
        height: 4px;
        left: calc(var(--padding) * -1);
        bottom: 0;
        width: calc(100% + var(--padding));
        background: var(--clr-accent-400);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 500ms ease;
      }
    }
    .card-body {
      color: rgb(255, 255, 255 / 0.85);
      margin: 15px 0;
    }

    .button {
      cursor: pointer;
      display: inline-block;
      text-decoration: none;
      padding: 0.5em 1.25em;
      color: var(--clr-neutral-900);
      background-color: var(--clr-accent-400);
      border-radius: 0.25em;
      text-transform: uppercase;
    }
    .button:hover,
    .button:focus {
      background-color: var(--clr-neutral-100);
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover .card-title::after {
    transform: scaleX(1);
  }
  &:hover .card-content {
    transform: translateY(0);
  }
`;

