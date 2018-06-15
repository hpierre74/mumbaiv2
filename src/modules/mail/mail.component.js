import React from 'react';

import { Form, Input, Textarea } from '../../components/form.components';

export default function Mail() {
  return (
    <Form>
      <Input width="100%" placeholder="your firstname" />
      <Input placeholder="your lastname" />
      <Input placeholder="your phone number" />
      <Textarea />
    </Form>
  );
}
