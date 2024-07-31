import axios from "axios";
import qs from "qs";


const useMoney = async (moneyType, amount) => {
    var username = "test";

    const params = {
        userName : username,
        moneyType : moneyType,
        amount : amount
    }

    const response = await axios.post(`/server/ewoo/user/use-money`, {params});
    return response.data.data; // {coin : int, leaf : int}. 쓰고 남은 재화.
}

const getMoney = async (/*userName*/) => {
    var username = "test";

    const params = {
        userName : username
    }

    const response = await axios.get(`/server/ewoo/user/money`, {params});
    return response.data.data; // {coin : int, leaf : int}
}