import React from "react";
import { TableStyled } from "./styles/TableStyled";
import Equation from "./Equation";
function Table({ data }) {
  let parse = (data) => {
    let new_data = [];
    let sums = [[NaN]];
    let nums = [[NaN]];

    for (let col of data) {
      if (col[0][0] === "'" || col[0][0] == "*") {
        let new_col = [col[0].substring(1)];

        let newFunction = ["data", "sums", "nums", "return " + col[1]];
        let args = [new_data, sums, nums];

        switch (col[0][0]) {
          case "'": {
            for (let i = 1; i < data[0].length; i++)
              new_col.push(new Function("i", ...newFunction)(i, ...args));
            break;
          }
          case "*": {
            new_col.push(new Function(...newFunction)(...args));
            break;
          }
        }

        col = new_col;
      }

      col = col.map((item) => String(item));

      let numArray = [];
      for (let item of col) {
        let surpressedItem = item.substring(0, col[1].length);
        let surpressedItemPared = isNaN(parseFloat(surpressedItem))
          ? 0
          : parseFloat(surpressedItem);
        numArray.push(surpressedItemPared);
      }

      sums.push(numArray.reduce((sum, e) => sum + e, 0));
      new_data.push(col);
      nums.push(numArray);
    }

    let divided_data = [[]];
    for (let col of new_data) {
      divided_data[0].push(col[0]);
      divided_data.push([]);
      for (let i = 1; i < col.length; i++) {
        divided_data[divided_data.length - 1].push(col[i]);
      }
    }

    return divided_data;
  };

  let parsed = parse(data);

  return (
    <TableStyled>
      <tbody>
        <tr>
          {" "}
          {parsed.shift().map((col, i) => (
            <td key={i}> {col} </td>
          ))}{" "}
        </tr>{" "}
        <tr>
          {" "}
          {parsed.map((col, i) => (
            <td key={i}>
              {" "}
              {col.map((node, j) => (
                <span key={j}>
                  <Equation>
                    {node}
                  </Equation>
                </span>
              ))}{" "}
            </td>
          ))}{" "}
        </tr>{" "}
      </tbody>{" "}
    </TableStyled>
  );
}

export default Table;