import { IntranetContext } from "../../context";
import { useContext } from "react";
import DataTable from "react-data-table-component";

const DataTableRes = () => {
  const {
    filteredResults,
    searchQuery,
    subHeaderComponentMemo,
    resetPaginationToggle,
  } = useContext(IntranetContext);

  const column = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Department",
      selector: (row) => row.department,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Direct Manager",
      selector: (row) => row.Direct_manager,
    },
    {
      name: "Work Number",
      selector: (row) => row.work_umber,
    },
  ];
  const customStyles = {
    headRow: {
      style: { fontSize: "1.3rem" },
    },
  };
  return (
    <>
      {filteredResults.length > 0 ? (
        searchQuery && (
          <DataTable
            columns={column}
            data={filteredResults}
            responsive
            striped
            pointerOnHover
            highlightOnHover
            pagination
            customStyles={customStyles}
            subHeaderComponent={subHeaderComponentMemo}
            paginationResetDefaultPage={resetPaginationToggle}
          ></DataTable>
        )
      ) : (
        <center>
          <p className="text-white">No such user with your search criteria</p>
        </center>
      )}
    </>
  );
};

export default DataTableRes;
