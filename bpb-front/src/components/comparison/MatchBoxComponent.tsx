import React from 'react';
import Comparison from '../../types/Comparison';
import Snippet from '../../types/Snippet';
import { selectSnippets } from '../../actions/ComparisonAction';
import { store } from '../../store';

interface PropsType {
  comparison: Comparison
}

/**
 * Represents a document pane which displays the contents of a file of a given submission 
 */
class MatchBoxComponent extends React.Component <PropsType, {}> {

  constructor(props : PropsType) {
    super(props);
    
    this.state = {

    };
  }

  selectMatch(match: Snippet[]) {
    store.dispatch(selectSnippets(match));
  }

  render() {
    return (
      <div className="matchbox">
        {
          (this.props.comparison.matches && this.props.comparison.matches.length <= 0) &&
            <div className="card text-center">
              <div className="card-body">
                <p className="card-text">No matches found</p>
              </div>
            </div>                        
        }        
        {
          (this.props.comparison.matches && this.props.comparison.matches.length > 0 && this.props.comparison.similarityScore < 1) &&
            <div className="card">
              {/* <div className="card-body"> */}              
                <div className="list-group list-group-flush w-100">
                  <div className="list-group-item w-100">
                    <h5 className="card-title text-center">Similarity: {(this.props.comparison.similarityScore * 100).toFixed(2)}%</h5>
                    <h6 className="card-subtitle text-center">Prominent Matches:</h6>
                  </div>
                  {
                    this.props.comparison.matches.slice(0, 10).map((match, index) => 
                      <div className="btn btn-outline-dark list-group-item w-100 text-center" key={index} onClick={() => this.selectMatch(match)}>
                        {/* <ul> */}
                          {/* <span className="">Match {index+1}</span> */}
                          <div>Match context:</div>
                          <div>{match[0].contextType}</div>
                          <div><i className="fa fa-arrow-left fa-xs" aria-hidden="true"></i> Lines {match[0].lineNumberStart} - {match[0].lineNumberEnd}</div>
                          <div>Lines {match[1].lineNumberStart} - {match[1].lineNumberEnd} <i className="fa fa-arrow-right fa-xs" aria-hidden="true"></i></div>
                        {/* </ul> */}
                      </div>
                    )
                  }
                </div> 
              {/* </div> */}
            </div>            
        }
        {
          (this.props.comparison.matches && this.props.comparison.matches.length > 0 && this.props.comparison.similarityScore >= 1) &&
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title text-center">Similarity: {(this.props.comparison.similarityScore * 100).toFixed(2)}%</h5>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default MatchBoxComponent;