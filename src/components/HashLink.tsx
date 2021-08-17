import React from "react";

type Props = {
  link: string;
};

export const HashLink: React.FC<Props> = ({ link }) => (
  <h3 className="my-3">
    <a
      href={`#home/${
        link.includes(" ")
          ? link.replaceAll(" ", "-").toLowerCase()
          : link.toLowerCase()
      }`}
    >
      #
    </a>{" "}
    {link}
  </h3>
);
