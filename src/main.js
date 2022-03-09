import { render } from "react-dom";
import App from "./App";

// import CharacterList from "./CharacterList";
// import Homepage from "./homepage";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// <Routes>
// <Route path='/' element={<Homepage/>}>
// <Route path='characterlist' element ={<CharacterList/>} />
// </Route>
// </Routes>