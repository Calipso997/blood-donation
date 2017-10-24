import './style.css';
import $ from 'jquery';
import moment from 'moment';
import * as datetimepicker from '../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min';

console.log(datetimepicker);
$.fn.datetimepicker = datetimepicker;

const port = 3000;
const apiUri = `http://localhost:${port}`;


window.onload = () => {
    $('#datetimepicker').datetimepicker({
        locale: 'pl'

    });
}

// get data from radio after click confirm
$(".confirmButton").click(function () {
    // pobranie danych z radio
    let Woman = document.getElementById("Woman").checked = true;
    let Man = document.getElementById("Man").checked = true;
});

$('#datetimepicker').data("DateTimePicker").FUNCTION()
$('#datetimepicker').data("DateTimePicker").date();

//$("#datetimepicker").data("datetimepicker").getDate();




