
// src/components/HeadMeta.js
import React from "react";
import { Helmet } from "react-helmet";

const HeadMeta = () => (
  <Helmet>
    <html lang="en" className="no-js index" data-section-active="main" />
    <meta charSet="utf-8" />
    <title>Front-End Website Developer | Daksh Choudhary</title>
    <meta
      name="description"
      content="Daksh Choudhary, a frontend Web Developer specialising in Responsive Websites using HTML5, CSS3, Bootstrap, and JavaScript"
    />
    <meta name="author" content="Daksh Choudhary" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="page-topic" content="Daksh Choudhary, Front-end Web Developer" />
    <meta name="topic" content="Daksh Choudhary, Front-end Web Developer" />

    {/* Open Graph Tags */}
    <meta property="og:title" content="Daksh Choudhary: Front-end Web Developer - Greater Noida, India" />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="Daksh Choudhary, a Front-end Web Developer specialising in Responsive Websites using HTML5, CSS3, Bootstrap, and JavaScript"
    />
    <meta property="og:image" content="/social-share.png" />
    <meta property="og:site_name" content="Front-End Developer, India. www.dakshchoudhary.dev" />
    <meta property="og:url" content="https://dakshchoudhary.dev/" />

    {/* Twitter Meta */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@dakshchoudhary" />
    <meta name="twitter:creator" content="@dakshchoudhary" />
    <meta name="twitter:domain" content="dakshchoudhary.dev" />
    <meta name="twitter:title" content="Daksh Choudhary: Front-end Web Developer India" />
    <meta
      name="twitter:description"
      content="Daksh Choudhary, Front-end Developer | HTML5, CSS3, Bootstrap, JavaScript"
    />
    <meta name="twitter:image" content="https://dakshchoudhary.dev/social-share.png" />

    {/* Favicon and Theme */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0c0c0c" />
    <meta name="theme-color" content="#0c0c0c" />
    <meta name="msapplication-TileColor" content="#0c0c0c" />
    <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
  </Helmet>
);

export default HeadMeta;
