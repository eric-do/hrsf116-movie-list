var Search = (props) => (
  <div className="search-form">
    <form  onSubmit={props.submitHandler}>
      <input type="text" className="search" id="search" placeholder="Search..." />
      <input type="submit" className="submit-search" value="Go!" id="submit"/>
    </form>
  </div>
);

export default Search;