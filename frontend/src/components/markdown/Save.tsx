import { useState } from "react";
const Save = () => {
  const [name, setName] = useState<string>("");
  return (
    <div>
      <div>
        <h3>Name</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Save</button>
      </div>
    </div>
  );
};

export default Save;
