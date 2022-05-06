import './App.css';

import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs 
        allTabs = {[
          { tabName: "Tab 1", content: "Tab 1 is showing content here",
          callBack(){
            alert(`${this.tabName}, was clicked`)
          }},
          { tabName: "Tab 2", content: "Tab 2 is showing content here", 
          callBack(){
            alert(`${this.tabName}, was clicked`)
          }},
          { tabName: "Tab 3", content: "Tab 3 is showing content here", 
          callBack(){
            alert(`${this.tabName}, was clicked`)
          }}
        ]} 
      />
    </div>
  );
}

export default App;