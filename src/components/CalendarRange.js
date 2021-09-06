import React, { useState } from 'react';
import { DateRange  } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { es } from 'date-fns/locale'

const locale = es;

export const CalendarRange = () => {

      const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);

      const [startDate] = state;

      //console.log(startDate.endDate);

    const handleSelect = (date) => {
        console.log(date); // native Date object
    }

    return (
        <div className="date__range-cont">
            <DateRange 
                locale={locale}
                onChange={item => setState([item.selection])}
                ranges={state}
                dragSelectionEnabled={false}
                moveRangeOnFirstSelection={false}
                className="range-calendar"                
            />
        </div>
    )
}
