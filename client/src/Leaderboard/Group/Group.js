import React from 'react';

import Card from 'app/components/Card';
import GroupHeader from './GroupHeader';
import GroupContent from './GroupContent';

import './Group.css';

const Group = ({ group }) => (
  <div className="group">
    <Card
      header={() => <GroupHeader />}
      content={() => <GroupContent group={group} />}
    />
  </div>
);

export default Group;