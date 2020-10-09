import React from "react";
import SuperHeroData from "./components/SuperHeroData.json";
import SuperHeroCard from "./components/SuperHeroCard";
import './style.css';

class App extends React.Component {
  state = {
    theSeven: SuperHeroData,
  };
  render() {
    return (
      <div>
        <h1 className="header">The Seven</h1>
        {this.state.theSeven.map((Heroes) => {
          return (
            <SuperHeroCard
              key={Heroes.name}
              name={Heroes.name}
              show={Heroes.show}
              catchPhrase={Heroes.catchPhrase}
              imageName={Heroes.imageName}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
