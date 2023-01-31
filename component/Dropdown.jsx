import * as React from "react";
import CloseIcon from '@mui/icons-material/Close';
const Dropdown = () => {
  const [value, setvalue] = React.useState(["option 1"]);
  const dataupdate = (e, index) => {
    const input = [...value];
    input[index] = e.target.value;
    setvalue(input);
  };
  function deletedata(index){
    const input = [...value];
    input.splice(index,1);
    setvalue(input);
  }
  return (
    <div style={{padding:"2rem"}}>
      <div>
        {value.map((data, index) => {
          return (
            <div>
              {index + 1}. &nbsp;
              <input
                type="text"
                name={index}
                id={index}
                value={data}
                className="inputStyle"
                autocomplete="off"
                style={{fontSize:"1rem"}}
                onChange={(e) => {
                  dataupdate(e, index);
                }}
              />
               <span className="Closeicon" onClick={()=>{
              deletedata(index);
            }}>   
            <CloseIcon/>
            </span>
            <span className="inputline" style={{top:"-.6rem",marginLeft:"1.6rem"}}></span>
            </div>
          );
        })}
      </div>
      <div
        onClick={() => {
          setvalue([...value, `option ${value.length + 1}`]);
        }}
      >
        Add option
      </div>
    </div>
  );
};

export default Dropdown;
