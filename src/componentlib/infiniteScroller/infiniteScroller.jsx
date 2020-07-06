/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { TextStyle7 } from "../textStyles";

const InfiniteScrollWrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default class InfiniteScroller extends Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    const { lastScrollPosition } = this.props;
    this.scroller.scrollTop = lastScrollPosition;
  }

  _render = items => {};

  renderEndOfList = items => {};

  render() {
    const {
      items,
      loadMoreCallBack,
      fetchMore,
      dataSetKey,
      scrollHandler
    } = this.props;
    return (
      <InfiniteScrollWrapper
        id="scrollDiv"
        ref={ref => (this.scroller = ref)}
        onScroll={() => scrollHandler(this.scroller.scrollTop)}
      >
        <InfiniteScroll
          key={dataSetKey}
          scrollableTarget="scrollDiv"
          dataLength={items.length} // This is important field to render the next data
          next={() => loadMoreCallBack()}
          // height='100%'
          hasMore={fetchMore}
          loader={
            <LoaderDiv>
              <TextStyle7>Loading...</TextStyle7>
            </LoaderDiv>
          }
          endMessage={this.renderEndOfList(items)}
          scrollThreshold={1}
          // below props only if you need pull down functionality
          refreshFunction={() => {
            // console.log('Refreshing..')
          }}
          pullDownToRefresh
          pullDownToRefreshContent={
            <h3 style={{ textAlign: "center" }}>
              &#8595; Pull down to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
          }
        >
          {this._render(items)}
        </InfiniteScroll>
      </InfiniteScrollWrapper>
    );
  }
}

InfiniteScroller.propTypes = {
  items: PropTypes.array,
  loadMoreCallBack: PropTypes.func,
  scrollHandler: PropTypes.func,
  fetchMore: PropTypes.bool,
  dataSetKey: PropTypes.string,
  lastScrollPosition: PropTypes.number
};
