import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import classNames from 'classnames';
import InputAdornment from '../Adornment';
import { InputAdornmentType } from '../Adornment';

// ----------------------------------------------------------------------
type Props = InputHTMLAttributes<HTMLInputElement> & {
  inputClassName?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  startAdornmentType?: InputAdornmentType;
  endAdornmentType?: InputAdornmentType;
};

const TextField = forwardRef(
  (
    {
      className,
      inputClassName,
      startAdornment,
      endAdornment,
      startAdornmentType,
      endAdornmentType,
      ...other
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={classNames('relative w-full', className)}>
        {startAdornment ? (
          <InputAdornment className="left-0 pl-8" type={startAdornmentType}>
            {startAdornment}
          </InputAdornment>
        ) : null}

        <input
          type="text"
          className={classNames(
            inputClassName,
            'body1 bg-netural rounded-5 h-40 text-primary p-16 outline-none w-full placeholder:caption1 placeholder:tracking-normal border-1 border-transparent focus:border-netural-dark',
            {
              ['pl-40']: !!startAdornment,
              ['pr-40']: !!endAdornment,
              ['font-bold tracking-2']: other.type === 'password',
            }
          )}
          ref={ref}
          {...other}
        />

        {endAdornment ? (
          <InputAdornment className="right-0 pr-8" type={endAdornmentType}>
            {endAdornment}
          </InputAdornment>
        ) : null}
      </div>
    );
  }
);

export default TextField;
