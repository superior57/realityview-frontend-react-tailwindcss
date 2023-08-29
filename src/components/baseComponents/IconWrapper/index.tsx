import classNames from 'classnames';
// types
import { IconList, IconType } from './Icons';

// ----------------------------------------------------------------------
type Props = {
  name: IconType;
  className?: string;
  width?: number;
  height?: number;
};

const Icon = ({ name, className, width = 24, height = 24 }: Props) => {
  const IconTag = IconList[name];

  return (
    <div className={classNames('flex items-center justify-center', className)}>
      <IconTag width={width} height={height} />
    </div>
  );
};

export default Icon;
