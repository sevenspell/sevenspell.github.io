import React from "react";

const ProjectContext = React.createContext({
  id: "",
  key: "",
  title: "",
  caption: "",
  image: "",
  url: ""

});

export default ProjectContext;