import React from 'react';
import Safety from '../containers/Safety';
import Performance from "../containers/Performance";
import Footer from '../components/Footer';
import MidFooter from '../components/MidFooter';
import TopFooter from '../components/TopFooter';
import Shodow from '../containers/Shodow';
import styled from 'styled-components';
import TopPage from '../components/TopPage';
import ScrollNav from '../components/ScrollNav';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';

function Model3() {
  return (
    <Wrap>
      <TopPage 
        topImg= 'images/Model-3/Model-3-Main-Hero-Desktop-LHD.jfif'
        topHeader='Model 3'
        subTopHeader=''
        topText1='358'
        unit='mi'
        subText1='Range (EPA est.)'
        topText2 ='AWD'
        subText2='Dual Motor'
        topText3 =''
        subText3=''
        speedO = 'flex'
        fullnth = 'calc(8px *20) calc(8px *20) calc(8px *20)  212px'
        box3 = "none"
        box4='none'
        mobileImg='images/Model-3/Model-3-Main-Hero-Mobile-LHD.jfif'
      />
        <Shodow 
          avi='\images\Model-3\Model-X-Safety-Hero-Desktop-Global.jfif'
          liteHeader = 'Safety'
          link = 'exceed safety standards.'
          lrnBtn='LEARN MORE'
          ordBtn='ORDER NOW'
          boldHeader='Designed for Safety'
          text1='Safety is the most important part of every Tesla. We design our vehicles to'
          link1='exceed safety standards.'
          strong1='5-Star Rating'
          text2='Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.'
          strong2='Top Safety Pick+'
          text3='Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.'
          mobileImg='images\Model-X-Safety-Hero-Mobile-Global.jfif'
          Lbk='block'
        />
        <Performance 
          liteHeader = 'Performance' 
          boldHeader = 'Quickest Acceleration' 
          text1 = 'Model 3 comes with the option of dual motor all-wheel drive, 20”&nbsp;Überturbine&nbsp;Wheels and Performance Brakes for total control in all weather conditions.&nbsp;A&nbsp;carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.'
          image = '\images\Model-3\Model-3-Performance-Hero-Desktop-LHD.jfif'
          boxHeader1 = ''
          subHeader1 = ''
          textBox1 = 'Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds'
          boxHeader2 = '162'
          subHeader2 = "mph"
          textBox2 = 'Improved handling and aerodynamics allow for a top speed of 162 mph'
          boxHeader3 = 'AWD'
          textBox3 = 'Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions'
          lrnBtn='LEARN MORE'
          ordBtn='ORDER NOW'
          mobileImg='/images\Model-3\Model-3-Performance-Hero-Mobile-LHD.jfif'
          mText1 = '0-60 mph*'
          mText2 = 'Top Speed'
          mText3 = 'Dual Motor'
        />
        <Performance 
          liteHeader = 'All-wheel Drive' 
          boldHeader = 'Dual Motor' 
          text1 = 'Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.'
          ordBtn='ORDER NOW'
          image = '\images\Model-3\Model-3-AWD-Hero-Desktop-LHD.jfif'
          boxHeader1 = '2'
          textBox1 = 'Independent motors digitally control torgue to the front and rear wheels'
          boxHeader2 = '10'
          subHeader2 = "ms"
          textBox2 = 'Dal motors respond to charging conditions in as little as 10 milliseconds'
          textBox3 = 'Unparalleled tractio and control, in all weather conditions'
          boxHeader3 = {<Icon><ThunderstormOutlinedIcon /></Icon>}
          mText1 = 'Independent Motors'
          mText2 = 'Torque Response'
          mText3 = 'All-Weather Control'
          mobileImg='\images\Model-3\Model-3-AWD-Hero-Mobile-LHD.jfif'
        />
        <Large>
        <Safety 
        boldHeader='Go Anywhere'
        liteHeader='Range'
        text1='Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week'
        SafePic='\images\Model-3\Model-3-Range-Hero-Desktop-LHD.jfif'
        boxHeader1 = '358 mi'
        textBox1 = 'Go anywhere with up to 358 mi of estimated range on a single charge'
        boxHeader2 = '15'
        subHeader2 = "min"
        textBox2 = 'Recharge up to 175 minutes at Supercharger locations'
        boxHeader3 = '35,000+'
        textBox3 = 'Supercharge placed along well-traveled routes around the world'
        mText1 = 'Range (EPA est.)'
        mText2 = 'Recharge up to 162 mi'
        mText3 = 'Global Superchargers'
        ordBtn='ORDER NOW'
        lrnBtn='LEARN MORE'
        />

        </Large>
        <Mid>
        <Performance 
          liteHeader = 'Range'
          boldHeader = 'Go Anywhere'
          text1 = "Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week."
          image = '\images\Model-3\Model-3-Range-Hero-Desktop-LHD.jfif'
          boxHeader1 = '358 mi'
          textBox1 = 'Go anywhere with up to 358 mi of estimated range on a single charge'
          boxHeader2 = '15'
          subHeader2 = "min"
          textBox2 = 'Recharge up to 175 minutes at Supercharger locations'
          boxHeader3 = '35,000+'
          textBox3 = 'Supercharge placed along well-traveled routes around the world'
          lrnBtn='LEARN MORE'
          ordBtn='ORDER NOW'
          mobileImg='\images\Model-3\Model-3-Range-Hero-Mobile-LHD.jfif'
          mText1 = 'Range (EPA est.)'
          mText2 = 'Recharge up to 175 mi'
          mText3 = 'Global Superchargers'
        />
        </Mid>
       <Performance 
            liteHeader = 'Autopilot'
            boldHeader = 'Future of Driving'
            text1 = "Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly."
            ordBtn='ORDER NOW'
            image = '\images\Model-3\Autopilot-Hero-Vision-Desktop.jfif'
            mobileImg='images\Model-3\Autopilot-Hero-Vision-Mobile.jfif'
            floatHeader1 = '360°'
            floatHeader2 = '250"'
            floatHeader3 = ''
            floatText1 = 'Rear, side and forward-facing cameras provide maximum visibility'
            floatText2 = 'Powerful visual processing at up to 250 meters of range'
            floatText3 = 'Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking'
            floatSubTextOne1 = 'Degrees'
            floatSubTextOne2 = 'of powerful'
            floatSubTextOne3 = 'Tesla'
            floatSubTextTwo1 = 'of visibility'
            floatSubTextTwo2 = 'Visual processing'
            floatSubTextTwo3 = 'Vision'
            floatIcon3 = 'ICON'
            floatSpan2 = 'm'
            mText1 = 'Degrees of visibility'
            mText2 = 'of Powerful visual processing'
            mText3 = 'Tesla Vision'
            boxHeader1 = '360°'
            boxHeader2 = '250'
            subHeader2 = "m"
            dzply='none'
            clor='#000'
        />
        <Performance 
          liteHeader = "Interior"
          boldHeader = 'Built Around the Driver'
          text1 = 'The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.'
          lrnBtn='LEARN MORE'
          ordBtn='ORDER NOW'
          image = '\images\Model-3\Model-3-Interior-Hero-Desktop-LHD.jfif'
          rightHeader1 = '15'
          rightSubHeader1 = 'inch'
          rightText1 = 'A touchscreen display designed to improve over time'
          rightText2 = 'Over-the-air software updates introduce new features, functionality and performance'
          rightText3 = 'An expansive Glass Roof provides more headroom and UV protection'
          rightIcon2 = 'ICON'
          rightIcon3 = 'ICON'
          mobileImg="\images\Model-3\Model-3-Interior-Hero-Mobile-LHD.jfif"
          mText1 = ' Touchscreen Display'
          mText2 = 'Over-the-air Software Updates'
          mText3 = ' All-Glass Roof'
          boxHeader1 = '15'
          subHeader1 = "inch"
          boxHeader2 = {<Wifi><WifiOutlinedIcon /></Wifi>}
          dzply='none'
        />
        <TopFooter 
          topImage = 'images\Model-X\Model-X-Specs-Hero-Mobile-LHD (1).jfif'
          topHeader = 'Model 3'
          topSubHeader = 'Specs'
          btn1 = 'Performance'
          btn2 = 'Long Range AWD'
          btn3 = 'Rear-Wheel Drive'
          btn4 = 'Compare'
          left1 = 'Battery'
          subLeft1 = 'Long Range'
          leftBrkOne1
          leftBrkTwo1
          leftBrkThree1
          right1 = 'Weight'
          subRight1 = '4,048 Ibs'
          left2 = 'Acceleration'
          subLeft2 = '3.1s 0-60 mph*'
          leftBrkOne2 = '*with rollout subtracted'
          leftBrkTwo2
          leftBrkThree2
          right2 = 'Cargo'
          subRight2 = '23 cu ft'
          left3 = 'Range'
          subLeft3 = '315 miles (EPA est.)'
          leftBrkOne3 
          leftBrkTwo3
          leftBrkThree3
          right3 = 'Display'
          subRight3 = '15" Center Touchscreen'
          left4 = 'Drive'
          subLeft4 = 'Dual Motor All-Wheel'
          leftBrkOne4 = 'Drive'
          leftBrkTwo4
          leftBrkThree4
          right4 = 'supercharging Max/Payment Type'
          subRight4 = '250 KW max; Pay per use&nbsp;'
          left5 = 'Seating'
          subLeft5 = '5 Adults'
          leftBrkOne5
          leftBrkTwo5
          leftBrkThree5
          right5 = 'Onboard Charger Max'
          subRight5 = "11.5 KW max (48A)"
          left6 = 'Wheels'
          subLeft6 = '20"'
          right6 = 'Warranty'
          subRight6 = 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first'
          rightBrkOne6 = 'Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'
        />
        <MidFooter 
          midHeader = 'Experience Model 3'
          midBtn1 = 'Order Now'
          midBtn2 = 'Compare'
          midImg = '\images\Full Blacky.jpg'
        />
        <ScrollNav 
        btn1 = 'existing invetory'
        btn2 ='custom order'
        />
        <Footer />

    </Wrap>
  )
}

export default Model3

const Wrap = styled.div`
  position: relative;
  scroll-snap-type: y mandatory;
`

const Large = styled.section`
  scroll-snap-align: start;
  @media (max-width: 1200px) {
    display: none;
  }
`
const Mid = styled.section`
  scroll-snap-align: start;
  @media (min-width: 1200px) {
    display: none;
  }
`

const Icon = styled(ThunderstormOutlinedIcon)`
  fill: #fff !important;
`

const Wifi = styled(WifiOutlinedIcon)`
  fill: #fff !important;
`