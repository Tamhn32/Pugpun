import { memo } from "react";
import "./style.scss";
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiSolidUser,
} from "react-icons/bi";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6">Trai</div>
          <div className="col-6 header_top_right">
            <ul>
              <li>
                <Link to={""}>
                  <BiLogoFacebookSquare />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <BiLogoInstagramAlt />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <BiLogoTwitter />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <BiLogoLinkedinSquare />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <BiSolidUser />
                </Link>
                <span> Sign In</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
