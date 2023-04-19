import { ReactNode } from "react";

// A HOC for rendering image cards either as links or as images

type Props = {
  condition: boolean;
  wrapper: (props: ReactNode) => any;
  children: ReactNode
}

const ConditionalImageWrapper = (props: Props) => {
  const { children, condition, wrapper } = props;
  return condition ? wrapper(children) : children
}

type HOCProps = {
  renderAsUrl: boolean;
  imgPath: string;
  linkUrl: string;
}

export default function ImageCardHOC(props: HOCProps) {
  const {imgPath, linkUrl, renderAsUrl} = props;
  return (
    <ConditionalImageWrapper
      condition={renderAsUrl}
      wrapper={(children) => (<a href={linkUrl}>{children}</a>)}
    >
      <img src={imgPath} height={200} width={200} />
    </ConditionalImageWrapper>
  );
}