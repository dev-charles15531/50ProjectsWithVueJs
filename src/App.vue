<template>
    <div class="w-full">
        <nav class="w-full px-6 py-3 bg-gradient-to-r from-lime-600 to-green-500 text-xl font-bold text-red-50">
            Countdown
        </nav>
        <div class="w-full flex justify-center mt-12">
            <div class="w-full md:w-3/5 bg-gradient-to-r from-pink-300 to-purple-300 p-4 border rounded">
                <div class="flex justify-evenly">
                    <div>
                        <div class="h-24 w-24 border rounded opacity-50 bg-pink-100"> <Span>{{days}}</Span></div>
                        <div>
                            <h2 class="text-2xl font-black text-center text-black text-opacity-50">Days</h2>
                        </div>
                    </div>
                    <div>
                        <div class="h-24 w-24 border rounded opacity-50 bg-pink-100"> <Span>{{hours}}</Span></div>
                        <div>
                            <h2 class="text-2xl font-black text-center text-black text-opacity-50">Hours</h2>
                        </div>
                    </div>
                    <div>
                        <div class="h-24 w-24 border rounded opacity-50 bg-pink-100"> <Span>{{minutes}}</Span></div>
                        <div>
                            <h2 class="text-2xl font-black text-center text-black text-opacity-50">Minutes</h2>
                        </div>
                    </div>
                    <div>
                        <div class="h-24 w-24 border rounded opacity-50 bg-pink-100"> <Span>{{seconds}}</Span></div>
                        <div>
                            <h2 class="text-2xl font-black text-center text-black text-opacity-50">Seconds</h2>
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