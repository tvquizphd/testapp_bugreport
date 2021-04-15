// src/App.js
import environment from "./relay";

const App = () => {
    return (
        <div>
          {JSON.stringify({environment})}
        </div>
    );
};

export default App;
