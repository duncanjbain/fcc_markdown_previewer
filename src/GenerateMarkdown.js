import React from 'react';
import marked from 'marked'



class GenerateMarkdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        markup: 'Test for now'
      };
    }
  
  
  
    getMarkdownText() {
      var rawMarkup = marked(this.props.textInput, { sanitize: true, breaks: true });
      return { __html: rawMarkup };
    }
  
    render() {

      return <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
    }
  }

  export default GenerateMarkdown;