<template>
    <div class="w-full">
        <nav class="w-full px-6 py-3 bg-gradient-to-r from-rose-400 to-fuchsia-400 text-xl font-bold text-red-50">
            Countdown
        </nav>
        <div class="w-full flex justify-center mt-24 px-1 md:px-2">
            <div class="w-full md:w-3/5 bg-gradient-to-r from-pink-300 to-purple-300 px-1 py-2 md:p-4 border rounded">
                <div class="text-2xl text-center text-gray-700 mb-4 font-black opacity-70">Countdown to the end of <b>50 Days Of Code</b> </div>
                <div class="flex justify-evenly">
                    <div>
                        <div class="h-20 w-20 md:h-24 md:w-24 border rounded opacity-50 bg-pink-100 flex justify-center items-center">
                            <Span class="text-5xl font-black">{{days}}</Span>
                        </div>
                        <div>
                            <h2 class="text-xl md:text-2xl font-black text-center text-black text-opacity-50">Days</h2>
                        </div>
                    </div>
                    <div>
                        <div class="h-20 w-20 md:h-24 md:w-24 border rounded opacity-50 bg-pink-100 flex justify-center items-center">
                            <Span class="text-5xl font-black">{{hours}}</Span>
                        </div>
                        <div>
                            <h2 class="text-xl md:text-2xl font-black text-center text-black text-opacity-50">Hours</h2>
                        </div>
                    </div>
                    <div>
                        <div class="h-20 w-20 md:h-24 md:w-24 border rounded opacity-50 bg-pink-100 flex justify-center items-center">
                            <Span class="text-5xl font-black">{{minutes}}</Span>
                        </div>
                        <div>
                            <h2 class="text-xl md:text-2xl font-black text-center text-black text-opacity-50">Minutes</h2>
                        </div>
                    </div>
                    <div>
                        <div class="h-20 w-20 md:h-24 md:w-24 border rounded opacity-50 bg-pink-100 flex justify-center items-center">
                            <Span class="text-5xl font-black">{{seconds}}</Span>
                        </div>
                        <div>
                            <h2 class="text-xl md:text-2xl font-black text-center text-black text-opacity-50">Seconds</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dateFrom: new Date("Jun 28, 2022 10:00:00").getTime(),
            interval: "",
            funcInterval: "",
            days: "",
            hours: "",
            minutes: "",
            seconds: "",
            elapseMssg: ""
        }
    },
    methods: {
        /**
         * Method to get the number of days to countdown
         */
        getDays() {
            return Math.floor(this.interval / (1000 * 60 * 60 * 24))
        },
        /**
         * Method to get the number of hours to countdown
         */
        getHours() {
            return Math.floor((this.interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        },
        /**
         * Method to get the number of minutes to countdown
         */
        getMinutes() {
            return Math.floor((this.interval % (1000 * 60 * 60)) / (1000 * 60))
        },
        /**
         * Method to get the number of seconds to countdown
         */
        getSeconds() {
            return Math.floor((this.interval % (1000 * 60)) / (1000))
        },
        /**
         * Method to start the countdown at interval of a second
         */
        startCountdown() {
            this.funcInterval = setInterval(() => {
                let dateTo = new Date().getTime()
                this.interval = this.dateFrom - dateTo

                this.days = this.getDays()
                this.hours = this.getHours()
                this.minutes = this.getMinutes()
                this.seconds = this.getSeconds()

                if(this.interval < 0) {
                    clearInterval(this.funcInterval)
                    this.elapseMssg = "Elap"
                }
            }, 1000);
        }
    },
    mounted () {
        this.startCountdown();
    },
}
</script>

<style lang="scss" scoped>

</style>