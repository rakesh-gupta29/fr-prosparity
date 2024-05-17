import React, { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'

type Props = { children: ReactNode }
type Anchor = { children: ReactNode; href: string }

function Heading1({ children }: Props) {
  return <h1>{children}</h1>
}

function Heading2({ children }: Props) {
  return <h2>{children}</h2>
}

function Heading3({ children }: Props) {
  return <h3>{children}</h3>
}

function Heading4({ children }: Props) {
  return <h4>{children}</h4>
}

function Heading5({ children }: Props) {
  return <h5 className=" ">{children}</h5>
}
function Heading6({ children }: Props) {
  return <h6>{children}</h6>
}

function ListItem({ children }: Props) {
  return <li>{children}</li>
}
function OrderedList({ children }: Props) {
  return <ol>{children}</ol>
}

function UnorderedList({ children }: Props) {
  return <ul>{children}</ul>
}

function Para({ children }: Props) {
  return <p>{children}</p>
}

const markdownConfig = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Para,
  a: Anchor,
  li: ListItem,
  ul: UnorderedList,
  ol: OrderedList,
}

function Anchor(props: React.HTMLAttributes<HTMLAnchorElement>) {
  const { children } = props
  return (
    <a {...props} target="_blank" className=" ">
      {children}
    </a>
  )
}
export { markdownConfig }

export default function RenderMarkdown({ content }: { content: string }) {
  return <ReactMarkdown components={markdownConfig}>{content}</ReactMarkdown>
}
