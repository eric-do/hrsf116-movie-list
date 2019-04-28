import App from '../../src/components/App.js';
import exampleData from '../data/exampleData.js';

describe ('Search', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  var app, searchYouTubeStub;
  
  describe('when rendering live data from YouTube', function() {
    beforeEach(function() {
      // searchYouTubeStub = sinon.stub();
      // searchYouTubeStub.onCall(0).yields(window.fakeVideoData);
      // searchYouTubeStub.onCall(1).yields(window.moreFakeVideoData);
      app = renderIntoDocument(
        <App />
      );
    });

    it('should load exmple data when app is initialized', function() {
      var movieEntryElements = scryRenderedDOMComponentsWithClass(app, 'movie-entry');
      movieEntryElements.forEach((movieEntry, i) => {
        expect(movieEntry.innerHTML).to.equal(exampleData[i].title);
      });
    });
    
    it('should update the video list when executing a search', function() {
      var searchInputElement = findRenderedDOMComponentWithClass(app, 'search');
      var searchButtonElement = findRenderedDOMComponentWithClass(app, 'submit-search');
      
      Simulate.change(searchInputElement, {target: {value: 'Mean'}});

      var newVideoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
      newVideoEntryTitleElements.forEach((videoEntryTitle, i) => {
        expect(videoEntryTitle.innerHTML).to.equal(moreFakeVideoData[i].snippet.title);
      });
    });
  });
});
