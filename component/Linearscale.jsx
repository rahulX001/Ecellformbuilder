import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";

const Linearscale = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ margin: ".3rem",padding:"2rem" }}>
      <FormControl>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
        </NativeSelect>
      </FormControl>
      <span style={{ position: "relative", top: ".4rem" }}>
        &nbsp;&nbsp; &nbsp;&nbsp; to &nbsp;&nbsp;&nbsp;&nbsp;
      </span>

      <FormControl>
        <NativeSelect
          defaultValue={2}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Linearscale;
