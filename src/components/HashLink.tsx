import React from "react";

type Props = {
  link: string;
};

export const HashLink: React.FC<Props> = ({ link }) => {
  const a = `home/${
    link.includes(" ")
      ? link.replaceAll(" ", "-").toLowerCase()
      : link.toLowerCase()
  }`;
  return (
    <h3 className="my-3">
      <a id={a}></a>
      <a href={`#${a}`}>#</a> {link}
    </h3>
  );
};
