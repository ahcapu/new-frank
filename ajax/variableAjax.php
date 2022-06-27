<?php

require_once ('../../../config/config.inc.php');
require_once ('../../../init.php');
require_once ('../frank.php');

Configuration::get('FRANK_TOKEN');
Configuration::get('FRANK_ID');

if (Configuration::get('FRANK_TOKEN') && Configuration::get('FRANK_ID')) {
    $variables = array('frank_token' => Configuration::get('FRANK_TOKEN'), 'frank_id' => Configuration::get('FRANK_ID'));
//    print_r(json_encode($variables));
    echo json_encode(array('status' => 200, 'data' => $variables));
    exit();
} else {
    echo json_encode(array('status' => 400, 'message' => 'Token or ID not exists'));
    exit();
}