import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async () : Promise<Billboard> => {

    const {data} = await axios(`${URL}`)

    return  data[0]
}

export default getBillboard