/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const headerStyles = css`
  background-color: #8cb2eb;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  margin: 0;
  > a {
    text-decoration: none;
    color: black;
  }
`;
const textHeader = css`
  padding: 12px;
  text-align: center;
  color: #031331;
  font-family: 'Times New Roman', Times, serif, sans-serif;
  font-weight: bold;
  font-size: larger;
`;
const buttonHeader = css`
  background-color: #ffffff;
  padding: 12px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <img
          src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/63bc39beae9399526264737b_cta.svg"
          loading="lazy"
          width="148"
          alt=""
          className="live-webinar"
        />
        <div css={textHeader}>
          Unlock the Benefits and Challenges of Passwordless Authentication
        </div>
        <a href="/#">
          <div css={buttonHeader}>Reserve Your Spot</div>
        </a>
      </header>
      <main>
        <nav></nav>
      </main>
    </>
  );
}

export default App;
