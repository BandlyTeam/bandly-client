import { useState, useRef } from 'react';
import s from './FilterBox.module.scss';
import bFilter from '@/../public/assets/icons/bFIlter.svg';
import Image from 'next/image';

type FilterOption = {
  id: string;
  label: string;
};

type FilterBoxProps = {
  options: FilterOption[];
  onFilterChange?: (selectedFilter: string) => void;
  placeholder?: string;
};

export default function FilterBox({ 
  options,
  onFilterChange,
  placeholder = "Filter by..."
}: FilterBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<FilterOption | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: FilterOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onFilterChange?.(option.id);
  };

  return (
    <div className={s.filterBox} ref={filterRef}>
      <div className={s.filterBoxInput} onClick={handleFilterClick}>
        <span className={s.filterBoxText}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <button className={s.filterBoxButton}>
          <Image
            src={bFilter}
            alt="Filter"
            width={24}
            height={24}
            className={s.filterBoxIcon}
          />
        </button>
      </div>
      
      {isOpen && (
        <div className={s.filterBoxDropdown}>
          {options.map((option) => (
            <div 
              key={option.id} 
              className={`${s.filterBoxOption} ${selectedOption?.id === option.id ? s.selected : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}