var RequestList = React.createClass({
  render: function () {
    var requestNodes = this.props.requests.map(function (request) {
      return (
        <Request
          anonymousMode={this.props.anonymousMode} 
          key={request.id}
          request={request}
          currentUserId={this.props.currentUserId}
          currentGroupId={this.props.currentGroupId}
          resolve={this.props.resolve}
          bump={this.props.bump}
          pin={this.props.pin}
        />
      );
    }.bind(this));

    if (requestNodes.length <= 0) {
      requestNodes.push((
        <div key="smile" className="centered text">
          <i className="massive disabled smile icon"></i>
        </div>
      ));
    }

    return (
      <div className="ui requests comments">
        {requestNodes}
      </div>
    );
  }
});
