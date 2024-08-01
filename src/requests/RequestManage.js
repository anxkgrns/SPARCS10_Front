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
    var statusCode = response.status;
    if (statusCode === 204) {
        // return length=0 짜리 빈  리스트
        console.log("No trashcan nearby");
        return [];
    } else {
        return response.data.data;
    } // list 반환
}

export { getTrashcanList, getNearestTrashCan };