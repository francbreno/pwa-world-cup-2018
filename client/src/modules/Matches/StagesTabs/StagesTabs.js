import React from 'react';

import Container from 'components/Container';
import StageMatches from './StageMatches';
import StageTab from './StageTab';
import StagesHelper from 'helpers/stages';

const noThirdPlaceStage = stage => stage !== StagesHelper.getStageName('thirdPlace')

export default class StagesTabs extends React.Component {
  state = {
    activeStage: StagesHelper.getStageName('firstStage'),
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.matches !== this.state.matches) {
      this.setState(() => ({
        activeStage: nextProps.activeStage,
      }))
    }
  }

  componentDidMount() {
    this.setState(() => ({ activeStage: this.props.activeStage }));
    console.log(this.state);
  }

  changeTabHandler = tab => this.setState(() => ({
    activeStage: tab,
  }));

  isActive = stage => stage === this.state.activeStage;

  render() {
    const { activeStage } = this.state;
    const { stages, matches } = this.props;
    return (
      <div>
        <div className="tabs is-fullwidth">
          <ul>
            {stages.filter(noThirdPlaceStage).map((stage) => 
              <StageTab
                key={stage}
                stage={stage}
                active={this.isActive(stage)}
                onClick={this.changeTabHandler}
              />
            )}
          </ul>
        </div> 
        <StageMatches
          stage={activeStage}
          matches={matches[activeStage]}
        />
      </div>
    );
  }
}