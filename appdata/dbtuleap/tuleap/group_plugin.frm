TYPE=VIEW
query=(select `tuleap`.`service`.`service_id` AS `group_plugin_id`,`tuleap`.`service`.`group_id` AS `group_id`,`tuleap`.`plugin`.`id` AS `plugin_id`,`tuleap`.`service`.`short_name` AS `short_name` from `tuleap`.`service` join `tuleap`.`plugin` where ((`tuleap`.`service`.`short_name` = concat(\'plugin_\',`tuleap`.`plugin`.`name`)) and (`tuleap`.`service`.`is_active` = 1) and (`tuleap`.`service`.`is_used` = 1) and (`tuleap`.`service`.`group_id` <> 100)))
md5=6d842b9ce0067ddfa2ccb9c02df0a328
updatable=1
algorithm=0
definer_user=tuleapadm
definer_host=%
suid=2
with_check_option=0
timestamp=2022-11-03 14:06:23
create-version=1
source=(\n        SELECT service.service_id group_plugin_id,\n            service.group_id,\n            plugin.id plugin_id,\n            service.short_name\n        FROM service,plugin\n        WHERE service.short_name = CONCAT(\'plugin_\', plugin.name)\n            AND service.is_active=1\n            AND service.is_used=1\n            AND service.group_id != 100\n        )
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=(select `tuleap`.`service`.`service_id` AS `group_plugin_id`,`tuleap`.`service`.`group_id` AS `group_id`,`tuleap`.`plugin`.`id` AS `plugin_id`,`tuleap`.`service`.`short_name` AS `short_name` from `tuleap`.`service` join `tuleap`.`plugin` where ((`tuleap`.`service`.`short_name` = concat(\'plugin_\',`tuleap`.`plugin`.`name`)) and (`tuleap`.`service`.`is_active` = 1) and (`tuleap`.`service`.`is_used` = 1) and (`tuleap`.`service`.`group_id` <> 100)))
