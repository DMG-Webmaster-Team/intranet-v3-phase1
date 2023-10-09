import { IntranetContext } from "../../context";
import { useContext } from "react";
import DataTable from "react-data-table-component";

function NotFound() {
  return (
    <center>
      <p className="text-white m-0 pb-4">
        No such user with your search criteria
      </p>
    </center>
  );
}

const DataTableRes = () => {
  const {
    filteredResults,
    searchQuery,
    subHeaderComponentMemo,
    resetPaginationToggle,
    isUserSearch,
  } = useContext(IntranetContext);
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

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
      style: { fontSize: "1.37rem" },
    },
  };

  return (
    <div>
      {!isUserSearch && filteredResults.length > 0 && searchQuery && (
        <DataTable
          columns={column}
          data={filteredResults}
          responsive
          pointerOnHover
          highlightOnHover
          filteredResults
          pagination
          customStyles={customStyles}
          subHeaderComponent={subHeaderComponentMemo}
          paginationResetDefaultPage={resetPaginationToggle}
          expandableRowsComponent={ExpandedComponent}
        />
      )}
      {!isUserSearch &&
        filteredResults.length === 0 &&
        searchQuery.length > 3 && <NotFound></NotFound>}
      {isUserSearch && (
        <center>
          <p className="text-white m-0 pb-4 ">Loading...</p>
        </center>
      )}
    </div>
  );
};

export default DataTableRes;
