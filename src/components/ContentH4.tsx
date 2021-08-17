import React from "react";

type Props = { text: string };

export const H4Text: React.FC<Props> = ({ text }) => (
  <h4 style={{ marginLeft: 30 }}>{text}</h4>
);
