import { Hourglass, InfinitySpin, Watch } from 'react-loader-spinner';

const Loader = () => {
	return (
		// <Watch
		// 	visible={true}
		// 	height="30"
		// 	width="30"
		// 	radius="48"
		// 	color="#ffb764"
		// 	ariaLabel="watch-loading"
		// 	wrapperStyle={{}}
		// 	wrapperClass=""
		// 	/>
		<Hourglass
  visible={true}
  height="30"
  width="30"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#b0bcce', '#ffbf6c']}
  />
	);
};

export default Loader;