import React from 'react'
import Header from 'components/Header'
import UserCard from 'components/UserCard/UserCard';

class About  extends React.Component {


state={
  user:undefined
}

componentDidMount(){


  console.log(' props param ',this.props.match.params.id)
  fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`).then(response => response.json())
  .then(json => this.setState({
    user: json
  }))
}

  render(){

    console.log('user is ',this.state.user )
    const user = this.state.user ? this.state.user : undefined;
    const address = user? user.address :undefined
    let fullAddress = undefined;
    if(address){
        fullAddress=address.suite+ ', '+address.street+', '+address.city+' - '+address.zipcode
    }
    return (
      <div>
        <Header/>
        { user && <UserCard name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website} company={user.company.name} address={fullAddress} />}
      </div>
    )

  }
 
}


export default About;