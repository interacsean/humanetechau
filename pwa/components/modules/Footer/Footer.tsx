import React, { FC, FormEvent, useCallback } from 'react';
import { Nullable } from 'errable';

import { serialize } from '../../../../utils/Data/serialize/serialize';
import Box from '../../primitives/Box';
import T from '../../primitives/Typo';
import Input from '../../primitives/Input/Input.view';
import Button from '../../primitives/Button';

import commonCss from '../../pages/common.module.scss';
import css from './Footer.module.scss';

type FooterProps = {};

const Footer: FC<FooterProps> = (
  props: FooterProps,
): ReturnType<typeof Box> => {
  const [ isSending, setIsSending ] = React.useState(false);
  const [ msgReceived, setMsgRecieved ] = React.useState(false);
  const formRef = React.useRef<Nullable<HTMLFormElement>>(null);
  const [ mailingEmail, setMailingEmail ] = React.useState('');

  const onSubscribe = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const { current: formElement } = formRef;
      if (formElement && !isSending) {
        setIsSending(true);
        // formElement.attributes.getNamedItem('action')?.value
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: serialize({ email: mailingEmail, 'form-name': 'newsletter' }),
        })
          .then((resp) => {
            if (!resp.ok) throw Error('Not received');
            setMsgRecieved(true);
            setIsSending(false);
          })
          .catch(() => {
            setIsSending(false);
          });
        ;
      }
    },
    [formRef, mailingEmail, isSending],
  );

  return (
    <Box className={commonCss.contentWrapper}>
      <Box className={[css.footer, 'theme-override--dark']}>
        <T h3>Stay up to date</T>
        <T content>Join our mailing list.  We'll let you know about upcoming events and the occasional news.</T>
        <form ref={formRef} onSubmit={onSubscribe}>
          <input type="hidden" name="form-name" value="newsletter" />
          <Box flex-pri="end" mh={2}>
            <Input
              value={mailingEmail}
              onChange={setMailingEmail}
              placeholder={'Email address'}
            />
            <Box ml={1}>
              <Button loading={isSending} text={'Join'} type='submit' />
            </Box>
          </Box>
          { msgReceived && (
            <T className={'text-success'}>Thank you for subscribing</T>
          )}
        </form>
      </Box>
      <T className={[css.copyright, 'align-center']} mt={3}>
        Humane Technology Australia, Sydney Australia
      </T>
    </Box>
  );
};

export default Footer;
