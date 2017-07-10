import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Result from './../src/components/Result';
import WelcomeScreen from './../src/components/WelcomeScreen';
import SearchBox from './../src/components/SearchBox';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Welcome Screen', module)
    .add('normal', () => <WelcomeScreen />)

storiesOf('Result', module)
    .add('Wide', () => <Result title="Title" author="Author" rating="4" desc="Lorem Ipsum...." />)
    .add('Narrow', () => <Result title="Title" author="Author" rating="4" desc="Lorem Ipsum...." />)

storiesOf('SearchBox', module)
    .add('SearchBox', () => <SearchBox />)
