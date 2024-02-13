import React from "react";
import {
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import TableContainer from "../../../../components/Common/TableContainer";
import { useNavigate } from "react-router-dom";

const VideoListTable = ({ videos, columns }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <TableContainer
        columns={columns}
        data={videos}
        isGlobalFilter={true}
        customPageSize={10}
        className="Invoice table"
      />
    </React.Fragment>
  );
};

export default VideoListTable;
