var Watched = ({watched, watchedHandler, title}) => (
  <button className="btn-watched" 
          style={watched ? {background: 'green', color: 'white'} : {backgroud: 'gray', color: 'black'}}
          onClick={(e) => watchedHandler(e, title)}>Watched</button>
);

export default Watched;