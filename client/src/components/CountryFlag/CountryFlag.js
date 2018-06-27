import React from 'react';

import './CountryFlag.css'

import StringHelper from 'app/helpers/string';

import Image from 'app/components/Image';

const CountryFlag = ({ name }) => (
  <Image path={require(`img/flags/${StringHelper.capitalize(name).replace(' ', '_')}.gif`)} />
);

export default CountryFlag;