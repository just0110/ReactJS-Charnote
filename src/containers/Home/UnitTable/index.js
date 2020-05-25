import React, { useState, Fragment, useEffect, useContext } from "react";
import { injectIntl } from "react-intl";
import ReactPaginate from "react-paginate";

import "./styles.css";
import { Input, Head } from "../../../components";
import { UnitsContext } from "../../../contexts/units";
import { deleteUnit, getUnits } from "../../../api/units";
import { LoadingContext } from "../../../contexts/loading";
import { Table, PaginationRow, Row, Cell } from "./styles";

// todo separate logic and view
const UnitTable = ({ intl, setSidebar }) => {
  const [unitsState, dispatchUnits] = useContext(UnitsContext);
  const [, setLoading] = useContext(LoadingContext);

  // for search and pagination on frontend
  const [units, setUnits] = useState([]);

  const [query, setQuery] = useState("");
  const [paginatedData, setPaginatedData] = useState([]);

  // get Units
  // todo create actions handler
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await getUnits();

      dispatchUnits({ type: "SET_UNITS", payload: result });
      setUnits(result);
      setLoading(false);
    };

    fetchData();
  }, [dispatchUnits, setLoading]);

  // search handler
  useEffect(() => {
    if (!unitsState.units) {
      return;
    }
    const result = unitsState.units.filter(unit =>
      unit.firstName.toLowerCase().includes(query.toLowerCase())
    );

    dispatchUnits({ type: "SET_PAGE", payload: 0 });
    setUnits(result);
  }, [query, unitsState.units, dispatchUnits]);

  // pagination handler
  useEffect(() => {
    const from = unitsState.page * 5;
    const result = units.slice(from, from + 5);
    setPaginatedData(result);
  }, [units, unitsState.page, dispatchUnits]);

  // chose current unit handler
  const setUnit = unit => {
    dispatchUnits({ type: "SET_UNIT", payload: unit });
    setSidebar(true);
  };

  // delete user handler
  // todo modal confirmation window
  const deleteSelectedUnit = async unit => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(intl.formatMessage({ id: "HOME.DELETE_UNIT_DESC" }))) {
      const res = await deleteUnit(unit.id);
      if (res.includes("ok")) {
        const result = await getUnits();
        dispatchUnits({ type: "SET_UNITS", payload: result });
      }
    }
  };

  return (
    <Fragment>
      <Input
        required
        width={20}
        value={query}
        onChange={e => setQuery(e.target.value)}
        label={intl.formatMessage({ id: "HOME.SEARCH_NAME" })}
      />
      {unitsState && (
        <Table>
          <tbody>
            <Row>
              <Cell header>{intl.formatMessage({ id: "HOME.INDEX" })}</Cell>
              <Cell header>
                {intl.formatMessage({ id: "HOME.FIRST_NAME" })}
              </Cell>
              <Cell header>{intl.formatMessage({ id: "HOME.LAST_NAME" })}</Cell>
              <Cell header>{intl.formatMessage({ id: "HOME.ROLE" })}</Cell>
              <Cell header>{intl.formatMessage({ id: "HOME.VOLUNTEER" })}</Cell>
              <Cell header />
            </Row>
            {paginatedData.map(unit => {
              return (
                <Row key={unit.timestamp}>
                  <Cell>{unit.timestamp}</Cell>
                  <Cell>
                    <Head
                      onClick={() => setUnit(unit)}
                      style={{ cursor: "pointer" }}
                      color="main"
                    >
                      {unit.firstName}
                    </Head>
                  </Cell>
                  <Cell>{unit.lastName}</Cell>
                  <Cell>{unit.role}</Cell>
                  <Cell>{unit.volunteer.toString()}</Cell>
                  <Cell>
                    <Head
                      onClick={() => deleteSelectedUnit(unit)}
                      style={{ cursor: "pointer" }}
                      color="main"
                    >
                      {intl.formatMessage({ id: "HOME.DELETE" })}
                    </Head>
                  </Cell>
                </Row>
              );
            })}
          </tbody>
        </Table>
      )}
      <PaginationRow>
        <ReactPaginate
          forcePage={unitsState.page}
          previousLabel={intl.formatMessage({ id: "COMMON.PREV" })}
          nextLabel={intl.formatMessage({ id: "COMMON.NEXT" })}
          breakLabel={"..."}
          pageCount={Math.ceil(units.length / 5)}
          activeClassName={"activePage"}
          pageLinkClassName={"pages"}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={page =>
            dispatchUnits({ type: "SET_PAGE", payload: page.selected })
          }
          previousClassName={"arrows"}
          nextClassName={"arrows"}
        />
      </PaginationRow>
    </Fragment>
  );
};

export default injectIntl(UnitTable);
