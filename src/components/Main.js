import { render } from "@testing-library/react";
import { Component } from "react";
import HornedBeast from './HornedBeast';

class Main extends Component {
  render() {
    return (
      <>
        <HornedBeast
          title='UniWhal'
          src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" 
          desc="A unicorn and a narwhal nuzzling their horns"/>
        {/* <HornedBeast title='Rhino' />
        <HornedBeast title='Unicorn Head' /> */}
      </>
    )
  }
}

export default Main;