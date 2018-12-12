import React from 'react'
import UserCard from '../components/UserCard/UserCard'
import Avatar from 'assets/images/img_avatar.png'
import Button from 'components/Button/CustomButton'
import Header from 'components/Header'
import UserDEtailsContainer from 'components/UserCard/UserDEtailsContainer'
import UserDetailCard from 'containers/UserCard/UserDetailCard'

class HomePage extends React.Component{

state={

  users:[]
}

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(json => this.setState({ users : json}))
  }

  render(){

    console.log('this state is ',this.state.users);
    return (
      <div>
        
        <Header/>
        <UserDEtailsContainer>
  
         { this.state.users && this.state.users.map((user)=><UserDetailCard key={user.id} name={user.name}  email={user.email} id={user.id}/>)}
  
        </UserDEtailsContainer>
      </div>
    )
  }
  
}


export default HomePage;