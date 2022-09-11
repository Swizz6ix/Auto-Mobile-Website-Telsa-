import React from 'react';
import BigImage from '../components/BigImage';
import LineSlider from '../components/LineSlider';
import MidHeader from '../components/MidHeader';
import PictureCard from '../components/PictureCard';
import Slider from '../components/Slider';
import Performance from '../containers/Performance';
import SideTextImage from '../containers/SideTextImage';
import Safety from '../containers/Safety';
import TopFooter from '../components/TopFooter';
import MidFooter from '../components/MidFooter';
import Footer from '../components/Footer';
import SlideVideo from '../components/SlideVideo';
import OrderButton from '../components/OrderButton';
import Shodow from '../containers/Shodow';
import TopPage from '../components/TopPage';
import ScrollNav from '../components/ScrollNav';

function ModelX() {
  return (
    <div>
        <TopPage 
        topImg= 'images/Model-X/Model-X-Main-Hero-Desktop-LHD.jfif'
        mobileImg='images\Model-X\Model-X-Main-Hero-Mobile-LHD.jfif'
        topHeader='Model X'
        subTopHeader='Plaid'
        topText1='333'
        unit='mi'
        subText1='Range (EPA est.)'
        topText2 ='2.5s'
        subText2='0-60 mph*'
        topText3 ='9.9s'
        subText3='1/4 Mile'
        topText4 ='1,020 hp'
        subText4='Peak Power'
        speedO = 'none'
        fullnth = 'calc(8px *20) calc(8px *20) calc(8px *20) calc(8px *20)  212px'
        box3 = "flex"
        box4='flex'
    /> 
        <MidHeader Title = 'All-New Interior' />
        <BigImage LargePic = "\images\Model-X\MX-Interior-Hero-Desktop-LHD.jfif" 
        mobileImg='images\Model-X\MX-Interior-Hero-Mobile-LHD.jfif'
        />
        <Slider
            Image1 = "\images\Model-X\MX-Interior-Carousel-A-Desktop-LHD.jfif"
            Image2 = '\images\Model-X\MX-Interior-Carousel-B-Desktop-LHD.jfif'
            Image3 = '\images\Model-X\MX-Interior-Carousel-C-Desktop-LHD.jfif'
            Image4 = '\images\Model-X\MX-Interior-Carousel-D-Desktop.jfif'
            mobileImg1='images\Model-X\MX-Interior-Carousel-A-Mobile-LHD.jfif'
            mobileImg2='images\Model-X\MX-Interior-Carousel-B-Mobile-LHD.jfif'
            mobileImg3='images\Model-X\MX-Interior-Carousel-C-Mobile-LHD.jfif'
            mobileImg4='\images\Model-X\MX-Interior-Carousel-D-Desktop.jfif'
            textHeader1="Cinematic Experience"
            textBody1="A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more."
            textHeader2="Focus on Driving"
            textBody2="The ultimate focus on driving: no stalks, no shifting. Model X is the best SUV to drive, and the best SUV to be driven in."
            textHeader3="Perfect Environment"
            textBody3="Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard."
            textHeader4="Spacious Cabin"
            textBody4="Model X offers a spacious cabin with the world's largest panoramic windshield and seating for up to seven."
            
        />
        <PictureCard
            PicCard1 = "\images\Model-X\MX-Interior-Grid-A-Desktop.jfif"
            PicCard2 = "\images\Model-X\MX-Interior-Grid-B-Desktop-LHD.jfif"
            PicCard3 = "\images\Model-X\MX-Interior-Grid-C-Mobile.jfif"
            mobileImg1='images\Model-X\MX-Interior-Grid-A-Mobile.jfif'
            mobileImg2=''
            mobileImg3='images\Model-X\MX-Interior-Grid-C-Mobile.jfif'
            picHeader1 = 'Wireless Gaming'
            picHeader2 ="Stay Connected"
            picHeader3 ='Your Best Audio System'
            picText1 ="Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
            picText2 ='Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.'
            picText3 ='A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.'
            
        />
        <Performance 
            liteHeader = 'Plaid'
            boldHeader ='Beyond Ludicrous'
            text1 = 'With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains, with updated battery architecture, can deliver instant torque at any speed.'
            image = '\images\Model-X\Model-X-Performance-Hero-Desktop-LHD.jfif'
            mobileImg='images\Model-X\Model-X-Performance-Hero-Mobile-LHD.jfif'
            ordBtn='ORDER NOW'
            mText1 = 'Peak Power'
            mText2 = '1/4 mile'
            mText3 = '0-60 mph*'
            boxHeader1 = '1,020'
            subHeader1='hp'
            textBox1 = 'Peak Power'
            boxHeader2 = '9.9'
            subHeader2 = "s"
            textBox2 = '1/4 mile'
            boxHeader3 = '2.5'
            subHeader3='s'
            textBox3='0-60 mph*'
        />
        <LineSlider
            LinePic1 = '\images\Model-X\mx-performance-dual-motor-desktop_carousel-new.jfif'
            LinePic2 = '\images\Model-X\mx-performance-tri-motor-desktop_carousel-new.jfif'
            mobileImg1='images\Model-X\MX-Performance-Dual-Motor-Mobile.jfif'
            mobileImg2='images\Model-X\MX-Performance-Tri-Motor-Mobile.jfif'
            background='#f4f4f4'
            lineHeader='Electric Powertrain'
            lineTextW='Model X platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions'
            lineTextM='Model X platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions'
            lineTextUP1 = "Model X"
            lineTextDwn01 = "3.8 s"
            lineTextDwn02 = "348 mi"
            lineTextDwn03 = "670 hp"
            lineTextUP2 = "Model X Plaid"
            lineTextDwn11 = "2.5 s*"
            lineTextDwn12 = "333 mi"
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
        <SideTextImage
            SidePic = '\images\Model-X\Model-X-Utility-Hero-Desktop-LHD.jfif'
            mobileImg='images\Model-X\Model-X-Utility-Hero-Mobile-LHD.jfif'
            boxHeader1 = '91'
            subHeader1 = "ft³"
            textBox1 = 'Storage capacity'
            boxHeader2 = '5,000'
            subHeader2 = "Ibs"
            textBox2 = 'Towing capacity'
            boxHeader3 = ''
            textBox3 = 'Falcon Wing door'
            liteHeader = 'Utility'
            boldHeader ='Even More Capable'
            text1 = 'With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.'
            mText1 = 'Storage capacity'
            mText2 = 'Towing capacity'
            mText3 = 'Falcon Wing door'
            ordBtn='ORDER NOW'
        />
        <Performance 
            liteHeader = 'Exterior'
            boldHeader ='Designed for Efficiency'
            text1 = 'With the lowest drag coefficient of any SUV, Model X is built for speed and range. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.'
            ordBtn='ORDER NOW'
            image = '\images\Model-X\Model-X-Exterior-Hero-Desktop-LHD.jfif'
            mobileImg='images\Model-X\Model-X-Exterior-Hero-Mobile-LHD.jfif'
            mText1 = 'New Wheels and Tires'
            mText2 = 'Lowest -drag SUV on Earth'
            mText3 = 'Refined stying'
            boxHeader1
            subHeader1
            textBox1 = 'New wheels and improved handling'
            boxHeader2 = '0.24'
            subHeader2 = ""
            textBox2 = 'Lowest -drag SUV on Earth'
            boxHeader3
            subHeader3
            textBox3='Refined exterior stying'
        />
        <PictureCard 
            leftArea=". main main main main main . aside aside aside aside ."
            margin="-25px"
            rightArea=". aside aside aside aside . main main main main main ."
            PicCard1 = "\images\Model-X\Model-X-Exterior-Grid-A-Desktop-Global.jfif"
            PicCard2 = "\images\Model-X\Model-X-Exterior-Grid-B-Desktop-Global.jfif"
            PicCard3 = "\images\Model-X\Model-X-Exterior-Grid-C-Desktop-Global.jfif"
            picHeader1 = 'New Wheels and Tires'
            picHeader2 ="Optimized Aerodynamics"
            picHeader3 ='Refined Styling'
            picText1 ="New performance tires deliver better handling and ride quality with lower rolling resistance and are paired with new aerodynamic wheels for an updated look."
            picText2 ='Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.'
            picText3 ='Exterior design combines an iconic look with elegant proportions'
        />
        <Safety 
            SafePic = '\images\Model-X\Model-X-Range-Hero-Desktop-LHD.jfif'
            mobileImg='images\Model-X\Model-X-Range-Hero-Mobile-LHD.jfif'
            boldHeader='Go Anywhere'
            liteHeader='Range'
            text1='With up to 348 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road.'
            boxHeader1 = '348'
            subHeader1='mi'
            textBox1 = 'Go anywhere with upto 405 miles of estimated range on a single charge'
            boxHeader2 = '175'
            subHeader2 = "mi"
            textBox2 = 'Recharge up to 175 miles in 15 minutes at Supercharger locations'
            boxHeader3 = '35,000'
            subHeader3='+'
            textBox3 = 'Superchargers placed along popular routes'
            mText1 = 'Range (EPA est.)'
            mText2 = 'Recharge up to 175 miles in 15 minutes'
            mText3 = 'Global Superchargers'
            ordBtn='ORDER NOW'
        />
        <LineSlider
            LinePic1 = '\images\map_san_jose_bg@2x.jfif'
            LinePic2 = '\images\map_berkeley_bg-2x.jfif'
            LinePic3= '\images\map_newyork_bg-2x.jfif'
            LinePic4= '\images\map_florida_bg-2x.jfif'
            lineTextUP1 = "San Jose to Los Angeles1"
            lineTextBody1="383 miles"
            lineTextUP2 = "Berkely to Lake Tahoe"
            lineTextBody2="178 miles"
            lineTextUP3 = "Manhattan to Boston"
            lineTextBody3="211 miles"
            lineTextUP4 = "Fort Lauderdale to Orlando"
            lineTextBody4="195 miles"
            font="28px"
            lineHeader = 'Freedom to Travel'
            lineTextM = 'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with superchargers along the way.'
            lineTextW = 'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with superchargers along the way.'
        />
        <OrderButton bttn ='LEARN MORE' />
        <Shodow 
            avi='\images\Model-3\Model-X-Safety-Hero-Desktop-Global.jfif'
            liteHeader = 'Safety'
            boldHeader='Built for Safety'
            text1='Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.'
            gridTemp = "'header-group asset' / 416px auto "
            ordBtn='ORDER NOW'
            mobileImg='images\Model-X-Safety-Hero-Mobile-Global.jfif'
            Lbk='block'
        />
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
        <SlideVideo 
            SlideVideo1 = '\Videos\0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4'
            SlideVideo2 = '\Videos\A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4'
            SlideVideo3 = '\Videos\ZZNM9S_summon_1.mp4-2000_OQKCDY.mp4'
            SlideVideo4 = '\Videos\WM5XUG_parking.mp4-2000_EQUBJE.mp4'
            slideHeader='Features'
            slideText="Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:"
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
            topImage = 'images\Model-X\Model-X-Specs-Hero-Mobile-LHD (1).jfif'
            topHeader = 'Model X'
            topSubHeader = 'Specs'
            btn1 = 'Model X Plaid'
            btn2 = 'Model X'
            left1 = 'Range(EPA est.)'
            subLeft1 = '333 mi'
            leftBrkOne1
            leftBrkTwo1
            leftBrkThree1
            right1 = 'Acceleration'
            subRight1 = '2.5s 0-60 mph*'
            rightBrkOne1 = '*with rollout subtracted'
            left2 = '1/4 Mile'
            subLeft2 = '9.9s'
            leftBrkOne2 
            leftBrkTwo2
            leftBrkThree2
            right2 = 'Top Spped'
            subRight2 = '163 mph'
            left3 = 'Peak Power'
            subLeft3 = '1,020 hp'
            leftBrkOne3 
            leftBrkTwo3
            leftBrkThree3
            right3 = 'Drag Coefficient'
            subRight3 = '0.24 Cd'
            left4 = 'Wheels'
            subLeft4 = '20" or 22"'
            leftBrkOne4
            leftBrkTwo4
            leftBrkThree4
            right4 = 'Weight'
            subRight4 = '5, 390 Ibs'
            left5 = 'Towing'
            subLeft5 = '5,000 Ibs'
            leftBrkOne5
            leftBrkTwo5
            leftBrkThree5
            right5 = 'Powertrain'
            subRight5 = "Tri Motor"
            left6 = 'Seating'
            subLeft6 = 'Up to 6'
            right6 = 'Supercharging Max'
            subRight6 = '250kW'
        />
        <MidFooter 
            midHeader = 'Model X'
            midtext = ''
            midBtn1 = 'Order Now'
            midBtn2 = 'Compare'
            midLink = ''
            midImg ='images\Model-X\Model-X-Order-Hero-Desktop-Mobile-Global.jfif'
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

export default ModelX