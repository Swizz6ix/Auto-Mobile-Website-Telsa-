import React from 'react'
import Performance from '../containers/Performance';
import SideTextImage from '../containers/SideTextImage';
import TopFooter from '../components/TopFooter';
import MidFooter from '../components/MidFooter';
import Footer from '../components/Footer';
import SideVideo from '../containers/SideVideo';
import SlideVideo from '../components/SlideVideo';
import TopPage from '../components/TopPage';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import styled from 'styled-components';
import ScrollNav from '../components/ScrollNav';

function SolarRoof() {
  return (
    <div>
      <TopPage 
        topImg= 'images/Solar-Roof/b614dd66-cc50-4cba-8c15-186b95bb4a8d.jfif'
        mobileImg='images\Solar-Roof\2c335e5a-6493-4836-aa6f-6e0e2f2ee709.png'
        topHeader='Solar Roof'
        subTopHeader='Transform your roof and produce clean energy'
        topText1= {<Icon><SolarPowerIcon /></Icon>}
        subText1='Beautify Solar '
        brk1='Without Compromise'
        topText2 ='25-Year'
        subText2='Tile'
        brk2='Warranty'
        topText3 ='24/7'
        subText3='Outage'
        brk3='Portection'
        speedO = 'none'
        fullnth = 'calc(8px *20) calc(8px *20) calc(8px *20)  212px'
        box3 = "flex"
        box4='none'
      />
        <Performance 
        liteHeader = 'Design'
        boldHeader ='A Beautiful Roof'
        text1 = 'Install Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling. '
        ordBtn='ORDER NOW'
        image = '\images\Solar-Roof\SR-Design-D.jfif'
        mobileImg='images\Solar-Roof\SR-Design-M.jfif'
        />
        <SideTextImage
          SidePic='\images\Solar-Roof\powerwall-energy-storage-desktop.jfif'
          mobileImg='images\Solar-Roof\powerwall-energy-storage-mobile.jfif'
          liteHeader='Energy Storage'
          boldHeader='Backup Protection'
          text1='Powerwall is a compact home battery that is bundled with every Tesla solar purchase, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof, so you can power your home anytime—at night or during an outage.'
          sideTextM='Powerwall is a compact home battery that is bundled with every Tesla solar purchase, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof, so you can power your home anytime—at night or during an outage.'
          lrnBtn='LEARN MORE'
          ordBtn='ORDER NOW'
        />
        <SideVideo 
          vid='\Videos\SR-Durability-Desktop.webm'
          liteHeader = 'Durability'
          boldHeader='Built to Last'
          subHeader='Durability'
          text1='Solar Roof tiles are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof tiles will continue to produce clean energy for your home for decades to come.'
          ordBtn='ORDER NOW'
        />
        <SlideVideo 
          SlideVideo1 = '\Videos\Carousel_Installation2.webm'
          SlideVideo2 = '\Videos\Carousel_Design.webm'
          SlideVideo3 = '\Videos\WLCRZE_Carousel_PowerOn_V4_IDHKAS.mp4'
          liteHeader = 'Installation'
          header ='Trusted Expertise'
          textOne = 'Our in-house team of energy professionals has installed more than 3.6 GW of clean solar energy across 400,000 roofs—the equivalent of 10 million traditional solar panels. From design to power on, we take care of everything. '
          slideLite='Installation'
          slideHeader='Trusted Expertise'
          slideText="Our in-house team of energy professionals has installed more than 3.6 GW of clean solar energy across 400,000 roofs—the equivalent of 10 million traditional solar panels. From design to power on, we take care of everything."
          slideLink='Chat with an energy advisor'
          slideText1='to ask any questions about Tesla Solar Roof.'
          slideTextM="Our in-house team of energy professionals has installed more than 3.6 GW of clean solar energy across 400,000 roofs—the equivalent of 10 million traditional solar panels. From design to power on, we take care of everything."
          slideTextUP1 = "Design"
          slideTextDwn1 = "Aerial imagery and 3D modeling determine your custom design"
          slideTextUP2 = "Installation"
          slideTextDwn2 = "Our integrated design enables quick and Powerwall installation"
          slideTextUP3 = "Power On"
          slideTextDwn3 = "Final cleanup is completed before system activation"
          lastChild="none"
        />
        <SideTextImage 
          SidePic='\images\Solar-Roof\Inverter_V8_D.avif'
          mobileImg='images\Solar-Roof\Inverter_V8_M.avif'
          liteHeader = 'Efficiency'
          boldHeader ='Maximum Solar Production'
          text1 = 'Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Combined with '
          link = 'Tesla Solar Inverter'
          text0=', your fully integrated system is safe, reliable and outage ready. With built-in connectivity, Tesla Solar Inverter will continue to improve with each over-the-air software update.'
          sideTextM='Powerwall is a compact home battery that is bundled with every Tesla solar purchase, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof, so you can power your home anytime—at night or during an outage.'
          ordBtn='ORDER NOW'
          />
        <Performance 
        liteHeader = 'Control'
        boldHeader ='Monitor and Optimize'
        text1 = 'With the Tesla app, you can monitor your energy production in real time. Control your system from antwhere with instant alerts and remote access.'
        ordBtn='ORDER NOW'
        image = '\images\Solar-Roof\SR-tesla-app-D.jfif'
        mobileImg='images\Solar-Roof\SR-tesla-app-M.jfif'
        />
        <SideTextImage
          SidePic='\images\Solar-Roof\SR-Value-D.jfif'
          mobileImg='images\Solar-Roof\SR-Value-M.jfif'
          liteHeader = 'value'
          boldHeader ='Pay less for Electricity'
          text1 = 'Solar Roof is the only roof that can help pay for itself with the energy you produce. Power your home at the lowest price per watt of any national provider and take control of your monthly electricity bill. '
          ordBtn='ORDER NOW'
        />
        <TopFooter 
        topImage = '\images\Solar-Roof\PanelMeasure_desktop2x.avif'
        topHeader = 'Solar Roof'
        topSubHeader = 'Specs'
        left1 = 'Tile and Power Warranty'
        subLeft1 = '25 years'
        leftBrkThree1
        right1 = 'Hail Rating'
        subRight1 = 'ANSI FM 4473 Class 3'
        left2 = 'Wind Rating'
        subLeft2 = 'ASTM D3161 Class F'
        right2 = 'Roof Pitch'
        subRight2 = '2:12 to 24:12'
        left3 = 'Fire Rating'
        subLeft3 = 'Class A (hightest rating)'
        right3 = 'Inverter Power'
        subRight3 = '3.8kW / 7.6kW'
        rightBrkOne3 = '97.5% efficiency'
        />
        <MidFooter 
        midHeader = 'Transform Your Roof'
        midtext = 'order now or talk to a Tesla Advisor if you have any questions'
        midBtn1 = 'ORDER NOW'
        midBtn2 = 'CHAT WITH ENERGY ADVISOR'
        midLink = 'Get Energy Updates'
        justify='center'
        size='260px'
        />
        <ScrollNav
        btn2 ='order now'
        />
        <Footer />
    </div>
  )
}

export default SolarRoof

const Icon = styled(SolarPowerIcon)`
    fill: #fff !important;
`