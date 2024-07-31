import React, { useEffect } from 'react'
import styled from 'styled-components'
import RightIcon from '../assets/icons/ChevronRight.svg'
import LeafIcon from '../assets/icons/LeafIcon.svg'
import CoinIcon from '../assets/icons/coin.svg'
import Heartfull from '../assets/icons/HeartFill.svg'
import HeartEmpty from '../assets/icons/HeartEmpty.svg'

import VectorLeft from '../assets/icons/VectorLeft.svg'
import VectorRight from '../assets/icons/VectorRight.svg'

import Explant from '../assets/icons/Explant.svg'
import Explant_base from '../assets/icons/Explant_base.svg'
import Explant2 from '../assets/icons/Explant2.svg'
import Explant3 from '../assets/icons/Explant3.svg'
import Explant4 from '../assets/icons/Explant4.svg'

import LV1 from '../assets/icons/LV1.svg'
import LV2 from '../assets/icons/LV2.svg'
import LV3 from '../assets/icons/LV3.svg'
import LV4 from '../assets/icons/LV4.svg'
import LV5 from '../assets/icons/LV5.svg'

import Edit from '../assets/icons/edit.svg'

import Energy from '../assets/icons/Energy.svg'
import WaterCan from '../assets/icons/WaterCan.svg'
import WaterCanPress from '../assets/icons/WaterCanPress.svg'

import PlantButton from '../assets/icons/PlantButton.svg'

import arrow_forward from '../assets/icons/arrow_forward.svg'

import ShopButton1 from '../assets/icons/ShopButton1.svg'
import ShopButton2 from '../assets/icons/ShopButton2.svg'

import ShopButton1_press from '../assets/icons/ShopButton1_press.svg'
import ShopButton2_press from '../assets/icons/ShopButton2_press.svg'


import SectionLine from '../assets/icons/SectionLine.svg'

import { NaviBar, NaviContext } from '../navigation/NaviBar.jsx';

import item1_1 from '../assets/icons/item1/item1_1.svg'
import item1_2 from '../assets/icons/item1/item1_2.svg'
import item1_3 from '../assets/icons/item1/item1_3.svg'
import item1_4 from '../assets/icons/item1/item1_4.svg'
import item1_5 from '../assets/icons/item1/item1_5.svg'
import item1_6 from '../assets/icons/item1/item1_6.svg'

import DrawItem1_1 from '../assets/icons/DrawItem1/DrawItem1_1.svg'
import DrawItem1_2 from '../assets/icons/DrawItem1/DrawItem1_2.svg'
import DrawItem1_3 from '../assets/icons/DrawItem1/DrawItem1_3.svg'
import DrawItem1_4 from '../assets/icons/DrawItem1/DrawItem1_4.svg'
import DrawItem1_5 from '../assets/icons/DrawItem1/DrawItem1_5.svg'
import DrawItem1_6 from '../assets/icons/DrawItem1/DrawItem1_6.svg'

import item2_1 from '../assets/icons/item2/item2_1.svg'
import item2_2 from '../assets/icons/item2/item2_2.svg'
import item2_3 from '../assets/icons/item2/item2_3.svg'
import item2_4 from '../assets/icons/item2/item2_4.svg'
import item2_5 from '../assets/icons/item2/item2_5.svg'
import item2_6 from '../assets/icons/item2/item2_6.svg'

import DrawItem2_1 from '../assets/icons/DrawItem2/DrawItem2_1.svg'
import DrawItem2_2 from '../assets/icons/DrawItem2/DrawItem2_2.svg'
import DrawItem2_3 from '../assets/icons/DrawItem2/DrawItem2_3.svg'
import DrawItem2_4 from '../assets/icons/DrawItem2/DrawItem2_4.svg'
import DrawItem2_5 from '../assets/icons/DrawItem2/DrawItem2_5.svg'
import DrawItem2_6 from '../assets/icons/DrawItem2/DrawItem2_6.svg'


