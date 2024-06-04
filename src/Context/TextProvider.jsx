// import React, {useState} from 'react';
// import {createContext, useContext} from 'react';
//
//
//  export const TextContext = createContext(null)
//
//
// export const useTextContext = function () {
//      return useContext(TextContext)
// }
//
//
//
//
// function TextProvider({children}) {
//     const [text, setText] = useState("old text");
//
//     function changeText() {
//
//         setText("new text");
//     }
//
//     const value = {
//         text,
//         changeText,
//     }
//
//     return (
//       <TextContext.Provider value={value}>
//           {children}
//       </TextContext.Provider>
//     );
//
// }
//
//
// export default TextProvider;