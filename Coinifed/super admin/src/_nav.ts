import { AppRoutes } from "./config";

export default {
  items: [
    {
      name: "Dashboard", 
      url: AppRoutes.HOME,
      icon: "fa fa-dashboard",
      innerPage: "DashboardEdit",
    },
    {
      name: "Users",
      icon: "fa fa-users",
      url: AppRoutes.USER,
      innerPage: "UserEdit",
    },
    {
      name: "Course Management",
      icon: "fa fa-book",
      url: "course-module",
      innerPage: "CourseEdit",
      children: [
        {
          name: "Category",
          url: AppRoutes.CATEGORY,
          icon: "fa fa-file-text-o",
        },
        {
          name: "Course",
          url: AppRoutes.COURSE,
          icon: "fa fa-graduation-cap",
        },
        {
          name: "Module",
          url: AppRoutes.MODULE,
          icon: "fa fa-leanpub",
        },
        {
          name: "Labs",
          icon: "fa fa-flask",
          url: AppRoutes.LAB,
          innerPage: "labEdit",
        },
      ],
    },
    /* {
      name: "Module",
      icon: "fa fa-users",
      url: AppRoutes.MODULE
    }, */
    
    {
      name: "Customer Enterprise Solution",
      icon: "fa fa-info",
      url: AppRoutes.ENTERPRISE,
      innerPage: "CustomerEdit",
    },
    {
      name: "Certificate Requests",
      icon: "fa fa-certificate",
      url: AppRoutes.CERTIFICATE,
      innerPage: "CertificateEdit",
    },
    {
      name: "Promo Codes Management",
      icon: "fa fa-tag",
      url: AppRoutes.PROMO_CODE,
      innerPage: "PromoCodesEdit",
    },
    {
      name: "Blog Management",
      icon: "fa fa-sitemap",
      url: AppRoutes.BLOG,
      innerPage: "BlogEdit",
      children: [
        {
          name: "Blog Category",
          url: AppRoutes.BLOG_CATEGORY,
          icon: "fa fa-list",
        },
        {
          name: "Blog",
          url: AppRoutes.BLOG,
          icon: "fa fa-pencil-square-o",
        },
      ],
    },
    {
      name: "Press Release Management",
      icon: "fa fa-newspaper-o",
      url: AppRoutes.PRESS_RELEASE,
      innerPage: "PressReleaseEdit",
      children: [
        {
          name: "Press Release Category",
          url: AppRoutes.PRESS_RELEASE_CATEGORY,
          icon: "fa fa-file-audio-o",
        },
        {
          name: "Press Release",
          url: AppRoutes.PRESS_RELEASE,
          icon: "fa fa-bullhorn",
        },
      ],
    },
    /* {
      name: "Report Management",
      icon: "fa fa-flag",
      url: "report",
      children: [
        {
          name: "User",
          url: AppRoutes.REPORT_USER,
          icon: "fa fa-users"
        },
        {
          name: "Sales",
          url: AppRoutes.REPORT_SALE,
          icon: "fa fa-dollar"
        }
      ]
    }, */
    {
      name: "Transaction Management",
      icon: "fa fa-dollar",
      url: AppRoutes.TRANSACTION,
      innerPage: "TransactionEdit",
    },
   
    {
      name: "Email Templates",
      icon: "fa fa-envelope",
      url: AppRoutes.EMAILTEMPLATE,
      innerPage: "EmailTemplatesEdit",
    },
    // {
    //   name: "University",
    //   icon: "fa fa-cogs",
    //   url: AppRoutes.UNIVERSITY,
    //   innerPage: "UniversityEdit",
    // },
    // {
    //   name: "Corporate",
    //   icon: "fa fa-cogs",
    //   url: AppRoutes.CORPORATE,
    //   innerPage: "CorporateEdit",
    // },
    // {
    //   name: "Sub Admin",
    //   icon: "fa fa-cogs",
    //   url: AppRoutes.SUB_ADMIN,
    //   innerPage: "SubAdminEdit",
    // },
    // For About US
    // {
    //   name: "Our Team",
    //   icon: "fa fa-cogs",
    //   url: AppRoutes.OUR_TEAM,
    // },

    {
      name: "CMS Management",
      icon: "fa fa-text-width",
      url: AppRoutes.OUR_TEAM,
      innerPage: "CmsEdit",
      children: [
        {
          name: "Policy Pages",
          icon: "fa fa-shield",
          url: AppRoutes.POLICY_PAGES,
        },
        {
          name: "Frontend Pages",
          icon: "fa fa-files-o",
          url: AppRoutes.FRONTEND_PAGES,
        },
        {
          name: "Our Team",
          icon: "fa fa-user-plus",
          url: AppRoutes.OUR_TEAM,
          innerPage: "ourTeamEdit",
        },
      ],
    },
    // {
    //   name: "Editor Pages",
    //   icon: "fa fa-edit",
    //   // url: AppRoutes.BLOG,
    //   children: [
    //     {
    //       name: "Privacy Policy",
    //       url: AppRoutes.PRIVACY_POLICY,
    //       icon: "fa fa-list"
    //     },
    //     {
    //       name: "Terms & Conditions",
    //       url: AppRoutes.TERMS_CONDITIONS,
    //       icon: "fa fa-list"
    //     },
    //     {
    //       name: "Refund Policy",
    //       url: AppRoutes.REFUND_POLICY,
    //       icon: "fa fa-list"
    //     },
    //     {
    //       name: "Do Not Sell",
    //       url: AppRoutes.DO_NOT_SELL,
    //       icon: "fa fa-list"
    //     },
    //   ]
    // },
    {
      name: "Settings",
      icon: "fa fa-cogs",
      url: AppRoutes.SETTING,
      innerPage: "SettingsEdit",
    },
    /* {
      name: "Content management",
      icon: "icon-grid",
      url: AppRoutes.ADD_HOME_PAGE,
      children: [
        {
          name: "Home Page",
          url: AppRoutes.ADD_HOME_PAGE,
          icon: "icon-home"
        },
        {
          name: "FAQ",
          url: AppRoutes.ADD_HOME_PAGE,
          icon: "icon-home"
        }
      ]
    } */
  ],
};
