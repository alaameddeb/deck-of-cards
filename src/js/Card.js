import React from 'react'
import PropTypes from 'prop-types'

import '../css/card.scss'

const Card = ({ value, suit }) => (
  <div className={`card ${suit}`}>
    <span className="name">{value}</span>
  </div>
)

Card.propTypes = {
  value: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
}

export default Card
