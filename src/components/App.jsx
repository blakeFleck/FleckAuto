class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      vehicles: [],
    };
  }

  getVehicles() {
    window.searchTypeForm({}, data =>
      this.setState({
        vehicles: data
      })
    );
  }

  // <VehicleList vehicles={this.state.vehicles} />
  render(){
    return(
      <div>
        <h2> test </h2>
      </div>
      )
  }

}