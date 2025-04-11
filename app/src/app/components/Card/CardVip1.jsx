"use client"

import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="main">
        <div className="card">
          <div className="heading">Plano FAN</div>
          <div className="details"><b>Assista em até 1 TELA</b><br />Novos episódios após o <br />lançamento no Japão</div>
          <div className="price">R$9,99/mês</div>
          <button className="btn1">Comprar</button>
        </div>
        <svg className="glasses" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" xmlSpace="preserve">  <image id="image0" width={100} height={100} x={0} y={0} href="./neko-vip.png
      "/>
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    top: 2em;
    width: 15.5em;
    height: 7.5em;
    background: white;
    transition: .4s ease-in-out;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    overflow: hidden;
  }

  .heading {
    position: relative;
    color: black;
    font-weight: bold;
    font-size: 1.1em;
    padding-top: 1em;
    padding-left: 1em;
    transition: .4s ease-in-out;
  }

  .details {
    position: relative;
    color: black;
    font-size: 0.6em;
    padding-top: 1.5em;
    padding-left: 2em;
    transition: .4s ease-in-out;
  }

  .price {
    position: relative;
    color: black;
    font-weight: bold;
    font-size: 0.8em;
    padding-top: 1.5em;
    padding-left: 1.5em;
    top: 9.6em;
    left: 2.5em;
    transition: .4s ease-in-out;
  }

  .btn1 {
    position: relative;
    border: none;
    outline: none;
    background-color: #E11D48;
    color: white;
    font-size: 0.6em;
    padding-left: 6.9em;
    padding-right: 6.5em;
    padding-top: 0.8em;
    padding-bottom: 0.85em;
    border-radius: 10px;
    left: 1.6em;
    top: 14.8em;
    transition: .4s ease-in-out;
    font-weight: bold;
  }

  .btn1:hover {
    background-color: #881337
;
    cursor: pointer;
  }

  .btn2 {
    position: relative;
    border: none;
    outline: none;
    background-color: black;
    color: white;
    font-size: 0.6em;
    padding-left: 5.1em;
    padding-right: 5.1em;
    padding-top: 0.8em;
    padding-bottom: 0.85em;
    border-radius: 10px;
    left: 2.6em;
    top: 15.5em;
    transition: .4s ease-in-out;
    font-weight: bold;
  }

  .btn2:hover {
    background-color: limegreen;
    cursor: pointer;
  }

  .glasses {
    position: relative;
    top: -4em;
    left: 9.5em;
    width: 70px;
    height: 70px;
    transition: .4s ease-in-out;
  }

  .card:hover {
    width: 12.5em;
    height: 22em;
    transform: translateY(1.25em);
  }

  .card:hover + .glasses {
    transform: rotateX(360deg);
    height: 100px;
    width: 100px;
    left: 3em;
    top: -18em;
  }

  .card:hover .heading {
    transform: translateY(7em) translateX(2.3em);
  }

  .card:hover .details {
    transform: translateY(13em) translateX(2.5em);
  }`;

export default Card;
