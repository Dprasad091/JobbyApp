// src/components/Loader/index.js
import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'

import './index.css' // Assume custom CSS

class Loader extends Component {
  render() {
    return (
      // When the Jobs Route is accessed, it should contain an HTML container element with testid attribute value as the "loader"
      // Same for JobItemDetails
      <div className="loader-container" data-testid="loader">
        <ThreeDots color="#4f46e5" height={50} width={50} />
      </div>
    )
  }
}

export default Loader
