import { unref, ref } from "vue";

export function useDecodeWeatherVariable(arg) {

    const decodedStr = ref("")
    var variable = unref(arg)

    switch (variable) {
        case 0:
        case 1:
            decodedStr.value = "Clear sky"
            break;
    
        case 2:
            decodedStr.value = "Partly cloudly"
            break
        case 3:
            decodedStr.value = "Cloudy"
            break
        case 45:
        case 48:
            decodedStr.value = "Fog"
            break
        case 51:
        case 53:
        case 55:
            decodedStr.value = "Drizzle"
            break
        case 56:
        case 57:
            decodedStr.value = "Freezing drizzle"
            break
        case 61:
        case 63:
        case 65:
            decodedStr.value = "Rain"
            break
        case 66:
        case 67:
            decodedStr.value = "Freezing rain"
            break 
        case 71:
        case 73:
        case 75:
            decodedStr.value = "Snow"
            break 
        case 77:
            decodedStr.value = "Snow grains"
            break
        case 80:
        case 81:
        case 82:
            decodedStr.value = "Rain showers"
            break  
        case 85:
        case 86:
            decodedStr.value = "Snow showers"
            break
        case 95:
        case 96:
        case 99:
            decodedStr.value = "Thunderstorm"
            break
        default:
            break;
    }

    return { decodedStr }
}