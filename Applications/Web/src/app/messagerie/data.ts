import { User, STATUSES, Message } from "./models";

export const RANDOM_MSGS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

];

export const TYPE_OF_MSG: any = ["replies", "sent"];

export const getRandom = items =>
  items[Math.floor(Math.random() * items.length)];

export function generateMessage(length) {
  return Array.from({ length }).map(
    () => new Message(getRandom(TYPE_OF_MSG), getRandom(RANDOM_MSGS))
  );
}

export const MESSAGES = [];

export const USERS = [
  new User(
    "Client 1",
    STATUSES.BUSY,
    "http://emilcarlsson.se/assets/louislitt.png",
    generateMessage(10)
  ),
  new User(
    "Client 2",
    STATUSES.ONLINE,
    "http://emilcarlsson.se/assets/harveyspecter.png",
    generateMessage(7)
  ),
  new User(
    "Client 3",
    STATUSES.OFFLINE,
    "http://emilcarlsson.se/assets/rachelzane.png",
    generateMessage(6)
  ),
  new User(
    "Client 4",
    STATUSES.BUSY,
    "http://emilcarlsson.se/assets/donnapaulsen.png",
    generateMessage(11)
  ),
  new User(
    "Client 5",
    STATUSES.OFFLINE,
    "http://emilcarlsson.se/assets/jessicapearson.png"
  ),
  new User(
    "Client 6",
    STATUSES.BUSY,
    "http://emilcarlsson.se/assets/haroldgunderson.png",
    generateMessage(4)
  )
];
