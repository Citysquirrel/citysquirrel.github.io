export const styleForMarkdown = `
  text-align: justify;
  
  a {
    color: var(--soft-blue-600);
    :hover {
      text-decoration: underline;
    }
  }

  p > code {
    background-color: var(--gray-300);
    padding: 2px 6px;
    border-radius: 4px;
  }

  pre {
    display: flex;
    width: 100%;
    > code {
      flex: auto;
      background-color: var(--soft-blue-100);
      padding: 16px;
      margin: 8px 0;
      border-radius: 4px;
    }
  }

  li::marker {
    color: var(--soft-blue-800);
  }

  li > p {
    margin: 0;
  }

  input[type="checkbox"] {
    width: 1em;
    height: 1em;
    border-radius: 50px;
    margin: 2px;
  }

  input[type="checkbox"] + label {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 1px solid var(--gray-800);
    position: relative;
  }

  input[id="check1"]:checked + label::after {
    content: "V";
    font-size: 1em;
    width: 1em;
    height: 1em;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }

  h1,
  h2 {
    border-bottom: 1px solid var(--gray-400);
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.25em;
  }
  h4 {
    font-size: 1em;
  }

  blockquote {
    margin: 0;
    border-left: 3px solid var(--gray-400);
    > p {
      margin-left: 16px;
      color: var(--gray-700);
      white-space: pre;
    }
  }`;

export default styleForMarkdown;
