import React from 'react';
import BigImage from '../components/BigImage';
import MidHeader from '../components/MidHeader';
import PictureCard from '../components/PictureCard';
import Performance from '../containers/Performance';
import LineSlider from '../components/LineSlider';
import OrderButton from '../components/OrderButton';
import TopFooter from '../components/TopFooter';
import MidFooter from '../components/MidFooter';
import Footer from '../components/Footer';
import DotSlideVideo from '../components/DotSlideVideo'
import PicVidCard from '../components/PicVidCard'
import SideVideo from '../containers/SideVideo';
import SlideVideo from '../components/SlideVideo';
import Shodow from '../containers/Shodow';
import TopPage from '../components/TopPage';
import ScrollNav from '../components/ScrollNav';

function ModelS() {
  return (
    <div>
      <TopPage 
        topImg= 'images/ModelS/Model-S-Main-Hero-Desktop-LHD.jfif'
        mobileImg='images\ModelS\Model-S-Main-Hero-Mobile-LHD.jfif'
        topHeader='Model S'
        subTopHeader='Plaid'
        topText1='396'
        unit='mi'
        subText1='Range (EPA est.)'
        topText2 ='1.99s'
        subText2='0-60 mph*'
        topText3 ='200 mph'
        subText3='Top Speed'
        topText4 ='1,020 hp'
        subText4='Peak Power'
        speedO = 'none'
        fullnth = 'calc(8px *20) calc(8px *20) calc(8px *20) calc(8px *20)  212px'
        box3 = "flex"
        box4='flex'
        clor='#000'
      />
        <MidHeader Title='Interior of the Future'/>
        <BigImage LargePic='\images\ModelS\MS-Interior-Hero-Desktop.jfif'
        mobileImg='images\ModelS\MS-Interior-Hero-Mobile.jfif'
        />
        <DotSlideVideo 
          Image1 = "\images\Model-X\MX-Interior-Carousel-A-Desktop-LHD.jfif"
          slice1='\Videos\TTVX74_Model-S-Interior-Carousel-1-Cinematic-Display-Desktop_2WLKVX.mp4'
          slice2='\Videos\GV3RMO_Model_S_Plaid_-_Carousel_-_Yoke_-_Desktop_1260x580_HR4TII.mp4'
          slice3='\Videos\SJB3NJ_Model_S_Plaid_-_Carousel_-_HVAC_-_Desktop_1260x580__1_O59ULX.mp4'
          slice4 = '\Videos\166R33_MS-Interior-Carousel-4-Rear-Seats-Desktop-2000_HPPOND.mp4'
          slice5 = '\Videos\LL2EQG_MS-Interior-Carousel-5-Gaming-Mobile_TB6BF4.mp4'
        />
        <PicVidCard 
          picVid1 = "\images\ModelS\MS-Interior-Grid-A-Desktop.jfif"
          picVideo = "\Videos\PIUCZZ_MS-Interior-Grid-2-Audio-Desktop_CLFX4X.mp4"
          picVid2 = "\images\ModelS\MS-Interior-Grid-D-Desktop.jfif"
          picVidHeader1 = 'Stay connected'
          picVidHeader2 ='Immersice sound'
          picVidHeader3 ="Room For Everything"
          picVidText1 ='Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
          picVidText2 = 'A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.'
          picVidText3 ='With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.'
        />
        <Performance 
          liteHeader = 'Plaid'
          boldHeader ='Beyond Ludicrous'
          text1 = 'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs  without performance degradation.'
          ordBtn='ORDER NOW'
          image = '\images\ModelS\Model-S-Performance-Hero-Desktop-LHD.jfif'
          mobileImg='images\ModelS\Model-S-Performance-Hero-Mobile-LHD.jfif'
          boxHeader1 = '1,020'
          subHeader1='hp'
          textBox1 = 'Peak Power'
          boxHeader2 = '9.23'
          subHeader2 = "s"
          textBox2 = '@155 mph 1/4 mile'
          boxHeader3 = '1.99'
          subHeader3='s'
          textBox3 = '0-60 mph*'
          mText1 = 'Peak Power'
          mText2 = '@155 mph 1/4 mile'
          mText3 = '0-60 mph*'
        />
        <LineSlider 
          LinePic1 = '\images\Model-X\mx-performance-dual-motor-desktop_carousel-new.jfif'
          LinePic2 = '\images\Model-X\mx-performance-tri-motor-desktop_carousel-new.jfif'
          mobileImg1='images\Model-X\MX-Performance-Dual-Motor-Mobile.jfif'
          mobileImg2='images\Model-X\MX-Performance-Tri-Motor-Mobile.jfif'
          background='#f4f4f4'
          lineHeader = 'Electric Powertrain'
          lineTextM = 'Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.'
          lineTextW = 'Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.'
          lineTextUP1 = "Model S"
          lineTextDwn01 = "3.1 s"
          lineTextDwn02 = "405 mi"
          lineTextDwn03 = "670 hp"
          lineTextUP2 = "Model S Plaid"
          lineTextDwn11 = "1.99 s*"
          lineTextDwn12 = "396 mi"
          lineTextDwn13 = "1,020 hp"
          lineTextBody1="Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control."
          lineTextBody2="Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors. "
          liteText01 = "0-60 mph"
          liteText02 = "Range (EPA est.)"
          liteText03 ="Peak Power"
          liteText11 = "0-60 mph"
          liteText12 = "Range (EPA est.)"
          liteText13 ="Peak Power"
        />
        <Performance 
          liteHeader = 'Exterior'
          boldHeader ='Designed for Efficiency'
          text1 = ' With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.'
          image = '\images\ModelS\Model-S-Exterior-Hero-Desktop-Global.jfif'
          mobileImg='images\ModelS\Model-S-Exterior-Hero-Mobile-Global.jfif'
          ordBtn='ORDER NOW'
          background = '#000'
          color="#fff"
          hov='#171a20'
        />
        <PictureCard 
          leftArea=". main main main main main . aside aside aside aside ."
          margin="-25px"
          rightArea=". aside aside aside aside . main main main main main ."
          PicCard1='\images\ModelS\Model-S-Exterior-Grid-A-Desktop-Global.jfif'
          PicCard2 = "\images\ModelS\Model-S-Exterior-Grid-B-Desktop-Global.jfif"
          PicCard3 = "\images\ModelS\Model-S-Exterior-Grid-C-Desktop-Global.jfif"
          picHeader1 = 'Relentless Performance'
          picHeader2 ="Optimized Aerodynamics"
          picHeader3 ='Refined Styling'
          picText1 ="Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road."
          picText2 ='Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.'
          picText3 ='An iconic silhouette meets refreshed, elegant proportions.'
        />
        <SideVideo 
          vid='\Videos\Plaid-Range-Web-Desktop-8mb.mp4'
          boxHeader1 = '405'
          subHeader1='mi'
          textBox1 = 'Go anywhere with upto 405 miles of estimated range on a single charge'
          boxHeader2 = '15'
          subHeader2 = "min"
          textBox2 = 'Recharge up to 200 miles in 15 minutes at Supercharger locations'
          boxHeader3 = '35,000'
          subHeader3='+'
          textBox3 = 'Superchargers placed along popular routes'
          liteHeader = 'Range'
          boldHeader='Go Anywhere'
          subHeader='Range'
          text1='Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week'
          ordBtn='ORDER NOW'
          mText1 = 'Range (EPA est.)'
          mText2 = 'Recharge up to 200 mi'
          mText3 = 'Global Superchargers'
        />
        <LineSlider
          LinePic1 = '\images\map_san_jose_bg@2x.jfif'
          LinePic2 = '\images\map_berkeley_bg-2x.jfif'
          LinePic3= '\images\map_newyork_bg-2x.jfif'
          LinePic4= '\images\map_florida_bg-2x.jfif'
          lineHeader = 'Freedom to Travel'
          lineTextM = 'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with superchargers along the way.'
          lineTextW = 'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with superchargers along the way.'
          lineTextUP1 = "San Jose to Los Angeles1"
          lineTextBody1="383 miles"
          lineTextUP2 = "Berkely to Lake Tahoe"
          lineTextBody2="178 miles"
          lineTextUP3 = "Manhattan to Boston"
          lineTextBody3="211 miles"
          lineTextUP4 = "Fort Lauderdale to Orlando"
          lineTextBody4="195 miles"
          font="28px"
          width="100%"

        />
        <OrderButton 
        bttn ='LEARN MORE'
        />
        <Shodow 
          avi='\images\Model-3\Model-X-Safety-Hero-Desktop-Global.jfif'
          liteHeader = 'Safety'
          boldHeader='High Impact Protection'
          subHeader='Safety'
          text1='Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.'
          ordBtn='ORDER NOW'
          gridTemp = "'header-group asset' / 416px auto "
          mobileImg='images\Model-X-Safety-Hero-Mobile-Global.jfif'
          Lbk='block'
        />
        <Performance
          liteHeader = 'Autopilot'
          boldHeader ='Future of Driving'
          text1 ='Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.'
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
        <SlideVideo 
          SlideVideo1 = '\Videos\0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4'
          SlideVideo2 = '\Videos\A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4'
          SlideVideo3 = '\Videos\ZZNM9S_summon_1.mp4-2000_OQKCDY.mp4'
          SlideVideo4 = '\Videos\WM5XUG_parking.mp4-2000_EQUBJE.mp4'
          slideHeader='Features'
          slideText="Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:"
          slideTextM="Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:"
          slideTextUP1 = "Navigate on Autopilot"
          slideTextDwn1 = "Active guidance from on-ramp to off-ramp"
          slideTextUP2 = "Auto Lane Change"
          slideTextDwn2 = "Automatically change lanes while driving on the highway"
          slideTextUP3 = "Summon"
          slideTextDwn3 = "Auomatically retrieve your car"
          slideTextUP4 = "Autopark"
          slideTextDwn4 = "Parallel and perpendicular parking with a single touch"
        />
        <TopFooter 
          topImage = '\images\blacky.jpg'
          topHeader = 'Model S'
          topSubHeader = 'Specs'
          btn1 = 'Model S Plaid'
          btn2 = 'Model s'

          left1 = 'Range (EPA est.)'
          subLeft1 = '396 mi'
          right1 = 'Acceleration'
          subRight1 = '1.99s 0-60 mph*'
          rightBrkOne1 = '*with rollout subtracted'

          left2 = '1/4'
          subLeft2 = '9.23@155 mph trap'
          leftBrkOne2 = 'speed'
          right2 = 'Top Speed'
          subRight2 = '200&nbsp;mph†'
          rightBrkOne2 = '†when equipped with paid hardware upgrades'

          left3 = 'Peak Power'
          subLeft3 = '1,020 hp'
          right3 = 'Drag Coefficient'
          subRight3 = '0.208 Cd'

          left4 = 'wheels'
          subLeft4 = '19" 0r 21"'
          right4 = 'Powertrain'
          subRight4 = 'Tri Motor'

          left5 = 'Cargo'
          subLeft5 = '28 cu ft'
          right5 = 'Supercharging Max'
          subRight5 = "250 kW"

          left6 = 'Weight'
          subLeft6 = '4,766 Ibs"'

        />
        <MidFooter 
          midHeader = 'Model S'
          midtext = ''
          midBtn1 = 'Order Now'
          midBtn2 = 'Compare'
          midLink = ''
          midImg = '\images\ModelS\Model-S-Order-Hero-Desktop-Mobile-Global.jfif'
          bgC="#fff"
          clor='#171a20'
        />
        <ScrollNav
        btn1 = 'existing invetory'
        btn2 ='custom order'
        />
        <Footer 
        bg='#fff'
        clor='#171a20'
        />
    </div>
  )
}

export default ModelS