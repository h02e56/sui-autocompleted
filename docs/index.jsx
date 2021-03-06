import 'babel/polyfill'
import React from 'react';
import {Autocompleted} from '../src';
import AutocompletedContainer from './autocompleted-container'
import AutocompletedGithubUserContainer from './autocompleted-githubUsers-container'
import AutocompletedComponentContainer from './autocompleted-component-container'
import './style.scss';
import '../src/index.scss';

React.render(<AutocompletedContainer />, document.getElementById('languages'));
React.render(<AutocompletedGithubUserContainer />, document.getElementById('github-users'));
React.render(<AutocompletedComponentContainer />, document.getElementById('component-container'));
