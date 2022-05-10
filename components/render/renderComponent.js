import { Title } from "./styles/Title";
import { Text } from "./styles/Text";
import Table from "./Table";
import UList from "./UList";
import OList from "./OList";
import React from "react";

const keyToComponentMap = {
  Title: Title,
  Text: Text,
  Table: Table,
  UList: UList,
  OList: OList,
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
