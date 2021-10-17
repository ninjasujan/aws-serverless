const normalizeText = (text) => {
	return text.replace(/-/g, "");
};

module.exports = {
	normalizeText,
};
