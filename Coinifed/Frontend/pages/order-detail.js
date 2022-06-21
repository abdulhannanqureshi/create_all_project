/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import NoSsr from '@material-ui/core/NoSsr';
 import OrderDetail from 'views/OrderDetail';
 import Main from 'layouts/Main';
 import WithLayout from 'WithLayout';
 
 const Component = () => {
   return (
     <NoSsr>
       <OrderDetail />
     </NoSsr>
   );
 };
 
 const OrderDetailPage = () => {
   return (
     <WithLayout
       component={Component}
       layout={Main}
     />
   )
 };
 
 export default OrderDetailPage;
 