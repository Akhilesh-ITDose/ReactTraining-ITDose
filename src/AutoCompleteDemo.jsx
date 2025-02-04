import React, { useEffect, useRef, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

const AutoCompleteShowAllOnClick = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const autoCompleteRef = useRef(null);

  const items = [{name:"Apple"}];

  useEffect(() => { 
    setFilteredItems(items);
  }, []);

  const searchItems = (event) => {
    if (event.query.trim() === "") { 
      setFilteredItems(items);
    } else { 
      setFilteredItems(
        items.filter((item) =>
          item.toLowerCase().includes(event.query.toLowerCase())
        )
      );
    }
  };

  const handleFocus = () => { 
    setFilteredItems(items);
    if (autoCompleteRef.current) {
      autoCompleteRef.current.show();  
    }
  };

  return (
    <AutoComplete
      ref={autoCompleteRef}
      value={selectedItem}
      suggestions={filteredItems}
      completeMethod={searchItems}
      onChange={(e) => setSelectedItem(e.value)}
      onFocus={handleFocus}  
    //   dropdown={true}  
      minLength={0} 
      placeholder="Select a fruit"
    />
  );
};

export default AutoCompleteShowAllOnClick;
