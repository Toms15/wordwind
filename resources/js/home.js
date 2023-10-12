/*
 * Import external dependencies
 */

/* 
 * Import local dependencies
 */
import Router from './routes';
import common from './routes/common';
import home from './routes/home';

/*
 * Populate Router instance with DOM routes
 */
const routes = new Router({
  // All pages
  common,
  // Home template
  home
});

/*
 * Load Events
 */
jQuery(document).ready(() => routes.loadEvents());