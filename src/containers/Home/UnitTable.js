import React, { useState, Fragment } from "react";
import { injectIntl } from "react-intl";
import ReactPaginate from "react-paginate";

import { Form } from "./styles";
import { Button, Input } from "../../components";
import { generateUnits } from "./mocks";

const data = generateUnits();

const UnitTable = ({ intl }) => {
  console.log(data);
  return (
    <Fragment>
      {data && (
        <table>
          <tr>
            <th>{intl.formatMessage({ id: "HOME.ID" })}</th>
            <th>{intl.formatMessage({ id: "HOME.FIRST_NAME" })}</th>
            <th>{intl.formatMessage({ id: "HOME.LAST_NAME" })}</th>
            <th>{intl.formatMessage({ id: "HOME.ROLE" })}</th>
            <th>{intl.formatMessage({ id: "HOME.VOLUNTEER" })}</th>
          </tr>
          {data.map(unit => (
            <tr key={unit.id}>
              <td>{unit.id}</td>
              <td>{unit.firstName}</td>
              <td>{unit.lastName}</td>
              <td>{unit.role}</td>
              <td>{unit.volunteer.toString()}</td>
            </tr>
          ))}
        </table>
      )}
    </Fragment>
  );
};

export default injectIntl(UnitTable);
