/** @jsx React.DOM */
var TreeNode = require('js/TreeNode');

var Tree = React.createClass({
	/* jshint ignore:start */
  getInitialState: function () {
    return {
      data: this.props.data
    };
  },
  
  handleChange: function (evt) {
    var checked = evt.target.checked;
    var key = evt.target.getAttribute('data-key');
    var traverseNodes = function (node) {
      if (node.id === key) {
        node.checked = checked;
        if (node.children) { node.children.forEach(checkAllNodes); }
      }
        
      if (node.children) {
        node.children.forEach(traverseNodes);
      }
    };
      
    var checkAllNodes = function (node) {
      node.checked = checked;
      if (node.children) { node.children.forEach(checkAllNodes); }
    };
      
    var dataSource = Object.create(this.state.data);
    dataSource.forEach(traverseNodes);
    this.setState({ data: dataSource });
  },
  
  render: function () {
    return (
      <ul className='checkbox-tree'>
        {this.state.data.map(function (node, i) {
          return (
            <TreeNode
              key={node.id}
              node={node}
              handleChange={this.handleChange}
            />
          );
        }, this)}
      </ul>
    );
  }
  /* jshint ignore:end */
});

module.exports = Tree;