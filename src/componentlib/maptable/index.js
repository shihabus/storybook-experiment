import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { flexBoxUtil } from "../utlis";
import { colors } from "../configs";
import { TextStyle12, TextStyle32 } from "../index";
import moment from "moment";

const TableWrapper = styled.div`
  width: ${props => props.tableWidth};
  ${flexBoxUtil("row", "flex-start", "stretch")};
  border-radius: 4px;
`;

const Row = styled.div`
  ${flexBoxUtil("column", "center", "flex-start")};
  background: ${props => props.rowBg};
  padding: 0.5em;
  cursor: ${props => props.cursorType || "pointer"};
  &:hover {
    background: ${colors.blueberry_light};
  }
`;

export default function Index(props) {
  const {
    data,
    rowColor1,
    rowColor2,
    tableWidth,
    headingColor,
    labelManipulator,
    tableName,
    wrapperStyle
  } = props;
  return (
    <div
      style={{
        borderRadius: "4px",
        ...wrapperStyle
      }}
    >
      <h3 style={{ marginBottom: ".5em", color: headingColor }}>{tableName}</h3>
      <TableWrapper tableWidth={tableWidth}>
        <div style={{ height: "100%" }}>
          {Object.keys(data).map((row, i) => (
            <Row rowBg={i % 2 === 0 ? rowColor1 : rowColor2}>
              <h5 style={{ fontWeight: "100" }}>{labelManipulator(row)}</h5>
            </Row>
          ))}
        </div>
        <div style={{ height: "100%" }}>
          {Object.keys(data).map((row, i) => (
            <Row rowBg={i % 2 === 0 ? rowColor1 : rowColor2} cursorType="text">
              <h5
                style={{
                  textAlign: "left",
                  fontWeight: "400",
                  whiteSpace: "wrap"
                }}
              >
                {data[row]
                  ? moment(data[row])._f
                    ? moment(data[row]).format("ddd DD MMM/YYYY hh:mm:ss a")
                    : String(data[row])
                  : "--"}
              </h5>
            </Row>
          ))}
        </div>
      </TableWrapper>
    </div>
  );
}

Index.defaultProps = {
  wrapperStyle: {
    backgroundColor: colors.paleGrey,
    width: "max-content",
    padding: "1em 2em"
  },
  data: {
    agentId: 60000007,
    teamId: 0,
    agentName: "RUDDARAJU PRUDHVI RAJU",
    agentStatus: 1,
    agentType: "bounce_agent",
    hubId: null
  },
  rowColor1: colors.transparent,
  rowColor2: colors.transparent,
  headingColor: colors.blueberry,
  tableName: "Demo",
  tableWidth: "max-content",
  labelManipulator: labelText =>
    String(labelText)
      .charAt(0)
      .toUpperCase() +
    String(labelText)
      .slice(1)
      .replace(/([A-Z])/g, " $1")
      .trim()
};

Index.propTypes = {
  wrapperStyle: PropTypes.object,
  data: PropTypes.object,
  rowColor1: PropTypes.string,
  rowColor2: PropTypes.string,
  headingColor: PropTypes.string,
  tableName: PropTypes.string,
  tableWidth: PropTypes.string,
  labelManipulator: PropTypes.func
};
