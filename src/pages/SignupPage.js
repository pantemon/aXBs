import { useState } from "react";
import Button from "../components/Button";

import { appendSpreadsheet } from "../utils";

function SignupPage({ testData }) {
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function onNameInputChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function onPhoneInputChange(event) {
    console.log(event.target.value);
    setPhone(event.target.value);
  }

  function onEmailInputChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(testData, name, phone, email);
  }

  console.log(testData);

  return (
    <div className="max-w-md lg:w-112 gap-4 flex flex-col">
      <h1 className="text-3xl font-sans font-bold text-white">
        Поздравляем! Вы успешно прошли тест! 
      </h1>
      <p className="text-white">
        Оставьте Ваши контактные данные, чтобы мы могли с Вами связаться.
      </p>

      <form id="signup" className="flex flex-col gap-4" onSubmit={onFormSubmit}>
        <label className="flex gap-2 flex-col font-medium w-full">
          <span className="text-white">Как мы можем к Вам обращаться?</span>
          <input type="text" placeholder="Полное имя" className="px-4 py-3 rounded" required={true} onChange={onNameInputChange}></input>
        </label>

        <label className="flex gap-2 flex-col font-medium w-full">
          <span className="text-white">По какому номеру телефона мы можем Вам позвонить?</span>
          <input type="tel" pattern="^(?:\+38)?(0\d{9})$" placeholder="Номер телефона (+380880055353)" className="px-4 py-3 rounded" required={true} onChange={onPhoneInputChange}></input>
        </label>

        <label className="flex gap-2 flex-col font-medium w-full">
          <span className="text-white">На какую почту мы можем отправлять Вам важные письма?</span>
          <input type="email" placeholder="Електронная почта" required={true} className="px-4 py-3 rounded" onChange={onEmailInputChange}></input>
        </label>

        <Button type="submit" form="signup" className="mt-4 w-full justify-center">Зарегистрироваться</Button>
      </form>
    </div>
  );
}

export default SignupPage;
