<?php
// This file is deployed and managed by Tuleap.
// DO NOT EDIT.

$GLOBALS['wgTuleapPreSharedKey'] = '8cc4f575fd1463333c2d3ade450ebd51e7ad74ccfd0a54c82fc43ce23b5104e2';

$GLOBALS['wgTuleapUrl'] = 'https://tuleap.swag-tp.duckdns.org';

$GLOBALS['wgServer'] = $GLOBALS['wgTuleapUrl'];

$GLOBALS['wgTuleapOAuth2Config'] = ['clientId' =>  'tlp-client-id-1', 'clientSecret' => 'tlp-oauth2-c1-1.14e51757cc5c3c0711c7a0c591757b4e5b44c6807eb6c4371ac15cc44b3cb629'];

$GLOBALS['wgPhpCli'] = '/opt/remi/php74/root/usr/bin/php';

$GLOBALS['wgHooks']['GetPreferences'][] = function ($user, array &$preferences): void {
    $preferences['language']['options'] = array_filter(
        $preferences['language']['options'],
        function (string $lang_code): bool {
            return isset(json_decode('{"en":0,"fr":1,"pt":2}', true, 2, JSON_THROW_ON_ERROR)[strtolower($lang_code)]);
        }
    );
};

