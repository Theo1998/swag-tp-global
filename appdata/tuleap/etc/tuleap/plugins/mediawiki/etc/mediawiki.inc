<?php
/**
 * Copyright (c) Enalean, 2013 - Present. All Rights Reserved.
 *
 * This file is a part of Tuleap.
 *
 * Tuleap is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Tuleap is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Tuleap. If not, see <http://www.gnu.org/licenses/>.
 */

// Mediawiki
$master_path = '/var/lib/tuleap/mediawiki/master' ;
$mwdata_path = '/var/lib/tuleap/mediawiki';
$mw_dbtype = 'mysql';
$projects_path = '/var/lib/tuleap/mediawiki/projects';
$config_path = '/etc/tuleap';
$src_path = '/usr/share/mediawiki-tuleap-123';
$mw_style_path = '/plugins/mediawiki/www/skins';
$enable_compatibility_view = false;

// Uncomment the variable below if you want to have one central DB for all
// Mediawiki instances (they will be split with table prefix)
//
// tuleap-cfg setup:mysql-init --host=<DB_HOST> --admin-password=<DB_ROOT_PASSWORD> --mediawiki=central
//
// $central_database = "tuleap_mediawiki";
