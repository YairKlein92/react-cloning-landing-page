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
  font-family: 'Circular Std', sans-serif;
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
const mainStyles = css`
  background-image: url(https://assets.website-files.com/608fe8d…/60c2288…_Visual%20Grid.png),
    linear-gradient(135deg, #217aff, rgba(33, 122, 255, 0) 46%),
    linear-gradient(191deg, #870bd5, rgba(146, 73, 157, 0) 65%);
`;
const navStyles = css`
  display: flex;
  margin: 0 16px;
  justify-content: center;
  gap: 28px;
  background-color: transparent;
  padding: 18px;
`;
const listNavStyles = css`
  list-style-type: none;
  display: flex;
  gap: 16px;
  margin: 8px 0px;
  > li {
    > a {
      color: white;
      font-family: 'Circular Std', sans-serif;
      text-decoration: none;
      padding: 0 8px;
    }
  }
`;

const navButtonStyles = css`
  color: white;
  background-color: #3880ff;
  padding: 8px 24px;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  border-radius: 8px;
`;
const PrimaryHeadingStyles = css`
  color: white;
  letter-spacing: -0.1px;
  font-size: 48px;
  font-family: 'Circular Std', sans-serif;
  font-weight: 500;
  padding-bottom: 8px;
  + p {
    color: white;
    margin: 0px 0px 24px;
    font-size: 24px;
    font-family: 'Circular Std', sans-serif;
    + p {
      margin-bottom: 16px;
      font-size: 17.6px;
      font-family: Circular, sans-serif;
      color: #fff;
      line-height: 27.2px;
      font-weight: 300;
    }
  }
`;
const phoneImageStyles = css`
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  margin-top: auto;
  margin-left: auto;
  overflow-clip-margin: content-box;
  overflow: clip;
  height: 750px;
`;
const inputElement = css`
  width: 348px;
  height: 254px;
  background-color: white;
  padding: 24px;
  border-radius: 9px;
  color: black;
`;
const inputSpanIntro = css`
  color: #585858;
  margin-bottom: 16px;
`;
const emailInput = css`
  border-radius: 7px;
  border: 1px solid #979797;
  width: 100%;
`;
const fingerTip = css`
  width: 24.5px;
  height: 27.3px;
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
      <main css={mainStyles}>
        <nav css={navStyles}>
          <img src="logo.svg" alt="logo" />
          <ul css={listNavStyles}>
            <li>
              <a href="/#">Product</a>
            </li>
            <li>
              <a href="/#">Pricing</a>
            </li>
            <li>
              <a href="/#">Docs</a>
            </li>
            <li>
              <a href="/#">Customers</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Contact Sales</a>
            </li>
          </ul>
          <div css={navButtonStyles}>Get Started</div>
        </nav>
        <section>
          <div>
            <div>
              <h1 css={PrimaryHeadingStyles}>Passwordless made easy</h1>
              <p>More registrations, More logins</p>
              <p>
                OwnID is an add-on to your website's existing registration and
                login forms. It's powerful and easy to use. Create a delightful
                customer experience.
              </p>
              <div css={inputElement}>
                <div css={inputSpanIntro}>Try out your future login form:</div>
                <input css={emailInput} />
                <svg
                  css={fingerTip}
                  class="fingerprint icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.978 2.964a.555.555 0 0 1-.276-.072C16.398 1.704 14.406 1.2 12.018 1.2c-2.376 0-4.632.564-6.684 1.692a.613.613 0 0 1-.816-.24.606.606 0 0 1 .24-.816A15.066 15.066 0 0 1 12.018 0c2.556 0 4.788.564 7.236 1.824.3.156.408.516.252.804a.583.583 0 0 1-.528.336Zm-17.172 6.3a.598.598 0 0 1-.492-.948c1.188-1.68 2.7-3 4.5-3.924 3.768-1.944 8.592-1.956 12.372-.012 1.8.924 3.312 2.232 4.5 3.9a.595.595 0 0 1 .056.6.59.59 0 0 1-.2.24.596.596 0 0 1-.84-.144 11.275 11.275 0 0 0-4.068-3.528c-3.444-1.764-7.848-1.764-11.28.012-1.632.84-3 2.04-4.08 3.552a.515.515 0 0 1-.468.252Zm7.5 14.484a.56.56 0 0 1-.42-.18c-1.044-1.044-1.608-1.716-2.412-3.168-.828-1.476-1.26-3.276-1.26-5.208 0-3.564 3.048-6.468 6.792-6.468 3.744 0 6.792 2.904 6.792 6.468 0 .336-.264.6-.6.6a.594.594 0 0 1-.6-.6c0-2.904-2.508-5.268-5.592-5.268-3.084 0-5.592 2.364-5.592 5.268 0 1.728.384 3.324 1.116 4.62.768 1.38 1.296 1.968 2.22 2.904a.615.615 0 0 1 0 .852.657.657 0 0 1-.444.18Zm8.604-2.22c-1.428 0-2.688-.36-3.72-1.068-1.788-1.212-2.856-3.18-2.856-5.268 0-.336.264-.6.6-.6.336 0 .6.264.6.6 0 1.692.864 3.288 2.328 4.272.852.576 1.848.852 3.048.852a7.907 7.907 0 0 0 1.248-.12.599.599 0 0 1 .696.492.599.599 0 0 1-.492.696 8.233 8.233 0 0 1-1.452.144ZM15.498 24a.685.685 0 0 1-.156-.024c-1.908-.528-3.156-1.236-4.464-2.52a8.762 8.762 0 0 1-2.604-6.264c0-1.944 1.656-3.528 3.696-3.528s3.696 1.584 3.696 3.528c0 1.284 1.116 2.328 2.496 2.328s2.496-1.044 2.496-2.328c0-4.524-3.9-8.196-8.7-8.196-3.408 0-6.528 1.896-7.932 4.836-.468.972-.708 2.112-.708 3.36 0 .936.084 2.412.804 4.332a.579.579 0 0 1-.094.59.583.583 0 0 1-.254.178.595.595 0 0 1-.768-.348 13.377 13.377 0 0 1-.876-4.752c0-1.44.276-2.748.816-3.888 1.596-3.348 5.136-5.52 9.012-5.52 5.46 0 9.9 4.212 9.9 9.396 0 1.944-1.656 3.528-3.696 3.528s-3.696-1.584-3.696-3.528c0-1.284-1.116-2.328-2.496-2.328s-2.496 1.044-2.496 2.328c0 2.052.792 3.972 2.244 5.412 1.14 1.128 2.232 1.752 3.924 2.22.324.084.504.42.42.732a.59.59 0 0 1-.564.456Z"></path>
                </svg>
              </div>
            </div>
            <div>
              <img
                css={phoneImageStyles}
                src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/627e3586afd018bfe30b04a6_button%20version.gif"
                loading="lazy"
                alt=""
                class="image-10 home"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
