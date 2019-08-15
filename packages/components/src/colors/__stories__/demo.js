import React from 'react';
import { Box } from '../../index';
import * as colors from '../../colors';
import { getContrastRatio } from '../../theme';

const demo = () => {
  const cont = Object.keys(colors).map(type => {
    return (
      <Box>
        <Box p={2} fontWeight="600" fontSize={24}>
          {type}
        </Box>
        {Object.keys(colors[type]).map(shade => {
          return (
            <Box bgcolor={colors[type][shade]} p={2}>
              <Box
                color={
                  getContrastRatio(colors[type][shade], '#333') >= 3
                    ? '#333'
                    : '#fff'
                }
              >
                {`[ ${shade} ] ${colors[type][shade]}`}
              </Box>
            </Box>
          );
        })}
        <Box mt={2}></Box>
      </Box>
    );
  });
  return <Box>{cont}</Box>;
};

export default demo;
