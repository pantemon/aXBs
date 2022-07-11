import HeroPage from "./pages/HeroPage";
import TestPage, { questions } from "./pages/TestPage";
import SignupPage from "./pages/SignupPage";

import { useEffect, useState } from "react";
import YoutubeEmbed from "./components/YoutubeEmbed";

function App() {
  const [testData, setTestData] = useState(new Array(questions.length));

  const [showTest, setShowTest] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  console.log(showTest, showSignup);

  return (
    <div className="container mx-auto flex items-center flex-col-reverse lg:flex-row h-min-screen py-24 lg:py-0 lg:h-screen gap-8 max-w-md lg:max-w-6xl px-4 md:px-0 lg:gap-12 lg:px-12">
      <YoutubeEmbed embedId="A2FCT-LU6jw" />

      {showSignup ? (
        <SignupPage testData={testData} />
      ) : showTest ? (
        <TestPage testData={testData} setTestData={setTestData} setShowSignup={setShowSignup} />
      ) : (
        <HeroPage setShowTest={setShowTest} />
      )}
    </div>
  );
}

export default App;
