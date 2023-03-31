export const Pagination = ({ prevPageFn, nextPageFn, page }) => {
  return (
    <div className='flex gap-4 text-xl py-4'>
      <div>
        {page === 1 ? (
          ''
        ) : (
          <button
            disabled={page === 1}
            onClick={prevPageFn}
            className='hover:text-[#DCCA87]'>
            &lt;
          </button>
        )}
      </div>
      <p className='cursor-pointer text-[#DCCA87] '>{page}</p>
      <div>
        {page === 28 ? (
          ''
        ) : (
          <button
            disabled={page === 29}
            onClick={nextPageFn}
            className='hover:text-[#DCCA87]'>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};
