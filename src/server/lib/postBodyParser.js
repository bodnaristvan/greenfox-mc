export default function postBodyParser(bodyObj) {
	return bodyObj.map((container) => {
		switch(container.type) {
		case 'Image':
			return renderImage(container);
		case 'Paragraph':
			return renderParagraph(container);
		}
	}).join('');
}

export function renderParagraph(container) {
	const paraContent = container.value.map((v) => {
		if (v.type === 'Text') return renderText(v);
		if (v.type === 'Link') return renderLink(v);
	});
	return [].concat('<p>', paraContent, '</p>').join('');
}

export function renderText(container) {
	return container.value;
}

export function renderLink(container) {
	return `<a href="${container.reference}">${renderText(container.value[0])}</a>`;
}

export function renderImage({id, format, width, height}) {
	const extension = format === 'Gif' ? 'gif' : 'jpg';
	const urlPrefix = 'https://i.kinja-img.com/gawker-media/image/upload/s--IOTnugOE--/c_scale,fl_progressive,q_80,w_800';
	return `<img src="${urlPrefix}/${id}.${extension}" width="${width}" height="${height}" />`;
}
