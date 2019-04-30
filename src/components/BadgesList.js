import React from 'react'
import { Link } from 'react-router-dom' 
import Gravatar from './Gravatar'

import '../components/styles/BadgesList.css'

class BadgesList extends React.Component{
  render(){
    
    if(this.props.badges.length === 0 ){
      return(
        <div>
          <h3>We didnt found anyone here</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      )
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <div className="BadgesListItem">
                  <Gravatar
                    className="BadgesListItem__avatar"
                    email={badge.email}
                    alt="Avatar"
                  />
        
                  <div>
                    <strong>
                      {badge.firstName}{" "}
                      {badge.lastName}
                    </strong>
                    <br />@{badge.twitter}
                    <br />
                    {badge.jobTitle}
                  </div>
                </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;