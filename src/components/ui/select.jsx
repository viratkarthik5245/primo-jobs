import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const SelectContext = React.createContext(null);

const Select = React.forwardRef(({ className, children, onValueChange, defaultValue, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(defaultValue || '');
  const [selectedLabel, setSelectedLabel] = React.useState('');

  const selectTriggerRef = React.useRef(null);

  React.useEffect(() => {
    if (defaultValue) {
      React.Children.forEach(children, child => {
        if (React.isValidElement(child) && child.type === SelectContent) {
          React.Children.forEach(child.props.children, item => {
            if (React.isValidElement(item) && item.type === SelectItem && item.props.value === defaultValue) {
              setSelectedLabel(item.props.children);
            }
          });
        }
      });
    }
  }, [defaultValue, children]);

  const handleValueChange = (value, label) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    if (onValueChange) {
      onValueChange(value);
    }
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider value={{ selectedValue, handleValueChange, isOpen, setIsOpen, selectedLabel, selectTriggerRef }}>
      <div className={cn("relative", className)} ref={ref} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
});
Select.displayName = "Select";

const SelectTrigger = React.forwardRef(({ className, children, placeholder, ...props }, ref) => {
  const { isOpen, setIsOpen, selectedLabel, selectTriggerRef } = React.useContext(SelectContext);
  
  return (
    <button
      ref={selectTriggerRef}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {selectedLabel || placeholder || "Select..."}
      <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform", isOpen && "rotate-180")} />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { isOpen, selectTriggerRef } = React.useContext(SelectContext);
  const [contentWidth, setContentWidth] = React.useState(0);

  React.useEffect(() => {
    if (selectTriggerRef?.current) {
      setContentWidth(selectTriggerRef.current.offsetWidth);
    }
  }, [isOpen, selectTriggerRef]);


  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      style={{ width: contentWidth > 0 ? `${contentWidth}px` : 'auto' }}
      className={cn(
        "absolute z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef(({ className, children, value, ...props }, ref) => {
  const { handleValueChange } = React.useContext(SelectContext);
  return (
    <div
      ref={ref}
      onClick={() => handleValueChange(value, children)}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SelectItem.displayName = "SelectItem";

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = "SelectLabel";

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = "SelectSeparator";

export { Select, SelectTrigger, SelectContent, SelectItem, SelectLabel, SelectSeparator };