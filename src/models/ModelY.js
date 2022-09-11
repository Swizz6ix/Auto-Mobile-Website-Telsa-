import React from 'react';
import ButtonAndText from '../components/ButtonAndText';
import Slider from '../components/Slider';
import Performance from '../containers/Performance';
import TopFooter from '../components/TopFooter';
import MidFooter from '../components/MidFooter';
import Footer from '../components/Footer';
import SideVideo from '../containers/SideVideo';
import Shodow from '../containers/Shodow';
import TopPage from '../components/TopPage';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import styled from 'styled-components';
import ScrollNav from '../components/ScrollNav';


function ModelY() {
  return (
    <div>
      <TopPage 
        topImg= 'images/ModelY/model-y_R1@2.jfif'
        mobileImg='images\ModelY\model-y-mobile_R1@2.jfif'
        topHeader='Model Y'
        subTopHeader=''
        topText1='76 cu ft'
        unit=''
        subText1='Cargo Space'
        topText2 ='330 mi'
        subText2='Range (EPA est.)'
        topText3 ='AWD'
        subText3='Dual Motor'
        speedO = 'none'
        fullnth = 'calc(8px *20) calc(8px *20) calc(8px *20)  212px'
        box3 = "flex"
        box4='none'
      />
        <Shodow 
          avi='\images\Model-3\Model-X-Safety-Hero-Desktop-Global.jfif'
          liteHeader = 'Safety'
          link = 'exceed safety standards.'
          boldHeader='Designed for Safety'
          text1='Safety is the most important part of every Tesla. We design our vehicles to'
          link1='exceed safety standards.'
          strong1='5-Star Rating'
          text2='Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.'
          strong2='Top Safety Pick+'
          text3='Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.'
          ordBtn='ORDER NOW'
          mobileImg='images\Model-X-Safety-Hero-Mobile-Global.jfif'
          Lbk='block'
        />
        <ButtonAndText
          liteHeader = 'utility'
          boldHeader ='A Place For Everthing'
          text1 = 'Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick.'
        />
        <Slider 
          Image1 = "\images\ModelY\Model-Y-Utility-Hero-7-Seat-Desktop-LHD (2).jfif"
          Image2 = '\images\ModelY\_1M-Utility-B.jfif'
          textHeader1=""
          textBody1="versatile seating and storage for cargo and passengers"
          textHeader2=""
          textBody2="Room for up to seven with optional third row"
        />
        <Performance
          liteHeader = 'All-Wheel Drive'
          boldHeader ='Dual Motor'
          text1 = 'Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.'
          ordBtn='ORDER NOW'
          image = '\images\ModelY\AWD_hero@2 (2).jfif'
          mobileImg='images\ModelY\AWD_hero-mobile@2.jfif'
          boxHeader1 = '2'
          textBox1 = 'Independent motors digitally control torgue to the front and rear wheels'
          boxHeader2 = '10'
          subHeader2 = "ms"
          textBox2 = 'Quickest acceleration-from zero to 60mph* as little as 3.5 seconds'
          boxHeader3 = {<Icon><ThunderstormOutlinedIcon /></Icon>}
          textBox3 = 'Capable in rain, snow, mud and off-road with superior traction control'
          mText1 = 'Independent Motors'
          mText2 = 'of Powerful visual processing'
          mText3 = 'All-Weather Control'
        />
        <SideVideo 
          vid='\Videos\WVNSU3_Range_Desktop.mp4-2000_WJLESL.mp4'
          liteHeader = 'Range'
          boldHeader='Go Anywhere'
          subHeader='Range'
          text1='Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week'
          mText1 = 'Range (EPA est.)'
          mText2 = 'Recharge up to 162 mi'
          mText3 = 'Global Superchargers'
          boxHeader1 = '330'
          subHeader1='mi'
          boxHeader2 = '15'
          subHeader2 = "min"
          boxHeader3 = '35,000'
          subHeader3='+'
          textBox1 = 'Go anywhere with upto 330 miles of estimated range on a single charge'
          textBox2 = 'Recharge up to 162 miles in 15 minutes at Supercharger locations'
          textBox3 = 'Superchargers placed along well-traveled routes around the world'
          ordBtn='ORDER NOW'
        />
        <Performance
          liteHeader = 'Autopilot'
          boldHeader ='Future of driving'
          text1 = "Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving."
          image = '\images\Model-3\Autopilot-Hero-Vision-Desktop.jfif'
          mobileImg='images\Model-3\Autopilot-Hero-Vision-Mobile.jfif'
          ordBtn='ORDER NOW'
          floatHeader1 = '360°'
          floatHeader2 = '250"'
          floatText1 = 'Rear, side and forward-facing cameras provide maximum visibility'
          floatText2 = 'Powerful visual processing at up to 250 meters of range'
          floatText3 = 'Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking.'
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
          liteHeader = 'Interior'
          boldHeader ='Built Around the Driver'
          text1 = 'With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky.'
          ordBtn='ORDER NOW'
          image = '\images\ModelY\Model-Y-Interior-Hero-Desktop-LHD.jfif'
          mobileImg='images\ModelY\Model-Y-Interior-Hero-Mobile-LHD.jfif'
          rightHeader1 = '15'
          rightSubHeader1 = 'inch'
          rightText1 = 'A touchscreen display designed to improve over time'
          rightText2 = 'Over-the-air software updates introduce new features, functionality and performance'
          rightText3 = 'An expansive Glass Roof provides more headroom and UV protection'
          rightIcon2 = 'ICON'
          rightIcon3 = 'ICON'
          mText1 = ' Touchscreen Display'
          mText2 = 'Over-the-air Software Updates'
          mText3 = ' All-Glass Roof'
          boxHeader1 = '15'
          subHeader1 = "inch"
          boxHeader2 = {<Wifi><WifiOutlinedIcon /></Wifi>}
          dzply='none'
        />
        <TopFooter
          topImage = '\images\blacky.jpg'
          topHeader = 'Model Y'
          topSubHeader = 'Specs'
          btn1 = 'Performance'
          btn2 = 'Long Range AWD'
          left1 = 'Battery'
          subLeft1 = 'Long Range'
          right1 = 'Weight'
          subRight1 = '4,398 Ibs'
          left2 = 'Acceleration'
          subLeft2 = '3.5s 0-60 mph*'
          leftBrkOne2 = '*with rollout subtracted'
          right2 = 'Max Cargo Volume'
          subRight2 = '76 cu ft'
          left3 = 'Range'
          subLeft3 = '303 miles (EPA est.)'
          right3 = 'Top Speed'
          subRight3 = '155 mph'
          left4 = 'Drive'
          subLeft4 = 'Dual Motor All-Wheel'
          leftBrkOne4 = 'Drive'
          right4 = 'Display'
          subRight4 = '15" Center Touchscreen'
          left5 = 'Seating'
          subLeft5 = 'Up to 5'
          right5 = 'supercharging'
          subRight5 = "Pay per use&nbsp;"
          left6 = 'Wheels'
          subLeft6 = '21"'
          right6 = 'Warranty'
          subRight6 = 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first'
          rightBrkOne6 = 'Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'
        />
        <MidFooter 
          midHeader = 'Order Model Y'
          midBtn1 = 'Order Now'
          midBtn2 = 'Compare'
          midImg = '\images\ModelY\ModelY_Order_Hero.webp'
        />
        <ScrollNav
        btn1 = 'existing invetory'
        btn2 ='custom order'
        />
        <Footer />
    </div>
  )
}

export default ModelY

const Icon = styled(ThunderstormOutlinedIcon)`
  fill: #fff !important;
`
const Wifi = styled(WifiOutlinedIcon)`
  fill: #fff !important;
`