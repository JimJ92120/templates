import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";

import metadata from "./block.json";
import "./style.scss";

registerBlockType(metadata.name, {
	edit: function (props) {
		const blockProps = useBlockProps();
		return (
			<div {...blockProps}>
				<ServerSideRender block={metadata.name} attributes={props.attributes} />
			</div>
		);
	},
	save: function (props) {
		return null;
	},
});
