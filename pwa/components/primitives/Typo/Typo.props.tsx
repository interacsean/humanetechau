import React from 'react';
import { UtilProps } from '../../../../utils/Html/getUtilClasses';
import { CompWithChildren } from '../../../../types/util/CompWithChildren';

type HTMLParaProps = React.DetailedHTMLProps<
  React.BaseHTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export interface TypoPublicProps
  extends Partial<CompWithChildren>,
    UtilProps,
    Omit<HTMLParaProps, 'children' | 'className'> {
  tagName?: string;
  className?: string | (string | undefined | false)[];
  anemic?: boolean;
  htmlFor?: string;
  'no-weight'?: boolean;
  'no-margin'?: boolean;
  clickable?: boolean;
  subtle?: boolean;
  /* content types */
  content?: boolean;
  'content-detail'?: boolean;
  'content-detail-minor'?: boolean;
  'content-caption'?: boolean;
  'content-feature'?: boolean;
  'content-pragmatic'?: boolean;
  'content-tag'?: boolean;
  'content-tag-clickable'?: boolean;
  'content-hint'?: boolean;
  'content-field-label-inline'?: boolean;
  'content-fields-set-label'?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
}
