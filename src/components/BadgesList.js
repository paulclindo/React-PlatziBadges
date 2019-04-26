import React from 'react'
import '../components/styles/BadgesList.css'

class BadgesList extends React.Component{
  render(){
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <div className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarUrl}
                  alt={`${badge.firstName} ${
                    badge.lastName
                  }`}
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
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;