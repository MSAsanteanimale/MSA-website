import React from 'react';

const SuggestionDropDown = ({
  // suggestions,
  // setSearchQuery,
  // searchQuery
}) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate()
  // const handleSetHomeVideoByKeyword = (searchText) => {
  
  //   setSearchQuery(searchText);
  //   dispatch(cacheResults(searchText));
  //   dispatch(changeCategory("All"));
  //   dispatch(setSBTag(""));
  //   navigate("/")
  // };
  //=====================================================================================================

  const filterData = suggestions.filter((e)=>e.includes(searchQuery.toLowerCase())).splice(0,9)

  //=====================================================================================================
  return (
    <div className='suggestionDropdown  absolute top-14 left-10 bg-white shadow-lg w-[calc(100%-37px)] lg:w-[calc(100%-100px)] h-fit rounded-xl dark:text-white dark:bg-zinc-800'>
      {filterData.map((suggestion, index) => {
        return (
          <div
            key={index}
            className='flex gap-2 cursor-pointer pl-4 py-1 items-center hover:bg-zinc-100 dark:hover:bg-zinc-700 '
            onClick={() => handleSetHomeVideoByKeyword(suggestion)}
          >
            {/* <LuHistory size='1.1rem' className='flex-none' /> */}
            {suggestion}
          </div>
        );
      })}
    </div>
  );
};

export default SuggestionDropDown;
