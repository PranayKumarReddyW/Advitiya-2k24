import "./App.css";
import { Button } from "./components/ui/button";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <div className="bg-black h-screen flex justify-center items-center text-white flex-col text-3xl gap-5">
      <h1>Advitiya 2k24 🔥🔥🔥🔥🔥🔥🔥</h1>
      <Button variant="destructive"> Get started !</Button>
      <HeroSection />
    </div>
  );
}

export default App;
