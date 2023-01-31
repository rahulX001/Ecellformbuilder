import * as React from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CloseIcon from '@mui/icons-material/Close';
const multiple = () => {
  const [value, setvalue] = React.useState([1]);

  function dataupdate(e, index) {
    let inputdata = [...value];
    inputdata[index] = e.target.value;
    setvalue(inputdata);
  }
  function deletedata(index){
    const input = [...value];
    input.splice(index,1);
    setvalue(input);
  }
  return (
    <div style={{padding:"2rem"}}>
      {value.map((data, index) => {
        return (
          <div key={index}>
            <PanoramaFishEyeIcon />
            <input
              type="text"
              name="rr"
              id="rr"
              autocomplete="off"
              style={{fontSize:"1rem"}}
              value={data}
              className="inputalign inputStyle"
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
      <div>
        <PanoramaFishEyeIcon />
        <span
          onClick={() => {
            setvalue([...value, value.length + 1]);
          }}
        >
          <span className="inputalign">add option</span>
        </span>
      </div>
    </div>
  );
};

export default multiple;
