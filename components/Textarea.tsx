import { useCallback, useLayoutEffect, useRef, useState } from "react";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
  placeholder?: string;
  className?: string;
};

const Textarea = (props: Props) => {
  const { value, onChange, rows, placeholder, className } = props;
  const [currentValue, setCurrentValue] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSetQuery = useCallback(
    (e: any) => {
      const newValue = e.target.value;
      setCurrentValue(newValue);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        onChange?.(newValue);
      }, 300);
    },
    [onChange, 300]
  );

  useLayoutEffect(() => {
    if (!value) setCurrentValue("");
    else setCurrentValue(value);
  }, [value]);

  return (
    <div>
      <textarea
        value={currentValue}
        onChange={handleSetQuery}
        rows={props.rows || 10}
        placeholder={
          props.placeholder || "Nhập các option, mỗi option một dòng"
        }
        className={props.className}
      />
    </div>
  );
};

export default Textarea;
