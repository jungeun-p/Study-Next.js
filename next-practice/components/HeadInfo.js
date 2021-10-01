import React from "react";
import Head from "Next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "Blog powerd by Next js",
  contents: "practice Nest js",
};

export default HeadInfo;
