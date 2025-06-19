import React from 'react';
import '@/tailwind.css';

type TypographyType =
  | 'titleXl'
  | 'titleL'
  | 'titleM'
  | 'titleS'
  | 'titleXs'
  | 'paragraph'
  | 'caption';

type TypographyTag = 'h1' | 'span' | 'p' | 'label';

const sizeMap: Record<TypographyType, string> = {
  titleXl: 'text-[18px]',
  titleL: 'text-[16px]',
  titleM: 'text-[12px]',
  titleS: 'text-[8px]',
  titleXs: 'text-[6px]',
  paragraph: 'text-base',
  caption: 'text-xs',
};

const defaultTagMap: Record<TypographyType, TypographyTag> = {
  titleXl: 'h1',
  titleL: 'h1',
  titleM: 'h1',
  titleS: 'h1',
  titleXs: 'h1',
  paragraph: 'p',
  caption: 'span',
};

export interface TypographyProps {
  type: TypographyType;
  tag?: TypographyTag;
  children: React.ReactNode;
}

export default function Typography({ type, tag, children }: TypographyProps) : React.ReactElement{
  const Tag = tag || defaultTagMap[type];
  return (
    <Tag className={`${sizeMap[type]} font-bold underline bg-amber-400 text-white p-4`}>
      {children}
    </Tag>
  );
}