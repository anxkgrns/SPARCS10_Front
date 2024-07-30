import axios from "axios";
import config from "../config";

export const getNearestTrashCan = async (latitude, longitude) => {
    const response = await axios.get(
        `${config.server}/api/trashcan/nearest?currentLatitude=${latitude}&currentLongitude=${longitude}`
    );
    console.log(response.data);
    return response.data;
}