import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFront,
} from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { BiUser, BiWindowClose } from "react-icons/bi";
import Logout from "../../auth/components/logout/LogoutComponent";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <Badge className="icon_header" /> RKDK ADMIN{" "}
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          <BiWindowClose /> {/* Close icon */}
        </span>
      </div>

      <ul className="sidebar-list text-dark">
        <li className="sidebar-list-item">
          <Link
            to="/admin/dashboard"
            className="nav-link bg-warning text-white"
          >
            <BsGrid1X2Fill className="icon " /> Dashboard
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/admin/clients" className="nav-link">
            <BiUser className="icon" /> Clients
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/admin/candidates" className="nav-link">
            <BsPeopleFill className="icon" /> Candidates
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/admin/reports" className="nav-link">
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/admin/frontEnd" className="nav-link">
            <BsFront className="icon" /> FrontEnd
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/admin/settings" className="nav-link">
            <BsFillGearFill className="icon" /> Setting
          </Link>
        </li>

        <Logout />
      </ul>
    </aside>
  );
}

Sidebar.propTypes = {
  openSidebarToggle: PropTypes.bool.isRequired,
  OpenSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
