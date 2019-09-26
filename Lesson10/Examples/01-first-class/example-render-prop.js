import React from 'react';

class ExitComponent extends React.Component {
  exitPage() {
    window.close();
  }

  render() {
    return <>{this.props.renderExit(this.exitPage.bind(this))}</>;
  }
}

class ExitButton extends React.Component {
  render() {
    return (
      <ExitComponent
        renderExit={exit => (
          <button
            onClick={() => {
              exit();
            }}
          >
            Exit Page
          </button>
        )}
      />
    );
  }
}

class ExitLink extends React.Component {
  render() {
    return (
      <ExitComponent
        renderExit={exit => (
          <a
            onClick={e => {
              e.preventDefault();
              exit();
            }}
          >
            Exit
          </a>
        )}
      />
    );
  }
}
