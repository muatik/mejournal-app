import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const createInstance = (
  text,
  date,
  weeklyHighlight = false,
  monthlyHighlight = false
) => {
  return {
    id: uuidv4(),
    text: text,
    date: moment(date),
    weeklyHighlight: weeklyHighlight,
    monthyHighlight: monthlyHighlight,
  };
};

export { createInstance };
