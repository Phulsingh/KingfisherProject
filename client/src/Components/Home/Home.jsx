import React from 'react'
import ScrollingText from './ScrollingText'
import Navbar from './Navbar'
import BannerChanger from './BannerChanger'
import SubscriptionProduct from './SubscriptionProduct'
import OrganicVeg from './OrganicVeg'
import BestSeller from './BestSeller'
import OragnicFruits from './OrganicFruits'
import ExploreCategory from './ExploreCategory'
import HotProducts from './HotProducts'
import Banner2 from './Banner2'
import DryFruitsOilMasala from './DryFruitsOilMasala'
import FooterDesktop from '../Footer/FooterDesktop'
import FooterMobil from '../Footer/FooterMobil'


const Home = () => {
  return (
    <>
      <ScrollingText/>
      <Navbar/>
      <BannerChanger/>
      <SubscriptionProduct/>
      <OrganicVeg/>
      <OragnicFruits/>
      <BestSeller/>
      <ExploreCategory/>
      <HotProducts/>
      <Banner2/>
      <DryFruitsOilMasala/>
      <FooterDesktop/>
      <FooterMobil/>
    </>
  )
}

export default Home
