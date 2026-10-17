import React from 'react';

import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
marked.use(markedKatex({ throwOnError: false }));

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="uk-section">
        {/* An .html teaser (e.g. an interactive demo in public/) is embedded as an iframe. */}
        {this.props.teaser.endsWith('.html') ? (
          <div
            className="uk-margin-medium-bottom"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 10',
            }}
          >
            <iframe
              src={this.props.teaser}
              title="teaser"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
            />
          </div>
        ) : (
          <img
            src={`${this.props.teaser}`}
            className="uk-align-center uk-responsive-width"
            alt=""
          />
        )}
        {this.props.description && (
          <p className="uk-text-secondary uk-text-center uk-margin-bottom">
            <span
              className="uk-label uk-label-primary uk-text-center uk-text-bold"
              style={{ fontFamily: 'Poppins' }}
            >
              TL;DR
            </span>{' '}
            <span className="uk-text-secondary">{this.props.description}</span>
          </p>
        )}
        <h2 className="uk-heading-line uk-text-center">Overview</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: marked.parse(this.props.overview),
          }}
        />
      </div>
    );
  }
}
