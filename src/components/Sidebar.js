import React from "react";
import { Link } from "react-router-dom";

import Logo_GE from "../assets/images/Logo-GE1.svg";
import Icon_Products from "../assets/images/Icon-Products.svg";
import Icon_Dashboard from "../assets/images/Icon-Dashboard.svg";
import Icon_Subscriptions from "../assets/images/Icon-Subscriptions.svg";
import Icon_Announcements from "../assets/images/Icon-Announcements-Events.svg";
import Icon_Engagement_Requests from "../assets/images/Icon-Engagement-Requests.svg";
import Icon_Support from "../assets/images/Icon-Support.svg";
import Icon_Settings from "../assets/images/Icon-Settings.svg";
import Icon_Administration from "../assets/images/Icon-Administration.svg";
import Icon_Github from "../assets/images/Icon-Github.svg";
import Icon_Yammer from "../assets/images/Icon-Yammer.svg";
import Icon_Confluence from "../assets/images/Icon-Confluence.svg";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-3 p-0" id="sidebar-wrapper">
        <div className="sidebar-heading p-3">
          <div className="d-flex flex-row p-3">
            <div className="col-3 pr-0 GE-Logo">
              <img className="img-fluid" alt="" src={Logo_GE} />
            </div>
            <div className="col-9 pl-0 portal-name">
              <div className="text-center headers">
                <b>DIGITAL CONNECT</b>
              </div>
              <div className="border-bottom mx-2"></div>
              <div className="text-center user-details pt-1">
                <b>User | GE Corporate</b>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group list-group-flush p-0 mt-2">
          <span className="sidebarMenu">
            <a
              target="_blank"
              href="https://dc-wordpress-ci.digitalconnect.apps.ge.com/"
              className="list-group-item list-group-item-action"
            >
              <img className="img-fluid" alt="" src={Icon_Products} />
              PRODUCTS & SERVICES
            </a>
          </span>
          <span className="sidebarMenu">
            <Link
              className="list-group-item list-group-item-action"
              to="/"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Dashboard",
                headerText: "DASHBOARD",
              })}
            >
              <img className="img-fluid" alt="" src={Icon_Dashboard} />
              DASHBOARD
            </Link>            
          </span>
          <span className="sidebarMenu">
            <Link
              className="list-group-item list-group-item-action"
              to="/manage"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Manage",
                headerText: "MANAGE",                
              })}
            >
              <img className="img-fluid" alt="" src={Icon_Subscriptions} />{" "}
              MANAGE
            </Link>           
          </span>
          <span className="sidebarMenu">
          <Link
              className="list-group-item list-group-item-action"
              to="/announcements-events"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "AnnouncementsAndEvents",
                headerText: "ANNOUNCEMENTS & EVENTS",
              })}
            >
              <img className="img-fluid" alt="" src={Icon_Announcements} />{" "}
              ANNOUNCEMENTS & EVENTS
            </Link>           
          </span>
          <span className="sidebarMenu">
          <Link
              className="list-group-item list-group-item-action"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="img-fluid"
                alt=""
                src={Icon_Engagement_Requests}
              />
              ENGAGEMENT REQUESTS
            </Link>            
            <div className="dropdown-content">
            <Link
              to="/newengagementrequest"
              onClick={this.props.clickEvent.bind(this, {
                  pageName: "NewEngagementRequest",
                  headerText: "NEW ENGAGEMENT REQUEST",
                })}
            >
              NEW ENGAGEMENT REQUEST
            </Link>              
            </div>
          </span>
          <span className="sidebarMenu">
          <Link
              className="list-group-item list-group-item-action"
              to="/support"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Support",
                headerText: "SUPPORT",
              })}
            >
              <img className="img-fluid" alt="" src={Icon_Support} />
              SUPPORT
            </Link>            
          </span>
          <span className="sidebarMenu">
          <Link
              className="list-group-item list-group-item-action"
              to="/preferences"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Preferences",
                headerText: "PREFERENCES",
              })}
            >
              <img className="img-fluid" alt="" src={Icon_Settings} />{" "}
              PREFERENCES
            </Link>            
          </span>
          <span className="sidebarMenu">
          <Link
              className="list-group-item list-group-item-action"
              to="/administration"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Administration",
                headerText: "ADMINISTRATION",
              })}
            >
              <img className="img-fluid" alt="" src={Icon_Administration} />{" "}
              ADMINISTRATION
            </Link>
            {/* Might need in future
             <div className="dropdown-content">
              <a
                href="#"
                onClick={this.props.clickEvent.bind(this, {
                  pageName: "UserManagement",
                  headerText: "USER MANAGEMENT",
                  // subHeaderText: "Persona 1",
                })}
              >
                USER MANAGEMENT
              </a>
            </div> */}
          </span>
        </div>
        <div className="col-3 footer">
          <div className="social-media text-center page-footer">
            <div className="social-tag text-muted">Socialize With Us</div>
            <img alt="" className="img-fluid px-2" src={Icon_Github} />
            <img alt="" className="img-fluid px-2" src={Icon_Yammer} />
            <img alt="" className="img-fluid px-2" src={Icon_Confluence} />
          </div>
          <div className="footer-copyright text-center text-muted mt-2">
            © 2021 GENERAL ELECTRIC
          </div>
        </div>
      </div>
    );
  }
}
