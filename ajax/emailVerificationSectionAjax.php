<?php

require_once ('../../../config/config.inc.php');
require_once ('../../../init.php');
require_once ('../frank.php');
require_once ('../api/FrankApi.php');


$frank_api = new FrankApi();

$contactDetails = json_decode($frank_api->getRequests('stores/myprofile/' . Configuration::get('FRANK_ID'), Configuration::get('FRANK_TOKEN')), true);
if ($contactDetails['status'] === 200) {
    echo json_encode($contactDetails['data']['emailAddresses']);
    exit;
} else {
    $res = ['status' => 400, 'message' => 'some thing went wrong'];
    $res = json_encode($res);
    echo $res;
    exit;
}