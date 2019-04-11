import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state

  state = {

    urls: [
        {
          url: 'https://www.pcgamesn.com/wp-content/uploads/2019/03/borderlands-3-release-date-gameplay.jpg',
          clicked: false
        },
        {
          url: 'https://static.gamespot.com/uploads/scale_landscape/1579/15794034/3518480-trailer_borderlands3_20190403.jpg',
          clicked: false
        },
        {
          url: 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C900%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-04%252F25baeca0-5615-11e9-bea7-3360615dceb0%26client%3Da1acac3e1b3290917d92%26signature%3Deb1fcca8f7b0bd0241c0fbc4ea3c161a8f6066e5&client=amp-blogside-v2&signature=d8e8df614c563a32d5cad50c26a7d6450051d121',
          clicked: false
        },
        {
          url: 'https://www.pcgamesn.com/wp-content/uploads/2019/03/borderlands-3-vault-hunter-abilities-900x506.jpg',
          clicked: false
        },
        {
          url: 'https://www.pcgamesn.com/wp-content/uploads/2019/03/borderlands-3-enemies-900x506.jpg',
          clicked: false
        },
        {
          url: 'https://cdn.gamerant.com/wp-content/uploads/borderlands-3-siren-amara.jpg.optimal.jpg',
          clicked: false
        },
        {
          url: 'https://cdn.gamerant.com/wp-content/uploads/borderlands-3-siren-amara.jpg.optimal.jpg',
          clicked: false
        },
        {
          url: 'https://cdn.mos.cms.futurecdn.net/M25j6rtqPpAFC3jKY7h6g7.jpg',
          clicked: false
        },
        {
          url: 'https://farm8.staticflickr.com/7848/33646853538_190502ff21_b.jpg',
          clicked: false
        },
        {
          url: 'https://cdn.mos.cms.futurecdn.net/sg2zn3kZZ84W5xfJ9tZot7-320-80.jpg',
          clicked: false
        },
        {
          url:'https://www.pcgamesn.com/wp-content/uploads/2019/03/borderlands-3-cyberpunk-world-900x506.jpg',
          clicked: false
        },
        {
          url: 'https://cdn.gamerant.com/wp-content/uploads/borderlands-2-tiny-tina-dlc.jpg.optimal.jpg',
          clicked: false
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IdGMVEet6FvR_UOrQAmeQjZerYqod6JRGHQhM8xTks8G38t_8g',
          clicked: false
        }
      ],
    imageURLs: [
      'https://www.pcgamesn.com/wp-content/uploads/2019/03/borderlands-3-release-date-gameplay.jpg',
      'https://static.gamespot.com/uploads/scale_landscape/1579/15794034/3518480-trailer_borderlands3_20190403.jpg',
      'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C900%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-04%252F25baeca0-5615-11e9-bea7-3360615dceb0%26client%3Da1acac3e1b3290917d92%26signature%3Deb1fcca8f7b0bd0241c0fbc4ea3c161a8f6066e5&client=amp-blogside-v2&signature=d8e8df614c563a32d5cad50c26a7d6450051d121',
      'https://www.pcgamesn.com/wp-content/uploads/2019/03/borderlands-3-vault-hunter-abilities-900x506.jpg',
      'https://www.pcgamesn.com/wp-content/uploads/2019/03/borderlands-3-enemies-900x506.jpg',
      'https://cdn.gamerant.com/wp-content/uploads/borderlands-3-siren-amara.jpg.optimal.jpg',
      'https://cdn.mos.cms.futurecdn.net/M25j6rtqPpAFC3jKY7h6g7.jpg',
      'https://farm8.staticflickr.com/7848/33646853538_190502ff21_b.jpg',
      'https://cdn.mos.cms.futurecdn.net/sg2zn3kZZ84W5xfJ9tZot7-320-80.jpg',
      'https://cdn.gamerant.com/wp-content/uploads/borderlands-2-tiny-tina-dlc.jpg.optimal.jpg',
      'https://www.pcgamesn.com/wp-content/uploads/2019/03/borderlands-3-cyberpunk-world-900x506.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IdGMVEet6FvR_UOrQAmeQjZerYqod6JRGHQhM8xTks8G38t_8g'
    ],
    randoURLs: [],
    score: 0,
    clickedImages: []
  }

  componentDidMount() {
    this.randomizeImages(-1);
  }

  checkScore = (i) => {
    let urls = [...this.state.urls];
    let newUrls = urls;

    if (i !== -1) {

      if (urls[i].clicked) {

        for (var ii = 0; ii < newUrls.length; ii++) {
          newUrls[ii].clicked = false;
        }

        alert("Game Over. Score: "+this.state.score);
        this.setState({
          score: 0,
          urls: newUrls
        });
        //newUrls[i].clicked = true;
        console.log("Game over - Score reset to:" + this.state.score);
      } else {
        this.setState({
          score: this.state.score + 1,
          urls: newUrls
        });
        console.log(i +" hit, with a score of: "+this.state.score);
        newUrls[i].clicked = true;
      }
    }
  }

  randomizeImages = id => {
    //console.log(this.state);
    let tempArray =  [...this.state.urls];
    console.log(tempArray);
    let tempArrayTwo = [];

    // let temp = [...this.state.imageURLs];
    console.log(id);

    // While there remain elements to shuffle...
    while (0 !== tempArray.length) {
      var rand = Math.floor(Math.random() * tempArray.length);
      this.state.randoURLs.push(tempArray[rand]);
      tempArrayTwo.push(tempArray[rand].url);
      tempArray.pop(rand);
    }
    this.checkScore(id);
    this.setState({
      randoURLs: tempArrayTwo
    });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="gameArea">
        <header className="search">
          <h1>Book Search</h1>
          <p>Book:</p>
          <input type="text" name="searchBook" />
          <input type="submit" value="Submit" />
          <br />
          <br />
        </header>
        <div className="resultsArea">
          <ul>
            <li className="book">
              <h5>Harry Potter</h5>
              <p>Written by Sam</p>
              <div className="imgDesc">
                <img className="image" src="https://www.pcgamesn.com/wp-content/uploads/2019/03/borderlands-3-release-date-gameplay.jpg" alt="pic" />
                <div className="description">
                  INFO INFO INFO
                </div>
              </div>
            </li>
          </ul>
        </div>
        <ul>
          {/*this.state.randoURLs.map((image, i) => {
            console.log("added");
            return (
              <img alt="img" onClick={() => this.randomizeImages(i)} id={"i"+i} className="image" src={image}>
              </img>
            )
          })*/}
        </ul>
      </div>
    );
  }
}

export default Form;
