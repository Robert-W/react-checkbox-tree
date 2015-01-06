/** @jsx React.DOM */
var TreeNode = React.createClass({
	/* jshint ignore:start */
	getInitialState: function () {
    return {
      collapsed: false
    };
  },

  handleClick: function () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  },

  render: function() {
    var containerClass = this.state.collapsed ? 'collapsed' : '';
    var node = this.props.node;
    var childNodes;
    
    if (node.children) {
      childNodes = node.children.map(function (child, index) {
        return (
          <ul key={[node.id, index].join('/')}>
            <TreeNode
              key={node.id}
              node={child}
              handleChange={this.props.handleChange}
            />
          </ul>
        );       
      }, this);
    }

    return (
      <li className={containerClass}>
        <span onClick={this.handleClick}>
          { node.children === undefined ? 
            '' :
            (this.state.collapsed ? String.fromCharCode(43) : String.fromCharCode(8722))
          }
        </span>
        <input 
          type='checkbox' 
          checked={node.checked || false}
          onChange={this.props.handleChange}
          data-key={node.id}
         />
        <span onClick={this.handleClick}>{node.label}</span>
        {childNodes}
      </li>
    );
  }
	/* jshint ignore:end */
});

module.exports = TreeNode;