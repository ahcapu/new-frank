<?php

require_once('../../../config/config.inc.php');
require_once('../../../init.php');
require_once('../frank.php');
require_once('../api/FrankApi.php');


$frank_api = new FrankApi();

if (isset($_POST['warehouse_id'])) {
    $id = $_POST['warehouse_id'];
    $res = $frank_api->getRequests('stores/warehouse/' . $id, Configuration::get('FRANK_TOKEN'));
    echo $res;
    exit;
}
else {
    $res = ['status' => 400, 'message' => 'some thing went wrong'];
    $res = json_encode($res);
    echo $res;
    exit;
}