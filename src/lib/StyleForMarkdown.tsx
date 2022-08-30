export const styleForMarkdown = `
  text-align: justify;
  
  a {
    color: var(--soft-blue-600);
    :hover {
      text-decoration: underline;
    }
  }

  p {
    > code {
      background-color: var(--gray-300);
      padding: 2px 6px;
      border-radius: 4px;
    }
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
      overflow-x: auto;
      ::-webkit-scrollbar {
        display: block;
        height: 8px;
      }
      ::-webkit-scrollbar-thumb {
        
        background-color: var(--soft-blue-400);
        border-radius: 4px;
      }
    }
  }

  li::marker {
    color: var(--soft-blue-800);
  }

  li > p {
    margin: 0;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    margin-right: 4px;
    border: 1px solid var(--gray-800);
    border-radius: 4px;
    transform: translateY(2px);
    cursor: pointer;
    :hover {
        box-shadow: 0 0 2px 1px var(--gray-500);
    }
  }

  input[type="checkbox"]:checked + label::after {
    position: absolute;
    content: "";
    background-color: var(--soft-blue-500);
    width: 0.8em;
    height: 0.8em;
    border-radius: 3px;
  }

  h1,
  h2 {
    border-bottom: 1px solid var(--gray-400);
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 24px 0 16px;
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
    padding: 2px;
    border-left: 3px solid var(--soft-blue-400);
    background-color: var(--soft-blue-50);
    
    > p {
      margin-left: 16px;
      color: var(--gray-700);
      white-space: pre-line;
      
  }

}`;

export default styleForMarkdown;
