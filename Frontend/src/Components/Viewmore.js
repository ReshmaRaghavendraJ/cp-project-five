import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Viewmore() {
  const { facilityid } = useParams(); // Get the facilityid from the route parameter
  const [videoslist, setVideoslist] = useState([]); // Displaying videos
  const [photoslist, setPhotoslist] = useState([]); // Displaying photos
  const [ratings, setRating] = useState(0);
  const [query, setQuery] = useState('');
  const guestid = sessionStorage.getItem('userid'); // Session Storage for Guest id

  // Handle the star click for rating selection
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating); // Update the rating state with the selected rating
  };

  // UseEffect hook to fetch videos and photos when the component loads
  useEffect(() => {
    if (facilityid) {
      getphoto();
      getvideo();
    }
  }, [facilityid]);

  // Function to get videos
  function getvideo() {
    axios
      .get(`http://localhost:8080/getvideo/${facilityid}`)
      .then((res) => {
        setVideoslist(res.data); // YouTube
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }

  // Function to get photos
  function getphoto() {
    axios
      .get(`http://localhost:8080/getphoto/${facilityid}`)
      .then((res) => {
        setPhotoslist(res.data); // Photo
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }

  // Clear input fields after submission
  function ClearAll() {
    setQuery("");
    setRating(0);
  }

  // Function to handle the submission of the rating and comment
  const handleSubmit = () => {
    if (ratings === 0 || query.trim() === '') {
      toast.error("Please provide a rating and a comment.");
      return;
    }

    // Post the rating and query
    axios
      .post(`http://localhost:8080/addquery/${facilityid}/${guestid}`, { ratings, query })
      .then((res) => {
        toast.success(res.data);
        sessionStorage.setItem('facid', facilityid);
        ClearAll();
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  return (
    <>
      <br />
      <Card className='viewmore'>
        <Card.Body>
          {photoslist.map((photo, index) => (
            <div key={index}>
              <Card.Title>{photo.title}</Card.Title>
              <img
                src={photo.photo}
                alt={photo.description}
                width="300px"
                height="300px"
                style={{ textAlign: "center", border: "2px solid white", borderRadius: "20px" }}
              />
              <br /><br />
              <h4 style={{ marginLeft: "10px" }}>Hotel: {photo.facility2.name}</h4><br />
              <h4 style={{ marginLeft: "10px" }}>Description: {photo.facility2.facilitydescription}</h4><br />
              <a href={photo.facility2?.location} target="_blank" rel="noopener noreferrer" style={{ marginTop: "-30px" }}>
                <img
                  className="mapimg"
                  alt="picc"
                  src="https://png.pngtree.com/png-clipart/20230929/ourmid/pngtree-location-icon-png-image_10170024.png"
                  width="80px"
                  height="60px"
                  style={{ marginLeft: "10px" }}
                />
              </a>
            </div>
          ))}

          {videoslist.map((video, index) => (
            <div key={index}>
              <a href={video.video} target="_blank" rel="noopener noreferrer">
                <img
                  className="utube"
                  alt="picc"
                  src="https://static.vecteezy.com/system/resources/thumbnails/023/986/704/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
                  width="90px"
                  height="100px"
                  style={{ marginLeft: "100px" }}
                />
              </a>
            </div>
          ))}

          <Link to="/" className='btn btn-danger me-4' style={{ marginLeft: "200px", marginTop: "-130px" }}>Logout</Link>
          <Link to="/Guestdashboard" className='btn btn-primary me-4' style={{ marginLeft: "-20px", marginTop: "-130px" }}>Back</Link>

          <label style={{ marginLeft: "-300px" }}>Comments</label><br />
          {/* Textarea for comment input */}
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows="4" // Set number of visible rows
            cols="50" // Set number of visible columns
            placeholder="Write your comment here..."
            style={{ marginBottom: '10px' }}
          />

          <div className="form-outline lbl">
            <label className="form-label me-4" style={{ marginLeft: "50px" }}>Ratings: </label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  cursor: 'pointer',
                  color: star <= ratings ? 'gold' : 'gray',
                  fontSize: '50px',
                  marginLeft: "2px"
                }}
                onClick={() => handleStarClick(star)}
                required
              >
                &#9733;
              </span>
            ))}
          </div>

          {/* Submit button triggers the API call */}
          <button className='btn btn-primary' onClick={handleSubmit} style={{marginLeft:''
          }}>Submit</button>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
