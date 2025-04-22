import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<p>{"Todo List – hello from the saved content!"}</p>
			<button>Click</button>
		</div>
	);
}
