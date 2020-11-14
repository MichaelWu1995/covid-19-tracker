import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./Table.module.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div>
      <Typography variant="h6">Live Cases By Country</Typography>

      <div className={styles.tableContainer}>
        <table>
          <tbody>
            {countries.map(({ country, cases }, index) => (
              <tr key={index}>
                <td>
                  <Typography>{country}</Typography>
                </td>
                <td>
                  <Typography>
                    <strong>{numeral(cases).format("0,0")}</strong>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
