import React from 'react'
import './UserDetailCard.css'
import PropTypes from 'prop-types';
import Button from 'components/Button/CustomButton'

/**
 * The User Detail card is rendered in the home page to display very less detail about the user
 */
export default function UserDetailCard(props) {
  return (
    <div className="userlessdetailcardbox" style={{backgroundColor:props.backgroundColor}}>
   {props.children}
    </div>
  )
}


UserDetailCard.propTypes = {
	/**
	 * User Name , can be full name
	 */
    backgroundColor: PropTypes.string,
    


   	
};

UserDetailCard.defaultProps = {
    backgroundColor: '#ebedee'
    
    

};