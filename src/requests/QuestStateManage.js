import axios from "axios";
import qs from "qs";

axios.defaults.paramsSerializer = params => {
    return qs.stringify(params,);
}


const getQuestStateList = async (/*username*/) => {
    var username = "test";
    
    const params = {
        userName : username
    }

    const response = await axios.get(`/server/ewoo/user-quest/today-progress/list`, {params});
    return response.data.data;
}

const getSuccessQuestCount = async (/*username*/) => {
    var username = "test";

    const params = {
        userName : username
    }

    const response = await axios.get(`/server/ewoo/user-quest/today-progress/count`, {params});
    return response.data.data; // int
}

const addSuccessQuest = async (questContent) => {
    var username = "test";

    const body = {
        user_name : username,
        quest_content : questContent,
        success_date: new Date().toISOString().slice(0, 10)
    }

    const response = await axios.post(`/server/ewoo/user-quest/success`, body);
    return response.data.data;
}

export { getQuestStateList, getSuccessQuestCount, addSuccessQuest };