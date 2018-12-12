import React from 'react'

import PropTypes from 'prop-types';
import Avatar from '../../assets/images/img_avatar.png'
import './UserCard.css'

/**
 * The User Card gives the detail about each user
 */
export default function UserCard(props) {
  return (
    <div style={{backgroundColor:props.backgroundColor ,  width:props.containerWidth ,paddingTop: props.pt, paddingRight: props.pr, paddingLeft:props.pl , paddingBottom: props.pb, boxShadow:props.boxShadow }}>
    <div className="" style={{display:'flex'}}><img src={props.imageURL} alt="profilepic" style={{width:'50%',height:'50%'}}/>
    <div style={{padding: props.innerContainerPadding}} className="text-styling">
    <h1><b>{props.name}</b></h1> 
    <p>
    <span><strong>Username :</strong>{props.username}<br/></span>
      <span><strong>Email :</strong>{props.email}</span><br/>
    <span><strong>Company :</strong>{props.company}</span><br/>
    <span><strong>Website :</strong>{props.website}</span><br/>
    <span><strong>Phone :</strong>{props.phone}</span><br/>
    <span><strong>Address :</strong>{props.address}</span><br/>
    </p> 
  </div>
  </div>
    </div>
  )
}


UserCard.propTypes = {
	/**
	 * Background Color
	 */
    backgroundColor: PropTypes.string,
    

    /**
	 * Image URL
	 */
    imageURL: PropTypes.string,

    /**
	 *  Name , the main content to be displayed
	 */
    name: PropTypes.string,


    /**
	 * Email- 
	 */
    email: PropTypes.string
	
};
UserCard.defaultProps = {
    backgroundColor: '#b0d2ea',
    pt:'20px',
    pb:'20px',
    pr:'auto',
    pl:'auto',
    titlepl:'20px',
    containerWidth:'70%',
    innerContainerPadding:'2px 16px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    imageURL:Avatar
};