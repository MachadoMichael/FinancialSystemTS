import * as C from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handleChangeMonth = (direction: string) => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

    if (direction === "prev") {
      currentDate.setMonth(currentDate.getMonth() - 1);
    }
    if (direction === "next") {
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={() => handleChangeMonth("prev")}>
          ⬅️
        </C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={() => handleChangeMonth("next")}>
          ➡️
        </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
