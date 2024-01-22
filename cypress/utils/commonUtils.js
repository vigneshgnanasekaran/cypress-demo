// utils/commonUtils.js
const paths = {
  GET_STARTED: {
    path: "/app/join",
    href: "https://qa.teamspecialx.com/app/join?referring_page=https://qa.teamspecialx.com/resources",
  },
  LOGIN: {
    path: "/app/",
    href: "https://qa.teamspecialx.com/app/",
  },
  
  ADVANCED_SEARCH_URL: "https://qa.teamspecialx.com/resources/search",
  RESOURCE_URL: "https://qa.teamspecialx.com/resources",
  
};

const errorMessages = {
  EMAIL_ALREADY_EXISTS: "Email already exists",
  INVALID_EMAIL: "Invalid email",
  FIRST_NAME_REQUIRED: "First name is required",
  LAST_NAME_REQUIRED: "Last name is required",
  EMAIL_REQUIRED: "Email is required",
};

export { paths, errorMessages };
