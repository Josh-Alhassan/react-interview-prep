import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Add sort State: 'name' or 'id'
  const [sortMethod, setSortMethod] = useState("name");

  // Add pagination (display 5 users per page)
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // add loading state conditional rendering:
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  // Implement search filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to sort users based on the selected method
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortMethod === "name") {
      return a.name.localeCompare(b.name); // This sorts from A - Z
    } else {
      return a.id - b.id; // this sorts by ID - ascending order
    }
  });

  // pagination logic
  const usersPerPage = 5;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentusers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />

      <div style={{ margin: "10px 0" }}>
        <span>Sort by: </span>
        <button
          onClick={() => setSortMethod("name")}
          style={{
            backgroundColor: sortMethod === "name" ? "#4CAF50" : "#ddd",
            marginRight: "8px",
          }}
        >
          Name (A-Z)
        </button>

        <button
          onClick={() => setSortMethod("id")}
          style={{
            backgroundColor: sortMethod === "id" ? "#4CAF50" : "#ddd",
          }}
        >
          ID
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedUsers.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "8px",
              borderBottom: "1px solid #ddd",
              margin: "4px 0",
            }}
          >
            {user.name} (ID: {user.id})
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ padding: "5px 10px" }}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            style={{
              padding: "5px 10px",
              backgroundColor: currentPage === i + 1 ? "#4CAF50" : "#ddd",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ padding: "5px 10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;
