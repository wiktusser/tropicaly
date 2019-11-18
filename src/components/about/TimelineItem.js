import React from "react";

class TimelineItem extends React.Component {
  render() {
    return (
      <div className="tl-item">
        <span className="line b-moon" />
        <div className="date">{this.props.item.date}</div>
        <div className="img">
          <img src={this.props.item.src} src="assets/img/tl-1.jpg" alt={this.props.item.headline} className="img-fluid" />
        </div>
        <div className="info light-grey">
          <h5>{this.props.item.headline}</h5>
          <div className="excerpt">
            {this.props.item.text}
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineItem;
