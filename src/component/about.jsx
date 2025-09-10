import React from 'react'
import Topheader from './Aboutheader'
import PropertyConnectFooter from './Footer'

const About = () => {
  return (
     <div className=" bg-white">
      <Topheader/>
           <section className="relative z-10 bg-white pt-28 pb-28">
        <div className="max-w-7xl  mx-auto px-6 md:px-12">
          <div className="text-black text-xl  gap-y-5 space-x-3">
    Property Connect is a free, all-in-one platform that connects property managers, condo owners, homeowners, real estate professionals, and vendors to streamline asset management, maintenance, and vendor coordination. Management companies and homeowners can easily upload and track critical building and home assets—like HVACs, elevators, pools, and security systems—while using AI to receive proactive maintenance reminders and build projects in seconds by simply taking a photo.
    These projects are instantly shared with a network of qualified vendors, who can view detailed scopes and compete to provide estimates, timelines, and service. Vendors gain visibility into real-time opportunities across Florida's condo buildings and homes, while owners and managers get faster, more competitive quotes. The platform also acts as a central repository for all maintenance records, service contracts, historical pricing, and previous vendor quotes—giving users a complete picture of their property's upkeep history in one easy-to-access location. It's a smarter, more connected way to manage property maintenance, transparently, efficiently, and all in one place.

          </div>
        </div>
      </section>
        <PropertyConnectFooter/>

      </div>
  )
}

export default About;