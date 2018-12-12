import React from 'react'
import PropTypes from 'prop-types';


import './style.css'

export default function CustomButton(props) {
  return (
    <div>
    <button className="custombutton" style={{ cursor:'pointer',borderRadius:props.borderRadius,boxShadow:'1px 3px 2px rgba(0,0,0,0.5)',backgroundColor:props.bgcolor, color:props.color, padding:props.padding, fontSize:props.fontSize }}>{props.children}</button>
    </div>
  )
}


CustomButton.propTypes = {
	/**
	 * Background Color
	 */
    backgroundColor: PropTypes.string,
    
    /**
     * Id of button need to pass to link
     */
    id: PropTypes.string
   
	
};
CustomButton.defaultProps = {
    bgcolor: '#05224e',
    color:'#fff',
    padding:'20px',
    fontSize:'1.1rem',
    borderRadius:'5px',
    

};