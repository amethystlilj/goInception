(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{420:function(e,t,n){"use strict";n.r(t);var s=n(44),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"result-set-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#result-set-description"}},[e._v("#")]),e._v(" Result set description")]),e._v(" "),n("p",[e._v("The information returned by goInception is described as follows:")]),e._v(" "),n("ul",[n("li",[e._v("When there is an error in the basic information submitted to goInception, such as incomplete source information, a call exception will be returned, including error code and error information. The exception is the same as that of the MySQL server, and it can be handled in the same way as MySQL.")]),e._v(" "),n("li",[e._v("During the audit, it will be returned to the client in the form of a query table. Same as mysql native result set. In the returned result set, each row of data is a submitted SQL statement. GoInception internally disassembles all submitted statement blocks one by one and returns them in the form of a result set. For each statement, what is the problem or status? The result is clear at a glance.")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" If there is a grammatical error in the statement, it will not continue. Because goInception has been unable to parse the following statement correctly, the multiple lines that have been checked before will return normally, and the subsequent error statements will be merged into one line and returned.")]),e._v(" "),n("p",[e._v("Result set to return to normal following structure:")]),e._v(" "),n("ol",[n("li",[n("code",[e._v("order_id")]),e._v(" sql sequence number, starting from 1")]),e._v(" "),n("li",[n("code",[e._v("stage")]),e._v(" The stage that the current statement has reached, including NONE, CHECKED, EXECUTED, BACKUP\n"),n("ul",[n("li",[e._v("NONE means that no processing has been done.")]),e._v(" "),n("li",[e._v("CHECKED means this statement has been reviewed.")]),e._v(" "),n("li",[e._v("EXECUTED means that it has been executed. If the execution fails, it is also expressed in this state.")]),e._v(" "),n("li",[e._v("BACKUP means that the current is the backup phase.")])])]),e._v(" "),n("li",[n("code",[e._v("error_level")]),e._v(" Error level. If the return value is not 0, it means there is an error. 0 means approved. 1 means warning, can be forced to skip to execute, 2 means serious error, unable to execute")]),e._v(" "),n("li",[n("code",[e._v("stage_status")]),e._v(" Phase status description, used to indicate the success or failure of the phase\n"),n("ul",[n("li",[e._v("If the review is successful, return "),n("strong",[e._v("Audit completed")])]),e._v(" "),n("li",[e._v("If the execution is successful, return "),n("strong",[e._v("Execute Successfully")]),e._v(", otherwise return "),n("strong",[e._v("Execute failed")])]),e._v(" "),n("li",[e._v("If the backup is successful, it returns "),n("strong",[e._v("Backup successfully")]),e._v(", otherwise it returns "),n("strong",[e._v("Backup failed")]),e._v("，")])])]),e._v(" "),n("li",[n("code",[e._v("error_message")]),e._v(' Error message. Used to indicate error information, including all error information in a statement, separated by a newline character. If there is no error, NULL is returned. For execution errors, "execute: specific reasons for execution errors" will be appended. If it is a backup error, "backup: specific reasons for backup errors" will be appended.')]),e._v(" "),n("li",[n("code",[e._v("sql")]),e._v(" Current sql statement")]),e._v(" "),n("li",[n("code",[e._v("affected_rows")]),e._v(" Returns the estimated number of affected rows, and the actual number of affected rows is displayed during execution.")]),e._v(" "),n("li",[n("code",[e._v("sequence")]),e._v(" This column is used for the backup function and corresponds to the value of the opid_time column in the "),n("strong",[e._v("$$Inception_backup_information$$")]),e._v(" table.\nThis is the entry point for the front-end application to roll back for a certain operation. Each statement will generate a sequence number when it is executed. If you want to roll back, use this value to find the corresponding rollback statement from the backup table and execute it. See "),n("RouterLink",{attrs:{to:"/backup.html"}},[e._v("Backup Function")]),e._v(" for details")],1),e._v(" "),n("li",[n("code",[e._v("backup_dbname")]),e._v(" Returns which database of the backup server the backup information corresponding to the current statement is stored in. This is a string type value, only for the statement that needs to be backed up. The database name consists of the IP address, port, and source database name, connected by underscores. See "),n("RouterLink",{attrs:{to:"/backup.html"}},[e._v("Backup Function")]),e._v(" for details")],1),e._v(" "),n("li",[n("code",[e._v("execute_time")]),e._v(" Indicates the execution time of the statement, in seconds, accurate to two decimal places. The column type is a string, which may need to be converted to a DOUBLE value when used. If it is only audited but not executed, the value returned by this column is 0.")]),e._v(" "),n("li",[n("code",[e._v("sqlsha1")]),e._v(" Used to store the HASH value of the current statement. If there is a value in the returned information, it means that the statement will use OSC when it is executed, because there will be a separate audit operation before it is executed, and the upper layer can already get the value at this time After the review is passed, the statement will not change, of course this value will not change, then you can use this value to view the progress of OSC execution and other information during execution, for example: *D0210DFF35F0BC0A7C95CD98F5BCD4D9B0CA8154. For other information, please refer to "),n("RouterLink",{attrs:{to:"/osc.html"}},[e._v("DDL Changes :pt-osc")]),e._v(" and "),n("RouterLink",{attrs:{to:"/ghost.html"}},[e._v("DDL changes: gh-ost")])],1),e._v(" "),n("li",[n("code",[e._v("backup_time")]),e._v(" The time it took to generate a backup of the current SQL.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);