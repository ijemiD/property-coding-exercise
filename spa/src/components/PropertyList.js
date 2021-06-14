import React from "react";
import * as fieldUtils from "../helpers/fieldsUtil";
import * as appSettings from "../constants/appSettings";
import * as calculator from "../helpers/calculator";
import { DataGrid } from "@material-ui/data-grid";

export default function PropertyList({ properties, onPropertySelected }) {
  const cols = [
    {
      field: "address",
      headerName: "Address",
      width: 200,
      valueFormatter: (params) => {
        return fieldUtils.formatAddress(params.row);
      },
    },
    {
      field: "yearBuilt",
      headerName: "Year Built",
      width: 135,
      valueFormatter: (params) => params.row.yearBuilt || "-",
    },
    {
      field: "financial.listPrice",
      headerName: `List Price (${appSettings.APP_CURRENCY})`,
      // width: 100,
      valueFormatter: (params) =>
        isNaN(+params.row.listPrice)
          ? "-"
          : `${fieldUtils.formatCurrency(params.row.listPrice)}`,
    },
    {
      field: "financial.monthlyRent",
      headerName: `Monthly Rent (${appSettings.APP_CURRENCY})`,
      width: 100,
      valueFormatter: (params) =>
        isNaN(+params.row.monthlyRent)
          ? "-"
          : `${fieldUtils.formatCurrency(params.row.monthlyRent)}`,
    },
    {
      field: "yield",
      headerName: "Gross Yield (%)",
      width: 100,
      valueFormatter: (params) => {
        const { monthlyRent, listPrice } = params.row;
        if (listPrice === 0) return "-";
        return fieldUtils.formatNumber(
          calculator.calculateGross(monthlyRent, listPrice)
        );
        /*return isNaN(+monthlyRent) || isNaN(+listPrice)
          ? "-"
          : `${fieldUtils.formatNumber(
              calculator.calculateGross(monthlyRent, listPrice)
            )}`;
            */
      },
    },
  ];

  const handleRowSelected = (x) => {
    const [[_, value]] = x.api.current.getSelectedRows();
    onPropertySelected(value);
  };

  return (
    <div style={{ height: "100%", width: "100%" }} className="flex h-full">
      <div className="h-full" style={{ width: "100%" }}>
        <DataGrid
          rows={properties}
          columns={cols}
          onRowSelected={handleRowSelected}
          hideFooterPagination
          autoHeight
          hideFooter
        />
      </div>
    </div>
  );
}
