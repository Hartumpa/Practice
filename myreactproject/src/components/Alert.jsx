import React from "react";

export default function Alert(props) {
  return (
    <div style={{height:"50px"}}>
    {props.alert && <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert" style={{color:props.mode==="dark"?"white":"green",backgroundColor:props.mode==="dark"?"white":"yellow"}}
      >
        <strong>{props.alert.type}</strong>: {props.alert.msz}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>}
      </div>
    
  );
}
