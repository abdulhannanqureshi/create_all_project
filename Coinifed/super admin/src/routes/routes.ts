import React from 'react';
import { AppRoutes } from '../config';

const Home = React.lazy(() => import('../app/containers/Home'));
const Login = React.lazy(() => import('../app/containers/Auth'));
const MyProfile = React.lazy(() => import('../app/containers/MyProfile'));
const EmailTemplates = React.lazy(() => import('../app/containers/EmailTemplates'));
const AddTemplate = React.lazy(() => import('../app/containers/EmailTemplates/AddTemplate'));
const HomePage = React.lazy(() => import('../app/containers/CMS/HomePage'));
const User = React.lazy(() => import('../app/containers/User'));
const AddUser = React.lazy(() => import('../app/containers/User/AddUser'));
const Faq = React.lazy(() => import('../app/containers/CMS/FAQ'));
const AddFaq = React.lazy(() => import('../app/containers/CMS/FAQ/AddFaq'));
const ENTERPRISE = React.lazy(() => import('../app/containers/Enterprise'));
const BlogCategory = React.lazy(() => import('../app/containers/BlogCategory'));
const AddBlogCategory = React.lazy(() => import('../app/containers/BlogCategory/AddBlogCategory'));
const Blog = React.lazy(() => import('../app/containers/Blog'));
const AddBlog = React.lazy(() => import('../app/containers/Blog/AddBlog'));
const Course = React.lazy(() => import('../app/containers/Course'));
const AddCourse = React.lazy(() => import('../app/containers/Course/AddCourse'));
const Module = React.lazy(() => import('../app/containers/Module'));
const AddModule = React.lazy(() => import('../app/containers/Module/AddModule'));
const PressReleaseCategory = React.lazy(() => import('../app/containers/PressReleaseCategory'));
const AddPressReleaseCategory = React.lazy(() => import('../app/containers/PressReleaseCategory/AddPressReleaseCategory'));
const PressRelease = React.lazy(() => import('../app/containers/PressRelease'));
const AddPressRelease = React.lazy(() => import('../app/containers/PressRelease/AddPressRelease'));
const PromoCode = React.lazy(() => import('../app/containers/PromoCode'));
const AddPromoCode = React.lazy(() => import('../app/containers/PromoCode/AddPromoCode'));
const TRANSACTION = React.lazy(() => import('../app/containers/Transaction'));
const REPORT_USER = React.lazy(() => import('../app/containers/Report/user'));
const REPORT_SALE = React.lazy(() => import('../app/containers/Report/sale'));
const CERTIFICATE = React.lazy(() => import('../app/containers/Certificate'));
const SETTING = React.lazy(() => import('../app/containers/Setting'));
const Category = React.lazy(() => import('../app/containers/Category'));
const AddCategory = React.lazy(() => import('../app/containers/Category/AddCategory'));
const privacy_policy = React.lazy(() => import('../app/containers/EditorPages/PrivacyPolicy'));
const Terms_Conditions = React.lazy(() => import('../app/containers/EditorPages/TermsConditions'));
const RefundPolicy = React.lazy(() => import('../app/containers/EditorPages/RefundPolicy'));
const DoNotSell = React.lazy(() => import('../app/containers/EditorPages/DoNotSell'));
const University = React.lazy(() => import('../app/containers/UserAuthType/University'));
const AddUniversity = React.lazy(() => import('../app/containers/UserAuthType/AddUniversity'));
const UserCorporate = React.lazy(
  () => import("../app/containers/UserCorporate")
);
const AddCorporate = React.lazy(
  () => import("../app/containers/UserCorporate/AddCorporate")
);
const EditCorporate = React.lazy(
  () => import("../app/containers/UserCorporate/EditCorporate")
);
const Lab = React.lazy(
  () => import("../app/containers/Labs")
);
const AddLab = React.lazy(
  () => import("../app/containers/Labs/AddLab")
);
const EditLab = React.lazy(
  () => import("../app/containers/Labs/EditLab")
);
const SubAdmin = React.lazy(() => import("../app/containers/SubAdmin"));
const AddSubAdmin = React.lazy(
  () => import("../app/containers/SubAdmin/AddSubAdmin")
);
const EditSubAdmin = React.lazy(
  () => import("../app/containers/SubAdmin/EditSubAdmin")
);
const FrontendTemplate = React.lazy(
  () => import("../app/containers/FrontendTemplate")
);
const EditFrontTemplate = React.lazy(
  () => import("../app/containers/FrontendTemplate/EditFrontTemplate")
);
const OurTeam = React.lazy(() => import("../app/containers/OurTeam"));
const AddTeam = React.lazy(() => import("../app/containers/OurTeam/AddTeam"));
const EditTeam = React.lazy(() => import("../app/containers/OurTeam/EditTeam"));

