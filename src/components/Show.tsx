import React from "react";

interface ShowProps {
  children: React.ReactNode;
}

interface WhenProps {
  isTrue: boolean;
  children: React.ReactNode;
}

interface ElseProps {
  children: React.ReactNode;
}

const Show: React.FC<ShowProps> & {
  When: React.FC<WhenProps>;
  Else: React.FC<ElseProps>;
} = (props) => {
  let when: React.ReactNode | null = null;
  let otherwise: React.ReactNode | null = null;

  React.Children.forEach(props.children, (child) => {
    const children = child as React.ReactElement;
    if (children.props.isTrue === undefined) {
      otherwise = children;
    } else if (children.props.isTrue === true) {
      when = children;
    }
  });

  return when || otherwise;
};

const When: React.FC<WhenProps> = ({ isTrue, children }) =>
  isTrue ? <>{children}</> : null;

const Else: React.FC<ElseProps> = ({ children }) => <>{children}</>;

Show.When = When;
Show.Else = Else;

export default Show;
