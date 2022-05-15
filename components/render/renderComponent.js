import { Title, Title2 } from "./styles/Title";
import Text from "./Text";
import Table from "./Table";
import UList from "./UList";
import OList from "./OList";
import Chart from "./Chart";
import React from "react";

const keyToComponentMap = {
  Title: Title,
  Title2: Title2,
  Text: Text,
  Table: Table,
  UList: UList,
  OList: OList,
  Chart: Chart,
};

export const renderComponent = (config, key) => {
  if (typeof keyToComponentMap[config.type] !== "undefined") {
    return React.createElement(
      keyToComponentMap[config.type],
      typeof key !== "undefined"
        ? {
            ...config.props,
            key: key,
          }
        : config.props && config.props,
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map((c) => renderComponent(c)))
    );
  }
};
