import React from 'react';
interface MyTextareaProps {
  id?: string;
  name?: string;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  value?: string;
  className?: string; 
  rows?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}


function HSTextarea({
  id,
  name,
  onBlur,
  value,
  className,
  rows,
  onChange,
  placeholder,
}: MyTextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      onBlur={onBlur}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      rows={rows}
      className={`${className} bg-grayLight text-black text-xs md:text-sm duration-150 w-full outline-none rounded-md border-[1px] group-hover:border-grayDark px-5 py-3  border-gray-400`}
    />
  );
}


export default HSTextarea;
