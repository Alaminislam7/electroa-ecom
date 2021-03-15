import React from 'react'
import TopSelling from './TopSelling'

const TopSellings = () => {
  return (
    <div className="container margin-80">
      <div className="row">
        <div className="col-md-4 padding">
          <TopSelling/>
        </div>
        <div className="col-md-4 padding">
          <TopSelling/>
        </div>
        <div className="col-md-4 padding">
          <TopSelling/>
        </div>
      </div>
    </div>
  )
}

export default TopSellings
