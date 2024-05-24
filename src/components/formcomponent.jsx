import { useState } from "react";
import Navbar from "./components/Navbar";
import AdmissionForm from "./components/AdmissionForm";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleApplyNowClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="App">
      <Navbar onApplyNowClick={handleApplyNowClick} />
      <AdmissionForm isVisible={isFormVisible} onClose={handleCloseForm} />
    </div>
  );
}

export default App;
