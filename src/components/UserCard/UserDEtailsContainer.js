import React from 'react'
import './userdetailscontainer.css'
import PropTypes from 'prop-types';


/* 
* Flex box container to render all individual user card component
*/
export default function UserDEtailsContainer(props) {
  return (
    <div className="userdetailscontainer">
      {
          props.children
      }
    </div>
  )
}


