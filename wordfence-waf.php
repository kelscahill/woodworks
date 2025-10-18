<?php
// Before removing this file, please verify the PHP ini setting `auto_prepend_file` does not point to this.

// This file was the current value of auto_prepend_file during the Wordfence WAF installation (Sat, 18 Oct 2025 00:15:38 +0000)
if (file_exists('/Applications/Local.app/Contents/Resources/extraResources/local-bootstrap.php')) {
	include_once '/Applications/Local.app/Contents/Resources/extraResources/local-bootstrap.php';
}
if (file_exists(__DIR__.'/wp-content/plugins/wordfence/waf/bootstrap.php')) {
	define("WFWAF_LOG_PATH", __DIR__.'/wp-content/wflogs/');
	include_once __DIR__.'/wp-content/plugins/wordfence/waf/bootstrap.php';
}