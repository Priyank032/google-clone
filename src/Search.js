import React, { useState } from 'react'
import "./search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (event) => {
        event.preventDefault();
        console.log("i hit the search");

        dispatch({
            type : actionTypes.SET_SEARCH_TERM,
            term : input
        })


        history.push('/search');

    };
   

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input placeholder="Search Google or type a URL" value={input} onChange={(event) => {
                    setInput(event.target.value)
                }} />
                <MicIcon />
            </div>
            { !hideButtons ? (
                <div className="search_buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm feeling very lucky</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button className="search_buttons_hidden"
                     type="submit" onClick={search} 
                     variant="outlined">Google Search
                     </Button>
                    <Button className="search_buttons_hidden" variant="outlined">I'm feeling very lucky</Button>
                </div>
            )}

        </form>
    )
}

export default Search;
