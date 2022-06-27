/**
 * 2007-2020 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 *  @author    PrestaShop SA <contact@prestashop.com>
 *  @copyright 2007-2020 PrestaShop SA
 *  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 *  International Registered Trademark & Property of PrestaShop SA
 *
 * Don't forget to prefix your containers with your own identifier
 * to avoid any conflicts with others containers.
 */


const deliveryAddress = document.querySelector('#delivery-address > div > section > div:nth-child(12) > div.col-md-6 > input');
const optional = document.querySelector("#delivery-address > div > section > div:nth-child(12) > div.col-md-3.form-control-comment");
optional.style.display = "none";
// console.log("name", deliveryAddress);

deliveryAddress.setAttribute("required", true);
// let address = document.querySelector('#delivery-address > div > section > div:nth-child(7)');
// address.style.display = 'block';
document.body.innerHTML += `

<!-- Modal for map -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
      </div>
      <div class="modal-body">
        <div class="pac-card" id="pac-card">
      <div>
        <div id="title">
          Select Pickup Location
        </div>
        <div id="type-selector" class="pac-controls">
          <input type="radio" name="type" id="changetype-all" checked="checked">
          <label for="changetype-all">All</label>
        </div>
        <div id="strict-bounds-selector" class="pac-controls">
          <input type="checkbox" id="use-strict-bounds" value="">
          <label for="use-strict-bounds">Strict Bounds</label>
        </div>
      </div>
      <div id="pac-container">
        <input id="pac-input" type="text"
            placeholder="Enter a location">
      </div>
    </div>
    <div id="map"></div>
    <div id="infowindow-content">
      <img src="" width="16" height="16" id="place-icon">
      <span id="place-name"  class="title"></span><br>
      <span id="place-address"></span>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" id="dismiss-button" class="btn btn-default" data-dismiss="modal">Select</button>
      </div>
    </div>
  </div>
</div>>
<!--Modal for Timeslot start-->
<div class="modal fade" id="myModali" role="dialog">';
<div class="modal-dialog">
    <!-- Modal content-->
<div class="modal-content">
<div class="modal-header">
     
<button type="button" class="close" data-dismiss="modal">&times;</button>
<h4 class="modal-title">Modal Header</h4>
</div>
<div class="modal-body"  >
<!--mbsc-schedule-wrapper mbsc-ios-->
<!--hookActionFrontControllerSetMedia-->
    <div mbsc-page class="demo-desktop-week-view">  
            <div id="demo-desktop-week-view" style="height: 370px"></div>

</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
</div>
<!--Modal for Timeslot End-->
<!--Modal for Timeslot-->

<div class="modal fade" id="time-slot-modal" tabindex="-1" role="dialog" aria-labelledby="time-slot-modal-label" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="time-slot-modal-label">Information for your delivery </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
           <div id="pac-container">
                <input id="map-address" type="text">
           </div>
           <div class="row">
               <div class="col-lg-4">
                    <ul class="pagination pagination-lg">
                        <li id="minus-disabled" class="page-item">
                            <a class="page-link" id="minus" href="#">&laquo;</a>
                        </li>
                        <li id="plus-disabled" class="page-item">
                            <a class="page-link" id="plus" href="#">&raquo;</a>
                        </li>
                    </ul>
               </div>
               <div class="col-lg-4">
                   <h4 id="date-increment"></h4>
               </div>
               <div class="col-md-4">
                <label for="">Jump to</label>
                <select name="time_slot_months" id="time-slot-months">
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
           </div>
           </div>
           <div class="row" id="dates-time-slot"></div>
<!--           <br>-->
<!--           <div class="row" id="slot-row-1"></div>-->
<!--           <br>-->
<!--           <div class="row" id="slot-row-2"></div>-->
<!--           <br>-->
<!--           <div class="row" id="slot-row-3"></div>-->
<!--           <br>-->
<!--           <div class="row" id="slot-row-4"></div>-->
<!--           <br>-->
<!--           <div class="row" id="slot-row-5"></div>-->
<!--           <br>-->
<!--           <div class="row" id="slot-row-6"></div>-->
<!--      </div>-->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;


let mapApiScriptTag = document.createElement("script");
mapApiScriptTag.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBXXUe1UPwcYKHx8L3drP_vJks8zl9kla4&libraries=places&callback=initMap";
document.body.appendChild(mapApiScriptTag);

let addressArr = [];
let lat;
let lng;

function initMap() {
    const componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    };
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13
    });
    let card = document.getElementById('pac-card');
    let input = document.getElementById('pac-input');

    let types = document.getElementById('type-selector');
    let strictBounds = document.getElementById('strict-bounds-selector');

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

    let autocomplete = new google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(
        ['address_components', 'geometry', 'icon', 'name']);

    let infowindow = new google.maps.InfoWindow();
    let infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    let marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        marker.setVisible(false);
        let place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        let address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;
        // console.log("place address " + place.address_components);
        // console.log(place.address_components[2].types[0]);
        for (let i = 0; i < place.address_components.length; i++) {
            let addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                let val = place.address_components[i][componentForm[addressType]];
                // document.getElementById(addressType).value = val;
                // console.log(i);
                addressArr[i] = val;
                // console.log(val);
            }
        }
        // place.address_components[i][componentForm[addressType]];
        // console.log('latitude ',marker.position.lat());
        //console.log('longitude ',marker.position.lng());
        // console.log(addressArr[0])
        lat = marker.position.lat();
        lng = marker.position.lng();

        infowindow.open(map, marker);
    });

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    function setupClickListener(id, types) {
        let radioButton = document.getElementById(id);
        radioButton.addEventListener('click', function () {
            autocomplete.setTypes(types);
        });
    }

    setupClickListener('changetype-all', []);
    // setupClickListener('changetype-address', ['address']);
    // setupClickListener('changetype-establishment', ['establishment']);
    // setupClickListener('changetype-geocode', ['geocode']);

    document.getElementById('use-strict-bounds')
        .addEventListener('click', function () {
            // console.log('Checkbox clicked! New state=' + this.checked);
            autocomplete.setOptions({strictBounds: this.checked});
        });
}

$(document).ready(function () {
    if (window.location.href.includes("/order")) {

        $('#myModal').ready(function () {
            $('[name="address1"]').keyup(function () {
                $('#myModal').modal('show');
                // $('#time-slot-modal').modal('show');
            })
            $('#dismiss-button').click(function () {

                document.getElementById('map-address').value = document.getElementById('pac-input').value;
                // console.log(input_address);
                let latLng = lat + "," + lng;
                let address = addressArr[1] ? addressArr[0] + ' ' + addressArr[1] : addressArr[0];
                $('[name="address1"]').val(address);
                $('[name="city"]').val(addressArr[2] ? addressArr[2] : '');
                $('[name="id_state"]').val(addressArr[4] ? addressArr[4] : 0);
                $('[name="postcode"]').val(addressArr[6] ? addressArr[6] : '');
                // $('[name="id_country"]').val(addressArr[5] ? addressArr[5] : 0);
                $('[name="address2"]').val(latLng);
                $('#myModali').modal('show');
            });
        });
    }
    let settings = {
        async: false,
        url: "http://localhost:3008/api/v1/timeslots/all",
        method: "GET",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQyMGIzZjk3ZmRkNTJiOTBjMGM2YjkiLCJlbWFpbCI6InNoYWtpci5ieWNvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYmY0OWJlZTg5YzhhMjYzMzFlMGIyMTI5N2ZkNDg4NzciLCJtb2JpbGUiOiIzMDAzNTAyMzQ1IiwiaWF0IjoxNjE0OTQwOTkxfQ.FvXq0YyS2yFvsUNa3_P3-QUnUCNfW-liPxggSR88u6I"
        },
      };
      let arr = [];
      $.ajax(settings).done(function (response) {
        let data = response.data[0];
        if (data) {
          if (data.daily) {
            let currentDate = new Date();
            let yyyy = currentDate.getFullYear();
            let mmm = (currentDate.getMonth() + 1).toString();
            mmm = mmm.length <=1 ? mmm = `0${mmm}` : mmm = `${mmm}`;
            let dd = currentDate.getDate();
  
            let startDate = `${yyyy}-${mmm}-${dd}`;
            startDate = new Date(startDate);
            let endDate = new Date(startDate.getTime() + 90 * 24 * 60 * 60 * 1000);
            
            // let arr = [];
  
            for (let index = 0; index < data.timeSlot.length; index++) {
              const element = data.timeSlot[index];
              let timeSlotFrom = element.from;
              let timeSlotTo = element.to;
  
              timeSlotFrom = timeSlotFrom.split(':');
              timeSlotTo = timeSlotTo.split(':');
  
              for (let iDate = startDate; iDate < endDate; iDate.setDate(iDate.getDate() + 1)) {
                iDate = new Date(iDate);
                let yyyy = iDate.getFullYear();
                let mm = iDate.getMonth();
                let dd = iDate.getDate();
                let start = new Date(yyyy, mm, dd, timeSlotFrom[0], timeSlotFrom[1]);
                let end = new Date(yyyy, mm, dd, timeSlotTo[0], timeSlotTo[1]);
                arr.push({ start, end, title: 'Flex', color: '#0c2087' });
              }
            // console.log(arr);
            
          }
          } else {
          for (let i = 0; i < data.dates.length; i++) {
            const datesArr = data.dates[i];
            let dates = datesArr;
            dates = new Date(dates);
            let yyyy = dates.getFullYear();
            let mm = dates.getMonth();
            let dd = dates.getDate();
            for (let j = 0; j < data.timeSlot.length; j++) {
              const timesArr = data.timeSlot[j];
              let timeSlotFrom = timesArr.from;
              let timeSlotTo = timesArr.to;
              timeSlotFrom = timeSlotFrom.split(':');
              timeSlotTo = timeSlotTo.split(':');
              let start = new Date(yyyy, mm, dd, timeSlotFrom[0], timeSlotFrom[1]);
              let end = new Date(yyyy, mm, dd, timeSlotTo[0], timeSlotTo[1]);
              data.service = 'Green';
              let color = '';
              if (data.service === 'Flex') {
                  color = '#0c2087';
              } else if (data.service === 'Classic') {
                color = '#fa7700';
              } else {
                color = '#033904';
              }
              arr.push({ start, end, title: data.service, color });
            }
            
          }
          }
        }
      });
      // console.log(arr);
      mobiscroll.util.http.getJson('https://trial.mobiscroll.com/events/?vers=5', function (events) {
      inst.setEvents(arr);
      }, 'jsonp');
});

var inst = mobiscroll.eventcalendar('#demo-desktop-week-view', {
    locale: mobiscroll.localeEn,
    theme: 'ios',
    themeVariant: 'light',
    view: {
        schedule: {type: 'week'}
    },
    onEventClick: function (event, inst) {
        mobiscroll.toast({
            message: `You have selected ${event.event.title}-------${event.event.start}-${event.event.end}`
        });
    }
});