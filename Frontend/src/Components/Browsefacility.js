import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoStar, IoStarOutline } from 'react-icons/io5'; // Full and Empty Star Icons

export default function Browsefacility() {
    const [citylist, setCitylist] = useState([]);
    const [selectedcity, setSelectedcity] = useState('');
    const [selectedtype, setSelectedtype] = useState('');
    const [typelist, setTypelist] = useState([]);
    const [itemslist, setItemslist] = useState([]);
    const [avgRatings, setAvgRatings] = useState({});
    const [queriesData, setQueriesData] = useState({}); // State to store query details
    const [selectedFacility, setSelectedFacility] = useState(null); // State to track which facility's comments are visible

    // Fetch all cities
    useEffect(() => {
        getallcities();
    }, []);

    // Fetch types based on selected city
    useEffect(() => {
        if (selectedcity !== '') {
            gettypes();
        }
    }, [selectedcity]);

    // Fetch all cities for the city drop-down
    function getallcities() {
        axios
            .get("http://localhost:8080/getallcities")
            .then((res) => {
                setCitylist(res.data);
            })
            .catch((err) => {
                toast.error(err.response.data);
            });
    }

    // Fetch types based on selected city
    function gettypes() {
        axios
            .get(`http://localhost:8080/gettypes/${selectedcity}`)
            .then((res) => {
                setTypelist(res.data);
            })
            .catch((err) => {
                toast.error(err.response.data);
            });
    }

    // Fetch facilities based on selected city and type
    function Getallfacilities() {
        if (selectedcity === "") {
            toast.error("Please choose city");
            return;
        }
        if (selectedtype === "") {
            toast.error("Please choose type");
            return;
        }

        axios
            .get(`http://localhost:8080/Getallfacilities/${selectedcity}/${selectedtype}`)
            .then((res) => {
                setItemslist(res.data);
                // After fetching facilities, fetch ratings and queries for each facility
                res.data.forEach((facility) => {
                    getRatingsAndQueries(facility.facilityid);
                });
            })
            .catch((err) => {
                toast.error(err.response.data);
            });
    }

    // Fetch and calculate average ratings and queries for each facility
    function getRatingsAndQueries(facilityid) {
        axios
            .get(`http://localhost:8080/getavgratings/${facilityid}`)
            .then((res) => {
                setAvgRatings((prev) => ({ ...prev, [facilityid]: res.data.averageRating }));
                setQueriesData((prev) => ({ ...prev, [facilityid]: res.data.queries })); // Store query details
            })
            .catch((err) => {
                toast.error(err.response.data);
            });
    }

    // Function to render the stars based on the average rating
    function renderStars(rating) {
        const validRating = isNaN(rating) || rating == null ? 0 : parseFloat(rating);
        const clampedRating = Math.min(Math.max(validRating, 0), 5);

        const fullStars = Math.floor(clampedRating);
        const halfStar = clampedRating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return [
            ...Array(fullStars).fill(<IoStar color="gold" size={25} />),
            ...Array(halfStar).fill(<IoStarOutline color="gold" size={25} />),
            ...Array(emptyStars).fill(<IoStarOutline color="grey" size={25} />)
        ];
    }

    // Toggle visibility of comments for a selected facility
    const toggleComments = (facilityid) => {
        setSelectedFacility(prevFacility => (prevFacility === facilityid ? null : facilityid));
    };

    return (
        <>
            <Card className="Browsefacility">
                <Card.Header>
                    <h1 style={{ color: "black", textShadow: "2px 2px 4px rgba(0.5, 0.4, 0, 0.6)", textAlign: "center" }}>
                        Facilities & Amenities
                    </h1>
                    <br />
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <label className="form-label" style={{ fontWeight: "bold" }}>
                            Select City:
                        </label>
                        <select className="form-select" style={{ width: "400px" }} value={selectedcity} onChange={(e) => setSelectedcity(e.target.value)}>
                            <option value={0}>--Select Options--</option>
                            {citylist.map((item, index) => (
                                <option key={index} value={item.cityid}>
                                    {item.cityid}-{item.city}
                                </option>
                            ))}
                        </select>
                        <br />

                        <label className="form-label" style={{ fontWeight: "bold" }}>
                            Select Type:
                        </label>
                        <select className="form-select" style={{ width: "400px" }} value={selectedtype} onChange={(e) => setSelectedtype(e.target.value)}>
                            <option value={0}>--Select Options--</option>
                            {typelist.map((item, index) => (
                                <option key={index} value={item.typeid}>
                                    {item.typeid}-{item.type}
                                </option>
                            ))}
                        </select>
                        <br />

                        <div className="btnss">
                            <button className="btn btn-primary" onClick={Getallfacilities}>
                                Display Facility
                            </button>
                            <br />
                            <br />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginLeft: '400px' }}>
                {itemslist.map((card, index) => (
                    <Card style={{ width: '600px', height: "auto",textAlign:"center",backgroundColor: "lightcyan" }} key={index}>
                        <Card.Body>
                            <Card.Text className="card">
                                <h3 className="text-center" style={{ fontFamily: "fantasy", color: "maroon" }}>
                                    {card.name}
                                </h3>
                            </Card.Text>
                            <br />
                            <Card.Text className="text-center">
                                <img src={card.logo} alt="Facility logo" width="250px" height="200px" />
                            </Card.Text>
                            
                            {/* View More Button */}
                            <Link to={`/Viewmore/${card.facilityid}`} style={{ color: "red", fontWeight: "bold", textAlign:"center" }}>
                                View More
                            </Link>

                            <h6 className="text-center">
                                Average Rating:
                                {avgRatings[card.facilityid] !== undefined ? (
                                    renderStars(avgRatings[card.facilityid])
                                ) : (
                                    <span>Not Rated</span>
                                )}
                            </h6>

                            {/* View Comments Button */}
                            <button 
                                className="btn btn-secondary" 
                                onClick={() => toggleComments(card.facilityid)} 
                                style={{ margin: "10px auto", display: "block" }}
                            >
                                {selectedFacility === card.facilityid ? "Hide Comments" : "View Comments"}
                            </button>

                            {/* Displaying query, reply, and replydate */}
                            {selectedFacility === card.facilityid && (
                                <div className="text-center" style={{ marginTop: '10px' }}>
                                    {queriesData[card.facilityid]?.map((queryDetail, idx) => (
                                        <div key={idx}>
                                            <p><strong>Query:</strong> {queryDetail.query}</p>
                                            <p><strong>Reply:</strong> {queryDetail.replyQuery || "No reply yet"}</p>
                                            <p><strong>Reply Date:</strong> {queryDetail.replyDate ? new Date(queryDetail.replyDate).toLocaleString() : "No reply date"}</p>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                ))}
                <br />
            </div>
            <br />
        </>
    );
}
