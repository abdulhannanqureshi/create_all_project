import React, { Component } from "react";
import { Table, Card } from "react-bootstrap";
import { IRootState } from "../../../interfaces";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { getTemplateRequest } from "../../../actions";
import { DateTimeFormat } from "../../../config";
import { AppRoutes } from "../../../config";
import moment from "moment";

class EmailTemplates extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      editAccess: "",
    };
  }

  componentDidMount = () => {
    // this.handleQueryParams();
    console.log("above did mount");
    this.props.getTemplates();

    // For Check Sub Admin Edit
    let getSubAdmin: any = localStorage.getItem("SubAdminCheck");
    let checkSubAdmin: any = JSON.parse(getSubAdmin);
    let getViewRoute: any;
    if (checkSubAdmin.length) {
      // "EmailTemplatesEdit" this string is for edit access
      // Note This String change for every page
      getViewRoute = checkSubAdmin.find((e: any) => e === "EmailTemplatesEdit");
    } else {
      getViewRoute = "SuperAdmin";
    }
    this.setState({
      editAccess: getViewRoute,
    });
  };

  componentDidUpdate = (prevProps: RouteComponentProps) => {
    const { location } = prevProps;
    if (location.search !== this.props.location.search) {
      //   this.handleQueryParams();
    }
  };

  render() {
    const { editAccess } = this.state;
    return (
      <div>
        <Card>
          {/* <Card.Header>
            <h4>
              <i className="fa fa-envelope" />
              
              &nbsp;<span className="align-middle">Email Template</span>
            </h4>
          
          </Card.Header> */}
          <Card.Body className="pt-4">
            <Table hover responsive>
              <thead className="thead-color">
                <tr>
                  <th>#</th>
                  <th>Template Name</th>
                  <th>Subject</th>
                  <th>Created Date</th>
                  {editAccess === "EmailTemplatesEdit" ||
                  editAccess === "SuperAdmin" ? (
                  <th className="action-width">Action</th>
                  ) : null}
                </tr>
              </thead>
              <tbody>
                {this.props.templateReducer &&
                this.props.templateReducer.isLoading ? (
                  <tr>
                    <td className={"table-loader"} colSpan={12}></td>
                  </tr>
                ) : (
                  <>
                    {this.props.templateReducer &&
                    this.props.templateReducer.templateData &&
                    this.props.templateReducer.templateData.length ? (
                      this.props.templateReducer.templateData.map(
                        (template: any, index: number) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{template.templateName}</td>
                              <td>{template.subject}</td>
                              <td>
                                {template.createdAt
                                  ? moment(template.createdAt).format(
                                      DateTimeFormat
                                    )
                                  : "-"}
                              </td>
                              {editAccess === "EmailTemplatesEdit" ||
                  editAccess === "SuperAdmin" ? (
                              <td className="overflow-hidden">
                                <div className="action-buttons">
                                  <button
                                    type="button"
                                    className="btn edit-icon "
                                    onClick={() => {
                                      if (template && template._id) {
                                        this.props.history.push(
                                          AppRoutes.EDIT_TEMPLATE.replace(
                                            ":id",
                                            template._id
                                          )
                                        );
                                      }
                                    }}
                                  >
                                    <i className="icon-note " />
                                  </button>
                                </div>
                              </td>
                              ) : null}
                            </tr>
                          );
                        }
                      )
                    ) : (
                      <tr>
                        <td colSpan={10} className="text-center">
                          <div className="no-data-section">
                            <p>No data found</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps: any = (state: IRootState) => ({
  templateReducer: state.TemplateReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getTemplates: () => {
      dispatch(getTemplateRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailTemplates);
