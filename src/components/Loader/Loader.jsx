import { Component } from 'react';
import { ThreeDots } from '../../../node_modules/react-loader-spinner/dist/index';

class Loader extends Component {
  render() {
    return (
      <div>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
