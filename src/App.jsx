import { useState } from "react";
import SubmitSuccess from "./components/modals/SubmitSuccess";
import MovieSurveyForm from "./components/forms/MovieServayForm";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const _handleSubmit = (data) => {
    console.log("data", data);
    setSubmittedData(data);
    setModalOpen(true);
  };

  return (
    <div className="container  ">
      <MovieSurveyForm onSubmit={_handleSubmit} />
      <SubmitSuccess
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        data={submittedData}
      />
    </div>
  );
}

export default App;