const PlantScreen = () =>
{

    const {insidePage,setInsidePage} = React.useContext(NaviContext);


    const [WaterCanAble, setWaterCanAble] = React.useState([true,true,true])
    const LevelColor = ['#E2E53F','#8DD40E','#6CAA06','#52810A','#42650F']
    const Level_text = [LV1, LV2, LV3, LV4, LV5]
    const Level_MaxExp = [100,200+100,400+300,900+700,0]

    
    const [Level, setLevel] = React.useState([1,2,0])
    const [Exp, setExp] = React.useState([80+100, 100+200+100, 30])
    const [Coin, setCoin] = React.useState(10000)
    const [int, Setint] = React.useState(0) // 개수
    const [Leaf, setLeaf] = React.useState(1000)
    const [Plant, setPlant] = React.useState([Explant_base, Explant2, Explant3])

    const PlantTop = ['0rem','-1rem','0.22rem']
    const PlantLeft = ['3.05rem','1.8rem','3.25rem']

    const [Color, setColor] = React.useState([['#DFF1F3', '#2BDCF0'], ['#F3F0DF' , '#D5F02B '],['#F3DFDF','#F02B2B']])
    const [PlantName, setPlantName] = React.useState(['초록이', '밤선인', '수민이'])

    const [PlantType, setPlantType] = React.useState(['강낭콩', '선인장', '포인세티아'])
    const [WaterTime, setWaterTime] = React.useState(['12', '48', '6']) //-> 이거는 다른 관계형 디비에서 종류 넣어주면 시간 뱉게 하기 
    const [addExp,setaddExp] = React.useState([0,0,0])


    const [Button1, setButton1] = React.useState(false) 
    const [Button2, setButton2] = React.useState(true)

    const NumItem1 = [0,1,2,3,4,5];
    const [ItemButton1, setItemButton1] = React.useState(
        [[true, false, false, true, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]]
    );
    const temp = [...ItemButton1]
    const [Item1Paid, setItem1Paid] = React.useState(
        [[true, false, false, true, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]]
    );

    const DrawItemList1 = [DrawItem1_1,DrawItem1_2,DrawItem1_3,DrawItem1_4,DrawItem1_5,DrawItem1_6];
    const Item1Top = ['9rem','0.01rem','5.69rem','0.62rem','10.3rem','5.19rem'];
    const Item1Left = ['11.1rem','9.57rem','7.38rem','6.89rem','2.5rem','3.31rem'];

    const Item1Price = [
        [2,1],
        [1,30],
        [1,90],
        [1,200],
        [2,90],
        [2,12]
    ]


    const [ItemButton2, setItemButton2] = React.useState(
        [[true, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]]
    );

    const [Item2Paid, setItem2Paid] = React.useState(
        [[true, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]]
    );


    const DrawItemList2 = [DrawItem2_1,DrawItem2_2,DrawItem2_3,DrawItem2_4,DrawItem2_5,DrawItem2_6];
    const Item2Top = ['0.31rem','0.19rem','1.44rem','9.42rem','3.44rem','1.38rem'];
    const Item2Left = ['1.25rem','1.38rem','1.38rem','1.38rem','1.25rem','1.88rem'];
    
    const Item2Price = [
        [1,100],
        [1,100],
        [1,400],
        [2,15],
        [1,500],
        [2,15]
    ]


    function Draw_base ({i}){
        return(
            <img src={Plant[i]}
                style={{
                    position : 'absolute',  
                    top : PlantTop[i],
                    left : PlantLeft[i],
                    flexShrink: '0'
                }}
                />
        )
    }

    function DrawItem_1({i,j}){
        if(ItemButton1[j][i]){
            return(
                <img src={DrawItemList1[i]}
                    style={{
                        position : 'absolute',
                        top : Item1Top[i],
                        left : Item1Left[i],
                        flexShrink: '0'
                    }}
                    />                
            )
        }
    }

    function DrawItem_2({i,j}){
        if(ItemButton2[j][i]){
            return(
                <img src={DrawItemList2[i]}
                    style={{
                        position : 'absolute',
                        top : Item2Top[i],
                        left : Item2Left[i],
                        flexShrink: '0'
                    }}
                    />                
            )
        }
    
    }
    
    function MainScreen({intdata}) {
        Setint(intdata) // 개수

        function LevelSystem( plant, add ){
            if(Level[plant] === 4) return

            else setExp(Exp.map((item, index) => index === plant ? item + add : item))

            if(Exp[plant]+add > Level_MaxExp[Level[plant]]){
                // temp = [...Level]
                // temp[plant] += 1
                // setLevel(temp)
                setLevel(Level.map((item, index) => index === plant ? item + 1 : item))
            }
        }

        var timer = 0
        var startTime = 0
        var remainingTime = 0

        function MakeTimer(plant, time){
            startTime = Date.now();
            remainingTime = time;

            timer = setInterval(() => {
                LevelSystem(plant, 10)
            }, time);
            console.log(timer)
            console.log(`Timer started: ${startTime}`)
            GetRemainingTime();
        }
        
        var remaining = GetRemainingTime();
        function GetRemainingTime() {
            if (timer) {
                const elapsedTime = Date.now() - startTime;
                const remaining = remainingTime - elapsedTime;
                console.log(`Remaining time: ${remaining/60000}`);
                return remaining > 0 ? remaining : 0;
            } else {
                return 0;
            }
        }

        function WaterCanTimer(index)
        {
            return (
                <WaterCanTime>
                    <WaterCanTime_text>
                        {index}:00
                    </WaterCanTime_text>
                </WaterCanTime>
            )
        }

        
        return (
                <PlantScreenDiv color1 = {Color[int][0]} color2 = {Color[int][1]} >

                    <HeadLine>
                        <CustomButton onClick={() => {setInsidePage('main')}} style={{
                            
                            }}>
                            <img src={RightIcon} style={{width: '1.72669rem',height: '1.59931rem', flexShrink: '0'}} />
                        </CustomButton>
                        <ValueBox>
                            <img src={CoinIcon} style={{width: '1.5rem', height: '1.5rem', flexShrink: '0'}} />
                            <ValueBox_text> 
                                {Coin}
                            </ValueBox_text>
                        </ValueBox>
        
                        <ValueBox>
                            <img src={LeafIcon} style={{width: '1.31rem', height: '1.27rem', flexShrink: '0'}} />
                            <ValueBox_text> 
                                {Leaf}
                            </ValueBox_text>
                        </ValueBox>

                        <img src={int===0 ? Heartfull : HeartEmpty} style= {int===0 ? {width: '1.625rem', height: '1.5rem', flexShrink: '0'} : {width: '1.9375rem', height: '1.6875rem', flexShrink: '0'} } />
                        
                        
        
                    </HeadLine>

                    <PlantLine1>
                        <CustomButton onClick={()=>{
                            Setint((int+3-1)%3)
                            setInsidePage('MyPlant'+`${(int+3-1)%3+1}`)
                            }}>
                            <img src={VectorLeft} style={{ height: '4.375rem', flexShrink: '0'}} />
                        </CustomButton>
                        <CustomButton onClick={()=>{
                            Setint((int+1)%3)
                            setInsidePage('MyPlant'+`${(int+1)%3+1}`)
                            }}>
                            <img src={VectorRight} style={{ height: '4.375rem', flexShrink: '0'}} />
                        </CustomButton>
                    </PlantLine1>

                    <PlantLine2>
                        {
                            NumItem1.map((i) => (
                                <DrawItem_2 key={i} i={i} j={int} />
                              ))

                        }
                        <Draw_base i={int} />
                        {
                            NumItem1.map((i) => (
                                <DrawItem_1 key={i} i={i} j={int} />
                              ))

                        }
                        
                        
                    </PlantLine2>
                    
                    <PlantBox>
                        <CustomSpacer height="4.5rem"/>

                        <PlantFeature>
                            <CustomSpacer height="1.38rem"/>
                            <FeatureLine>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    }}>
                                    <FeatureName>
                                        {PlantName[int]}
                                    </FeatureName>
                                    <CustomButton>
                                        <img src={Edit} style={{width: '2.71rem', height: '1.71rem', flexShrink: '0'}} />
                                    </CustomButton>
                                    
                                </div>
                                
                                <img src={Level_text[Level[int]]} style={{width: '3.875rem', height: '1.8125rem', flexShrink: '0'}} />
                            </FeatureLine>

                            <CustomSpacer height="1.5rem"/>

                            <FeatureLine>
                                {
                                Level[int] === 5 ? 
                                <ProgressBar color={LevelColor[Level[int]]} value={1000} max={100} />
                                :
                                Level[int] === 0 ?
                                <ProgressBar color={LevelColor[Level[int]]} value={Exp[int]} max={Level_MaxExp[Level[int]]} />
                                :
                                <ProgressBar color={LevelColor[Level[int]]} value={Exp[int]-Level_MaxExp[Level[int]-1]} max={Level_MaxExp[Level[int]]-Level_MaxExp[Level[int]-1]} />
                                

                                }    
                                

                            </FeatureLine>

                            <CustomSpacer height="0.1rem"/>

                            <FeatureLine>
                                <FeatureExp>
                                    {
                                        Level[int] === 4 ? 
                                        '최대 레벨입니다.'
                                        :
                                        '다음 레벨까지 ' + (Level_MaxExp[Level[int]]-Exp[int])
                                    }
                                </FeatureExp>
                                <FeatureExp>
                                    {
                                        Level[int] === 4 ? 
                                        'MAX'
                                        :
                                        `Exp ${Exp[int]}/${Level_MaxExp[Level[int]]}`
                                    }

                                    
                                </FeatureExp>
                            </FeatureLine>

                            <CustomSpacer height="1.81rem"/>

                            <FeatureLine style ={{justifyContent: 'space-evenly', width : '22.62rem'}}>
                                <TypeBox>
                                    <TypeText>
                                        {PlantType[int]}
                                    </TypeText>
                                    <Typetext2>
                                        식물 종류
                                    </Typetext2>
                                </TypeBox>

                                <TypeBox>
                                    <img src={SectionLine} style={{width: '0.125rem', height: '2.5rem', flexShrink: '0'}} />
                                </TypeBox>
                                
                                <TypeBox>
                                    <TypeText>
                                        {WaterTime[int]}시간
                                    </TypeText>
                                    <Typetext2>
                                        급수 주기
                                    </Typetext2>
                                </TypeBox>
                            </FeatureLine>

                        </PlantFeature>

                        <CustomSpacer height="0.62rem"/>

                        {WaterCanAble[int] ? <></>: WaterCanTimer(WaterTime[int]) }

                        <div style={{

                            position: 'absolute',
                            top : '19.37rem',
                            left: '2.94rem',
                            right: '4.12rem',
                            width : '18.69rem',

                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',

                        }}>
                            <CustomButton onClick={() => {
                                    if(Level[int] === 4) return;
                                    else{
                                        LevelSystem(int, 80);
                                        
                                        setWaterCanAble(WaterCanAble.map((item, index) => index === int ? !item : item));
                                        MakeTimer(int, 1000*60*60*WaterTime[int])
                                        
                                    }
                                }} disabled = {!WaterCanAble[int]}
                            >                 
                                <img src={WaterCanAble[int] ? WaterCan:WaterCanPress} style={{width: '8.1875rem', height: '5.875rem', flexShrink: '0'}} />
                            </CustomButton>
                            <CustomButton
                                onClick={() => {
                                    if(Leaf < 1) return
                                    if(Level[int] === 4) return
                                    else{setLeaf(Leaf-1)
                                    LevelSystem(int, 150)
                                }
                                }}
                            >
                                <img src={Energy} style={{width: '7rem', height: '7rem', flexShrink: '0'}} />
                            </CustomButton>

                        </div>
                        

                        <WaterText 
                            style={{
                                position: 'absolute',
                                top: '26.19rem',
                                left: '6.3rem',
                            }}
                        >
                            물 주기
                        </WaterText>

                        <WaterText
                            style={{
                                position: 'absolute',
                                top: '26.19rem',
                                right: '4.87rem',
                            }}
                        >
                            영양제 주기
                        </WaterText>

                        <CustomSpacer height="10.62rem"/>
                        <CustomButton onClick={() => {
                            if(int === 0) setInsidePage('PlantShop1')
                            if(int === 1) setInsidePage('PlantShop2')
                            if(int === 2) setInsidePage('PlantShop3')
                        }}>
                            <img src={PlantButton} />
                        </CustomButton>

                    </PlantBox> 
                
                </PlantScreenDiv>
        )
    }

    function ShopScreen({intdata}) {
        Setint(intdata) // 개수

        // 버튼을 누룰 수 있는지 여부 

        const NumItem1_1 = [0,1,2];
        const NumItem1_2 = [3,4,5];

        const [ItemList1, setItemList1] = React.useState([item1_1,item1_2,item1_3,item1_4,item1_5,item1_6]);
        const [ItemList2, setItemList2] = React.useState([item2_1,item2_2,item2_3,item2_4,item2_5,item2_6]);

        const [ButtonText,setButtonText] = React.useState('저장하기');

        function PriceItem1({i,j}){
            return(
                <>
                    <ButtonIconFrame>
                        <img src={ItemList1[i]} />
                    </ButtonIconFrame>
                    <>{Item1Paid[j][i] === false ? 
                        
                        <PricePanel>
                            <img src={Item1Price[i][0] === 1 ? CoinIcon : LeafIcon } style={{width: '1.5rem', height: '1.5rem', flexShrink: '0'}} />
                            <PriceText>
                                {Item1Price[i][1]}
                            </PriceText>
                        </PricePanel> :<></>}</>
                </>
            )
        }

        function PriceItem2({i,j}){
            return(
                <>
                    <ButtonIconFrame>
                        <img src={ItemList2[i]} />
                    </ButtonIconFrame>
                    <>{Item2Paid[j][i] === false ? 
                        
                        <PricePanel>
                            <img src={Item2Price[i][0] === 1 ? CoinIcon : LeafIcon } style={{width: '1.5rem', height: '1.5rem', flexShrink: '0'}} />
                            <PriceText>
                                {Item2Price[i][1]}
                            </PriceText>
                        </PricePanel> :<></>}</>
                </>
            )
        }
        

        function ItemList({i,j}){
            return(
                <>
                        <CustomButton
                            onClick={() => {
                                console.log(Item1Paid)
                                if(!Button1){
                                    var temp = [...ItemButton1]
                                    temp[j][i] = !temp[j][i]
                                    setItemButton1(temp)
                                    // setItemButton1(ItemButton1[j].map((item, index) => index === i ? !item : item));
                                }
                                else{
                                    var temp2 = [...ItemButton2]
                                    temp2[j][i] = !temp2[j][i]
                                    setItemButton2(temp2)
                                }
                            }}
                        > 
                        { !Button1 ?
                            <>{ItemButton1[j][i] ? <ItemBox_selected><PriceItem1 i={i} j={j} /></ItemBox_selected> 
                            : <ItemBox_unselected><PriceItem1 i={i} j={j} /></ItemBox_unselected>}</>
                            :
                            <>{ItemButton2[j][i] ? <ItemBox_selected><PriceItem2 i={i} j={j} /></ItemBox_selected>
                            : <ItemBox_unselected><PriceItem2 i={i} j={j} /></ItemBox_unselected>}</>
                        }
                        </CustomButton>
                </>
            )
        }

        function TotalPrice({j}){
            var price = [0,0];
            if(!Button1){
            for(var i = 0; i < 6; i++){
                if(ItemButton1[j][i] === true && Item1Paid[j][i] === false){
                    if(Item1Price[i][0] === 1){
                        price[0] += Item1Price[i][1]
                    }
                    else{
                        price[1] += Item1Price[i][1]
                    }
                }
            }
            return (
                <SaveButton>
                        {
                            price[0] === 0 && price[1] === 0 ? <SaveButtonText>저장하기</SaveButtonText>  : 
                            (
                                <>
                                <>
                                {price[0] === 0 ? <></>:
                                <>
                                    <img src={CoinIcon}
                                        style={{
                                            width: '1.5rem',
                                            height: '1.5rem',
                                            flexShrink: '0'
                                        }}
                                    />
                                    <SaveButtonText>
                                        {price[0]}
                                    </SaveButtonText>
                                </>}
                                </>
                                <SaveButtonText>
                                    {(price[0] === 0 || price[1] === 0) ? '' : '   +   '}
                                </SaveButtonText>
                                <>
                                {price[1] === 0 ? <></>:
                                <>
                                    <img src={LeafIcon}
                                        style={{
                                            width: '1.31rem',
                                            height: '1.27rem',
                                            flexShrink: '0'
                                        }}
                                    />
                                    <SaveButtonText>
                                        {price[1]}
                                    </SaveButtonText>
                                </>}</></>
                            )
                        }
                </SaveButton>

            )
        }
        else{
            for(var i = 0; i < 6; i++){
                if(ItemButton2[j][i] === true && Item2Paid[j][i] === false){
                    if(Item2Price[i][0] === 1){
                        price[0] += Item2Price[i][1]
                    }
                    else{
                        price[1] += Item2Price[i][1]
                    }
                }
            }
            return (
                <SaveButton>
                        {
                            price[0] === 0 && price[1] === 0 ? <SaveButtonText>저장하기</SaveButtonText> : 
                            (
                                <>
                                <>
                                {price[0] === 0 ? <></>:
                                <>
                                    <img src={CoinIcon}
                                        style={{
                                            width: '1.5rem',
                                            height: '1.5rem',
                                            flexShrink: '0'
                                        }}
                                    />
                                    <SaveButtonText>
                                        {price[0]}
                                    </SaveButtonText>
                                </>}
                                </>
                                <SaveButtonText>
                                    {(price[0] === 0 || price[1] === 0) ? '' : '   +   '}
                                </SaveButtonText>
                                <>
                                {price[1] === 0 ? <></>:
                                <>
                                    <img src={LeafIcon}
                                        style={{
                                            width: '1.31rem',
                                            height: '1.27rem',
                                            flexShrink: '0'
                                        }}
                                    />
                                    <SaveButtonText>
                                        {price[1]}
                                    </SaveButtonText>
                                </>}</></>
                            )
                        }
                </SaveButton>

            )
        
        }
    }
        

        
        return (
                <PlantScreenDiv color1 = {Color[int][0]} color2 = {Color[int][1]} >

                    <HeadLine>
                        <CustomButton onClick={() => {setInsidePage('main')}} style={{
                            
                            }}>
                            <img src={RightIcon} style={{width: '1.72669rem',height: '1.59931rem', flexShrink: '0'}} />
                        </CustomButton>
                        <ValueBox>
                            <img src={CoinIcon} style={{width: '1.5rem', height: '1.5rem', flexShrink: '0'}} />
                            <ValueBox_text> 
                                {Coin}
                            </ValueBox_text>
                        </ValueBox>
        
                        <ValueBox>
                            <img src={LeafIcon} style={{width: '1.31rem', height: '1.27rem', flexShrink: '0'}} />
                            <ValueBox_text> 
                                {Leaf}
                            </ValueBox_text>
                        </ValueBox>

                        <img src={int===0 ? Heartfull : HeartEmpty} style= {int===0 ? {width: '1.625rem', height: '1.5rem', flexShrink: '0'} : {width: '1.9375rem', height: '1.6875rem', flexShrink: '0'} } />
                        
                        
        
                    </HeadLine>

                    <PlantLine2>
                        {
                            NumItem1.map((i) => (
                                <DrawItem_2 key={i} i={i} j={int} />
                              ))

                        }
                        <Draw_base i={int} />
                        {
                            NumItem1.map((i) => (
                                <DrawItem_1 key={i} i={i} j={int} />
                              ))                        
                        }
                    </PlantLine2>
                    
                    
                    <PlantBox2>

                        <CustomButton 
                            style={{
                                position: 'absolute',
                                top: '1.18rem',
                                left: '1.38rem',

                            }}
                            onClick={() => {
                                if(int === 0) setInsidePage('MyPlant1')
                                if(int === 1) setInsidePage('MyPlant2')
                                if(int === 2) setInsidePage('MyPlant3')
                            }
                        }>
                            <img src={arrow_forward} />
                        
                        </CustomButton>


                        <CustomSpacer height="5.06rem"/>

                        <ButtonLine>
                            <CustomButton
                                onClick={() => {
                                    if(Button1) {
                                        setButton1(false)
                                        setButton2(true)
                                    }
                                }}
                            >
                                <img src={Button1 ? ShopButton1 : ShopButton1_press} />

                            </CustomButton>
                            
                            <CustomButton
                                onClick={() => {
                                    if(Button2) {
                                        setButton1(true)
                                        setButton2(false)
                                    }
                                }}
                            >
                                <img src={Button2 ? ShopButton2 : ShopButton2_press} />

                            </CustomButton>

                        </ButtonLine>
                        
                        <CustomSpacer height="1.25rem"/>

                        
                        <>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width : '22.62rem',
                            }}
                        >
                            {NumItem1_1.map((i) => (
                                <ItemList key ={i} i={i} j={int}/>
                            ))}                            
                        </div>
                        <CustomSpacer height="0.69rem"/>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width : '22.62rem',
                            }}
                        >
                            {NumItem1_2.map((i) => (
                                <ItemList key ={i} i={i} j={int}/>
                            ))}             
                        </div>
                        </>


                        <CustomSpacer height="1.69rem"/>

                        <CustomButton onClick={() => {
                            var temp1 = [...ItemButton1]
                            var temp2 = [...ItemButton2]
                            var price = [0,0];
                            if(!Button1){
                                for(var i = 0; i < 6; i++){
                                    if(temp1[int][i] === true && Item1Paid[int][i] === false){
                                        if(Item1Price[i][0] === 1){
                                            if(Coin < Item1Price[i][1]) return
                                            setCoin(Coin-Item1Price[i][1])
                                            Item1Paid[int][i] = true
                                            price[0] += Item1Price[i][1]
                                        }
                                        else{
                                            if(Leaf < Item1Price[i][1]) return
                                            setLeaf(Leaf-Item1Price[i][1])
                                            Item1Paid[int][i] = true
                                            price[1] += Item1Price[i][1]
                                        }

                                        
                                    }
                                    setItem1Paid(Item1Paid)
                                    

                                }
                            }
                            else{
                                for(var i = 0; i < 6; i++){
                                    if(temp2[int][i] === true && Item2Paid[int][i] === false){
                                        if(Item2Price[i][0] === 1){
                                            if(Coin < Item2Price[i][1]) return
                                            setCoin(Coin-Item2Price[i][1])
                                            Item2Paid[int][i] = true
                                            price[0] += Item2Price[i][1]
                                        }
                                        else{
                                            if(Leaf < Item2Price[i][1]) return
                                            setLeaf(Leaf-Item2Price[i][1])
                                            Item2Paid[int][i] = true
                                            price[1] += Item2Price[i][1]
                                        }
                                    }
                                    setItem2Paid(Item2Paid)
                                }
                            }
                        }}>
                            <TotalPrice j = {int}/>
                        </CustomButton>

                    </PlantBox2> 
                
                </PlantScreenDiv>
        )
    }

    return (
        <>
        
        {
                insidePage === 'MyPlant1' && <MainScreen intdata = {0}/>
        }
        {
                insidePage === 'MyPlant2' && <MainScreen intdata = {1}/>
        }
        {
                insidePage === 'MyPlant3' && <MainScreen intdata = {2}/>
        }
        {
                insidePage === 'PlantShop1' && <ShopScreen intdata = {0}/>
        }
        {
                insidePage === 'PlantShop2' && <ShopScreen intdata = {1}/>
        }
        {
                insidePage === 'PlantShop3' && <ShopScreen intdata = {2}/>
        }
        </>
    )

}

