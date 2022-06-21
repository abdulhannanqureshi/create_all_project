import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFrontendTemplateRequest } from "../../../actions";
import { AppRoutes } from "../../../config";
import { Table, Card } from "react-bootstrap";
import { Edit } from "react-feather";
import moment from "moment";
import { DateTimeFormat } from "../../../config";

const FrontendTemplate = (props: any) => {
  const { templateData } = useSelector(
    (state: any) => state.FrontendTemplateReducer
  );
  const dispatch = useDispatch();
  // For get Corporate Data
  useEffect(() => {
    dispatch(getFrontendTemplateRequest());
  }, []);

  // For Check Sub Admin Edit
  const [editAccess, setEditAccess] = useState("");
  useEffect(() => {
    let getSubAdmin: any = localStorage.getItem("SubAdminCheck");
    let checkSubAdmin: any = JSON.parse(getSubAdmin);
    let getViewRoute: any;
    if (checkSubAdmin.length) {
      // "FrontendTemplatesEdit" this string is for edit access
      // Note This string change for according page
      getViewRoute = checkSubAdmin.find((e: any) => e === "CmsEdit");
    } else {
      getViewRoute = "SuperAdmin";
    }
    setEditAccess(getViewRoute);
  }, []);
  return (
    <div>
      <Card>
        {/* <Card.Header>
          <h4>
            <i className='fa fa-envelope' />
            <span className='align-middle'> Policy Pages</span>
          </h4>
        </Card.Header> */}
        <Card.Body className='pt-4'>
          <Table hover responsive>
            <thead className='thead-color'>
              <tr>
                <th>#</th>
                <th>Pages Name</th>
                <th>Created Date</th>
                {editAccess === "CmsEdit" || editAccess === "SuperAdmin" ? (
                  <th className='action-width'>Action</th>
                ) : null}
              </tr>
            </thead>
            <tbody>
              {templateData.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>
                      {item.createdAt
                        ? moment(item.createdAt).format(DateTimeFormat)
                        : "-"}
                    </td>
                    {editAccess === "CmsEdit" || editAccess === "SuperAdmin" ? (
                      <td className='overflow-hidden'>
                        <div className='action-buttons'>
                          <Link
                            className='btn edit-icon'
                            to={`${AppRoutes.EDIT_POLICY_PAGES}/${item._id}`}
                          >
                            <Edit />
                          </Link>
                        </div>
                      </td>
                    ) : null}
                  </tr>
                );
              })}
              {!templateData.length ? (
                <tr>
                  <td colSpan={10} className='text-center'>
                    <div className='no-data-section'>
                      <p>No data found</p>
                    </div>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FrontendTemplate;
