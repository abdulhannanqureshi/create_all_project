import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import  makeStyles  from '@material-ui/core/styles/makeStyles';
import  Divider  from '@material-ui/core/Divider';
import { Topbar } from './components';

const useStyles = makeStyles(() => ({
  root: {
  },
  content: {
    height: '100%',
  },
}));

const handleSidebarOpen = () => {
  setOpenSidebar(true);
};

const handleSidebarClose = () => {
  setOpenSidebar(false);
};

const pages = {
  landings: {
    title: 'Landings',
    id: 'landing-pages',
    children: {
      services: {
        groupTitle: 'Services',
        pages: [
          {
            title: 'Coworking',
            href: '/coworking',
          },
          {
            title: 'Rental',
            href: '/rental',
          },
          {
            title: 'Job Listing',
            href: '/job-listing',
          },
          {
            title: 'E-Learning',
            href: '/e-learning',
          },
          {
            title: 'E-commerce',
            href: '/e-commerce',
          },
          {
            title: 'Expo',
            href: '/expo',
          },
        ],
      },
      apps: {
        groupTitle: 'Apps',
        pages: [
          {
            title: 'Desktop App',
            href: '/desktop-app',
          },
          {
            title: 'Mobile App',
            href: '/mobile-app',
          },
        ],
      },
      web: {
        groupTitle: 'Web',
        pages: [
          {
            title: 'Marketing',
            href: '/',
          },
          {
            title: 'Overview',
            href: '/home',
          },
          {
            title: 'Basic',
            href: '/web-basic',
          },
          {
            title: 'Service',
            href: '/service',
          },
          {
            title: 'Startup',
            href: '/startup',
          },
          {
            title: 'Enterprise',
            href: '/enterprise',
          },
          {
            title: 'Cloud Hosting',
            href: '/cloud-hosting',
          },
          {
            title: 'Agency',
            href: '/agency',
          },
          {
            title: 'Design Company',
            href: '/design-company',
          },
          {
            title: 'Logistics',
            href: '/logistics',
          },
        ],
      },
    },
  },
  pages: {
    title: 'Pages',
    id: 'supported-pages',
    children: {
      career: {
        groupTitle: 'Career',
        pages: [
          {
            title: 'Lising',
            href: '/career-listing',
          },
          {
            title: 'Lising Minimal',
            href: '/career-listing-minimal',
          },
          {
            title: 'Opening',
            href: '/career-opening',
          },
        ],
      },
      helpCenter: {
        groupTitle: 'Help center',
        pages: [
          {
            title: 'Overview',
            href: '/help-center',
          },
          {
            title: 'Article',
            href: '/help-center-article',
          },
        ],
      },
      company: {
        groupTitle: 'Company',
        pages: [
          {
            title: 'About',
            href: '/about',
          },
          {
            title: 'About (Cover)',
            href: '/about-side-cover',
          },
          {
            title: 'Pricing',
            href: '/pricing',
          },
          {
            title: 'Terms',
            href: '/company-terms',
          },
        ],
      },
      contact: {
        groupTitle: 'Contact',
        pages: [
          {
            title: 'Reach View',
            href: '/contact-page',
          },
          {
            title: 'Sidebar Map',
            href: '/contact-sidebar-map',
          },
          {
            title: 'Cover',
            href: '/contact-page-cover',
          },
        ],
      },
      blog: {
        groupTitle: 'Blog',
        pages: [
          {
            title: 'Newsroom',
            href: '/blog-newsroom',
          },
          {
            title: 'Reach View',
            href: '/blog-reach-view',
          },
          {
            title: 'Search',
            href: '/blog-search',
          },
          {
            title: 'Article',
            href: '/blog-article',
          },
        ],
      },
      portfolio: {
        groupTitle: 'Portfolio',
        pages: [
          {
            title: 'Basic',
            href: '/portfolio-page',
          },
          {
            title: 'Masonry',
            href: '/portfolio-masonry',
          },
          {
            title: 'Grid View',
            href: '/portfolio-grid',
          },
          {
            title: 'Parallax Effect',
            href: '/agency',
          },
        ],
      },
    },
  },
  account: {
    title: 'Account',
    id: 'account',
    children: {
      settings: {
        groupTitle: 'Settings',
        pages: [
          {
            title: 'General',
            href: '/account/?pid=general',
          },
          {
            title: 'Security',
            href: '/account/?pid=security',
          },
          {
            title: 'Notifications',
            href: '/account/?pid=notifications',
          },
          {
            title: 'Billing',
            href: '/account/?pid=billing',
          },
        ],
      },
      signup: {
        // groupTitle: 'Sign up',
        pages: [
          {
            title: 'Sign up',
            href: '/signup',
          },
        ],
      },
      signin: {
        // groupTitle: 'Sign in',
        pages: [
          {
            title: 'Sign in',
            href: '/signin',
          },
        ],
      },
      password: {
        groupTitle: 'Password reset',
        pages: [
          {
            title: 'Simple',
            href: '/password-reset-simple',
          },
        ],
      },
      error: {
        groupTitle: 'Error',
        pages: [
          {
            title: 'Simple',
            href: '/not-found',
          },
          {
            title: 'Cover',
            href: '/not-found-cover',
          },
        ],
      },
    },
  },

};


const Minimal = ({ themeMode, children,themeToggler, className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
        <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} themeMode={themeMode} themeToggler={themeToggler} />
      <Divider />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Minimal;
