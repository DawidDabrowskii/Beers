import { LastPage } from '../../constants';

export const Pagination = ({ page, setPage }) => {
  const handlePrevPage = () => {
    setPage(page - 1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleFirstPage = () => {
    setPage(1);
  };
  const handleLastPage = () => {
    setPage(LastPage);
  };

  return (
    <div className='flex gap-4 text-xl py-4'>
      <div>
        {page === 1 ? (
          ''
        ) : (
          <div className='flex gap-4 '>
            <button
              disabled={page === 1}
              onClick={handleFirstPage}
              className='hover:text-[#DCCA87] '>
              &lt;&lt;
            </button>
            <button
              disabled={page === 1}
              onClick={handlePrevPage}
              className='hover:text-[#DCCA87] '>
              &lt;
            </button>
          </div>
        )}
      </div>
      <p className='cursor-pointer text-[#DCCA87] '>{page}</p>
      <div>
        {page === LastPage ? (
          ''
        ) : (
          <div className='flex gap-4'>
            <button
              disabled={page === LastPage + 1}
              onClick={handleNextPage}
              className='hover:text-[#DCCA87]'>
              &gt;
            </button>
            <button
              disabled={page === LastPage + 1}
              onClick={handleLastPage}
              className='hover:text-[#DCCA87] '>
              &gt;&gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
