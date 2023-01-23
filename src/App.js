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
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #22262b;
    background-image: url(https://assets.website-files.com/608fe8d…/60c2288…_Visual%20Grid.png),
      linear-gradient(135deg, #217aff, rgba(33, 122, 255, 0) 46%),
      linear-gradient(191deg, #870bd5, rgba(146, 73, 157, 0) 65%);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
    background-position: 50% 50%, 0 0, 0 0;
    background-size: auto, auto, auto;
    background-repeat: no-repeat, repeat, repeat;
  }
`;
const navStyles = css`
  position: relative;
  z-index: 2;
  display: flex;
  margin-bottom: 96px;
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
const firstSectionStyles = css`
  display: flex;
  justify-content: center;
  gap: 70px;
`;
const firstColumn = css`
  width: 600px;
  height: 640px;
  z-index: 2;
`;
const secondColumn = css`
  z-index: 2;
`;
const primaryHeadingStyles = css`
  color: white;
  letter-spacing: -0.1px;
  font-size: 48px;
  font-family: 'Circular Std', sans-serif;
  font-weight: 500;
  padding-bottom: 8px;
  margin: 0;
  + p {
    color: white;
    margin: 0px 0px 24px;
    font-size: 24px;
    font-family: 'Circular Std', sans-serif;
    + p {
      margin-bottom: 70px;
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
  height: 650px;
  width: 325px;
`;
const inputElement = css`
  background-color: #ffffff;
  border-radius: 9px;
  height: auto;
  color: #000000;
  max-width: 320px;
  padding: 14px 12px 4px;
`;
const inputSpanIntro = css`
  color: #585858;
  margin-bottom: 16px;
`;
const emailInput = css`
  border-radius: 7px;
  border: 1px solid #979797;
  padding: 10px 8px;
  margin: 8px 0;
  width: 94%;
`;
const passwordInput = css`
  border-radius: 7px;
  border: 1px solid #979797;
  padding: 10px 8px;
  width: 100%;
`;
const inlineBlockOr = css`
  display: inline-block;
  padding: 4px;
`;
const divPassword = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const fingerTip = css`
  width: 24.5px;
  height: 27.3px;
`;
const inputSpan = css`
  font-size: 10px;
  font-family: 'Circular Std', sans-serif;
`;
const secondInputSpan = css`
  font-size: 10px;
  font-family: 'Circular Std', sans-serif;
  color: #b4b4b4;
  text-align: center;
  padding: 12px;
`;
const termsAndConds = css`
  color: #217aff;
`;
const buttonMain = css`
  cursor: pointer;
  text-align: center;
  color: #ffffff;
  border-radius: 7px;
  background-color: #0070f2;
  padding: 10px;
  margin-top: 12px;
`;

const logoGradientDiv = css`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -24px;
  height: 174px;
  padding: 0;
  ::before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 15%,
      rgba(255, 255, 255, 0) 85%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  * {
    max-width: 100px;
  }
`;
const phoneIsTheKeySection = css`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 20px;
  background-color: #fafafa;
  height: 650px;
`;

const phoneIsTheKeyDiv = css`
  margin-left: 140px;
  margin-right: 140px;
`;
const phoneIsTheKeyHeader = css`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  color: #217aff;
  font-size: 4.5rem;
`;
const phoneIsTheKeyPar = css`
  font-size: 1.25rem;
  line-height: 2rem;
  color: #222222;
  padding: 1rem;
`;
const phoneIsTheKeyPics = css`
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 1.2rem;
  > div,
  img {
    max-height: 160px;
    line-height: 1.8rem;
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 16px;
    color: #222222;
  }
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
        <section css={mainStyles}>
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
            <div css={firstSectionStyles}>
              <div css={firstColumn}>
                <h1 css={primaryHeadingStyles}>Passwordless made easy</h1>
                <p>More registrations, More logins</p>
                <p>
                  OwnID is an add-on to your website's existing registration and
                  login forms. It's powerful and easy to use. Create a
                  delightful customer experience.
                </p>
                <div css={inputElement}>
                  <div css={inputSpanIntro}>
                    Try out your future login form:
                  </div>
                  <input css={emailInput} placeholder="E-mail" />
                  <div css={divPassword}>
                    <button>
                      <svg
                        css={fingerTip}
                        class="fingerprint icon"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.978 2.964a.555.555 0 0 1-.276-.072C16.398 1.704 14.406 1.2 12.018 1.2c-2.376 0-4.632.564-6.684 1.692a.613.613 0 0 1-.816-.24.606.606 0 0 1 .24-.816A15.066 15.066 0 0 1 12.018 0c2.556 0 4.788.564 7.236 1.824.3.156.408.516.252.804a.583.583 0 0 1-.528.336Zm-17.172 6.3a.598.598 0 0 1-.492-.948c1.188-1.68 2.7-3 4.5-3.924 3.768-1.944 8.592-1.956 12.372-.012 1.8.924 3.312 2.232 4.5 3.9a.595.595 0 0 1 .056.6.59.59 0 0 1-.2.24.596.596 0 0 1-.84-.144 11.275 11.275 0 0 0-4.068-3.528c-3.444-1.764-7.848-1.764-11.28.012-1.632.84-3 2.04-4.08 3.552a.515.515 0 0 1-.468.252Zm7.5 14.484a.56.56 0 0 1-.42-.18c-1.044-1.044-1.608-1.716-2.412-3.168-.828-1.476-1.26-3.276-1.26-5.208 0-3.564 3.048-6.468 6.792-6.468 3.744 0 6.792 2.904 6.792 6.468 0 .336-.264.6-.6.6a.594.594 0 0 1-.6-.6c0-2.904-2.508-5.268-5.592-5.268-3.084 0-5.592 2.364-5.592 5.268 0 1.728.384 3.324 1.116 4.62.768 1.38 1.296 1.968 2.22 2.904a.615.615 0 0 1 0 .852.657.657 0 0 1-.444.18Zm8.604-2.22c-1.428 0-2.688-.36-3.72-1.068-1.788-1.212-2.856-3.18-2.856-5.268 0-.336.264-.6.6-.6.336 0 .6.264.6.6 0 1.692.864 3.288 2.328 4.272.852.576 1.848.852 3.048.852a7.907 7.907 0 0 0 1.248-.12.599.599 0 0 1 .696.492.599.599 0 0 1-.492.696 8.233 8.233 0 0 1-1.452.144ZM15.498 24a.685.685 0 0 1-.156-.024c-1.908-.528-3.156-1.236-4.464-2.52a8.762 8.762 0 0 1-2.604-6.264c0-1.944 1.656-3.528 3.696-3.528s3.696 1.584 3.696 3.528c0 1.284 1.116 2.328 2.496 2.328s2.496-1.044 2.496-2.328c0-4.524-3.9-8.196-8.7-8.196-3.408 0-6.528 1.896-7.932 4.836-.468.972-.708 2.112-.708 3.36 0 .936.084 2.412.804 4.332a.579.579 0 0 1-.094.59.583.583 0 0 1-.254.178.595.595 0 0 1-.768-.348 13.377 13.377 0 0 1-.876-4.752c0-1.44.276-2.748.816-3.888 1.596-3.348 5.136-5.52 9.012-5.52 5.46 0 9.9 4.212 9.9 9.396 0 1.944-1.656 3.528-3.696 3.528s-3.696-1.584-3.696-3.528c0-1.284-1.116-2.328-2.496-2.328s-2.496 1.044-2.496 2.328c0 2.052.792 3.972 2.244 5.412 1.14 1.128 2.232 1.752 3.924 2.22.324.084.504.42.42.732a.59.59 0 0 1-.564.456Z" />
                      </svg>
                    </button>
                    <div css={inlineBlockOr}>or</div>
                    <input css={passwordInput} placeholder="Password" />
                  </div>
                  <span css={inputSpan}>
                    At least 12 characters: 1 lowercase, 1 uppercase, 1 number,
                    1 symbol
                  </span>
                  <div css={buttonMain}>Register/Login</div>
                  <div css={secondInputSpan}>
                    By proceeding, you agree to our{' '}
                    <span css={termsAndConds}>terms</span> and{' '}
                    <span css={termsAndConds}>privacy policy</span>
                  </div>
                </div>
              </div>
              <div css={secondColumn}>
                <img
                  css={phoneImageStyles}
                  src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/627e3586afd018bfe30b04a6_button%20version.gif"
                  loading="lazy"
                  alt="smartphone"
                />
              </div>
            </div>
          </section>
        </section>
        <section>
          <div css={logoGradientDiv}>
            <div>
              <img
                src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/63359f54f84c7d551ebb475a_Nestle.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/633599a4eb6ab804f0a5afe3_Kenwood.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/633599a4cacc9a180913d47a_Braun.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/633599a4dfc7c529f47403ae_Gist.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/637bc5fa500b3c662efd00e2_Carrefour_logo%201.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/63359a843b889ef15188f377_Carnival.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/631833479f6923d70f39d087_Bayer%2090x90.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/633599a43d0add49b6de83a9_Daimani.svg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </section>
        <section css={phoneIsTheKeySection}>
          <div css={phoneIsTheKeyDiv}>
            <h1 css={phoneIsTheKeyHeader}>The Phone is the Key</h1>
            <p css={phoneIsTheKeyPar}>
              Users’ authentication keys are cryptographically stored on their
              phone
              <br /> and are used to log in on any device.
            </p>
            <div css={phoneIsTheKeyPics}>
              <div>
                <img
                  src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/631f50f031f15b084547c316_PHONE%20BIO.png"
                  alt="smartphone"
                />
                <p>
                  When browsing <br /> with a phone
                </p>
              </div>
              <div>
                <img
                  src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/631f4ad5a00dbbee91111f08_DESKTOP.png"
                  alt="smartTV"
                />
                <p>
                  When browsing <br />
                  on a desktop
                </p>
              </div>
              <div>
                <img
                  src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/631f4b0002fd104f39dd69c9_SHARED%20PC.png"
                  alt="smartTV"
                />
                <p>
                  When using
                  <br /> a shared computer
                </p>
              </div>
              <div>
                <img
                  src="https://assets.website-files.com/608fe8d2d3306b39e7dbf1a4/631f50ebf538678321fc8401_PASSKEYS.png"
                  alt="laptop"
                />
                <p>
                  When using Passkeys <br />
                  on a desktop
                </p>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
}

export default App;
