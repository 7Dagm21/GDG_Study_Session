import React from "react";

const GroupMembers = ({ members }) => {
  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

// Example usage:
const membersList = ["Alice", "Bob", "Charlie", "David"];

const App = () => {
  return (
    <div>
      <GroupMembers members={membersList} />
    </div>
  );
};

export default App;
