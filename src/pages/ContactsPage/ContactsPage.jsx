// import React from 'react';
//
// import {useRef} from "react";
//
// function ContactsPage() {
//
//     const blockRef = useRef(null);
//
//     const countRef = useRef(0);
//
//
//
//     function changeBackground() {
//         // const block = document.getElementById('block');
//         //
//         // block.style.background= "blue";
//         blockRef.current.style.background = 'blue';
//     }
//
//
//     function increment() {}
//         countRef.current = countRef.current + 1;
//
//     function getTotal() {
//         console.log(countRef.current);
//     }
//     return (
//         <div>
//             <h2>Contacts Page - {countRef.current}</h2>
//                 <button onClick={increment}>+</button>
//                 <button onClick={getTotal}> total</button>
//             <div className="block" onClick={changeBackground} ref={blockRef}>
//
//             </div>
//         </div>
//     );
// };
//
// export default ContactsPage;