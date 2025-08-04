# Complete Guide to CSS Layout Styles with Root Container

This guide covers all major CSS layout techniques using a root container and its components.

## Table of Contents

1. [Flexbox Layout](#flexbox-layout)
2. [CSS Grid Layout](#css-grid-layout)
3. [Float Layout (Legacy)](#float-layout)
4. [Position Layout](#position-layout)
5. [Display Layout](#display-layout)
6. [Multi-Column Layout](#multi-column-layout)
7. [Table Layout](#table-layout)
8. [Advanced Techniques](#advanced-techniques)
9. [Responsive Design](#responsive-design)

---

## Flexbox Layout

### Concept

Flexbox is a one-dimensional layout method that arranges items in rows or columns.

### Root Container Properties

```css
.root-container {
  display: flex;
  flex-direction: row | column | row-reverse | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly;
  align-items: stretch | flex-start | flex-end | center | baseline;
  align-content: stretch | flex-start | flex-end | center | space-between |
    space-around;
  gap: 10px; /* Space between items */
}
```

### Component Properties

```css
.component {
  flex: 1; /* flex-grow flex-shrink flex-basis */
  flex-grow: 1; /* How much item should grow */
  flex-shrink: 1; /* How much item should shrink */
  flex-basis: auto; /* Initial size before free space distribution */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
  order: 0; /* Display order */
}
```

### Use Cases

- Navigation bars
- Card layouts
- Centering content
- Equal height columns
- Responsive layouts

---

## CSS Grid Layout

### Concept

CSS Grid is a two-dimensional layout system that handles both rows and columns.

### Root Container Properties

```css
.root-container {
  display: grid;
  grid-template-columns: 200px 1fr 150px; /* Column sizes */
  grid-template-rows: auto 1fr auto; /* Row sizes */
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 10px; /* Space between grid items */
  grid-auto-flow: row | column | dense;
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  justify-content: start | end | center | stretch | space-around | space-between
    | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between |
    space-evenly;
}
```

### Component Properties

```css
.component {
  grid-area: header; /* Named area */
  grid-column: 1 / 3; /* Column span */
  grid-row: 2 / 4; /* Row span */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

### Advanced Grid Features

```css
/* Responsive columns */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

/* Fractional units */
grid-template-columns: 1fr 2fr 1fr;

/* Grid functions */
grid-template-columns: repeat(3, 1fr);
grid-template-columns: minmax(100px, 1fr) 2fr;
```

### Use Cases

- Complex layouts
- Magazine-style designs
- Dashboard layouts
- Image galleries
- Form layouts

---

## Float Layout (Legacy)

### Concept

Float was originally designed for wrapping text around images but was used for layouts.

### Root Container Properties

```css
.root-container {
  overflow: hidden; /* Clearfix */
  width: 100%;
}
```

### Component Properties

```css
.component {
  float: left | right | none;
  clear: both | left | right | none;
  width: 25%; /* Must specify widths */
}

/* Clearfix for container */
.root-container::after {
  content: "";
  display: table;
  clear: both;
}
```

### Limitations

- Requires manual height calculation
- No vertical centering
- Complex responsive behavior
- Not recommended for modern layouts

---

## Position Layout

### Concept

Position allows precise placement of elements relative to their container or viewport.

### Root Container Properties

```css
.root-container {
  position: relative; /* Creates positioning context */
  height: 500px; /* Must have defined height */
}
```

### Component Properties

```css
.component {
  position: static | relative | absolute | fixed | sticky;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1; /* Stacking order */
}
```

### Position Types

- **static**: Default, follows normal document flow
- **relative**: Positioned relative to its normal position
- **absolute**: Positioned relative to nearest positioned ancestor
- **fixed**: Positioned relative to viewport
- **sticky**: Switches between relative and fixed based on scroll

### Use Cases

- Overlays and modals
- Sticky headers
- Tooltips
- Dropdown menus
- Precise positioning

---

## Display Layout

### Concept

The display property determines how elements are displayed and how they participate in layout.

### Display Values

```css
.component {
  display: block; /* Takes full width, stacks vertically */
  display: inline; /* Takes only content width, flows horizontally */
  display: inline-block; /* Combination of inline and block */
  display: none; /* Removes element from layout */
  display: table; /* Behaves like table element */
  display: table-cell; /* Behaves like table cell */
  display: table-row; /* Behaves like table row */
}
```

### Table Display Layout

```css
.root-container {
  display: table;
  width: 100%;
  table-layout: fixed | auto;
  border-spacing: 10px;
}

.component {
  display: table-cell;
  vertical-align: top | middle | bottom;
  width: 200px;
}
```

---

## Multi-Column Layout

### Concept

Creates newspaper-style columns for text content.

### Root Container Properties

```css
.root-container {
  column-count: 3; /* Number of columns */
  column-width: 200px; /* Width of each column */
  column-gap: 20px; /* Space between columns */
  column-rule: 2px solid #ccc; /* Border between columns */
  column-fill: auto | balance;
}
```

### Component Properties

```css
.component {
  break-inside: avoid; /* Prevent breaking across columns */
  column-span: all; /* Span across all columns */
}
```

### Use Cases

- Text-heavy content
- News articles
- Magazine layouts
- Documentation

---

## Table Layout

### Concept

Uses table display properties for layout (not HTML tables).

### Root Container Properties

```css
.root-container {
  display: table;
  table-layout: fixed | auto;
  width: 100%;
  height: 400px;
  border-spacing: 10px;
}
```

### Component Properties

```css
.header {
  display: table-caption;
  caption-side: top | bottom;
}

.component {
  display: table-cell;
  vertical-align: top | middle | bottom;
  width: 25%;
}
```

### Benefits

- Equal height columns automatically
- Vertical centering
- Consistent spacing

---

## Advanced Techniques

### 1. Centering Techniques

#### Absolute Positioning

```css
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

#### Flexbox Centering

```css
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### Grid Centering

```css
.center-grid {
  display: grid;
  place-items: center;
}
```

### 2. Holy Grail Layout

```css
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.holy-grail-header,
.holy-grail-footer {
  flex: none; /* Don't grow */
}

.holy-grail-body {
  display: flex;
  flex: 1; /* Fill remaining space */
}

.holy-grail-sidebar,
.holy-grail-aside {
  flex: 0 0 200px; /* Fixed width */
}

.holy-grail-main {
  flex: 1; /* Fill remaining space */
}
```

### 3. Aspect Ratio Container

```css
.aspect-ratio {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 ratio */
}

.aspect-ratio-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### 4. Sticky Elements

```css
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

### 5. Overlay Layout

```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

## Responsive Design

### Media Queries

```css
/* Mobile First Approach */
@media (min-width: 768px) {
  .root-container {
    display: grid;
    grid-template-columns: 200px 1fr 150px;
  }
}

@media (max-width: 767px) {
  .root-container {
    display: flex;
    flex-direction: column;
  }
}
```

### Responsive Grid

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### Responsive Flexbox

```css
.responsive-flex {
  display: flex;
  flex-wrap: wrap;
}

.responsive-flex .component {
  flex: 1 1 300px; /* Grow, shrink, minimum 300px */
}
```

---

## Layout Comparison

| Layout Type  | Pros                                             | Cons                                  | Best For                     |
| ------------ | ------------------------------------------------ | ------------------------------------- | ---------------------------- |
| **Flexbox**  | Easy alignment, responsive, good browser support | One-dimensional only                  | Navigation, cards, centering |
| **Grid**     | Two-dimensional, powerful, clean markup          | Learning curve, newer browser support | Complex layouts, dashboards  |
| **Float**    | Good browser support                             | Hard to maintain, clearfix needed     | Legacy support only          |
| **Position** | Precise control                                  | Can break responsive design           | Overlays, tooltips           |
| **Display**  | Simple, well-supported                           | Limited layout options                | Basic layouts                |
| **Columns**  | Perfect for text                                 | Limited control over content          | Text-heavy content           |
| **Table**    | Equal heights, vertical centering                | Inflexible, semantic issues           | Data tables, equal heights   |

---

## Best Practices

1. **Use Flexbox for** one-dimensional layouts (rows or columns)
2. **Use Grid for** two-dimensional layouts (rows and columns)
3. **Avoid Float** for layout (use for wrapping text around images)
4. **Use Position** sparingly (overlays, tooltips, sticky elements)
5. **Mobile First** responsive design approach
6. **Test thoroughly** across different browsers and devices
7. **Use semantic HTML** with appropriate CSS layout
8. **Consider accessibility** when choosing layout methods

---

## Modern Layout Workflow

1. **Start with semantic HTML structure**
2. **Choose appropriate layout method** (Grid for complex, Flexbox for simple)
3. **Create mobile layout first**
4. **Add responsive breakpoints**
5. **Test and refine**

This comprehensive guide covers all major CSS layout techniques. Each method has its place in modern web development, with Flexbox and Grid being the preferred choices for new projects.
