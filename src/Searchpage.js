import React from 'react'
import "./searchpage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Searchpage() {
    const [{ term }, dispatch] = useStateValue();
    //live api call
    const {data} = useGoogleSearch(term);

    // const data = Response;

    //https://developers.google.com/custom-search/v1/using_rest

    //https://cse.google.com/cse/create/new

    console.log(data);

    return (
        <div className="searchpage">
            <div className="searchPage_header">
                <Link to="/">
                    <img
                        className="searchpage_logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                    />
                </Link>
               

                <div className="searchpage_headerbody">
                    <Search hideButtons />
                  
                    <div className="searchpage_options">
                        <div
                            className="searchpage_optionsleft">
                            <div
                                className="searchpage_option">
                                <SearchIcon />
                                <Link to="/all"> All
                                 </Link>
                            </div>
                            <div
                                className="searchpage_option">
                                <DescriptionOutlinedIcon />
                                <Link to="/news"> News
                                </Link>
                            </div>
                            <div
                                className="searchpage_option">
                                <CropOriginalIcon />
                                <Link to="/image"> Image
                                 </Link>
                            </div>
                            <div
                                className="searchpage_option">
                                <LocalOfferOutlinedIcon />
                                <Link to="/shopping">
                                    Shopping </Link>
                            </div>
                            <div
                                className="searchpage_option">
                                <RoomOutlinedIcon />
                                <Link to="/maps"> maps
                                </Link>
                            </div>
                            <div
                                className="searchpage_option">
                                <MoreVertIcon />
                                <Link to="/more"> more
                                 </Link>
                            </div>
                        </div>

                        <div className="searchpage_optionsright">

                            <div className="searchpage_option">

                                <Link to="/settings"> Settings </Link>
                            </div>

                            <div className="searchpage_option">

                                <Link to="/tools"> Tools </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className="searchpage_results">
                    <p className="searchpage_resultcounts">
                        About {data?.searchInformation.
                            formattedTotalResults} results ({
                            data?.searchInformation.
                                formattedSearchTime} seconds)
                           for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="searchpage_result">
                            <a
                            className="searchpage_resultLink" 
                            href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 &&
                                item.pagemap?.cse_image[0]?.src && (
                                   <img
                                    className="searchpage_resultImage"
                                    src={
                                        item.pagemap?.
                                            cse_image[0]?.src
                                    }
                                    alt=""
                                />
                      )}
                      {item.displayLink}▼
                            </a>
                            <a
                                className="searchpage_resultTitle"
                                href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchpage_resultsnippet">
                                {item.snippet}
                            </p>

                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Searchpage
