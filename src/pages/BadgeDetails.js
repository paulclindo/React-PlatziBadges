import React from 'react'
import confLogo from '../images/platziconf-logo.svg'
import "./styles/BadgeDetails.css";
import Badge from "../components/badge";

import { Link } from "react-router-dom";

function BadgeDetails (props) {
  const badge = props.badge
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              jobTitle={badge.jobTitle}
              email={badge.email}
              twitter={badge.twitter}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div className="">
                <Link
                  className="btn btn-success mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;