export default PlantScreen

const MyModal = styled.div`
  background-color: rgba(83, 102, 56, 0.60);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const MyPageModal = styled.div`
display: flex;
width: 19.9375rem;
padding: 1.25rem 1.0625rem 1.0625rem 1.0625rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.5625rem;
border-radius: 1.25rem;
background: var(--white, #FFF);
box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.10);
`;


const PlantScreenDiv = styled.body`

    position:fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top : 0rem;
    margin-bottom : 0rem;
    background: linear-gradient(180deg, ${props=>props.color1} 0%, ${props=>props.color2} 100%);
    width: 25.75rem;
    height: 100%;
`;

const HeadLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position : absolute;
    top : 1.31rem;
    left : 1.44rem;
    right : 1.44rem;

    // width: 25.75rem;
    // height: 3.9375rem;
    flex-shrink: 0;
`;

const ValueBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

width: 5.0625rem;
height: 2.0625rem;
padding: 0rem 0.75rem;
gap: 0.8125rem;
flex-shrink: 0;
border-radius: 6.25rem;
background: rgba(255, 255, 255, 0.70);
`;

const ValueBox_text = styled.text`
color: #5B5F54;
text-align: right;
font-family: AppleSDGothicNeoEB;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 140.041%; /* 1.40044rem */
`;

const HeartButton = styled.button`
background: none;
display: flex;
align-items: center;
justify-content: center;

