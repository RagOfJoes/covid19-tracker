import Color from 'color';

export default () => ({
	root: ({ bgColor = '#efefef', darken = 0.2, blurLength = 12, spread = 6 }) => {
		const lightColor = Color(bgColor).rotate(-6).lighten(0.05).hex();
		const contrastColor = Color(bgColor)
			.rotate(4)
			.desaturate(0.1)
			.darken(darken)
			.hex();
		const borderColor = Color(bgColor).alpha(0.2).rgb();
		return {
			backgroundColor: 'transparent',
			border: `1px solid rgba(${borderColor.red()}, ${borderColor.green()}, ${borderColor.blue()}, 0.20)`,
			boxShadow: `-${spread}px -${spread}px ${
				blurLength > 20 ? blurLength - 10 : blurLength
			}px 0 ${lightColor}, ${spread}px ${spread}px ${blurLength}px 0 ${contrastColor}`,
		};
	},
	pressed: ({ bgColor = '#efefef', darken = 0.2, blurLength = 12, spread = 6 }) => {
		const lightColor = Color(bgColor).rotate(-6).lighten(0.05).hex();
		const contrastColor = Color(bgColor)
			.rotate(4)
			.desaturate(0.1)
			.darken(darken)
			.hex();
		const borderColor = Color(bgColor).alpha(0.2).rgb();
		return {
			backgroundColor: 'transparent',
			border: `1px solid rgba(${borderColor.red()}, ${borderColor.green()}, ${borderColor.blue()}, 0.20)`,
			boxShadow: `inset -${spread}px -${spread}px ${
				blurLength > 20 ? blurLength - 10 : blurLength
			}px 0 ${lightColor}, inset ${spread}px ${spread}px ${blurLength}px 0 ${contrastColor}`,
		};
	},
});
