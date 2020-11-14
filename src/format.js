import numeral from "numeral";
import moment from "moment";

export const formatNumber = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const formatDate = (time) => moment(time).format("YYYY-MM-DD HH:mm:ss");
