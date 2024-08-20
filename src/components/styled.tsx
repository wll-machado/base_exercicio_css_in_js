import styled from "styled-components";

export const Vaga = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
 `

export const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
 `

 export const Form = styled.form `
    display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
 `

 export const Campo = styled.input `
    padding: 0 16px;
  outline-color: var(--cor-principal);
 `

 export const Btn = styled.button `
 background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
 `

 export const HeroForm = styled.form `
    height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--cor-principal);
  content: '';
  opacity: 0.7;
  }

  div {
    position: relative;
  color: #eee;
  }
 `

 export const HeroTitle = styled.h2 `
    font-family: Gloock, serif;
  font-size: 48px;

 `

 export const Li = styled.li `
    border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;
 `
 export const VagaTitulo = styled.h3 `
 
 font-weight: bold;
  margin-bottom: 16px;
 `

 export const VagaLink = styled.a `
 
 border-color: var(--cor-secundaria);
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
    }


&:hover {
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
}

&:hover a {
  border-color: var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
}

 `