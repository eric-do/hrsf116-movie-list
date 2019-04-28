var Search = (props) => (
  <div>
    <form onSubmit={props.submitHandler}>
      <input type="text" id="search" placeholder="Search..." />
      <input type="submit" value="Go!" id="submit"/>
    </form>
  </div>
);

export default Search;