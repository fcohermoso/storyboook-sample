import PropTypes from 'prop-types';
import { Progress } from 'react-bulma-components';

export const ProgressBar = ({ max, value, color }) => {
  return (
    <div className={'grid is-col-min-12'}>
      <Progress max={max} value={value} color={color} size={'large'}/>
    </div>
  );
};

ProgressBar.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
};

ProgressBar.defaultProps = {
  max: 100,
  value: 70,
  color: 'primary',
};
