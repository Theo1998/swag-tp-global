<?php

// The default Tuleap domain
//
// This is used where ever the "naked" form of the Tuleap domain might be used.
// This is also used as the default name for the Web server using
// the standard https protocols. You can also define a specific port number (useful for test servers - default 443)
$sys_default_domain = 'tuleap.swag-tp.duckdns.org';

// Machine that hosts the mailing lists
//
// (This could also be the mail host if you have enough horsepower & bandwidth)
// /!\ Developers: if you need to change the default value, it will have an
// impact on the source code, grep is your friend.
$sys_lists_host = 'lists.tuleap.swag-tp.duckdns.org';

// Email address pointing to the Tuleap site administrators
$sys_email_admin = 'codendi-admin@tuleap.swag-tp.duckdns.org';

// Email address pointing to the Tuleap contacts
$sys_email_contact = 'codendi-contact@tuleap.swag-tp.duckdns.org';

// Address from which emails are sent
$sys_noreply = '"Tuleap" <noreply@tuleap.swag-tp.duckdns.org>';

// Name of the instance
//
// The name of the instance is used in various web pages and mails
$sys_name = 'Tuleap';

// Company/organization running the system (short)
//
// Short version or abbreviation commonly used
$sys_org_name = 'Tuleap';

// Company/organization running the system (long)
//
// Long/official/formal name
$sys_long_org_name = 'Tuleap';

// Prefix to add to the user's homedir
//
// This is a legacy value that should be left empty
$homedir_prefix = '';

// Prefix to add to the project's homedir
//
// This is a legacy value that should be left empty
$grpdir_prefix = '';

// When 0 mail sent to everybody can lead to information leak, non projects members can receive mails of private projects
$sys_mail_secure_mode = '0';

// Disable sub-domains (like svn.proj.example.com)
//
// This is a legacy configuration variable. Subdomains must be left deactivated
$sys_disable_subdomains = '1';

// Option to define how Tuleap will send emails
$email_transport = 'sendmail';

// Option to define the relay host used when email_transport is configured to 'smtp'. The used port must be provided here.
$email_relayhost = '';

