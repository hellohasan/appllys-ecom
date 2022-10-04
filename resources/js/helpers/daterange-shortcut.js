import moment from "moment-timezone";
moment.tz.setDefault("Asia/Dhaka");
const dateRangeShortcut = [
  {
    text: "Today",
    onClick: () => {
      return [moment().toDate(), moment().toDate()];
    },
  },
  {
    text: "Yesterday",
    onClick: () => {
      return [
        moment().subtract(1, "day").toDate(),
        moment().subtract(1, "day").toDate(),
      ];
    },
  },
  {
    text: "Last 7 Days",
    onClick: () => {
      return [moment().subtract(6, "days").toDate(), moment().toDate()];
    },
  },
  {
    text: "Last 30 Day",
    onClick: () => {
      return [moment().subtract(29, "days").toDate(), moment().toDate()];
    },
  },
  {
    text: "This Month",
    onClick: () => {
      return [
        moment().startOf("month").toDate(),
        moment().endOf("month").toDate(),
      ];
    },
  },
  {
    text: "Last Month",
    onClick: () => {
      return [
        moment().subtract(1, "month").startOf("month").toDate(),
        moment().subtract(1, "month").endOf("month").toDate(),
      ];
    },
  },
  {
    text: "Last 3 Month",
    onClick: () => {
      return [
        moment().subtract(2, "month").startOf("month").toDate(),
        moment().toDate(),
      ];
    },
  },
  {
    text: "This Year",
    onClick: () => {
      return [moment().startOf("year").toDate(), moment().toDate()];
    },
  },
  {
    text: "Last Year",
    onClick: () => {
      return [
        moment().subtract(1, "year").startOf("year").toDate(),
        moment().subtract(1, "year").endOf("year").toDate(),
      ];
    },
  },
  {
    text: "Last Two Year",
    onClick: () => {
      return [moment().subtract(2, "year").toDate(), moment().toDate()];
    },
  },
];

export default dateRangeShortcut;
