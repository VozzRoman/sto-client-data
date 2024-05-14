import { Hourglass } from 'react-loader-spinner';

const Loader = () => {
	return (
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