width : 2.5rem;
height : 2.5rem;
`;

const PlantLine1 = styled.div`

position: absolute;
top : 5.19rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

margin : 0rem 1.69rem 0rem 1.69rem;
box - sizing: border - box;

width: 22.5rem;
height: 14.125rem;
flex-shrink: 0;
`;

const PlantLine2 = styled.div`

position: absolute;
top : 5.38rem;
left : 3.56rem;


width: 17.75rem;
height: 14.125rem;
flex-shrink: 0;
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

const PlantBox = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

position: absolute;
top : 16.12rem;
z-index: -1;


width: 25.75rem;
height: 45.0625rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: linear-gradient(0deg, #F0F0F0 0%, #FFF 19.63%);
`;


const PlantBox2 = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

position: absolute;
top : 16.12rem;
z-index: -1;


width: 25.75rem;
height: 45.0625rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: var(--green3, #8DD40E);
`;

const PlantFeature = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

width: 22.625rem;
height: 14.25rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: var(--white, #FFF);
filter: drop-shadow(0px 1px 40px rgba(144, 164, 140, 0.10)) drop-shadow(0px 0px 5px rgba(199, 199, 199, 0.50));
`;

const FeatureLine = styled.div`

width : 19.25rem;
height : auto;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const FeatureName = styled.text`
color: var(--black, #101210);
font-family: AppleSDGothicNeoSB;
font-size: 1.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.035rem;
`;

const FeatureExp = styled.text`
color: #42650F;
text-align: right;
font-family: AppleSDGothicNeoM;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.0175rem;
`;

const ProgressBar = styled.progress`

appearance: none;

&::-webkit-progress-bar {
    width: 19.25rem;

    border-radius: 1.25rem;
    filter: drop-shadow(0px 1px 40px rgba(144, 164, 140, 0.10)) drop-shadow(0px 0px 5px rgba(199, 199, 199, 0.50));
    background: #FFF;
}
&::-webkit-progress-value {
    border-radius: 1.25rem;
    background: ${props => props.color};

}
`;

const TypeBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


const TypeText = styled.text`
color: var(--green6, #42650F);
font-family: AppleSDGothicNeoSB;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.025rem;
`;

const Typetext2 = styled.text`
color: var(--black, #101210);
font-family: AppleSDGothicNeoL;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.0175rem;
`;

const WaterCanTime = styled.div`
position: absolute;
top: 22.56rem;
left: 5rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 5.125rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 6.25rem;
border: 2px solid var(--green6, #42650F);
`;

const WaterCanTime_text = styled.text`
color: var(--green6, #42650F);
font-family: AppleSDGothicNeoB00;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.025rem;
`;

const WaterText = styled.text`
color: var(--black, #101210);
font-family: AppleSDGothicNeoSB;
font-size: 1.0625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.02125rem;
`;

const ButtonLine = styled.div`
display: flex;
border-width: 22.4375rem;
padding: 0.4375rem 0.5rem 0.4375rem 0.5rem;
align-items: center;
gap: 0.5rem;
border-radius: 2.75rem;
background: var(--white, #FFF);
`;

const ButtonIconFrame = styled.div`

position : absolute;
top : 1.13rem;

display: flex;
height: 4.375rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
`;

const ItemBox_selected = styled.div`

position : relative;

display: flex;
width: 7.1875rem;
height: 8.6875rem;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;

border-radius: 1.25rem;
border: 7px solid var(--green4, #6CAA06);
background: rgba(255, 255, 255, 0.50);
box-sizing: border-box;
`;

const ItemBox_unselected = styled.div`

position : relative;

display: flex;
width: 7.125rem;
height: 8.6875rem;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 1.25rem;
border: 7px solid rgba(255, 255, 255, 0);
background: rgba(255, 255, 255, 0.50);
box-sizing: border-box;
`;


const PricePanel = styled.div`
position: absolute;
top : 5.5rem;

display: flex;
height: 2.0625rem;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 0.1875rem;
flex-shrink: 0;
`;

const PriceText = styled.text`
color: var(--black, #101210);
text-align: right;
font-family: AppleSDGothicNeoEB;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 140.041%; /* 1.40044rem */
`;

const SaveButton = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

gap: 0.625rem;

width: 22.375rem;
height: 3.4375rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: var(--green4, #6CAA06);
`;

const SaveButtonText = styled.text`
color: var(--white, #FFF);
font-family: AppleSDGothicNeoB;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.025rem;
`;

const CustomSpacer = styled.div`
height: ${props => props.height};
`;
