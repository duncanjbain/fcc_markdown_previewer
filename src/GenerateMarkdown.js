import React from 'react';
import marked from 'marked'

const MARKDOWNPLACEHOLDER = `
  # Header H1 Example
  
  ## Header H2 Example
  
  [Link Example](https://example.com)
  
  * List Item #1
  * List Item #2
  
  \` Inline Code Example \`
  
  \`\`\`
  Block
  Code
  Example
  \`\`\`
  
  > Block Quote Example
  > By A N Other
  
  [logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Markdown Logo"
  
  **End of Markdown Example!**
  `

class GenerateMarkdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        markup: MARKDOWNPLACEHOLDER
      };
    }
  
  
  
    getMarkdownText() {
      var rawMarkup = marked(this.state.markup, { sanitize: true });
      return { __html: rawMarkup };
    }
  
    render() {

      return <div dangerouslySetInnerHTML={this.getMarkdownText()} />
    }
  }

  export default GenerateMarkdown;