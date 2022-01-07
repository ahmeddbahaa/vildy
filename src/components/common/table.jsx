import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = (props) => {
  const { data, onSort, sortColumn, columns } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
