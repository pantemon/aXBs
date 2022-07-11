import { ArrowRight } from 'tabler-icons-react';

import Button from "../components/Button";

function HeroPage({ setShowTest }) {

  return (
    <div className="max-w-md lg:w-112 gap-4 flex flex-col">
      <h1 className="text-3xl font-sans font-bold text-white">
        Хотите воплотить все мечты в реальность?
      </h1>
      <p className="text-white">
        Пройдите наш тест и получите доступ к нашей инвестиционной платформе, чтобы воплотить все Ваши мечты в реальность.
      </p>
      <Button onClick={() => setShowTest(true)}>
        Пройти тест
        <ArrowRight
          size={20}
          strokeWidth={2}
          color={"black"}
        />
      </Button>
    </div>
  );
}

export default HeroPage;
