import logo from "./images/bakery_img.jpeg";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div>
      <NavBar />
      <Title />
      <img src={logo} alt="bakery image"/>
      <RecipeList />
    </div>
    
  );
  }

export default App;
