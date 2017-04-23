import React from 'react';
import Layout from '../../components/Layout';
import SeekingTruth from './SeekingTruth';

const title = 'Seeking Truth';

export default {

  path: '/seeking-truth',

  action() {
    return {
      title,
      component: <Layout><SeekingTruth title={title} /></Layout>,
    };
  },

};
