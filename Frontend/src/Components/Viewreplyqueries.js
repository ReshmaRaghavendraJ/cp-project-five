import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

export default function Viewreplyqueries() {
  const [querylist, setQuerylist] = useState([]);
  const [reply, setReply] = useState('');
  const [showmodal, setShowModal] = useState(false);
  const [selectedQueryId, setSelectedQueryId] = useState(null);
  const usrid = sessionStorage.getItem('userid');

  useEffect(() => {
    getquery();
  }, []);

  function getquery() {
    axios
      .get(`http://localhost:8080/getquery/${usrid}`)
      .then((res) => {
        setQuerylist(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }

  function updatequery() {
    const obj = { reply };
    axios
      .put(`http://localhost:8080/updatequery/${selectedQueryId}`, obj)
      .then((res) => {
        toast.success(res.data);
        setShowModal(false);
        getquery();
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }

  function handlereplyclick(queryid) {
    setSelectedQueryId(queryid);
    setShowModal(true);
  }

  function renderStars(rating) {
    const filledStar = "★";
    const emptyStar = "☆";
    let stars = "";

    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? filledStar : emptyStar;
    }

    return stars;
  }

  return (
    <>
      <br />
      <Card className='replyquery'>
        <Card.Header>
          <h1 style={{ color: "black", textShadow: "2px 2px 4px rgba(0.5, 0.4, 0, 0.6)", textAlign: "center" }}>View and Reply Queries</h1><br />
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th style={{ textAlign: 'Left', paddingLeft: '10px' }}>Query id</th>
                  <th style={{ textAlign: 'Left', paddingLeft: '20px' }}>Guest Name</th>
                  <th style={{ textAlign: 'Left', paddingLeft: '20px' }}>Query</th>
                  <th style={{ textAlign: 'Left', paddingLeft: '20px' }}>Ratings</th>
                  <th style={{ textAlign: 'Left', paddingLeft: '10px' }}>Posted Date</th>
                  <th style={{ textAlign: 'Left', paddingLeft: '20px' }}>Reply</th>
                  <th style={{ textAlign: 'Left', paddingLeft: '20px' }}>Reply Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  querylist.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td style={{ textAlign: 'Left', paddingLeft: '10px' }}>{item.queryid}</td>
                        <td style={{ textAlign: 'Left', paddingLeft: '20px' }}>{item.guestss.guestname}</td>
                        <td style={{ textAlign: 'Left', paddingLeft: '20px' }}>{item.query}</td>
                        <td style={{ textAlign: 'Left', paddingLeft: '20px' }}>
                          {renderStars(item.ratings)}
                        </td>
                        <td style={{ textAlign: 'Left', paddingLeft: '10px' }}>{item.posteddate}</td>
                        <td style={{ textAlign: 'Left', paddingLeft: '20px' }}>{item.reply}</td>
                        <td style={{ textAlign: 'Left', paddingLeft: '20px' }}>{item.replydate}</td>
                        {!item.reply && (
                          <button className='btn btn-success me-4' style={{ marginLeft: "100px", marginTop: "-1px" }} onClick={() => handlereplyclick(item.queryid)}>Reply</button>
                        )}
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal show={showmodal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Reply Query:</Modal.Title>
          </Modal.Header>

          <div className="form-group">
            <label style={{ width: "400px", marginLeft: "20px" }}>Reply to Query:</label>
            <input
              type="text"
              className="form-control"
              value={reply} style={{ width: "400px", marginLeft: "20px" }}
              onChange={(e) => setReply(e.target.value)}
            />
          </div>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
            <Button variant="primary" onClick={updatequery}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
