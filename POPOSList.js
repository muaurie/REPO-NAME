import React from 'react';
import POPOSSpace from './POPOSSpace.js';
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSList() {

const spaces = data.map(( {title, address, images, hours} ) => {
  return (
    <POPOSSpace
      key={title}
      name={title}
      address={address}
      hours={hours}
      image={images[0]}
    />
  )
})

  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        hours="Mon - Fri 7am - 5:30pm"
        image="50-california-st.jpg"
      />
      <POPOSSpace
        name="100 Pine Street"
        address="100 Pine St."
        hours="10am - 6pm"
        image="100-pine.jpg"
      />
      <POPOSSpace
        name="101 California Street"
        address="101 California"
        hours="Open at all times."
        image="101-california.jpg"
      />
      <POPOSSpace
        name="343 Sansome Roof Garden"
        address="343 Sansome St."
        hours="Mon - Fri 10am - 5pm"
        image="343-sansome-roof-garden.jpg"
      />
      <POPOSSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        hours=""
        image="525-market-street-plaza.jpg"
      />
      <POPOSSpace
        name="Citigroup Center"
        address="1 Sansome St."
        hours="Open during business hours."
        image="citigroup-center.jpg"
      />
    </div>
  )
}

export default POPOSList
