import React, { useState } from "react";

const Tabs = (props) => {
  const [tabSelected, setTabSelected] = useState(1);


  const clickHandler = (e, i) => {
    setTabSelected(i);
    props.allTabs[i].callBack();
  }
  return (
    <div>
      <div className="Tabs">
        {
          props.allTabs.map((tab, i) => {
            return (
              <div key={i} 
                onClick={ (e) => clickHandler(e, i) }
                className={`Tab ${tabSelected === i && "active"}`}
                
              >
                {tab.tabName}
              </div>
            );
          })
        }
      </div>
      <div style={{ border: "1px solid black" }}>
        <p style={{ fontSize: 30 }}>{ props.allTabs[tabSelected]["content"] }</p>
      </div>
    </div>
  );
};

export default Tabs;
