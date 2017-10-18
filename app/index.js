import './style.css';
import $ from 'jquery';
import moment from 'moment';
import * as datetimepicker from '../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min';

console.log(datetimepicker);
$.fn.datetimepicker = datetimepicker;

const port = 3000;
const apiUri = `http://localhost:${port}`;

// pobieranie danych po kliknieciu confirm
window.onload = () => {
    $('#datetimepicker').datetimepicker({
        defaultDate: "11/1/2013",
        disabledDates: [
            moment("12/25/2013"),
            new Date(2013, 11 - 1, 21),
            "11/22/2013 00:53"
        ]
    });
    $(".confirmButton").click(function () {
        // pobranie danych z radio
        let Woman = document.getElementById("Woman").checked = true;
        let Man = document.getElementById("Man").checked = true;
    });
}


// pobranie danych z imputa


/*
$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    date_input.datepicker(options);
})
*/