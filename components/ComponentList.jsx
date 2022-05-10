import React from "react";
import { renderComponent } from "./render/renderComponent";

function ComponentList({ components }) {
  return (
    <>
      {components.map((component, key) => renderComponent(component, key))}{" "}
      {/* {renderComponent({component: "Heading", props: {text: "aaa"}})} */}{" "}
    </>
  );
}

export default ComponentList;
