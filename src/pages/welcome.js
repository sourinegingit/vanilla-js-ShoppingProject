import { El } from "../el/El"
const welcome=()=>{
    return El({
        element:"div",
        id:"welcome",
        className:"w-screen h-screen flex flex-col justify-end overflow-y-hidden",

    })
}
export default welcome;