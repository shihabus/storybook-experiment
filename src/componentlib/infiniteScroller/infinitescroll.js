import React from "react";
import InfiniteScrollerBase from "./infiniteScroller";
import PropTypes from "prop-types";
import { SpinnerLoader, colors, NoDataAvailable } from "../index";

export default class InfiniteScroll extends InfiniteScrollerBase {
	constructor(props) {
		super(props);
	}
	_render = items => {
		const { isFetching, fetchSuccess } = this.props;

		if (isFetching && items.length === 0) {
			return (
				<SpinnerLoader
					padding="10% 0"
					dimension="60px"
					sectorColor={colors.purpleishBlue}
					ringColor={colors.very_light_pink_2}
				/>
			);
		}

		if (fetchSuccess && items.length === 0) {
			return <NoDataAvailable />;
		}
		return items.map(item => this.props.renderItems(item));
	};

	renderEndOfList = items => {
		if (items.length !== 0) {
			return <p>No More Content</p>;
		}
	};
}
InfiniteScroll.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	loadMoreCallBack: PropTypes.func,
	scrollHandler: PropTypes.func,
	fetchMore: PropTypes.bool,
	dataSetKey: PropTypes.string,
	lastScrollPosition: PropTypes.number
};

InfiniteScroll.defaultProps = {
	items: [
		{
			userId: 1,
			id: 1,
			title:
				"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body:
				"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
		},
		{
			userId: 1,
			id: 2,
			title: "qui est esse",
			body:
				"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
		},
		{
			userId: 1,
			id: 3,
			title:
				"ea molestias quasi exercitationem repellat qui ipsa sit aut",
			body:
				"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
		},
		{
			userId: 1,
			id: 4,
			title: "eum et est occaecati",
			body:
				"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
		}
	],
	loadMoreCallBack: () => {},
	scrollHandler: () => {},
	fetchMore: true,
	dataSetKey: "test",
	lastScrollPosition: 0,
	renderItems: item => {}
};
