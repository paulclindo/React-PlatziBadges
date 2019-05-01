import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

import "../components/styles/BadgesList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName}${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return {setQuery, filteredBadges}
}

function BadgesList(props) {
  const badges = props.badges;
  const  { query,setQuery, filteredBadges} = useSearchBadges(badges)

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="">Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>We didnt found anyone here</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create New Badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <div className="BadgesListItem">
                  <Gravatar
                    className="BadgesListItem__avatar"
                    email={badge.email}
                    alt="Avatar"
                  />

                  <div>
                    <strong>
                      {badge.firstName} {badge.lastName}
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

export default BadgesList;
