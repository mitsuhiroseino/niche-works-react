import { Config } from 'prettier';
import base from './prettier.config';

const config: Config = {
  ...base,
  organizeImportsSkipDestructiveCodeActions: false,
};

export default config;
