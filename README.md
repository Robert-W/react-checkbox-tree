react-checkbox-tree
===================
> A simple example of a bare bones tree widget with checkboxes built in React.



<strong>You can check out a live demo <a href='http://robert-w.github.io/react-checkbox-tree'>here</a>.</strong>


<p>This example is intended to be a very simple, yet flexible, tree widget with checkboxes for each node built in React.</p>
<p>This tree can have as many nested child nodes as desirable and does not have to have a root node.</p>
<p>This is a controlled React component, as such it needs to have some sort of way to identify the checkboxes to maintain their state so currently each node needs a unique id. View <code>src/js/TreeData.js</code> to see sample data structure.</p>
<p>The checkboxes act independently of the tree. Clicking the +/− icon or the label for the tree node will toggle the children. Clicking a checkbox will activate the checkbox and if the checkbox is becoming checked, it will check all the children, else, it will only turn itself off and not it's children. This behavior can be easily modified per your requirements for the tree.</p>

## Installation
<strong>This project requires node.js and npm to be installed.</strong>
<p>If you need to install those, view the <a href='http://nodejs.org' target='_blank'>node.js</a> homepage and click download.</p>

<p>Once those are installed, clone the repo, and run <code>npm install</code>.  If you get some sort of permission errors and your on a mac, you may need to run <code>sudo npm install</code>.</p>

## Getting Started
<p>Once you have the code downloaded and have installed the dependencies with <code>npm install</code> you are ready to begin.</p>
<p>Simply run <code>npm run start</code> to generate the bundles via webpack and then open up the index page in your favorite webserver.</p>
<p>To generate a minified bundle, run <code>npm run build</code></p>
<p>If your curious about how the <code>build</code> and <code>start</code> command work, take a look at the package.json and the webpack.config.js to see the commands being run and the configurations being used by webpack.</p>



