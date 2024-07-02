import React, { createContext, Fragment, useContext } from "react";

const context = createContext({});

const TextSplitItem = ({ splittedText = "", i }) => {
  const {
    lastIndex,
    newHighlight,
    highlight,
    highlightSeparator,
    renderText,
    renderSeparator,
    renderHighlight,
    renderNonHighlight,
    highlightClassName,
  } = useContext(context);

  const newT = splittedText.trim();
  const lowerT = newT.toLowerCase();

  const render = () => {
    if (highlight && lowerT.includes(newHighlight)) {
      if (lowerT === newHighlight) {
        return renderHighlight?.(newT, i === lastIndex, highlightClassName);
      }
      const highlightInArr = newT.split(highlightSeparator);
      const highlightInArrLast = highlightInArr.length - 1;
      return highlightInArr.map((st, j) => (
        <Fragment key={j}>
          {st.toLowerCase() === newHighlight
            ? renderHighlight?.(
                st,
                highlightInArrLast === j,
                highlightClassName
              )
            : renderNonHighlight?.(st, highlightInArrLast === j)}
          {highlightSeparator}
        </Fragment>
      ));
    }
    return renderText?.(newT, i === lastIndex);
  };

  return (
    <Fragment>
      {render()} {i !== lastIndex && renderSeparator?.()}
    </Fragment>
  );
};

const TextSplit = ({
  text = "",
  separator = "\n",
  children = "",
  highlight = "",
  highlightSeparator = " ",
  highlightClassName = "",
  as: Tag = Fragment,
  renderText = (text = "", isLast = false) => text,
  renderSeparator = () => <br />,
  renderHighlight = (highlightedText = "", isLast = false, className = "") => (
    <span className={highlightClassName}>{highlightedText}</span>
  ),
  renderNonHighlight = (nonHighlightedText = "", isLast = false) =>
    nonHighlightedText,
  ...props
}) => {
  const newText = children || text;
  const arr = newText.split(separator);
  const lastIndex = arr.length - 1;
  const newHighlight = highlight.toLowerCase();

  const contextValue = {
    lastIndex,
    newHighlight,
    highlight,
    highlightSeparator,
    renderText,
    renderSeparator,
    renderHighlight,
    renderNonHighlight,
    highlightClassName,
  };

  return (
    <context.Provider value={contextValue}>
      <Tag {...props}>
        {arr.map((splittedText, i) => (
          <TextSplitItem key={i} i={i} splittedText={splittedText} />
        ))}
      </Tag>
    </context.Provider>
  );
};

export default TextSplit;
