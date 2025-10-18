<?php
// Before removing this file, please verify the PHP ini setting `auto_prepend_file` does not point to this.

<<<<<<< HEAD
// This file was the current value of auto_prepend_file during the Wordfence WAF installation (Sat, 18 Oct 2025 00:58:22 +0000)
if (file_exists('/usr/share/kinsta_php_prepend/loader.php')) {
	include_once '/usr/share/kinsta_php_prepend/loader.php';
=======
// This file was the current value of auto_prepend_file during the Wordfence WAF installation (Sat, 18 Oct 2025 00:15:38 +0000)
if (file_exists('/Applications/Local.app/Contents/Resources/extraResources/local-bootstrap.php')) {
	include_once '/Applications/Local.app/Contents/Resources/extraResources/local-bootstrap.php';
>>>>>>> d0de15178c16dee7b9f7231a45c92aebc4b9328c
}
if (file_exists(__DIR__.'/wp-content/plugins/wordfence/waf/bootstrap.php')) {
	define("WFWAF_LOG_PATH", __DIR__.'/wp-content/wflogs/');
	include_once __DIR__.'/wp-content/plugins/wordfence/waf/bootstrap.php';
}