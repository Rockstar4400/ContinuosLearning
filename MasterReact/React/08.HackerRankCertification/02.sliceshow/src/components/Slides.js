import React from 'react'

class Slides extends React.Component {

  constructor(props){
    super(props);
    this.state = { slides: this.props.slides, index: 0 }
    this.Prev = this.Prev.bind(this);
    this.Next = this.Next.bind(this);
    this.Restart = this.Restart.bind(this);
  }

  Prev(){
    this.setState({index: this.state.index - 1})
  }

  Next(){
    this.setState({index: this.state.index + 1})
  }

  Restart(){
    this.setState({index: 0})
  }
  
  renderSlides = this.props.slides.map(({title,text},id) =>{
      return (
        <div id='slide' className='card text-center' key={id}>
          <h1 data-testid='title'>{title}</h1>
          <p data-testid='text'>{text}</p>
        </div>);
    });

  render() {
    const len = this.props.slides.length;
    return (
      <div>
        <div id='navigation' className='text-center'>
          <button data-testid="button-restart"
            onClick = { this.Restart }
            disabled = { this.state.index > 0 ? false : true }
            >Restart</button>
          <button data-testid="button-prev"
            disabled = { this.state.index > 0 ? false : true }
            onClick={this.Prev}
            >Prev</button>
          <button data-testid="button-next"
            disabled = { this.state.index >= len - 1  ? true : false }
            onClick={this.Next}
            >Next</button>
        </div>
        {this.renderSlides[this.state.index]}        
      </div>
    )
  }
}

export default Slides
