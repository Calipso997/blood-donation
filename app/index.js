import './style.css';
import $ from 'jquery';
import moment from 'moment';
import * as datetimepicker from '../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min';


const port = 3000;
const apiUri = `http://localhost:${port}`;


window.onload = () => {
    initializeForm();

};

// get data from radio after click confirm
$(".confirmButton").click(function () {
    // pobranie danych z radio
    const woman = document.getElementById("woman").checked;
    const man = document.getElementById("man").checked;
    console.log($("#dateTimePicker").find("input").val());
    console.log('man',man);
    console.log('woman',woman);

});

const initializeForm = function(){
    const dateTimePicker =  $('#dateTimePicker').datetimepicker({
        locale: 'pl',
        format: 'DD/MM/YYYY',
        maxDate: new Date
    });
    return dateTimePicker;
};
//$("#datetimepicker").data("datetimepicker").getDate();




