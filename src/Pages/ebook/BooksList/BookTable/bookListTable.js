import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import TableContainer from "../../../../components/Common/TableContainer";
import { BookData } from "../../../../CommonData/Data/Book";
import { useNavigate } from "react-router-dom";

const BookListTable = () => {
  const navigate = useNavigate();
  const columns = [
    {
      Header: "Date",
      accessor: "date",
      Filter: false,
    },
    {
      Header: "Book Name",
      accessor: "BookName",
    },
    {
      Header: "Course Name",
      accessor: "CourseName",
    },
    {
      Header: "Status",
      Cell: (cell) => {
        switch (cell.cell.row.original.Status) {
          case "Paid":
            return (
              <span className="badge badge-pill badge-soft-success font-size-12">
                {cell.cell.row.original.Status}
              </span>
            );

          case "Pending":
            return (
              <span className="badge badge-pill badge-soft-warning font-size-12">
                {cell.cell.row.original.Status}
              </span>
            );

          default:
            return (
              <span className="badge badge-pill badge-soft-success font-size-12">
                {cell.cell.row.original.Status}
              </span>
            );
        }
      },
    },
    {
      Header: "Action",
      Cell: (cell) => {
        return (
          <>
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn btn-light btn-sm"
                tag="button"
                data-bs-toggle="dropdown"
                direction="start"
              >
                <i className="bx bx-dots-horizontal-rounded"></i>
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-end"
                style={{ width: "100%", textAlign: "center" }}
              >
                <a href="../../../../assets/images/404-img.png" download="image">
                  Download
                </a>

                {/* <DropdownItem>Delete</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        );
      },
    },
  ];
  return (
    <React.Fragment>
      <TableContainer
        columns={columns}
        data={BookData}
        isGlobalFilter={true}
        customPageSize={10}
        className="Invoice table"
      />
    </React.Fragment>
  );
};

export default BookListTable;
