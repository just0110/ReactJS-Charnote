import React, { useContext, useEffect, useState } from "react";
import { injectIntl } from "react-intl";

import { addUnit, getUnits, updateUnit } from "../../../api/units";
import { Form, Check, Buttons } from "./styles";
import {
  Button,
  CheckBox,
  Selector,
  Input,
  LinkButton
} from "../../../components";

import { roles } from "../mocks";
import { UnitsContext } from "../../../contexts/units";
import { LoadingContext } from "../../../contexts/loading";

const UnitForm = ({ intl, setSidebar }) => {
  const [unitsState, setUnitsState] = useContext(UnitsContext);
  const [loading, setLoading] = useContext(LoadingContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [error, setError] = useState(true);

  const [role, setRole] = useState(roles[0]);
  const [volunteer, setVolunteer] = useState(false);

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setVolunteer(false);
    setRole(roles[0]);

    setSidebar(false);
  };

  useEffect(() => {
    if (!unitsState.currentUnit) {
      return;
    }

    const currentRole = roles.find(
      r => unitsState.currentUnit.role === r.label
    );
    setFirstName(unitsState.currentUnit.firstName);
    setLastName(unitsState.currentUnit.lastName);
    setVolunteer(unitsState.currentUnit.volunteer);

    setRole(currentRole);
  }, [unitsState]);

  useEffect(() => {
    if (!firstName.length || !lastName.length) {
      setError(true);
    } else {
      setError(false);
    }
  }, [firstName, lastName]);

  const saveUnit = async () => {
    setLoading(true);
    const unit = {
      timestamp: unitsState.currentUnit
        ? unitsState.currentUnit.timestamp
        : new Date().getTime(),
      firstName,
      lastName,
      volunteer,
      role: role.label
    };

    // lol bad code :D
    if (unitsState.currentUnit) {
      const res = await updateUnit(unitsState.currentUnit.id, unit);

      if (res.includes("ok")) {
        clearForm();
        const result = await getUnits();

        setUnitsState(state => ({
          ...state,
          units: result,
          currentUnit: null
        }));
      }
    } else {
      const res = await addUnit(unit);
      if (res.includes("ok")) {
        clearForm();
        const result = await getUnits();

        setUnitsState(state => ({
          ...state,
          units: result,
          currentUnit: null
        }));
      }
    }

    setLoading(false);
    setSidebar(false);
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
        required
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

      <Buttons>
        <Button
          width={10}
          disabled={error}
          onClick={saveUnit}
          title={intl.formatMessage({ id: "COMMON.SAVE" })}
        />
        <LinkButton
          onClick={clearForm}
          title={intl.formatMessage({ id: "COMMON.CLOSE" })}
        />
      </Buttons>
    </Form>
  );
};

export default injectIntl(UnitForm);
