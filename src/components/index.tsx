import { Codeblock } from './Codeblock';
import { Menu } from './Menu';
import { Modal } from './Modal';
import { Toggle } from './Toggle';

export { Codeblock, Modal, Menu, Toggle };

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
