var countDownDate = new Date().getTime() + 300480;

            var x = setInterval(function () {

                var now = new Date().getTime();
                var distance = countDownDate - now;

                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                minutes = "0" + minutes;

                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                document.getElementById("minute").innerHTML = minutes;
                document.getElementById("second").innerHTML = seconds;

                // If the count down is over, write some text
                if (distance <= 0) {
                    clearInterval(x);
                    alert("Expired");
                    document.getElementById("minute").innerHTML = "00";
                    document.getElementById("second").innerHTML = "00";
                }
            }, 1000);