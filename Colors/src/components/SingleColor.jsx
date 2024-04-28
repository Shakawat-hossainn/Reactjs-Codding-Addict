import React, { useState } from 'react';

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const backgroundColor = `rgb(${rgb.join(',')})`;
  const hexValue = `#${hexColor}`;
  const [alert, setAlert] = useState(false);

  const copyHexToClipboard = () => {
    navigator.clipboard.writeText(hexValue);
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor }}
      onClick={copyHexToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
