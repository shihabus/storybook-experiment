/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import _ from "lodash";
import { colors } from "../configs";
import { flexBoxUtil } from "../utlis";
import moment from "moment";

const Container = styled.div`
  ${props => (props ? { ...props } : {})}
  width: max-content;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const NavButton = styled.button`
  padding: 0.25em 0.5em;
  border-radius: 4px;
  margin: 0px 5px;
  background: ${colors.transparent};
  border: none;
  ${flexBoxUtil("row", "center", "center")}
  ${props =>
    props.disabled
      ? `cursor: no-drop;           `
      : `cursor: pointer;
        color:${colors.azure};
        `};
`;

const Wrapper = styled.div`
  padding-top: 1rem;
  width: ${props => props.tableWidth};
  ${props => (props.maxHeight ? `max-height:${props.maxHeight}` : "")};
  overflow-x: auto;

  table {
    border-spacing: 0;
    border: 1px solid ${colors.warmGrey};
    border-radius: 4px;
    width: 100%;
    margin-bottom: 10px;

    tr {
      cursor: pointer;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :nth-child(odd) {
        background-color: ${colors.paleGrey};
      }
      :nth-child(even) {
        background-color: ${colors.white};
      }
      :hover {
        background: ${colors.paleLilac};
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid ${colors.warmGrey};
      border-right: 1px solid ${colors.warmGrey};
      white-space: nowrap;

      :last-child {
        border-right: 0;
      }
    }

    th {
      background-color: ${colors.blueberry};
      color: white;
    }
  }
`;

export default function Table(props) {
  const {
    keys,
    tableName,
    headerColor,
    rowsPerPage,
    dataSet,
    wrapperStyle
  } = props;
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    let result = dataSet.slice(
      Number(rowsPerPage) * page,
      Number(rowsPerPage) + Number(rowsPerPage) * page
    );
    setData([...result]);
  }, [page, dataSet, keys]);

  let totalPages = Math.ceil(dataSet.length / rowsPerPage);

  return (
    <Container style={wrapperStyle}>
      <h3 style={{ color: headerColor }}>{tableName}</h3>
      <Wrapper {...props}>
        <table>
          <thead>
            <tr>
              {keys.map(key => (
                <th>
                  <h5>{key.display}</h5>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr>
                {keys.map(key => {
                  if (moment(_.get(row, key.value, "--"))._f) {
                    return (
                      <td>
                        <h5 style={{ fontWeight: "400" }}>
                          {moment(_.get(row, key.value, "--")).format(
                            "ddd DD MMM/YYYY hh:mm:ss a"
                          )}
                        </h5>
                      </td>
                    );
                  } else {
                    return (
                      <td>
                        <h5 style={{ fontWeight: "400" }}>
                          {JSON.stringify(_.get(row, key.value, "--")).replace(
                            /"/g,
                            ""
                          )}
                        </h5>
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
      {totalPages > 1 && (
        <PaginationContainer>
          <div
            style={{
              width: "max-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <NavButton onClick={() => setPage(page - 1)} disabled={page === 0}>
              Prev
            </NavButton>
            <h5 style={{ fontWeight: "100" }}>
              Page {page + 1} of {totalPages}
            </h5>
            <NavButton
              onClick={() => setPage(page + 1)}
              disabled={totalPages === page + 1}
            >
              Next
            </NavButton>
          </div>
        </PaginationContainer>
      )}
    </Container>
  );
}

Table.propTypes = {
  tableName: PropTypes.string,
  wrapperStyle: PropTypes.object,
  headerColor: PropTypes.string,
  tableWidth: PropTypes.string,
  rowsPerPage: PropTypes.number,
  dataSet: PropTypes.arrayOf(PropTypes.object),
  keys: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        value: PropTypes.string,
        display: PropTypes.string
      })
    )
  )
};

Table.defaultProps = {
  tableName: "Demo",
  wrapperStyle: {},
  headerColor: colors.blueberry,
  tableWidth: "400px",
  rowsPerPage: 5,
  dataSet: [
    {
      taskId: 62148841,
      createdOn: "2020-01-25T12:50:03.027+05:30",
      updatedOn: "2020-01-30T10:31:51.196+05:30",
      taskLatitude: 12.8102912,
      taskLongitude: 77.6657152,
      assetId: 32873,
      taskCategory: {
        id: 124,
        category: "PAID_PRIVATE_PARKING",
        taskType: "PAID_PRIVATE_PARKING",
        weight: 1,
        numberOfAgentNeeded: 1,
        createdOn: "2020-01-08T11:19:36.158+05:30",
        updatedOn: "2020-01-08T11:19:36.158+05:30",
        taskTypeDisplayName: "PAID_PRIVATE_PARKING"
      },
      taskStatus: {
        id: 3,
        status: "Accepted",
        createdOn: "2019-08-20T23:14:01.929638+05:30",
        updatedOn: "2019-08-20T23:14:01.929638+05:30"
      },
      entityCategory: {
        id: 1,
        type: "Bike",
        createdOn: "2019-08-20T23:14:01.278034+05:30",
        updatedOn: "2019-08-20T23:14:01.278034+05:30"
      },
      team: {
        id: 220,
        name: "PAID PRIVATE PARKING",
        erpTeamId: "310001",
        createdOn: "2020-01-08T11:54:09.006+05:30",
        updatedOn: "2020-01-10T12:01:33.411+05:30",
        active: true,
        mappedToClusters: null,
        mappedToTaskTypes: null
      },
      eta: 0,
      tag: null,
      taskMeta: {
        manual_assignment: {
          type: "state_changed",
          description: "modified by PARESH G S"
        },
        task_distance: 20519.1
      },
      sequenceNumber: null,
      groupId: 0,
      agent: {
        agentId: 60003542,
        agentName: "MANJUNATH A",
        agentType: "BOUNCE_AGENT",
        contact: "7760691267",
        online: true,
        lastLocation: {
          latitude: 12.811507,
          longitude: 77.7011251
        },
        skills: null,
        openTasks: null,
        finishedTasks: null,
        teamName: "PAID PRIVATE PARKING",
        lastLocationUpdatedAt: null
      },
      agentType: null,
      statusChangeReason: "manual_assignment",
      source: "ots_event",
      comment: "oos",
      entityMeta: {
        license_plate: "KA-51-AE-3564"
      },
      licensePlate: "KA-51-AE-3564",
      gpsLocation: null,
      dropLatitude: null,
      dropLongitude: null,
      geoId: 1,
      statusChangedAt: "2020-01-30T10:31:51.196+05:30",
      relatedTaskId: null,
      clusterName: "e-city-cluster",
      clusterId: 5
    },
    {
      taskId: 621000,
      createdOn: "2020-01-25T12:50:03.027+05:30",
      updatedOn: "2020-01-30T10:31:51.196+05:30",
      taskLatitude: 12.8102912,
      taskLongitude: 77.6657152,
      assetId: 32873,
      taskCategory: {
        id: 124,
        category: "PAID_PRIVATE_PARKING",
        taskType: "PAID_PRIVATE_PARKING",
        weight: 1,
        numberOfAgentNeeded: 1,
        createdOn: "2020-01-08T11:19:36.158+05:30",
        updatedOn: "2020-01-08T11:19:36.158+05:30",
        taskTypeDisplayName: "PAID_PRIVATE_PARKING"
      },
      taskStatus: {
        id: 3,
        status: "Accepted",
        createdOn: "2019-08-20T23:14:01.929638+05:30",
        updatedOn: "2019-08-20T23:14:01.929638+05:30"
      },
      entityCategory: {
        id: 1,
        type: "Bike",
        createdOn: "2019-08-20T23:14:01.278034+05:30",
        updatedOn: "2019-08-20T23:14:01.278034+05:30"
      },
      team: {
        id: 220,
        name: "PAID PRIVATE PARKING",
        erpTeamId: "310001",
        createdOn: "2020-01-08T11:54:09.006+05:30",
        updatedOn: "2020-01-10T12:01:33.411+05:30",
        active: true,
        mappedToClusters: null,
        mappedToTaskTypes: null
      },
      eta: 0,
      tag: null,
      taskMeta: {
        manual_assignment: {
          type: "state_changed",
          description: "modified by PARESH G S"
        },
        task_distance: 20519.1
      },
      sequenceNumber: null,
      groupId: 0,
      agent: {
        agentId: 60003542,
        agentName: "MANJUNATH A",
        agentType: "BOUNCE_AGENT",
        contact: "7760691267",
        online: true,
        lastLocation: {
          latitude: 12.811507,
          longitude: 77.7011251
        },
        skills: null,
        openTasks: null,
        finishedTasks: null,
        teamName: "PAID PRIVATE PARKING",
        lastLocationUpdatedAt: null
      },
      agentType: null,
      statusChangeReason: "manual_assignment",
      source: "ots_event",
      comment: "oos",
      entityMeta: {
        license_plate: "KA-51-AE-3564"
      },
      licensePlate: "KA-51-AE-3564",
      gpsLocation: null,
      dropLatitude: null,
      dropLongitude: null,
      geoId: 1,
      statusChangedAt: "2020-01-30T10:31:51.196+05:30",
      relatedTaskId: null,
      clusterName: "e-city-cluster",
      clusterId: 5
    }
  ],
  keys: [
    { value: "taskId", display: "Task ID" },
    { value: "taskCategory.category", display: "Task Type" },
    { value: "taskStatus.status", display: "Task Status" }
  ]
};
