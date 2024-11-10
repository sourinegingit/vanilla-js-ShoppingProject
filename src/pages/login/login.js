import { El } from "../../el/El";

const login = () => {
  return El({
    element: "div",
    id: "login-page",
    className:
      "w-[414px] h-screen border  border-black bg-gray-100 flex flex-col items-center overflow-x-hidden overflow-y-hidden",
    children: [
        El({
            element:"img",
            ig:"login-image",
            className: "mt-[132px] h-[81px] w-[54px]",
            src:"../../src/images/logo/logo-black.png"
        }),
        El({
            element: "p",
            id: "",
            className:
              "text-center mt-[118px] font-[700] text-[32px] w-[342px] h-[39px]",
            children: ["Login to Your Account"],
          }),
          El({
            element: "form",
            id: "login-form",
            className:
            "p-4 mt-[48px] w-full flex flex-col items-center justify-center gap-[20px]",
            children: [
                El({
                    element: "input",
                    type: "email",
                    name: "email",
                    placeholder: "✉ Email ...",
                    id: "login-userInput",
                    className: "border-none h-[40px]  rounded-lg bg-gray-300 w-full",
                    
                }),
                El({
                    element: "input",
                    type: "password",
                    name: "password",
                    placeholder: "🔒 password ...",
                    id: "login-userInput",
                    className: "border-none h-[40px]  rounded-lg bg-gray-300 w-full",
                    
                })
                ,El({
                  element:"label",
                  className:"text-[16px] mt-[19px] w-full flex items-center justify-center  gap-[10px] ",
                  children:["Remember Me",
                    El({
                      element:"input",
                      type:"checkbox",
                      name: "checkbox",
                      className:"border-2 border-gray-600 rounded-sm w-[16px] h-[16px] bg-gray-100 mr-2",
                 
                    })
                  ]
                })
            ],
          }),
    ],
  });
};

export default login;