const FrontendPages = React.lazy(
  () => import("../app/containers/FrontendPages")
);
const EditAboutPage = React.lazy(
  () => import("../app/containers/FrontendPages/EditAboutPage")
);
const EditEnterprisePage = React.lazy(
  () => import("../app/containers/FrontendPages/EditEnterprisePage")
);
const EditCoursePage = React.lazy(
  () => import("../app/containers/FrontendPages/EditCoursePage")
);
const EditMarketingPage = React.lazy(
  () => import("../app/containers/FrontendPages/EditMarketingPage")
);
const EditLabsPage = React.lazy(
  () => import("../app/containers/FrontendPages/EditLabsPage")
);
const EditCertificationPage = React.lazy(
  () => import("../app/containers/FrontendPages/EditCertificationPage")
);
const EditUniversityPage = React.lazy(
  () => import("../app/containers/FrontendPages/EditUniversityPage")
);
const EditHomePage = React.lazy(
  () => import("../app/containers/FrontendPages/EditHomepage")
);
const EditFooterPage = React.lazy(
  () => import("../app/containers/FrontendPages/EditFooterPage")
);

const routes = [
  { path: AppRoutes.MAIN, exact: true, name: "Home" },
  {
    path: AppRoutes.HOME,
    name: "Dashboard",
    component: Home,
    exact: true,
  },
  {
    path: AppRoutes.LOGIN,
    name: "",
    component: Login,
    exact: true,
  },
  {
    path: AppRoutes.MY_PROFILE,
    name: "Profile",
    component: MyProfile,
    exact: true,
  },
  {
    path: AppRoutes.USER,
    name: "Users",
    component: User,
    exact: true,
  },
  {
    path: AppRoutes.ADD_USER,
    name: "Add User",
    component: AddUser,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_USER,
    name: "Update User",
    component: AddUser,
    exact: true,
  },
  {
    path: AppRoutes.COURSE,
    name: "Course Management \u00A0 / \u00A0 Course",
    component: Course,
    exact: true,
  },
  {
    path: AppRoutes.ADD_COURSE,
    name: "Add Course",
    component: AddCourse,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_COURSE,
    name: "Update Course",
    component: AddCourse,
    exact: true,
  },
  {
    path: AppRoutes.MODULE,
    name: "Course Management \u00A0 / \u00A0 Module",
    component: Module,
    exact: true,
  },
  {
    path: AppRoutes.ADD_MODULE,
    name: "Add Module",
    component: AddModule,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_MODULE,
    name: "Update Module",
    component: AddModule,
    exact: true,
  },
  {
    path: AppRoutes.EMAILTEMPLATE,
    name: "Email Template",
    component: EmailTemplates,
    exact: true,
  },
  {
    path: AppRoutes.ADD_TEMPLATE,
    name: "Add Template",
    component: AddTemplate,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_TEMPLATE,
    name: "Update Template",
    component: AddTemplate,
    exact: true,
  },
  {
    path: AppRoutes.ADD_HOME_PAGE,
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: AppRoutes.FAQ,
    name: "Faq",
    component: Faq,
    exact: true,
  },
  {
    path: AppRoutes.ADD_FAQ,
    name: "Add Faq",
    component: AddFaq,
    exact: true,
  },
  {
    path: AppRoutes.ENTERPRISE,
    name: "Customer Enterprise Solution",
    component: ENTERPRISE,
    exact: true,
  },
  {
    path: AppRoutes.BLOG_CATEGORY,
    name: "Blog Management \u00A0 / \u00A0 Category",
    component: BlogCategory,
    exact: true,
  },
  {
    path: AppRoutes.ADD_BLOG_CATEGORY,
    name: `Add Blog Category`,
    component: AddBlogCategory,
    exact: true,
  },
  {
    path: AppRoutes.BLOG,
    name: `Blog Management \u00A0 / \u00A0 Blog`,
    component: Blog,
    exact: true,
  },
  {
    path: AppRoutes.ADD_BLOG,
    name: "Add Blog",
    component: AddBlog,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_BLOG_CATEGORY,
    name: "Update Blog Category",
    component: AddBlogCategory,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_BLOG,
    name: "Update Blog",
    component: AddBlog,
    exact: true,
  },
  {
    path: AppRoutes.PRESS_RELEASE_CATEGORY,
    name: "Press Release Management \u00A0 / \u00A0 Category",
    component: PressReleaseCategory,
    exact: true,
  },
  {
    path: AppRoutes.ADD_PRESS_RELEASE_CATEGORY,
    name: "Add Press Release Category",
    component: AddPressReleaseCategory,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_PRESS_RELEASE_CATEGORY,
    name: "Update Press Release Category",
    component: AddPressReleaseCategory,
    exact: true,
  },
  {
    path: AppRoutes.PRESS_RELEASE,
    name: "Press Release Management \u00A0 / \u00A0 Press Release",
    component: PressRelease,
    exact: true,
  },
  {
    path: AppRoutes.ADD_PRESS_RELEASE,
    name: "Add Press Release",
    component: AddPressRelease,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_PRESS_RELEASE,
    name: "Update Press Release",
    component: AddPressRelease,
    exact: true,
  },
  {
    path: AppRoutes.PROMO_CODE,
    name: "Promo Code Management",
    component: PromoCode,
    exact: true,
  },
  {
    path: AppRoutes.ADD_PROMO_CODE,
    name: "Add Promo Code",
    component: AddPromoCode,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_PROMO_CODE,
    name: "Update Promo Code",
    component: AddPromoCode,
    exact: true,
  },
  {
    path: AppRoutes.TRANSACTION,
    name: "Transaction Management",
    component: TRANSACTION,
    exact: true,
  },
  {
    path: AppRoutes.REPORT_USER,
    name: "Report Management \u00A0 / \u00A0 User",
    component: REPORT_USER,
    exact: true,
  },
  {
    path: AppRoutes.REPORT_SALE,
    name: "Report Management \u00A0 / \u00A0 Sale Report",
    component: REPORT_SALE,
    exact: true,
  },
  {
    path: AppRoutes.CERTIFICATE,
    name: "Certificate Request",
    component: CERTIFICATE,
    exact: true,
  },
  {
    path: AppRoutes.SETTING,
    name: "Settings",
    component: SETTING,
    exact: true,
  },
  {
    path: AppRoutes.CATEGORY,
    name: "Course Management \u00A0 / \u00A0 Category",
    component: Category,
    exact: true,
  },
  {
    path: AppRoutes.ADD_CATEGORY,
    name: "Add Category",
    component: AddCategory,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_CATEGORY,
    name: "Update Category",
    component: AddCategory,
    exact: true,
  },
  {
    path: AppRoutes.PRIVACY_POLICY,
    name: "Privacy Policy",
    component: privacy_policy,
    exact: true,
  },
  {
    path: AppRoutes.TERMS_CONDITIONS,
    name: "Terms & Conditions",
    component: Terms_Conditions,
    exact: true,
  },
  {
    path: AppRoutes.REFUND_POLICY,
    name: "Refund Policy",
    component: RefundPolicy,
    exact: true,
  },
  {
    path: AppRoutes.DO_NOT_SELL,
    name: "Do Not Sell",
    component: DoNotSell,
    exact: true,
  },
  {
    path: AppRoutes.UNIVERSITY,
    name: "University",
    component: University,
    exact: true,
  },
  {
    path: AppRoutes.ADD_UNIVERSITY,
    name: "Add University",
    component: AddUniversity,
    exact: true,
  },
  {
    path: AppRoutes.EDIT_UNIVERSITY,
    name: "Edit University",
    component: AddUniversity,
    exact: true,
  },
  {
    path: `${AppRoutes.CORPORATE}`,
    name: "Corporate",
    component: UserCorporate,
    exact: true,
  },
  {
    path: AppRoutes.ADD_CORPORATE,
    name: "Add Corporate",
    component: AddCorporate,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_CORPORATE}/:id`,
    name: "Edit Corporate",
    component: EditCorporate,
    exact: true,
  },
  {
    path: `${AppRoutes.LAB}`,
    name: "Lab",
    component: Lab,
    exact: true,
  },
  {
    path: AppRoutes.ADD_LAB,
    name: "Add Lab",
    component: AddLab,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_LAB}/:id`,
    name: "Edit Lab",
    component: EditLab,
    exact: true,
  },
  {
    path: `${AppRoutes.SUB_ADMIN}`,
    name: "Sub Admin",
    component: SubAdmin,
    exact: true,
  },
  {
    path: AppRoutes.ADD_SUB_ADMIN,
    name: "Add Sub Admin",
    component: AddSubAdmin,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_SUB_ADMIN}/:id`,
    name: "Edit Sub Admin",
    component: EditSubAdmin,
    exact: true,
  },
  {
    path: AppRoutes.POLICY_PAGES,
    name: "Policy Pages",
    component: FrontendTemplate,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_POLICY_PAGES}/:id`,
    name: "Edit Policy Pages",
    component: EditFrontTemplate,
    exact: true,
  },
  {
    path: `${AppRoutes.OUR_TEAM}`,
    name: "Our Team",
    component: OurTeam,
    exact: true,
  },
  {
    path: AppRoutes.ADD_TEAM,
    name: "Add Team",
    component: AddTeam,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_TEAM}/:id`,
    name: "Edit Team",
    component: EditTeam,
    exact: true,
  },
  {
    path: `${AppRoutes.FRONTEND_PAGES}`,
    name: "Frontend Pages",
    component: FrontendPages,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_ABOUT_PAGES}/:id`,
    name: "Edit About Page",
    component: EditAboutPage,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_ENTERPRISE_PAGES}/:id`,
    name: "Edit Enterprise Page",
    component: EditEnterprisePage,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_COURSES_PAGES}/:id`,
    name: "Edit Course page",
    component: EditCoursePage,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_MARKETING_PAGES}/:id`,
    name: "Edit Marketing page",
    component: EditMarketingPage,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_LABS_PAGES}/:id`,
    name: "Edit Labs Page",
    component: EditLabsPage,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_CERTIFICATION_PAGES}/:id`,
    name: "Edit Certification Page",
    component: EditCertificationPage,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_UNIVERSITY_PAGES}/:id`,
    name: "Edit University Page",
    component: EditUniversityPage,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_HOME_PAGES}/:id`,
    name: "Edit Home Page",
    component: EditHomePage,
    exact: true,
  },
  {
    path: `${AppRoutes.EDIT_FOOTER_PAGES}/:id`,
    name: "Edit Footer Page",
    component: EditFooterPage,
    exact: true,
  },
];
export default routes;
