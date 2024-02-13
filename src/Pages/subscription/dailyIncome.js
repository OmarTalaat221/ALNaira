import React from "react";
import { data, columns } from "../Tables/advanceTdata";
import DynamicTable from "../Tables/dynamicTable";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "reactstrap";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
function DailyIncome() {
  return (
    <React.Fragement>
      <Card>
        <CardHeader>
          <CardTitle>Daily Income</CardTitle>
        </CardHeader>
        <CardBody>
          <p>DailyIncome</p>
        </CardBody>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <DynamicTable
        data={data}
        columns={columns}
        title={"DailyIncome"}
        tableHeaderTitle={"DailyIncome"}
      />
    </React.Fragement>
  );
}

export default DailyIncome;
