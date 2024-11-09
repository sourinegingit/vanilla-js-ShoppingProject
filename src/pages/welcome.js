import { El } from "../el/El"
import { router } from "../routes/router";

export const welcome=()=>{

    return El({
        id:"1",
        element:"div",
        className:"text-3xl",
        children:["welcome"]
    })
}
export default welcome;