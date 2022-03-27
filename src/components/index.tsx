import { Codeblock } from './Codeblock';
import { Modal } from './Modal';

export { Codeblock, Modal };

// Modal props: { width, height, element, modal, setModal }
// ? Usage example
// ! Modal Component
// <Modal
//   width="500"
//   height="300"
//   element={<div>Example!</div>}
//   modal={ModalState}
//   setModal={SetModalState Function}
// />
//
// ! Codeblock Component
// <Codeblock
//           body={`const num = 0;
// console.log(num);
// const test = test;`}
//           lang="javascript"
//         />
