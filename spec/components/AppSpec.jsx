import App from '../../src/components/App.js';

describe('App', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  var app;

  beforeEach(function() {
    app = renderIntoDocument(
      <App />
    );
  });


  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });

  it('should render a single MovieList component', function() {
    var movieList = findRenderedDOMComponentWithClass(app, 'movie-list');
    expect(movieList).to.exist;
  });

  it('should render a single Search component', function() {
    var search = findRenderedDOMComponentWithClass(app, 'search');
    expect(search).to.exist;
  });

  it('should render a single Add component', function() {
    var add = findRenderedDOMComponentWithClass(app, 'add-form');
    expect(add).to.exist;
  });
});
