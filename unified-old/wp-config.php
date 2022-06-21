<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'unifield' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'z^.$bxW3&`L nN#lm?ru=5U%{][)jjXKm!#$mFhUE~=pvdR=_P*vCq2CoX(VBtzi' );
define( 'SECURE_AUTH_KEY',  '(f#( +eyYsWT3QExkI;47L[{qGLNRM(j# sB:u|9* Iz,ndvn-}z0FH]N~S5wSJC' );
define( 'LOGGED_IN_KEY',    'Y8OBk)65GZOh^Oi@=:${m*x>t)0hz){Ov6^zQuYElF<TjR>L#L[]588<[slmqCtw' );
define( 'NONCE_KEY',        '08d/f{7|8:>vs!0(x7K8C9@+dY8r5[zurjceW}*^AJ6q$[kN)nh m.gT?dP<%a8Q' );
define( 'AUTH_SALT',        'kFEe0<}ZS9y/xRyccYsVQI@A^o~Y`/#L{g2YMV=%BFV>?oDxazVdlqT6{;;8Jl:=' );
define( 'SECURE_AUTH_SALT', '-BAG@t:!=2b!!_daXcx}#Pk-v6]S&dt;`zK|3l:H,i<k5]mWXu,0]Jg=zjY/3(mO' );
define( 'LOGGED_IN_SALT',   ' 9hULYKm6)K39cdLO;3.]w@!@*7R8Wx2v^]e3/.iah4J8^q8`0b^Z9gsgEs4fzi&' );
define( 'NONCE_SALT',       '(Z!}8^N<UQFc0C49jQ9@(Vf;+It@#ie[]<@Vk|uKNW??LGQ 2U0o!ecqQ`XU@e#Q' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
