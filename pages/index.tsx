/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { CoolComponents, PREVIEW_SOURCES } from "../util/index";
import { Heart } from "react-feather";
import Head from "next/head";
import EditCoolComponent from "../components/EditCoolComponent";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState(
    CoolComponents.WavyBanner
  );

  const webappTag = (
    <div>
      <p className="ReadMeBuilder--Paragraph__Small text-center">
        Made with <Heart color="red" /> by{" "}
        <a href="https://webapp.io">webapp.io</a>
      </p>
      <p className="ReadMeBuilder--Paragraph__Small text-center">
        Copied and paste to Next.js app by{" "}
        <a href="https://github.com/Podter">Podter</a>
      </p>
      <p className="ReadMeBuilder--Paragraph__Small text-center">
        <a
          className="d-inline-flex align-items-center"
          href="https://github.com/Podter/pimp-my-readme-next"
        >
          <div className="d-block">Open source project</div>
        </a>
        <br />
        <a
          className="d-inline-flex align-items-center"
          href="https://github.com/joshdsouza8/pimp-my-readme"
        >
          <div className="d-block">Original repository</div>
        </a>
        <div className="ms-2 d-block">
          <svg
            width="35"
            height="35"
            viewBox="0 0 256 249"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <g fill="#161614">
              <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
              <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
            </g>
          </svg>
        </div>
      </p>
    </div>
  );

  const scrollToEdit = () => {
    const element = document.getElementById("component-editor");
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/jellybear.png" />
        <title>Pimp my README</title>
        <meta property="og:image" content="/jellybear-lg.png" />
        <meta
          name="description"
          content="Let's bring the blink elements back! Pimp my README is an open source profile builder that you can use to add some cool components to your markdown profiles - Made with <3 by webapp.io :)"
        />
      </Head>

      <div className="ReadMeBuilder">
        <div className="ReadMeBuilder__White ReadMeBuilder--Top">
          <div className="d-block px-1">
            <h1 className="ReadMeBuilder--Title text-center">Pimp My README</h1>
            <p className="ReadMeBuilder--Paragraph">
              Make your README profile look cool with some custom components.
            </p>
            {webappTag}
          </div>
        </div>

        {/* Try Me CTA for GitHub  Cool Component */}
        <div className="container text-center pt-5">
          <a
            onClick={(e) => {
              e.preventDefault();
              setSelectedComponent(CoolComponents.WavyBanner);
              scrollToEdit();
            }}
            className="btn ReadMeBuilder--CTA--Text d-flex justify-content-center align-items-center"
          >
            <div className="ReadMeBuilder--CTA--ArrowWrapper">
              <svg
                className="ReadMeBuilder--CTA--Image"
                width="255"
                height="179"
                viewBox="0 0 255 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M245.17 101.617L145.671 168.055L147.643 128.489C-16.1977 120.324 -31.283 42.7962 -24.6335 0.908127C-18.8114 22.4984 -17.3194 56.8037 150.798 65.1818L152.77 25.6151L245.17 101.617Z"
                  stroke="black"
                  stroke-width="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M70.5174 78.0268L77.1328 78.9513L74.6394 96.7929L79.1551 97.424L81.6486 79.5824L88.264 80.507L88.7904 76.7403L71.0438 74.2601L70.5174 78.0268ZM86.9259 98.51L91.4205 99.1381L92.7019 89.9694C92.9806 87.9753 94.6283 86.8072 96.6119 87.0844C97.2344 87.1714 98.0742 87.3963 98.4771 87.5925L99.0345 83.6043C98.6468 83.4533 98.0965 83.3118 97.6428 83.2484C95.828 82.9948 94.1929 83.842 93.3219 85.764L93.1531 85.7405L93.5483 82.9128L89.1908 82.3038L86.9259 98.51ZM101.502 106.743C104.847 107.21 106.858 105.749 108.142 103.261L116.947 86.2045L112.192 85.5183L107.142 96.9464L106.973 96.9228L105.281 84.5525L100.554 83.8919L104.038 101.375L103.678 102.024C102.875 103.46 101.736 103.377 100.221 102.67L98.7391 105.884C99.3444 106.248 100.362 106.584 101.502 106.743ZM126.966 82.0756L123.946 103.684L128.378 104.303L130.351 90.186L130.53 90.2111L134.164 105.004L137.181 105.426L144.724 92.2486L144.903 92.2736L142.938 106.338L147.369 106.957L150.389 85.3491L144.755 84.5617L136.775 98.248L136.522 98.2126L132.6 82.863L126.966 82.0756ZM158.39 108.82C162.399 109.381 165.373 107.806 166.427 104.888L162.308 104.032C161.682 105.203 160.431 105.685 158.933 105.475C156.686 105.161 155.469 103.475 155.807 101.058L155.808 101.048L166.844 102.59L167.017 101.356C167.787 95.8482 164.833 92.6601 160.549 92.0615C155.78 91.395 152.216 94.3498 151.517 99.3509C150.799 104.489 153.4 108.123 158.39 108.82ZM156.198 98.2624C156.551 96.4293 158.16 95.1483 160.154 95.427C162.106 95.6998 163.262 97.2812 163.003 99.2135L156.198 98.2624Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="ReadMeBuilder--CTA--ImageWrapper">
              <img
                className="ReadMeBuilder--CTA--Image"
                src="/api/wavy-banner?title=JellyBear&subtitle=I%27m%20the%20webapp.io%20mascot%20:)"
              />
            </div>
          </a>
        </div>

        {/* Preview of Cool Components to try */}
        <div className="container">
          <div className="d-flex justify-content-center CoolComponent--Preview flex-wrap">
            {Object.keys(PREVIEW_SOURCES).map((key) => {
              return (
                <div
                  key={key}
                  className="CoolComponent--Preview--Object m-3 m-md-5"
                >
                  <img
                    className="CoolComponent--Preview--Image btn btn-outline-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedComponent(key);
                      scrollToEdit();
                    }}
                    src={PREVIEW_SOURCES[key].src}
                    title={PREVIEW_SOURCES[key].component}
                  />
                  {PREVIEW_SOURCES[key].helperText ? (
                    <p>{PREVIEW_SOURCES[key].helperText}</p>
                  ) : null}
                  <a
                    className="btn btn-outline-primary mt-3"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedComponent(key);
                      scrollToEdit();
                    }}
                  >
                    Try me!
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editing Section for Cool Components */}
        <div className="container p-5" id="component-editor">
          <h1 className="ReadMeBuilder--Title">Pimp out your Cool Component</h1>
          <EditCoolComponent component={selectedComponent} />
        </div>

        <div className="container text-center">{webappTag}</div>
      </div>
    </>
  );
}
