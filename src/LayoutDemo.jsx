import { useState } from "react";
import "./LayoutDemo.css";

const LayoutDemo = () => {
  const [currentLayout, setCurrentLayout] = useState("flexbox");

  const layouts = [
    "flexbox",
    "grid",
    "float",
    "position",
    "display",
    "columns",
    "table",
  ];

  return (
    <div className="layout-demo">
      <h1>CSS Layout Styles Demo</h1>

      <div className="layout-selector">
        <h2>Select Layout Type:</h2>
        {layouts.map((layout) => (
          <button
            key={layout}
            className={currentLayout === layout ? "active" : ""}
            onClick={() => setCurrentLayout(layout)}
          >
            {layout.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={`root-container ${currentLayout}-layout`}>
        <div className="component header">Header</div>
        <div className="component sidebar">Sidebar</div>
        <div className="component main-content">
          <h3>Main Content - {currentLayout.toUpperCase()}</h3>
          <p>This demonstrates {currentLayout} layout implementation.</p>
        </div>
        <div className="component aside">Aside</div>
        <div className="component footer">Footer</div>
      </div>

      <div className="layout-info">
        <h3>Current Layout: {currentLayout.toUpperCase()}</h3>
        <div className="info-content">{getLayoutInfo(currentLayout)}</div>
      </div>
    </div>
  );
};

const getLayoutInfo = (layout) => {
  const info = {
    flexbox: (
      <div>
        <h4>Flexbox Layout</h4>
        <ul>
          <li>
            <strong>display: flex</strong> - Makes container a flex container
          </li>
          <li>
            <strong>flex-direction:</strong> row | column | row-reverse |
            column-reverse
          </li>
          <li>
            <strong>justify-content:</strong> Controls main axis alignment
          </li>
          <li>
            <strong>align-items:</strong> Controls cross axis alignment
          </li>
          <li>
            <strong>flex-wrap:</strong> wrap | nowrap | wrap-reverse
          </li>
          <li>
            <strong>flex:</strong> Shorthand for flex-grow, flex-shrink,
            flex-basis
          </li>
        </ul>
      </div>
    ),
    grid: (
      <div>
        <h4>CSS Grid Layout</h4>
        <ul>
          <li>
            <strong>display: grid</strong> - Makes container a grid container
          </li>
          <li>
            <strong>grid-template-columns:</strong> Defines column sizes
          </li>
          <li>
            <strong>grid-template-rows:</strong> Defines row sizes
          </li>
          <li>
            <strong>grid-template-areas:</strong> Named grid areas
          </li>
          <li>
            <strong>gap:</strong> Space between grid items
          </li>
          <li>
            <strong>grid-area:</strong> Places item in specific grid area
          </li>
        </ul>
      </div>
    ),
    float: (
      <div>
        <h4>Float Layout (Legacy)</h4>
        <ul>
          <li>
            <strong>float:</strong> left | right | none
          </li>
          <li>
            <strong>clear:</strong> both | left | right | none
          </li>
          <li>
            <strong>overflow: hidden</strong> - Clearfix technique
          </li>
          <li>Requires manual height calculation</li>
          <li>Not recommended for modern layouts</li>
        </ul>
      </div>
    ),
    position: (
      <div>
        <h4>Position Layout</h4>
        <ul>
          <li>
            <strong>position:</strong> static | relative | absolute | fixed |
            sticky
          </li>
          <li>
            <strong>top, right, bottom, left:</strong> Positioning values
          </li>
          <li>
            <strong>z-index:</strong> Stacking order
          </li>
          <li>Used for overlays, modals, and precise positioning</li>
        </ul>
      </div>
    ),
    display: (
      <div>
        <h4>Display Property Layout</h4>
        <ul>
          <li>
            <strong>display:</strong> block | inline | inline-block
          </li>
          <li>
            <strong>display: table</strong> - Table-like layout
          </li>
          <li>
            <strong>display: none</strong> - Hides element
          </li>
          <li>
            <strong>visibility: hidden</strong> - Hides but keeps space
          </li>
        </ul>
      </div>
    ),
    columns: (
      <div>
        <h4>Multi-Column Layout</h4>
        <ul>
          <li>
            <strong>column-count:</strong> Number of columns
          </li>
          <li>
            <strong>column-width:</strong> Width of each column
          </li>
          <li>
            <strong>column-gap:</strong> Space between columns
          </li>
          <li>
            <strong>column-rule:</strong> Border between columns
          </li>
          <li>Great for text-heavy content</li>
        </ul>
      </div>
    ),
    table: (
      <div>
        <h4>Table Layout</h4>
        <ul>
          <li>
            <strong>display: table</strong> - Container as table
          </li>
          <li>
            <strong>display: table-row</strong> - Row element
          </li>
          <li>
            <strong>display: table-cell</strong> - Cell element
          </li>
          <li>
            <strong>table-layout:</strong> auto | fixed
          </li>
          <li>Good for equal height columns</li>
        </ul>
      </div>
    ),
  };

  return info[layout] || <div>Layout information not available</div>;
};

export default LayoutDemo;
