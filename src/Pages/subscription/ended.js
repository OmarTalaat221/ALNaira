import React from "react";
import {subcolumns, subdata } from "../Tables/advanceTdata";
import DynamicTable from "../Tables/dynamicTable";
function EndedSubscription() {
  return (
    <DynamicTable
      data={subdata}
      columns={subcolumns}
      title={"EndedSubscription"}
      tableHeaderTitle={"EndedSubscription"}
    />
  );
}

export default EndedSubscription;