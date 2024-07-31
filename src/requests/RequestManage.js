import axios from "axios";
import qs from "qs";

axios.defaults.paramsSerializer = params => {
    return qs.stringify(params,);
}

const getTrashcanList = async (currentLat, currentLng) => {
    const params = {
        currentLatitude : Number(currentLat),
        currentLongitude : Number(currentLng)
    }
    const response = await axios.get(`/local/ewoo/trashcan/list`, {params});
    return response.data.data;
}

const getNearestTrashCan = async (latitude, longitude) => {
    const params = {
        currentLatitude: latitude,
        currentLongitude: longitude
    }

    const response = await axios.get( '/server/ewoo/trashcan/nearest', {params});
    return response.data;
}

export { getTrashcanList, getNearestTrashCan };