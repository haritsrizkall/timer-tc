$(document).ready(function () {
    let time = 180000;
    let timeNow;

    $('#pause-div').hide();

    $('#play-button').click(function () {
        $('#play-div').hide();
        $('#pause-div').show();

        if (time === 0) {
            $('#pause-div').hide();
            $('#play-div').show();

            clearInterval(timeNow);


            time = 180000;
            $('#time-holder').text('00:03:00');
        } else {

            timeNow = setInterval(() => {
                time = time - 1000;
                let timeString = '';

                // milisec to sec
                let timeStandard = time / 1000;

                // konversi 
                let timeHours = Math.floor(timeStandard / 3600);
                let timeMinutes = Math.floor((timeStandard % 3600) / 60);
                let timeSeconds = Math.floor(timeStandard % 3600 % 60);

                if (timeHours < 10) {
                    timeString = timeString + '0';
                }

                timeString = timeString + timeHours.toString() + ':';
                if (timeMinutes < 10) {
                    timeString = timeString + '0';
                }
                timeString = timeString + timeMinutes.toString() + ':';
                if (timeSeconds < 10) {
                    timeString = timeString + '0';
                }
                timeString = timeString + timeSeconds.toString();

                $('#time-holder').text(timeString);

                if (time === 0) {
                    $('#pause-div').hide();
                    $('#play-div').show();

                    clearInterval(timeNow);


                    time = 180000;
                    alert("WAKTU HABIS LUR!");
                    $('#time-holder').text('00:00:00');
                }

            }, 1000);

            // timeNow = setInterval(() => {
            //   time = time - 1000;
            //   console.log(time);
            // }, 1000);

            // $('#time-holder').text('hello world')
        }


    });

    $('#pause-div').click(function () {
        $('#pause-div').hide();
        $('#play-div').show();

        clearInterval(timeNow);
    });

    // show reset modal
    $('#reset-modal-button').click(function () {
        $('#reset-modal').modal('toggle')
    });

    //reset timer

    $('#reset-timer').click(function () {
        $('#play-div').show();
        $('#pause-div').hide();

        clearInterval(timeNow);
        $('#time-holder').text('00:00:00');
        time = 180000;
        $('#reset-modal').modal('hide');
    });

    //show edit modal
    $('#edit-modal-button').click(function () {
        $('#edit-timer-modal').modal('toggle');
    });

    $('#edit-timer').click(function () {
        $('#play-div').show();
        $('#pause-div').hide();
        $('#edit-timer-modal').modal('hide');

        let timeInput = '';

        clearInterval(timeNow);

        let inputHours = parseInt($('#edit-timer-hour').val());
        let inputMinutes = parseInt($('#edit-timer-minute').val());
        let inputSeconds = parseInt($('#edit-timer-second').val());

        if(inputHours < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-hour').val() + ":";
        if(inputMinutes < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-minute').val() + ":";
        if(inputSeconds < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-second').val();

        $('#time-holder').text(timeInput);

        time = ((inputHours * 3600) + (inputMinutes * 60) + inputSeconds) * 1000;

        $('#edit-timer-hour').val("");
        $('#edit-timer-minute').val("");
        $('#edit-timer-second').val("");
    })
});


/*KIRI*/
$(document).ready(function () {
    let time = 10000;
    let timeNow;

    $('#pause-div-kiri').hide();

    $('#play-button-kiri').click(function () {
        $('#play-div-kiri').hide();
        $('#pause-div-kiri').show();

        if (time === 0) {
            $('#pause-div-kiri').hide();
            $('#play-div-kiri').show();

            clearInterval(timeNow);


            time = 10000;
            $('#time-holder-kiri').text('00:00:10');
        } else {

            timeNow = setInterval(() => {
                time = time - 1000;
                let timeString = '';

                // milisec to sec
                let timeStandard = time / 1000;

                // konversi 
                let timeHours = Math.floor(timeStandard / 3600);
                let timeMinutes = Math.floor((timeStandard % 3600) / 60);
                let timeSeconds = Math.floor(timeStandard % 3600 % 60);

                if (timeHours < 10) {
                    timeString = timeString + '0';
                }

                timeString = timeString + timeHours.toString() + ':';
                if (timeMinutes < 10) {
                    timeString = timeString + '0';
                }
                timeString = timeString + timeMinutes.toString() + ':';
                if (timeSeconds < 10) {
                    timeString = timeString + '0';
                }
                timeString = timeString + timeSeconds.toString();

                $('#time-holder-kiri').text(timeString);

                if (time === 0) {
                    $('#pause-div-kiri').hide();
                    $('#play-div-kiri').show();

                    clearInterval(timeNow);


                    time = 10000;
                    alert("WAKTU HABIS LUR!");
                    $('#time-holder-kiri').text('00:00:00');
                }

            }, 1000);

            // timeNow = setInterval(() => {
            //   time = time - 1000;
            //   console.log(time);
            // }, 1000);

            // $('#time-holder').text('hello world')
        }


    });

    $('#pause-div-kiri').click(function () {
        $('#pause-div-kiri').hide();
        $('#play-div-kiri').show();

        clearInterval(timeNow);
    });

    // show reset modal
    $('#reset-modal-button-kiri').click(function () {
        $('#reset-modal-kiri').modal('toggle')
    });

    //reset timer

    $('#reset-timer-kiri').click(function () {
        $('#play-div-kiri').show();
        $('#pause-div-kiri').hide();

        clearInterval(timeNow);
        $('#time-holder-kiri').text('00:00:00');
        time = 10000;
        $('#reset-modal-kiri').modal('hide');
    });

    //show edit modal
    $('#edit-modal-button-kiri').click(function () {
        $('#edit-timer-modal-kiri').modal('toggle');
    });

    $('#edit-timer-kiri').click(function () {
        $('#play-div-kiri').show();
        $('#pause-div-kiri').hide();
        $('#edit-timer-modal-kiri').modal('hide');

        let timeInput = '';

        clearInterval(timeNow);

        let inputHours = parseInt($('#edit-timer-hour-kiri').val());
        let inputMinutes = parseInt($('#edit-timer-minute-kiri').val());
        let inputSeconds = parseInt($('#edit-timer-second-kiri').val());

        if(inputHours < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-hour-kiri').val() + ":";
        if(inputMinutes < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-minute-kiri').val() + ":";
        if(inputSeconds < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-second-kiri').val();

        $('#time-holder-kiri').text(timeInput);

        time = ((inputHours * 3600) + (inputMinutes * 60) + inputSeconds) * 1000;

        $('#edit-timer-hour-kiri').val("");
        $('#edit-timer-minute-kiri').val("");
        $('#edit-timer-second-kiri').val("");
    })
});


/*KANAN*/

$(document).ready(function () {
    let time = 10000;
    let timeNow;

    $('#pause-div-kanan').hide();

    $('#play-button-kanan').click(function () {
        $('#play-div-kanan').hide();
        $('#pause-div-kanan').show();

        if (time === 0) {
            $('#pause-div-kanan').hide();
            $('#play-div-kanan').show();

            clearInterval(timeNow);


            time = 10000;
            $('#time-holder-kanan').text('00:03:00');
        } else {

            timeNow = setInterval(() => {
                time = time - 1000;
                let timeString = '';

                // milisec to sec
                let timeStandard = time / 1000;

                // konversi 
                let timeHours = Math.floor(timeStandard / 3600);
                let timeMinutes = Math.floor((timeStandard % 3600) / 60);
                let timeSeconds = Math.floor(timeStandard % 3600 % 60);

                if (timeHours < 10) {
                    timeString = timeString + '0';
                }

                timeString = timeString + timeHours.toString() + ':';
                if (timeMinutes < 10) {
                    timeString = timeString + '0';
                }
                timeString = timeString + timeMinutes.toString() + ':';
                if (timeSeconds < 10) {
                    timeString = timeString + '0';
                }
                timeString = timeString + timeSeconds.toString();

                $('#time-holder-kanan').text(timeString);

                if (time === 0) {
                    $('#pause-div-kanan').hide();
                    $('#play-div-kanan').show();

                    clearInterval(timeNow);


                    time = 10000;
                    alert("WAKTU HABIS LUR!");
                    $('#time-holder-kanan').text('00:00:00');
                }

            }, 1000);

            // timeNow = setInterval(() => {
            //   time = time - 1000;
            //   console.log(time);
            // }, 1000);

            // $('#time-holder').text('hello world')
        }


    });

    $('#pause-div-kanan').click(function () {
        $('#pause-div-kanan').hide();
        $('#play-div-kanan').show();

        clearInterval(timeNow);
    });

    // show reset modal
    $('#reset-modal-button').click(function () {
        $('#reset-modal').modal('toggle')
    });

    //reset timer

    $('#reset-timer').click(function () {
        $('#play-div-kanan').show();
        $('#pause-div-kanan').hide();

        clearInterval(timeNow);
        $('#time-holder-kanan').text('00:00:00');
        time = 10000;
        $('#reset-modal').modal('hide');
    });

    //show edit modal
    $('#edit-modal-button').click(function () {
        $('#edit-timer-modal').modal('toggle');
    });

    $('#edit-timer').click(function () {
        $('#play-div-kanan').show();
        $('#pause-div').hide();
        $('#edit-timer-modal').modal('hide');

        let timeInput = '';

        clearInterval(timeNow);

        let inputHours = parseInt($('#edit-timer-hour').val());
        let inputMinutes = parseInt($('#edit-timer-minute').val());
        let inputSeconds = parseInt($('#edit-timer-second').val());

        if(inputHours < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-hour').val() + ":";
        if(inputMinutes < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-minute').val() + ":";
        if(inputSeconds < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-second').val();

        $('#time-holder-kanan').text(timeInput);

        time = ((inputHours * 3600) + (inputMinutes * 60) + inputSeconds) * 1000;

        $('#edit-timer-hour').val("");
        $('#edit-timer-minute').val("");
        $('#edit-timer-second').val("");
    })
});
