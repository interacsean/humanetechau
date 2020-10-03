import { NextPage } from 'next';
import React, { FormEvent } from 'react';
import fetch from 'fetch';
import { Nullable } from 'errable';

import { serialize } from '../../../../utils/Data/serialize/serialize';
import MainLayout from '../../layouts/MainLayout';
import Box from '../../primitives/Box';
import T from '../../primitives/Typo';
import InputLabel from '../../layouts/InputLabel';
import Input from '../../primitives/Input/Input.view';
import Button from '../../primitives/Button';

import commonCss from '../common.module.scss';
import css from './Contact.module.scss';

const DEFAULT_FORM = {
  name: '',
  email: '',
  message: '',
}

const Contact: NextPage = () => {
  const [ form, setForm ] = React.useState(DEFAULT_FORM);
  const [ isSending, setIsSending ] = React.useState(false);
  const [ msgReceived, setMsgRecieved ] = React.useState(false);
  const formRef = React.useRef<Nullable<HTMLFormElement>>(null);

  const updateField = React.useCallback(
    (val: string, evt: React.SyntheticEvent<HTMLElement>) => {
      // @ts-ignore
      const { field } = evt.target?.dataset;
      setForm(s => ({ ...s, [field]: val }));
    },
    [setForm],
  );

  const submit = React.useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      
      const { current: formElement } = formRef;
      if (formElement && !isSending) {
        setIsSending(true);
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: serialize({ ...form, 'form-name': 'contact' }),
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
    [formRef, form, isSending],
  );

  return (
    <MainLayout>
      <Box className={[css.hero, commonCss.contentWrapper]} />
      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <T h2 mb={2}>Get in touch</T>
          <Box className={commonCss.indentedContented}>
            <form ref={formRef} onClick={submit}>
              <input type="hidden" name="form-name" value="contact" />
              <Box mb={1} style={{ maxWidth: '20em' }}>
                <InputLabel inline label="Your name">
                  <Input
                    value={form.name}
                    onChange={updateField}
                    data-field={'name'}
                  />
                </InputLabel>
              </Box>
              <Box mb={1} style={{ maxWidth: '20em' }}>
                <InputLabel inline label="Email">
                  <Input
                    value={form.email}
                    onChange={updateField}
                    data-field={'email'}
                  />
                </InputLabel>
              </Box>
              <Box mb={1} style={{ maxWidth: '40em' }}>
                <InputLabel inline label="Message">
                  <textarea
                    className={css.messageBox}
                    value={form.message}
                    data-field={'message'}
                    onChange={(e) => updateField(e.target.value, e)}
                    rows={4}
                  />
                </InputLabel>
              </Box>
              {
                msgReceived && (
                  <T className={'text-success'}>Your message has been received</T>
                )
              }
              <Button loading={isSending} text={'Send'} type="submit" />
            </form>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Contact;
