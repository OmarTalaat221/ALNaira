import React, { useState } from 'react';
import FeatherIcon from "feather-icons-react";

import {
  DropdownToggle,
  DropdownMenu,
  Dropdown,
} from "reactstrap";

const SearchDropdown = () => {
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item"
          id="page-header-user-dropdown"
          tag="button"
          data-bs-toggle="dropdown"
          aria-haspopup={true}
          aria-expanded={false}
        >
          <FeatherIcon icon="search" className="icon-sm" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
          <form className="p-3">
            <div className="search-box">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Search here..."
                />
                <i className="mdi mdi-magnify search-icon"></i>
              </div>
            </div>
          </form>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default SearchDropdown;