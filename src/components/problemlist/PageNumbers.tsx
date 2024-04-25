
type PageNumbersProps = {
    totalPages: number
    currentPage: number,
    onChange: (_page: number) => void
}

const PageNumbers = ({ totalPages, currentPage, onChange }: PageNumbersProps) => {
  return (
    <div className="flex gap-2 bg-red-400">
        {currentPage > 1 && <button onClick={() => onChange(currentPage-1)}>Previous</button>}
        {
            [...Array(totalPages)].map((_, _page) => {
                let _currentPage = _page+1;
                return <button 
                    key={_currentPage} 
                    onClick={() => onChange(_currentPage)}
                    disabled={_currentPage == currentPage}>
                        {_currentPage}
                    </button>
            })
        }
        {currentPage < totalPages && <button onClick={() => onChange(currentPage+1)}>Next</button>}
    </div>
  )
}

export default PageNumbers;