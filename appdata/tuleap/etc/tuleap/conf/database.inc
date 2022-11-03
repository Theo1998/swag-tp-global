<?php

// Database server hostname or IP address
$sys_dbhost = 'dbtuleap';

// Database server port
$sys_dbport = 3306;

// Database name
$sys_dbname = 'tuleap';

// Database application user
$sys_dbuser = 'tuleapadm';

// Database application user password
$sys_dbpasswd = 'root';

// Database is accessed with TLS
//
// If set to '1' (one) connexions to DB are made through SSL.
// Note: Mysql server must be properly configured to accept SSL
// connection. Either with a grant for user or by forcing all
// connections to be in SSL with `require_secure_transport=ON`
$sys_enablessl = '0';

// Database TLS CA
$sys_db_ssl_ca = '/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem';

// Toggle verification of database certificate
$sys_db_ssl_verify_cert = '0';

// Adjust the maximum number of JOIN the mysql server can accept
$sys_server_join = 20;

