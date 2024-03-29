<?php

require_once('../../../config/config.inc.php');
require_once('../../../init.php');
require_once('../frank.php');
require_once('../api/FrankApi.php');


$frank_api = new FrankApi();

if (
    !empty($_POST['store_name']) &&
    !empty($_POST['first_name']) &&
    !empty($_POST['last_name']) &&
    !empty($_POST['email']) &&
    !empty($_POST['address']) &&
    !empty($_POST['country']) &&
    !empty($_POST['city']) &&
    !empty($_POST['zip']) &&
    !empty($_POST['country_code']) &&
    !empty($_POST['mobile']) &&
    !empty($_POST['store_lat']) &&
    !empty($_POST['store_lng'])) {
    $params = array(
        'name' => $_POST['store_name'],
        'firstName' => $_POST['first_name'],
        'lastName' => $_POST['last_name'],
        'email' => $_POST['email'],
        'address1' => $_POST['address'],
        'country' => $_POST['country'],
        'city' => $_POST['city'],
        'zipCode' => $_POST['zip'],
        'countryCode' => $_POST['country_code'],
        'mobile' => $_POST['mobile'],
        'location1' => ['coordinates' => [(float)$_POST['store_lng'], (float)$_POST['store_lat'] ], 'type' => 'Point'],
    );
    // echo json_encode($params);
    $res = $frank_api->doCurlRequest('stores/updateContactDetails', $params, Configuration::get('FRANK_TOKEN'));
    echo $res;
    
    exit;
} else {
    $res = ['status' => 400, 'message' => 'parameters are missing'];
    $res = json_encode($res);
    echo $res;
    exit;
}
