import { DateTime } from "luxon";

export const tweetMock = [
  {
    id: Math.floor(Math.random() * 1000),
    user: {
      avatarUrl:
        "https://i.pravatar.cc/100",
      surname: "Bugatti",
      name: "Emma",
      username: "emmabugatti",
    },
    content: {
      imgUrl:
        "http://wips.plug.it/cips/paginegialle.it/magazine/cms/2022/01/cane-di-razza.jpg?w=768&h=432&a=c",
      text: "Learning how to extract components into reusable pieces while gazing at the sunset. What could go wrong?",
      dateTime: DateTime.fromISO("2022-02-22T21:38:00")
        .setLocale("en")
        .toFormat("hh:mm a · yyyy MMM, dd"),
      likes: 500,
    },
  },
  {
    id: Math.floor(Math.random() * 1000),
    user: {
      avatarUrl:
        "https://i.pravatar.cc/100",
      surname: "Ferrari",
      name: "Enzo",
      username: "enzoferrari",
    },
    content: {
      imgUrl:
        "https://static.nationalgeographic.it/files/styles/image_3200/public/gettyimages-660629130_1.jpg?w=1600",
      text: "Learning how to extract components into reusable pieces while gazing at the sunset. What could go wrong?",
      dateTime: DateTime.fromISO("2022-02-22T21:38:00")
        .setLocale("en")
        .toFormat("hh:mm a · yyyy MMM, dd"),
      likes: 20,
    },
  },
  {
    id: Math.floor(Math.random() * 1000),
    user: {
      avatarUrl:
        "https://i.pravatar.cc/100",
      surname: "Rossi",
      name: "Mario",
      username: "rossimario69",
    },
    content: {
      imgUrl:
        "https://www.mindmilano.it/wp-content/uploads/2022/04/Gateway-Square-Home.jpg",
      text: "Learning how to extract components into reusable pieces while gazing at the sunset. What could go wrong?",
      dateTime: DateTime.fromISO("2022-02-22T21:38:00")
        .setLocale("en")
        .toFormat("hh:mm a · yyyy MMM, dd"),
      likes: 249,
    },
  },
];
