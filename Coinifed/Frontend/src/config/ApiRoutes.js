export const ApiRoutes = {
         SIGNUP: {
           service: "/auth",
           url: "/signup",
           method: "POST",
           authenticate: false,
         },
         LOGIN: {
           service: "/auth",
           url: "/login",
           method: "POST",
           authenticate: false,
         },
         RESETPASSWORD: {
           service: "/auth",
           url: "/reset-password",
           method: "POST",
           authenticate: false,
         },
         FORGOTPASSWORD: {
           service: "/auth",
           url: "/forgot-password",
           method: "POST",
           authenticate: false,
         },
         GETUSERDETAILS: {
           service: "/auth",
           url: "/details",
           method: "GET",
           authenticate: true,
         },
         USERDETAILSUPDATE: {
           service: "/auth",
           url: "/update",
           method: "PUT",
           authenticate: true,
         },
         USERPASSWORDUPDATE: {
           service: "/auth",
           url: "/change-password",
           method: "PUT",
           authenticate: true,
         },
         USERFORGOTPASSWORDUPDATE: {
           service: "/auth",
           url: "/forgot-password",
           method: "POST",
           authenticate: false,
         },
         COURSELIST: {
           service: "/course-topic/?limit=all",
           url: "",
           method: "GET",
           authenticate: false,
         },
         COURSEDETAILS: {
           service: "/course-topic",
           url: "/:id",
           method: "GET",
           authenticate: false,
         },
         COURSEDETAILSAUTH: {
           service: "/course-topic",
           url: "/:id",
           method: "GET",
           authenticate: true,
         },
         APPLYCOUPON: {
           service: "/transaction",
           url: "/applyPromo",
           method: "POST",
           authenticate: true,
         },
         MAKEPAYMENT: {
           service: "/transaction",
           url: "",
           method: "POST",
           authenticate: true,
         },
         PAYMENTHISTORY: {
           service: "/transaction",
           url: "",
           method: "GET",
           authenticate: true,
         },
         PURCHASEDCOURSE: {
           service: "/course",
           url: "/purchased-course",
           method: "GET",
           authenticate: true,
         },
         CERTIFICATEREQUEST: {
           service: "/certificate-request",
           url: "",
           method: "POST",
           authenticate: true,
         },
         BLOGLIST: {
           service: "/blog",
           url: "",
           method: "GET",
           authenticate: false,
         },
         BLOGDETAIL: {
           service: "/blog",
           url: "/:id",
           method: "GET",
           authenticate: false,
         },
         GETUNIVERSITY: {
           service: "/auth",
           url: "/universities",
           method: "GET",
           authenticate: false,
         },
         GETCORPORATE: {
           service: "/auth",
           url: "/corporation",
           method: "GET",
           authenticate: false,
         },
         CONTACT_US: {
           service: "/enterprise",
           url: "",
           method: "POST",
           authenticate: false,
         },
         PRESS_RELEASE: {
           service: "/press-release",
           url: "",
           method: "GET",
           authenticate: false,
         },
         PRESS_DETAILS: {
           service: "/press-release",
           url: "/:id",
           method: "GET",
           authenticate: false,
         },
         GET_LMSDATA_COURSE: {
           service: "/talentLms",
           url: "/courses",
           method: "GET",
           authenticate: false,
         },
         GET_LMSDATA_CATEGORY: {
           service: "/talentLms",
           url: "/category",
           method: "GET",
           authenticate: false,
         },
         NEWSLETTERSUBSCRIBE: {
           service: "/news-letter",
           url: "",
           method: "POST",
           authenticate: false,
         },
         GETSOCIALLINKES: {
           service: "/setting",
           url: "",
           method: "GET",
           authenticate: false,
         },
         GETPAYMENTCERTIFICATEDETAILS: {
           service: "/certificate-request/payment-info",
           url: "/:id",
           method: "GET",
           authenticate: false,
         },
         MAKEPAYMENTCERTIFICATE: {
           service: "/certificate-request/payment",
           url: "/:id",
           method: "POST",
           authenticate: false,
         },
         CERTIFICATE_DATA: {
           service: "/cms",
           url: "",
           method: "GET",
           authenticate: false,
         },
         FRONT_PAGE_DATA: {
           service: "/market-content",
           url: "",
           method: "GET",
           authenticate: false,
         },
         GET_TEAM_DATA: {
           service: "/team",
           url: "",
           method: "GET",
           authenticate: false,
         },
       };