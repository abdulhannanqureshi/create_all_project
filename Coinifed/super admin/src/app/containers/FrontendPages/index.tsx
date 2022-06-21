import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFrontendPagesRequest } from "../../../actions";
import { AppRoutes } from "../../../config";
import { Table, Card } from "react-bootstrap";
import { Edit } from "react-feather";
import moment from "moment";
import { DateTimeFormat } from "../../../config";

const FrontendPages = (props: any) => {
  const { templateData } = useSelector(
    (state: any) => state.FrontendPagesReducer
  );
  const dispatch = useDispatch();
  // For get Corporate Data
  useEffect(() => {
    dispatch(getFrontendPagesRequest());
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
            <span className='align-middle'> Frontend Pages</span>
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
                          {/* For about us link */}
                          {item.titleSlug && item.titleSlug === "aboutUs" ? (
                            <Link
                              className='btn edit-icon'
                              to={`${AppRoutes.EDIT_ABOUT_PAGES}/${item._id}`}
                            >
                              <Edit />
                            </Link>
                          ) : null}
                           {/* For Certification link */}
                           {item.titleSlug &&
                          item.titleSlug === "certification" ? (
                            <Link
                              className='btn edit-icon'
                              to={`${AppRoutes.EDIT_CERTIFICATION_PAGES}/${item._id}`}
                            >
                              <Edit />
                            </Link>
                          ) : null}
                           {/* For Edit course page link*/ }
                           {item.titleSlug && item.titleSlug === "course" ? (
                            <Link
                              className='btn edit-icon'
                              to={`${AppRoutes.EDIT_COURSES_PAGES}/${item._id}`}
                            >
                              <Edit />
                            </Link>
                          ) : null}
                          {/* For Enterprise us link */}
                          {item.titleSlug && item.titleSlug === "enterprise" ? (
                            <Link
                              className='btn edit-icon'
                              to={`${AppRoutes.EDIT_ENTERPRISE_PAGES}/${item._id}`}
                            >
                              <Edit />
                            </Link>
                          ) : null}
                            {/* For Edit course page link*/ }
                            {item.titleSlug && item.titleSlug === "home" ? (
                            <Link
                              className='btn edit-icon' 
                              to={`${AppRoutes.EDIT_HOME_PAGES}/${item._id}`}
                              
                            >
                              <Edit />
                            </Link>
                          ) : null}
                          {/* For Labs us link */}
                          {item.titleSlug && item.titleSlug === "labs" ? (
                            <Link
                              className='btn edit-icon'
                              to={`${AppRoutes.EDIT_LABS_PAGES}/${item._id}`}
                            >
                              <Edit />
                            </Link>
                          ) : null}
                           
                          {/* For Marketing link */}
                          {item.titleSlug && item.titleSlug === "marketing" ? (
                            <Link
                              className='btn edit-icon'
                              to={`${AppRoutes.EDIT_MARKETING_PAGES}/${item._id}`}
                              
                            >
                              <Edit />
                            </Link>
                          ) : null}
                         
                          {/* For University link */}
                          {item.titleSlug && item.titleSlug === "university" ? (
                            <Link
                              className='btn edit-icon'
                              to={`${AppRoutes.EDIT_UNIVERSITY_PAGES}/${item._id}`}
                            >
                              <Edit />
                            </Link>
                          ) : null}

                           {/* For Footer link */}
                           {item.titleSlug && item.titleSlug === "footer" ? (
                            <Link
                              className='btn edit-icon'
                              to={`${AppRoutes.EDIT_FOOTER_PAGES}/${item._id}`}
                            >
                              <Edit />
                            </Link>
                          ) : null}
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

export default FrontendPages;
