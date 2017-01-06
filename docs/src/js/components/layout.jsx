import React, {Component, PropTypes} from 'react';

import Logo from 'js/components/logo';
import contents from 'js/contents';
import ContentsMenu from 'js/components/contents-menu';
import ContentsSubmenu from 'js/components/contents-submenu';

function findContentsItem(path) {
  return findContentsItemInList(path, contents);
}

function findContentsItemInList(path, list) {
  let matchedItem;

  list.some(item => {
    if (item.link === path) {
      matchedItem = item;

      return true;
    }

    if (item.children) {
      matchedItem = findContentsItemInList(path, item.children);

      return matchedItem;
    }
  });

  return matchedItem;
}

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.content = null;
    this.state = {
      submenu: null
    };

    this.updateScroll = () => {
      this.content.scrollTop = 0;
    };

    this.setSubmenu = (currentRouteFragment) => {
      const menuItem = findContentsItem(currentRouteFragment.urlPath);

      this.setState({
        submenu: menuItem && menuItem.submenu
      });
    };

    this.handleTransition = ({currentRouteFragment}) => {
      this.updateScroll();
      this.setSubmenu(currentRouteFragment);
    };
  }

  componentWillMount() {
    this.props.router.onChange(this.handleTransition);
    this.setSubmenu(this.props.router.currentRouteFragment);
  }

  componentWillUnmount() {
    this.props.router.offChange(this.handleTransition);
  }

  render() {
    return <div className="wrapper">
      <header>
        <div className="links">
          <span>Links -> </span>
          <a href="https://github.com/raulsebastianmihaila/crizmas-mvc" target="_blank">Github</a>
          <a href="https://www.npmjs.com/package/crizmas-mvc" target="_blank">NPM</a>
        </div>
        <h1><Logo to="/" /></h1>
      </header>
      <div className="main">
        <ContentsMenu list={contents} />
        {this.state.submenu && <ContentsSubmenu list={this.state.submenu} />}
        <div className="content" ref={content => this.content = content}>{this.props.children}</div>
      </div>
    </div>;
  }
}

Layout.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.any
};
