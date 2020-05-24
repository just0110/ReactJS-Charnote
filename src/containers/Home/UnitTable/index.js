import React, { useState, Fragment, useEffect, useContext } from "react";
import { injectIntl } from "react-intl";
import ReactPaginate from "react-paginate";

import "./styles.css";
import { Table, PaginationRow, Cell } from "./styles";
import { Input, Head } from "../../../components";
import { deleteUnit, getUnits } from "../../../api/units";
import { UnitsContext } from "../../../contexts/units";
import { LoadingContext } from "../../../contexts/loading";

// todo design
const UnitTable = ({ intl, setSidebar }) => {
  const [unitsState, setUnitsState] = useContext(UnitsContext);
  const [loading, setLoading] = useContext(LoadingContext);

  // for search and pagination on frontend
  const [units, setUnits] = useState([]);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [paginatedData, setPaginatedData] = useState([]);

  // get Units
  // todo move to reusable
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await getUnits();

      setUnitsState(state => ({
        ...state,
        units: result
      }));

      setUnits(result);
      setLoading(false);
    };

    fetchData();
  }, [setLoading, setUnitsState]);

  // search handler
  useEffect(() => {
    if (!unitsState.units) {
      return;
    }
    const result = unitsState.units.filter(unit =>
      unit.firstName.toLowerCase().includes(query.toLowerCase())
    );

    setPage(0);
    setUnits(result);
  }, [query, unitsState, setPage]);

  // pagination handler
  useEffect(() => {
    const from = page * 5;
    const result = units.slice(from, from + 5);
    setPaginatedData(result);
  }, [page, units]);

  // chose current unit handler
  const setUnit = unit => {
    setUnitsState(state => ({
      ...state,
      currentUnit: unit
    }));
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

        setUnitsState(state => ({
          ...state,
          units: result
        }));
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
            <tr>
              <Cell header>{intl.formatMessage({ id: "HOME.INDEX" })}</Cell>
              <Cell header>
                {intl.formatMessage({ id: "HOME.FIRST_NAME" })}
              </Cell>
              <Cell header>{intl.formatMessage({ id: "HOME.LAST_NAME" })}</Cell>
              <Cell header>{intl.formatMessage({ id: "HOME.ROLE" })}</Cell>
              <Cell header>{intl.formatMessage({ id: "HOME.VOLUNTEER" })}</Cell>
              <Cell header />
            </tr>
            {paginatedData.map(unit => {
              return (
                <tr key={unit.timestamp}>
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
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      <PaginationRow>
        <ReactPaginate
          forcePage={page}
          previousLabel={intl.formatMessage({ id: "COMMON.PREV" })}
          nextLabel={intl.formatMessage({ id: "COMMON.NEXT" })}
          breakLabel={"..."}
          pageCount={Math.ceil(units.length / 5)}
          activeClassName={"activePage"}
          pageLinkClassName={"pages"}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={page => setPage(page.selected)}
          previousClassName={"arrows"}
          nextClassName={"arrows"}
        />
      </PaginationRow>
    </Fragment>
  );
};

export default injectIntl(UnitTable);
