import React from 'react'
import Footer from '../components/Footer'
import MidFooter from '../components/MidFooter'
import SideTextImage from '../containers/SideTextImage';
import styled from 'styled-components';
import TopFooter from '../components/TopFooter';
import Performance from '../containers/Performance';
import SideVideo from '../containers/SideVideo';
import VidBtn from '../containers/VidBtn';
import Shodow from '../containers/Shodow';
import TopPage from '../components/TopPage';
import ScrollNav from '../components/ScrollNav';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

function SolarPanel() {
  return (
    <div>
      <TopPage 
        topImg= 'images//solar-panel/_25-Hero-D (2).jfif'
        mobileImg='images\solar-panel\solar-panels-hero-en-mobile.jfif'
        topHeader='Solar for Existing Roofs'
        subTopHeader='Lowest Cost Solar Panels in America-Money-Back guarantee'
        topText1={<Icon><SolarPowerIcon /></Icon>}
        unit=''
        subText1='Convert Sunlight '
        brk1='to Energy'
        topText2 ={<Cicon><CurrencyPoundIcon /></Cicon>}
        subText2='Guaranteed Lowest'
        brk2='Price for Solar'
        topText3 ='24/7'
        subText3='Energy'
        brk3='Monitoring'
        speedO = 'none'
        fullnth = 'calc(8px *20) calc(8px *20) calc(8px *20)  212px'
        box3 = "flex"
        box4='none'
        clor='#000'
      />
        <SideVideo LeftText
          vid='\Videos\YTNWIZ_425_Savings_D-2000_NVNAJS.mp4'
          gridVid = "'header-group asset' / 416px auto "
          boldHeader='Electricity For Less'
          liteHeader = 'Savings'
          text1='Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with '
          link="Tesla's price match guarantee"
          text0=' and take control of your monthly electricity bill. Learn more about your potential savings in our Design Studio.'
          ordBtn='SEE YOUR SAVINGS'
        />
        <Shodow 
          avi='\images\solar-panel\_25-Design-D.jfif'
          liteHeader = 'Design'
          boldHeader='Sleek and Durable'
          text1='Our solar panels are low-profile and durable  — quietly converting sunlight to energy for decades to come.  Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. '
          link = 'Chat with an energy advisor or request a call'
          text0=' to ask any questions about Tesla solar panels.'
          lrnBtn='LEARN MORE'
          ordBtn = 'ORDER NOW'
          gridTemp = "'header-group asset' / 416px auto "
          objFit='cover'
          mobileImg='images\solar-panel\_25-Design-M.jfif'
          hgt = '789px'
        />
      
        <Performance 
          liteHeader = 'Powerwall'
          boldHeader='Home Battery Backup'
          text1='Powerwall is bundled with every Tesla solar purchase, allowing you to store your solar energy for use anytime—at night or during an outage.'
          lrnBtn='LEARN MORE'
          ordBtn = 'ORDER NOW'
          image = '\images\solar-panel\PW-Inverter-Hero-D.jfif'
          mobileImg='images\solar-panel\SPSR-PowerwallShot-M.jfif'
        />
        <VidBtn
          liteHeader = 'Power On'
          boldHeader='Order and Installation'
          text1='From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation.  '
          link = 'Chat with an energy advisor'
          text0=' to ask any questions about going solar with Tesla.'
          ordBtn = 'ORDER NOW'
          video = '\Videos\solar-assessment-desktop.mp4'
        />
        <SideTextImage
          SidePic='\images\Solar-Roof\Inverter_V8_D.avif'
          mobileImg='images\Solar-Roof\Inverter_V8_M.avif'
          liteHeader = 'Efficiecy'
          boldHeader='Maximum Solar Production'
          text1='Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by '
          link = 'Tesla Solar Inverter'
          text0=' your fully integrated system is safe and reliable.'
          ordBtn = 'ORDER NOW'
        />
        <Performance 
          liteHeader = 'Experience'
          boldHeader='24/7 Monitoring'
          text1='Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence.'
          ordBtn = 'ORDER NOW'
          image = '\images\Solar-Roof\SR-tesla-app-D.jfif'
          mobileImg='images\Solar-Roof\SR-tesla-app-M.jfif'
        />
        <TopFooter 
        topImage = '\images\solar-panel\_25-Specs-D.jfif'
        mobileImg='images\solar-panel\_25-Specs-M.jfif'
        topHeader = 'Solar Panel'
        topSubHeader = 'Specs'
        bottomText = '*Modules shown may be different than those included in final design.'
        left1 = 'Wattage'
        subLeft1 = '400 W'
        right1 = 'Certifications'
        subRight1 = 'IEC/UL 61730,'
        rightBrkOne1 = 'CEC Listed,'
        rightBrkTwo1 = 'IEC 61215'
        left2 = 'Operating Temperature'
        subLeft2 = '-40°F up to +185°F'
        right2 = 'Inverter Power'
        subRight2 = '3.8kW / 7.6kW'
        rightBrkOne2 = '97.5% efficiency'
        left3 = 'Dimensions'
        subLeft3 = '74.4" x 41.2" x 1.57"'
        leftBrkOne3 = '(including frame)'
        right3 = 'Inverter Dimensions'
        subRight3 = '26" x 16" x 6"'
        left4 = 'Design'
        subLeft4 = 'Black anodized'
        leftBrkOne4 = 'aluminum alloy frame'
        leftBrkTwo4 ='Black solar cells and'
        leftBrkThree4 = 'backsheet'
        right4 = 'Inverter Warranty'
        subRight4 = '12.5 years'
        left5 = 'Warranty'
        subLeft5 = '25-year performance'
        leftBrkOne5 = 'guarantee'
        />
        <MidFooter 
        midHeader = 'Power Your Home'
        midtext = 'order now or talk to a Tesla Advisor if you have any questions'
        midBtn1 = 'ORDER NOW'
        midBtn2 = 'CHAT WITH ENERGY ADVISOR'
        midLink = 'Get Energy Updates'
        justify='center'
        size='260px'
        />
        <ScrollNav 
        btn2="order now"
        />
        <Footer />
    </div>
  )
}

export default SolarPanel

const Icon = styled(SolarPowerIcon)`
    fill: #fff !important;
`
const Cicon = styled(CurrencyPoundIcon)`
  fill: #fff !important;
`