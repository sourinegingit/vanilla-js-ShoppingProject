export function El({element,children, eventListener, dataset, ...rest }) {
 const elem=document.createElement("div");
    for (const attr in rest) {
        elem[attr] = rest[attr];
    }
}