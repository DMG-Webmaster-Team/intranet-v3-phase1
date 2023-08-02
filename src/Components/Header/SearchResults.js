import { useContext } from "react";
import { Table } from "react-bootstrap";
import { IntranetContext } from "../../context";

const SearchResults = () => {
  const { results } = useContext(IntranetContext);

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Work Number</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Direct Manager</th>
          <th>Direct Manager</th>
        </tr>
      </thead>
      <tbody>
        {results?.map((result) => (
          <tr key={result.name}>
            <td>{result.work_umber}</td>
            <td>{result.name}</td>
            <td>{result.email}</td>
            <td>{result.department}</td>
            <td>{result.Direct_manager}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SearchResults;
