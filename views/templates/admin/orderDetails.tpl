<div class="frank">
    <div class="container-header">
        <div class="frank-logo">
            <a href="#" style="color: #e07047;">Frank</a>
        </div>

        {if $get_order_by_id['isReturnOrder'] === true}
            {assign var="areturn" value="return-header-active"}
        {else}
            {assign var="ashipping" value="shipping-header-active"}
        {/if}

        <div class="frank-shipping">
            <a href="{$shipping}" class="{$ashipping}">Shipping</a>
        </div>
        <div class="frank-returns">
            <a href="{$returns}" class="{$areturn}"> Returns</a>
        </div>
        <div class="frank-chart">
            <a href="{$settings}"><i class="material-icons" style="color: #e07047;" id="settings">settings</i></a>
        </div>
        <div class="frank-settings">
            <a href="{$statics}"><i class="material-icons" style="color: #e07047;">assessment</i></a>
        </div>
    </div>
    <div class="detail-container">
        <div class="status-tab">
            <input id="order-status" type="hidden" value="{$get_order_by_id['status']}">
            <div id="order-placed-main" class="order-placed">
                <strong>1 <a href="#" id="order-placed-href" style="color: black; text-decoration: none;">Order
                        placed</a></strong>
                <p>{$get_order_by_id['createdAt']|date_format:"%m/%d/%Y"}</p>
            </div>
            <div id="sent-with-main" class="sent-with">
                <strong>2 <a href="#" id="sent-with-href" style="color: black; text-decoration: none;">Sent
                        with</a></strong>
                <div style="text-transform: capitalize">{$get_order_by_id['deliveryType']} by Frank</div>
            </div>
            <div id="delivery-in-progress-main" class="delivery-in-progress">
                <strong>3 <a href="#" id="delivery-in-progress-href"
                        style="color: black; text-decoration: none;">Delivery in progress</a></strong>
                <p>Flexible Date</p>
            </div>
            <div id="delivered-main" class="delivered">
                <strong>4 <a href="#" id="delivered-href"
                        style="color: black; text-decoration: none;">Delivered</a></strong>
                <p>{$get_order_by_id['dropoff']['address']|truncate:40}</p>
            </div>
        </div>
        <div class="row image-map" style="margin: 30px;">
            <div class="col-sm-2 product-image">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="item active">
                            <img class="d-block w-100" src="{$get_order_by_id['commodities'][0]['images'][0]}"
                                alt="First slide">
                            <h5>{$get_order_by_id['commodities'][0]['name']}</h5>
                            <div style="display: flex; flex: 1">
                                <h5>Product Price:
                                    {$get_order_by_id['commodities'][0]['commodity_price'] * $get_order_by_id['commodities'][0]['quantity']}
                                </h5>
                                &nbsp;
                                &nbsp;
                                <h5>Quantity: {$get_order_by_id['commodities'][0]['quantity']}</h5>
                            </div>
                        </div>
                        {foreach $get_order_by_id['commodities'] as $commodity}
                            <div class="item">
                                <img class="d-block w-100" src="{$commodity['images'][0]}" alt="{$commodity['name']}"
                                    width="100%">
                                <h5>{$commodity['name']}</h5>

                                <div style="display: flex; flex: 1">
                                    <h5>Product Price: {$commodity['commodity_price'] * $commodity['quantity']}</h5>
                                    &nbsp;
                                    &nbsp;
                                    <h5>Quantity: {$commodity['quantity']}</h5>
                                </div>
                            </div>
                        {/foreach}
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-sm-1"></div>
            {if $get_order_by_id['status'] !== 'delivered'}
                <div class="col-sm-9 order-map" id="map"></div>
            {/if}

            {if $get_order_by_id['status'] === 'delivered'}
                <div class="col-sm-3 delivery-information">
                    <strong>
                        <p>Delivery information</p>
                    </strong>
                    <div class="pickup">
                        <small>Shipping address</small><br>
                        {$get_order_by_id['pickup']['address']}
                    </div>
                    <br>
                    <div class="dropoff">
                        <small>Delivery address</small><br>
                        {$get_order_by_id['dropoff']['address']}
                    </div>
                </div>
                <div class="col-sm-3 delivery-image">
                    <strong>
                        <p>Message for {$get_order_by_id['transporter']['firstName']}
                            {$get_order_by_id['transporter']['lastName']}</p>
                    </strong>
                    <p>I've left the package at doorstep of <strong>{$get_order_by_id['contact']['name']}</strong></p>
                <img src="{$get_order_by_id['deliveredImages'][0]}" alt="" style="width: 200px;" />
            </div>
            <div class="col-sm-3 transporter">
                <strong>
                    <p>Transporter</p>
                </strong>
                <br><br><br>
                <img src="{$get_order_by_id['transporter']['picture']}" alt=""
                    style="width: 200px; border-radius: 50%;">
            </div>
            {/if}
            <input type="hidden" id="pickup_lat" value="{$get_order_by_id['pickup']['location'][1]}">
            <input type="hidden" id="pickup_lng" value="{$get_order_by_id['pickup']['location'][0]}">

            <input type="hidden" id="dropoff_lat" value="{$get_order_by_id['dropoff']['location'][1]}">
            <input type="hidden" id="dropoff_lng" value="{$get_order_by_id['dropoff']['location'][0]}">
        </div>
        <br />
        <br />
        <div class="row">
            <div class="col-sm-2 tracking-number">
                <div>
                    <span class="material-icons">account_balance_wallet</span>
                </div>
                <div>
                    <p>Tracking number</p>
                    <small>{$get_order_by_id['orderNumber']}</small>
                </div>
            </div>
            {if $get_order_by_id['status'] !== 'delivered'}
            <div class="col-sm-1"></div>
            <div class="col-sm-2 card" style="width: 100%;">
                <div class="card-header" style="font-weight: bold">Delivery Information</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" style="line-height: 0.9;">
                        <p>
                            <span style="font-weight: 500;">Order Date:</span>
                            {$get_order_by_id['createdAt']|date_format}
                        </p>
                        <p><span style="font-weight: 500;">Address:</span>
                            {$get_order_by_id['dropoff']['shortAddress']}
                        </p>
                    </li>
                    <hr />

                    <li class="list-group-item" style="font-weight: bold">Contact Details</li>
                    <li class="list-group-item"><span style="font-weight: 500;">Name:</span>
                        {$get_order_by_id['contact']['name']}</li>
                    <li class="list-group-item"><span style="font-weight: 500;">Phone:</span>
                        {if {$get_order_by_id['contact']['countryCode']}}
                        +{$get_order_by_id['contact']['countryCode']}{$get_order_by_id['contact']['number']}</li>
                    {else}
                    {$get_order_by_id['contact']['number']}
                    {/if}

                </ul>
            </div>

            <div class="col-sm-2 card" style="width: 100%;">
                <div class="card-header" style="font-weight: bold">Won't be home</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <p style="font-weight:bold">Contact Details</p>
                            <p>Name: {$get_order_by_id['contact']['name']}</p>
                            <p>Phone:
                                {if $get_order_by_id['contact']['countryCode']}
                                    +{$get_order_by_id['contact']['countryCode']}{$get_order_by_id['contact']['number']}
                                {else}
                                    {$get_order_by_id['contact']['number']}
                                {/if}
                            </p>
                        </li>
                        <li class="list-group-item">Delivery Instructions if absent</li>
                        <li class="list-group-item">Please leave the package in the front of the door</li>
                    </ul>
                </div>

                <div class="col-sm-4 card" style="width: 100%;">

                    <ul class="list-group list-group-flush">
                    </ul>
                </div>
            {/if}

        </div>
    </div>

    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXXUe1UPwcYKHx8L3drP_vJks8zl9kla4&libraries=places&callback=initMap"
type="text/javascript"></script>