import React from 'react';
import ChefName from './ChefName';
import ChefTitle from './ChefTitle';
import RatingStars from './RatingStars';

import './ChefInfo.css';

type ChefInfoProps = {
  name: string;
  title: string;
};

const ChefInfo: React.FC<ChefInfoProps> = ({ name, title }) => (
  <div className="chef-info">
    <ChefName name={name} />
    <ChefTitle title={title} />
    <RatingStars />
  </div>
);

export default ChefInfo;
