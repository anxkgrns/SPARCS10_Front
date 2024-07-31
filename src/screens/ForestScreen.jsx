import React from 'react'

import ForestGround from '../assets/icons/ForestBack1.svg'
import styled from 'styled-components'
import DictMark from '../assets/icons/DictMark.svg'
import SmallPlantIcon from '../assets/icons/SmallPlantIcon.svg'


import Explant from '../assets/icons/Explant.svg'
import Explant2 from '../assets/icons/Explant2.svg'
import Explant3 from '../assets/icons/Explant3.svg'
import Explant4 from '../assets/icons/Explant4.svg'

import Basket from '../assets/icons/Basket.svg'

import { NaviContext } from '../navigation/NaviBar'

export default function ForestScreen() {

    const {insidePage,setInsidePage} = React.useContext(NaviContext);
    const PlantsNum = 6;

  return (
    <>
        <ForestHeader>
            <HeaderText
                style={{
                    position: 'absolute',
                    top : '1rem',
                    left : '1.81rem'
                }}
            >
                지키미의 식물원
            </HeaderText>
        </ForestHeader>
        <body
            style={{

                display : 'relative',
                backgroundImage: `url(${ForestGround})`,
                width: '25.75rem',
                height: '41.8125rem'
            }}>
            
            <Basket_div
                style={{
                    position: 'absolute',
                    top : '0.81rem',
                    right : '6.19rem'
                
                }}
            >
                <CustomButton
                    onClick={() => {
                        setInsidePage('MyPlant1')
                    }}>
                    <CustomImg src = {Explant}/>
                </CustomButton>
            </Basket_div>
            
            <Basket_div
                style={{
                    position: 'absolute',
                    top : '3.69rem',
                    right : '1.13rem'

                }}
                >
                <CustomButton
                    onClick={() => {
                        setInsidePage('MyPlant2')
                    }}>
                    <CustomImg src = {Explant2}/>
                </CustomButton>
            </Basket_div>


            <CustomButton
                onClick={() => {
                    setInsidePage('MyPlant3')
                }} 
                style={{
                    position: 'absolute',
                    top : '20.31rem',
                    right : '8.06rem'
                }}
            >
                <CustomImg src = {Explant3}/>
            </CustomButton>

            <CustomButton
                style={{
                    position: 'absolute',
                    top : '34rem',
                    left : '1.75rem'
                }}
            >
                <CustomImg src = {Explant2}/>
            </CustomButton>
            <CustomButton
                style={{
                    position: 'absolute',
                    top : '32.06rem',
                    right : '   7.63rem'
                }}
            >
                <CustomImg src = {Explant4}/>
            </CustomButton>
            <CustomButton
                style={{
                    position: 'absolute',
                    top : '35.31rem',
                    left : '7.38rem'
                }}
            >
                <CustomImg src = {Explant3}/>
            </CustomButton>

            
                        
            <PlantsPlane>
                <img src = {SmallPlantIcon}/>
                <PlaneText>
                    {PlantsNum}/{6}
                </PlaneText>
            </PlantsPlane>
        
            <CustomButton
                style={{
                    position: 'absolute',
                    top : '37.2rem',
                    right : '1rem'
                }}
            >
                <img src = {DictMark}/>
            </CustomButton>
        </body>
    </>
  );
}   

const ForestHeader = styled.header`

width: 25.75rem;
height: 3.9375rem;
flex-shrink: 0;
fill: #FFF;box-shadow: 0rem 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.2), 0rem 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.1);
`;

const HeaderText = styled.div`
color: var(--black, #101210);
font-family: AppleSDGothicNeoB;
font-size: 1.5625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.03125rem;
`;

const PlantsPlane = styled.div`

position: absolute;
top: 5.25rem;
left: 1.38rem;

display: flex;
width: 5.125rem;
height: 2.125rem;
align-items: center;
justify-content: center;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 6.25rem;
background: rgba(255, 255, 255, 0.70);
`;

const PlaneText = styled.text`
color: #5E6455;
text-align: right;
font-family: AppleSDGothicNeoSB;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 140.041%; /* 1.40044rem */
`;

const CustomButton = styled.button`

background: none;
border: none;
padding: 0;
flexShrink: 0;
display : flex;
alignItems : center;
justifyContent : center;
&:hover {
    border : none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    box-shadow: none;
}
`;

const CustomImg = styled.img`

src = ${props =>props.src}

width: 6.73419rem;
height: 8rem;
`;

const Basket_div = styled.div`

width: 7.5625rem;
height: 16.875rem;

display: flex;
flex-direction: column;
align-items: center;
padding : 8.06rem 0rem;
background-image: url(${Basket});
background-repeat: no-repeat;
`;

const CustomSpacer = styled.div`
height: ${props => props.height};
`;
