(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{407:function(t,e,a){"use strict";a.r(e);var _=a(44),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"backup-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-function"}},[t._v("#")]),t._v(" Backup Function")]),t._v(" "),a("p",[t._v("goInception support backup, at config.toml(at "),a("code",[t._v("[inc]")]),t._v(" block)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("parameters")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("backup_host")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Backup database ip address")])]),t._v(" "),a("tr",[a("td",[t._v("backup_port")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Backup database port")])]),t._v(" "),a("tr",[a("td",[t._v("backup_user")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("username to connect backup database")])]),t._v(" "),a("tr",[a("td",[t._v("backup_password")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("password to connect backup database")])]),t._v(" "),a("tr",[a("td",[t._v("backup_tls "),a("code",[t._v("v1.4.0")])]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Backup database ssl authentication method, please refer to the optional values (https://github.com/go-sql-driver/mysql/issues/899#issuecomment-443493840)")])])])]),t._v(" "),a("p",[t._v("Add "),a("code",[t._v("--backup=true")]),t._v(" option when execute SQL")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*--user=root;--password=root;--host=127.0.0.1;--port=3306;--execute=1;--backup=1;*/")]),t._v("\ninception_magic_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninception_magic_commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"backup-record-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-record-format"}},[t._v("#")]),t._v(" Backup Record Format")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("backup database naming format: "),a("code",[t._v("IP_PORT_{dbname}")]),t._v(", eg: "),a("code",[t._v("127_0_0_1_3306_test")])])]),t._v(" "),a("li",[a("p",[t._v("create backup information table on backup schema "),a("code",[t._v("$_$Inception_backup_information$_$")]),t._v(" to save execute SQL and rollback SQL")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Column")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("opid_time")]),t._v(" "),a("td",[t._v("varchar(50)")]),t._v(" "),a("td",[t._v("operation ID, formatting "),a("code",[t._v("{timestamp}_{thread_id}_{operation_id}")])])]),t._v(" "),a("tr",[a("td",[t._v("start_binlog_file")]),t._v(" "),a("td",[t._v("varchar(512)")]),t._v(" "),a("td",[t._v("binlog start filename")])]),t._v(" "),a("tr",[a("td",[t._v("start_binlog_pos")]),t._v(" "),a("td",[t._v("int(11)")]),t._v(" "),a("td",[t._v("binlog start position")])]),t._v(" "),a("tr",[a("td",[t._v("end_binlog_file")]),t._v(" "),a("td",[t._v("varchar(512)")]),t._v(" "),a("td",[t._v("binlog end filename")])]),t._v(" "),a("tr",[a("td",[t._v("end_binlog_pos")]),t._v(" "),a("td",[t._v("int(11)")]),t._v(" "),a("td",[t._v("binlog end position")])]),t._v(" "),a("tr",[a("td",[t._v("sql_statement")]),t._v(" "),a("td",[t._v("text")]),t._v(" "),a("td",[t._v("SQL execute")])]),t._v(" "),a("tr",[a("td",[t._v("host")]),t._v(" "),a("td",[t._v("varchar(64)")]),t._v(" "),a("td",[t._v("which IP address sql execute")])]),t._v(" "),a("tr",[a("td",[t._v("dbname")]),t._v(" "),a("td",[t._v("varchar(64)")]),t._v(" "),a("td",[t._v("which schema sql execute")])]),t._v(" "),a("tr",[a("td",[t._v("tablename")]),t._v(" "),a("td",[t._v("varchar(64)")]),t._v(" "),a("td",[t._v("which table sql execute")])]),t._v(" "),a("tr",[a("td",[t._v("port")]),t._v(" "),a("td",[t._v("int(11)")]),t._v(" "),a("td",[t._v("which port sql execute")])]),t._v(" "),a("tr",[a("td",[t._v("time")]),t._v(" "),a("td",[t._v("timestamp")]),t._v(" "),a("td",[t._v("when execute")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("varchar(20)")]),t._v(" "),a("td",[t._v("execution type")])])])])]),t._v(" "),a("li",[a("p",[t._v("the table in the backup database has the same table as name of execution table, table structure as blow.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Column")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("bigint")]),t._v(" "),a("td",[t._v("Auto_increment primary key")])]),t._v(" "),a("tr",[a("td",[t._v("rollback_statement")]),t._v(" "),a("td",[t._v("mediumtext")]),t._v(" "),a("td",[t._v("rollback SQL")])]),t._v(" "),a("tr",[a("td",[t._v("opid_time")]),t._v(" "),a("td",[t._v("varchar(50)")]),t._v(" "),a("td",[t._v("operation ID related")])])])])])]),t._v(" "),a("h4",{attrs:{id:"backup-process-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-process-details"}},[t._v("#")]),t._v(" Backup Process Details")]),t._v(" "),a("ol",[a("li",[t._v("Config backup database and turn on backup function before executing SQL.")]),t._v(" "),a("li",[t._v("Record binlog position and threadID before executing SQL one by one.")]),t._v(" "),a("li",[t._v("Execute SQL.")]),t._v(" "),a("li",[t._v("Record binlog position and threadID after executed SQL.")]),t._v(" "),a("li",[t._v("Start backup, decode binlog on remote server.")]),t._v(" "),a("li",[t._v("Create backup database on backup server.")]),t._v(" "),a("li",[t._v("Create backup information table, record execution information and binlog position.")]),t._v(" "),a("li",[t._v("Create backup table.")]),t._v(" "),a("li",[t._v("Decode binlog, build rollback SQL and then insert into backup information table.")])])])}),[],!1,null,null,null);e.default=v.exports}}]);