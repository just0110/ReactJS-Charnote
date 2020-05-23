import React, { useState } from "react";
import { injectIntl } from "react-intl";

import { addUnit } from "../../api/units";
import { Form, Check } from "./styles";
import { Button, CheckBox, Selector, Input } from "../../components";

import { roles } from "./mocks";

const UnitForm = ({ intl }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [role, setRole] = useState(roles[0]);
  const [volunteer, setVolunteer] = useState(false);

  const createUnit = () => {
    const unit = {
      firstName,
      lastName,
      volunteer,
      role: role.label
    };

    addUnit(unit);
  };

  return (
    <Form>
      <Input
        required
        label={intl.formatMessage({ id: "HOME.LAST_NAME" })}
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <Input
        label={intl.formatMessage({ id: "HOME.FIRST_NAME" })}
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />

      <Selector
        label={intl.formatMessage({ id: "HOME.ROLE" })}
        value={role}
        options={roles}
        onChange={newRole => setRole(newRole)}
      />

      <Check>
        <CheckBox
          label={intl.formatMessage({ id: "HOME.VOLUNTEER" })}
          checked={volunteer}
          onChange={() => setVolunteer(!volunteer)}
        />
      </Check>

      <Button
        width={10}
        onClick={createUnit}
        title={intl.formatMessage({ id: "HOME.ADD" })}
      />
    </Form>
  );
};

export default injectIntl(UnitForm);
