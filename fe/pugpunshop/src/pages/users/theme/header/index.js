import { memo } from "react";
import "./style.scss";
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiSolidUser,
  BiLogoGmail,
} from "react-icons/bi";
import { formatter } from "utils/fomater";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <BiLogoGmail />
                  hoangtam@gmail.com
                </li>
                <li>freeshipping from {formatter(100)} </li>
              </ul>
            </div>
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
      <div className="container">
        <div className="row">
          <div className="col-xl-3">Logo</div>
          <div className="col-xl-6 ">Menu</div>
          <div className="col-xl-3 ">Phone</div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
