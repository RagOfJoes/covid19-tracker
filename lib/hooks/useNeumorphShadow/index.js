import makeStyles from '@material-ui/core/styles/makeStyles';
import neumorphShadowStyles from './neumorphShadow';

const useNeumorphShadowStyles = makeStyles(neumorphShadowStyles, {
	index: 999,
	name: 'neumorphShadow',
});

export default useNeumorphShadowStyles;
