import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Form, Field } from 'react-final-form';
import { Form as PfForm, Col, Row, Grid, Button } from 'patternfly-react';
import { required, email } from 'redux-form-validators';
import {
  FinalFormField,
  FinalFormSelect,
  FinalFormCheckBox,
  FinalFormRadio,
  FinalFormTextArea,
  FinalFormSwitch,
  Condition,
  FieldGroup,
  composeValidators,
} from '../';

const minValue = min => value => ((Number.isNaN(value) || value >= min) ? undefined : `Should be greater than ${min}`);

const options = [{
  value: 1,
  label: 'First option',
}, {
  value: 2,
  label: 'Second option',
}];

const multiOptions = [
  {
    value: '5b0c05b7384a00fa99036602',
    label: 'Hope',
  },
  {
    value: '5b0c05b741f3d83c1a5f2a5f',
    label: 'Christa',
  },
  {
    value: '5b0c05b742c419e1b4ec3d63',
    label: 'Tania',
  },
  {
    value: '5b0c05b784180d77f84964c0',
    label: 'Mcintyre',
  },
  {
    value: '5b0c05b75bcf1e7d8f5023f5',
    label: 'Tonya',
  },
  {
    value: '5b0c05b701be9dd08b0e5d55',
    label: 'Marcie',
  },
  {
    value: '5b0c05b765787d0818542285',
    label: 'Cara',
  },
  {
    value: '5b0c05b7bbe383a94d47d3a1',
    label: 'Becker',
  },
  {
    value: '5b0c05b72477f8139bd1d352',
    label: 'Foley',
  },
  {
    value: '5b0c05b7cba617c4b72e0bb4',
    label: 'Perkins',
  },
];

storiesOf('Form', module).add('Form components', withInfo()(() => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h1>Form components</h1>
      </Col>
    </Row>
    <Form
      initialValues={{
        switch: false,
      }}
      onSubmit={action(values => console.log('Form values: ', values))}
      render={({ handleSubmit, values }) => (
        <PfForm horizontal onSubmit={handleSubmit}>
          <Row>
            <Col xs={12}>
              <Field
                name="textField"
                id="textField"
                validate={required({ msg: 'Error message' })}
                component={FinalFormField}
                label="Text field"
                validateOnMount
              />
            </Col>
            <Col xs={12}>
              <Field
                name="email"
                id="email"
                validate={composeValidators(required({ msg: 'Email is required' }), email({ msg: 'This is not a valid email address' }))}
                component={FinalFormField}
                type="email"
                label="Email field"
              />
            </Col>
            <Col xs={12}>
              <Field
                name="password"
                id="password"
                validate={minValue(33)}
                component={FinalFormField}
                type="password"
                label="Password field"
              />
            </Col>
            <Col xs={12}>
              <Field
                name="select"
                id="select"
                render={({ input, meta }) => (<FinalFormSelect
                  placeholder="Input placehoder"
                  input={input}
                  meta={meta}
                  options={options}
                  label="Select with custom size"
                  validateOnMount={false}
                  labelColumnSize={5}
                  inputColumnSize={5}
                />)
              }
              />
            </Col>
            <Col xs={12}>
              <Field
                name="multi"
                id="multi"
                component={FinalFormSelect}
                placeholder="Select one or more options"
                options={multiOptions}
                label="Multi select"
                validateOnMount={false}
                multi
              />
            </Col>
            <FieldGroup label="Field group" name="checkboxGroup">
              <Field
                validate={required({ msg: 'Check input' })}
                name="check"
                id="check"
                type="checkbox"
                render={({ input, meta }) => (
                  <FinalFormCheckBox
                    validateOnMount
                    input={input}
                    meta={meta}
                    label="Checkbox"
                  />
                )}
              />
            </FieldGroup>
            <FieldGroup label="Field group" name="radioGroup">
              <Field
                name="radioGroup"
                id="selectOne1"
                type="radio"
                value="First radio"
                validate={required({ msg: 'Please select one option' })}
                render={({ input, meta, ...rest }) => <FinalFormRadio input={input} label="Radio button 1" meta={meta} {...rest} />}
              />
              <Field
                name="radioGroup"
                id="selectOne2"
                type="radio"
                value="Second radio"
                validate={required({ msg: 'Please select one option' })}
                render={({ input, meta, ...rest }) => <FinalFormRadio input={input} label="Radio button 2" meta={meta} {...rest} />}
              />
            </FieldGroup>
            <Col xs={12}>
              <Condition when="radioGroup" is="Second radio">
                <Field
                  name="ConditionalField1"
                  id="ConditionalField1"
                  render={({ input, meta }) => <FinalFormField validateOnMount input={input} meta={meta} label="Conditional field 1" />}
                />
              </Condition>
              <Condition when="radioGroup" is="First radio">
                <Field
                  name="ConditionalField2"
                  id="ConditionalField2"
                  render={({ input, meta }) => <FinalFormField validateOnMount input={input} meta={meta} label="Conditional field 2" />}
                />
              </Condition>
            </Col>
            <Col xs={12}>
              <Field
                name="textArea"
                id="textArea"
                render={({ input, meta }) => <FinalFormTextArea input={input} meta={meta} label="Text area component" />}
              />
            </Col>
            <Col xs={12}>
              <Field
                name="switch"
                id="switch"
                render={({ input, meta }) => <FinalFormSwitch input={input} meta={meta} label="Switch label" />}
              />
            </Col>
            <Col xs={12}>
              <Button type="submit" bsStyle="primary">Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2>Form values</h2>
              <pre>
                {JSON.stringify(values, 0, 2)}
              </pre>
            </Col>
          </Row>
        </PfForm>
      )}
    />
  </Grid>
)));
