import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchFilter = () => {
    return (
        <section className='search_filter_container'>
            <div className='filters_div'>
                <FilterContainer title={"Search"} inputType={"input"} />
                <FilterContainer
                    title={"Studio"}
                    inputType={"select"}
                    selectOption={["Select Studio"]}
                />
                <FilterContainer
                    title={"Selector"}
                    inputType={"select"}
                    selectOption={["Select Selector"]}
                />
                <FilterContainer
                    title={"Image Type"}
                    inputType={"select"}
                    selectOption={["Select Image Type"]}
                />
            </div>
            <button className='generate_button'>Generate</button>
        </section>
    );
};

export default SearchFilter;

const FilterContainer = ({ title, inputType, selectOption }) => {
    return (
        <div className='each_filter'>
            <h4>{title}</h4>
            {inputType !== "select" ? (
                <div className='filter_input'>
                    <CiSearch size={24} />
                    <input placeholder='Search anything' type='text' />
                </div>
            ) : (
                <div className='filter_select'>
                    <select className='select' name='' id=''>
                        {selectOption.map((option, key) => (
                            <option key={key} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};
