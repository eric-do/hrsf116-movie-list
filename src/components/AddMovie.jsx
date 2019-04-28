var AddMovie = (props) => (
  <form id="add-form" className="add-form" onSubmit={props.addHandler}>
    <input type="text" id="add-title" placeholder="Add movie title here" />
    <input type="submit" value="Add" />
  </form>
);

export default AddMovie;