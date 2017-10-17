import './style.css';
import $ from 'jquery';
import * as Bootstrap from 'bootstrap';
import moment from 'moment';

const port = 3000;
const apiUri = `http://localhost:${port}`;



window.onload = () => {

    $('#datetimepicker5').datetimepicker({
        defaultDate: "11/1/2013",
        disabledDates: [
            moment("12/25/2013"),
            new Date(2013, 11 - 1, 21),
            "11/22/2013 00:53"
        ]
    });
};




// pobranie danych z imputa


// pobranie danych z radio
let radioResult = document.getElementById("test").value;


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