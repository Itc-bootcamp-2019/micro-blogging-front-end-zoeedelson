import React from "react";

const MyContext = React.createContext({
  postData: [],
  adding: () => {}
});

export default MyContext;
