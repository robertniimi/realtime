import {
  CompositeDecorator,
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';

/**
 * DESCRIPTION
 *
 * @prop {type} PROP - PROP_DESCRIPTION
 */


export default class MyEditor extends React.Component {
  static displayName = 'MyEditor';
  static propTypes = {
    // React.PropTypes
  };

  constructor(props) {
    super(props);

    const styles = {
      cursor: {
        borderRight: '1px solid black',
        borderLeft: '1px solid black'
      }
    };

    const cursorStrategy = (contentBlock, cb) => {
      console.log('[app] @cursorStrategy -> contentBlock: ', contentBlock);
      cb(0, 1);
    };

    const HandleCursor = (props) => {
      console.log('[app] @HandleCursor -> props: ', props);
      return <span {...props} style={styles.cursor}>{props.children}</span>
    };

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: cursorStrategy,
        component: HandleCursor,
      }
    ])

    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator)
    };

    this.onChange = (editorState) => {
      this.setState({editorState})
    };

  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    const {editorState} = this.state;

    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand.bind(this)}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
