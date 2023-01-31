import * as React from "react";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from '@mui/icons-material/Close';
const Checkboxes = () => {
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
              <CropSquareIcon />
              <input
                type="text"
                name={index}
                className="inputalign inputStyle"
                id={index}
                autocomplete="off"
                value={data}
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
            <span className="inputline"></span>
            </div>
          );
        })}
      </div>
      <div
        onClick={() => {
          setvalue([...value, `option ${value.length + 1}`]);
        }}
      >
        <CropSquareIcon /> <span className="inputalign">Add option </span>
      </div>
    </div>
  );
};

export default Checkboxes;
