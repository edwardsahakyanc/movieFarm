import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/homePage/homePage";
import { Route, Switch} from "react-router-dom";
import MovieKey from "./components/movieKey/MovieKey";
import DMTs from "./components/DMTs/DMTs";
import EightK from "./components/8k";
import MagicScroll from "./components/scrollMagic";
import DMTsYOURS from "./components/DMTs/DMTsYOURS";
import DMTs7 from "./components/DMTs/DMTs7";

const Wrapper = styled.div`
  background-color: #fff;
  height: 100vh;
  text-align: center;
`;

const MovieFarm = () => {

    return (
        <Wrapper>
            <Navbar/>
            <Switch>
                <Route exact path="/movie-farm" render={()=> <HomePage/>}/>
                <Route path="/movie-farm/movie-key" render={() => <MovieKey/>}/>
                <Route path="/movie-farm/DMTs" render={() => <DMTs/>}/>
                <Route path="/movie-farm/8k" render={() => <EightK/>}/>
                <Route path="/movie-farm/scrollMagic" render={() => <MagicScroll/>}/>
                <Route path="/movie-farm/DMTsYOURS" render={() => <DMTsYOURS/>}/>
                <Route path="/movie-farm/DMTs7" render={() => <DMTs7/>}/>
            </Switch>
        </Wrapper>
    )
}

export default MovieFarm;
