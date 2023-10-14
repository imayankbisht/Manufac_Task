import React from "react";

const Table = ({ data, type, caption }) => {
  return (
    <table>
      <caption>{caption}</caption>
      <tr>
        <th scope="col">Measure</th>
        {data?.map((el) => (
          <th scope="col">{el?.class}</th>
        ))}
      </tr>
      <tr>
        <th scope="row">{type} Mean</th>
        {data?.map((el) => (
          <td>{Number(parseFloat(el?.Mean)).toFixed(3)}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">{type} Median</th>
        {data?.map((el) => (
          <td>{Number(parseFloat(el?.Median)).toFixed(3)}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">{type} Mode</th>
        {data?.map((el) => (
          <td>
            [
            {el?.Mode?.map((e, i) =>
              i === el?.Mode?.length - 1
                ? Number(parseFloat(e)).toFixed(3)
                : `${Number(parseFloat(e)).toFixed(3)}, `
            )}
            ]
          </td>
        ))}
      </tr>
    </table>
  );
};

export default Table;
