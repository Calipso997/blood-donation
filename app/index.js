import './style.css';
import $ from 'jquery';
import 'bootstrap';

const port = 3000;
const apiUri = `http://localhost:${port}`;


    $(function () {
        $('#datetimepicker5').datetimepicker({
            defaultDate: "11/1/2013",
            disabledDates: [
                moment("12/25/2013"),
                new Date(2013, 11 - 1, 21),
                "11/22/2013 00:53"
            ]
        });
    });
