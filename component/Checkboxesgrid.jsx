import * as React from "react";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from '@mui/icons-material/Close';
const Checkboxesgrid = () => {
  const [value, setvalue] = React.useState([1]);
  const [value2, setvalue2] = React.useState([1]);
  function dataupdate(e, index) {
    let inputdata = [...value];
    inputdata[index] = e.target.value;
    setvalue(inputdata);
  }
  function dataupdate2(e, index) {
    let inputdata = [...value2];
    inputdata[index] = e.target.value;
    setvalue2(inputdata);
  }
  
  function deletedata(index){
    const input = [...value];
    input.splice(index,1);
    setvalue(input);
  }
  function deletedata2(index){
    const input = [...value2];
    input.splice(index,1);
    setvalue2(input);
  }
  return (
    <div className="grid" style={{padding:"2rem"}}>
      <div>
        <div>Rows</div>
        {value.map((data, index) => {
          return (
            <div>
              {index + 1}&nbsp;&nbsp;
              <input
                type="text"
                name="rr"
                id="rr"
                value={data}
                autocomplete="off"
                className="inputStyle"
                style={{fontSize:"1rem"}}
                onChange={(e) => {
                  dataupdate(e, index);
                }}
              />
                <span className="Closeicon" onClick={()=>{
              deletedata(index);
            }}>   
            <CloseIcon style={{position:"absolute",right:"0"}}/>
            </span>
            <span className="inputline" style={{top:"-.6rem",marginLeft:"1.6rem"}}>

            </span>

            </div>
          );
        })}
        <div>
          {value.length + 1}&nbsp;&nbsp;
          <span
            onClick={() => {
              setvalue([...value, value.length + 1]);
            }}
          >
            add option
          </span>
        </div>
      </div>
      <div>
        <div>Columns</div>
        {value2.map((data, index) => {
          return (
            <div>
              <CropSquareIcon />
              <input
                type="text"
                name="rr"
                id="rr"
                autocomplete="off"
                value={data}
                className="inputalign inputStyle"
                style={{fontSize:"1rem"}}
                onChange={(e) => {
                  dataupdate2(e, index);
                }}
              />
              <span className="Closeicon" onClick={()=>{
              deletedata2(index);
            }}>   
            <CloseIcon style={{position:"absolute",right:"0"}}/>
            </span>
            <span className="inputline" style={{top:"-.6rem",marginLeft:"1.6rem"}}></span>
            </div>
          );
        })}
        <div>
          <CropSquareIcon />
          <span
            onClick={() => {
              setvalue2([...value2, value2.length + 1]);
            }}
          >
            <span className="inputalign">add option</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkboxesgrid;
