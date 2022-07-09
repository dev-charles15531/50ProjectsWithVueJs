import { unref, ref } from "vue";

export function useIcon(arg) {

    const decodedStr = ref("")
    var variable = unref(arg.toLowerCase())

    if (variable.includes("cloud")) {
        decodedStr.value = "cloud"
    }
    else if(variable.includes("rain") || variable.includes("drizzle")) {
        decodedStr.value = "rainy"
    }
    else if(variable.includes("sun")) {
        decodedStr.value = "sunny"
    }
    else if(variable.includes("snow")) {
        decodedStr.value = "cloudy_snowing"
    }
    else if(variable.includes("fog")) {
        decodedStr.value = "foggy"
    }
    else if(variable.includes("thunderstorm")) {
        decodedStr.value = "thunderstorm"
    }
    else {
        decodedStr.value = "filter_drama"
    }

    return { decodedStr }
}