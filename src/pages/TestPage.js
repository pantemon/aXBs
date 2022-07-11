import { useState } from "react";


export const questions = [
  { id: 0, question: "Вы любите пиццу?", answers: ["Да", "Нет", "Не знаю", "Не уверен"] },
  { id: 1, question: "Вы любите машины?", answers: ["Да, очень", "Нет, не люблю", "Возможно"] },
  { id: 2, question: "Вы хотели стать космонавтом?", answers: ["Да, в детстве", "Нет, никогда не хотел", "Я космонавт хули"] },
  { id: 3, question: "Вы гетеросексуал?", answers: ["Да", "Нет"] },
  { id: 4, question: "Крипта скам?", answers: ["Да", "Да"] },
];

function TestPage({ testData, setTestData, setShowSignup }) {
  // let navigate = useNavigate(); // navigate("/");
  const [questionData, setQuestionData] = useState(questions[0]);

  // useEffect(() => {
  //   if (testData.length === questions.length) {
  //     navigate("/signup");
  //   }
  // });

  console.log(testData);

  function onUserAnswer(event) {
    const userAnswer = event.target.value;

    const newTestData = testData.slice();
    newTestData[questionData.id] = { 
      question_id: questionData.id, 
      question: questionData.question, 
      userAnswer: userAnswer 
    };

    event.target.checked = false;
    setTestData(newTestData);

    console.log(questionData.id, questions.length);

    if (questionData.id < questions.length - 1) {
      setQuestionData(questions[questionData.id + 1]);
    } else {
      setShowSignup(true);
    }    
  }

  return (
    <div className="max-w-md lg:w-112 gap-4 flex flex-col">
      <h1 className="text-3xl font-sans font-bold text-white">
        {questionData.id + 1}. {questionData.question}
      </h1>
      <p className="text-white">
        Выберите один из вариантов ответов ниже:
      </p>
      <div className="flex flex-col gap-3" onChange={onUserAnswer}>
        {questionData.answers.map((answer, index) => {
          return (
            <label 
              key={index} 
              // htmlFor={`radio-${index}`} 
              className="text-white flex gap-2 border px-4 py-3 rounded hover:bg-white hover:bg-opacity-30 cursor-pointer"
            >
              <input 
                // id={`radio-${index}`} 
                type="radio" 
                value={answer} 
                name="answer" 
              /> 
              {answer}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default TestPage;
