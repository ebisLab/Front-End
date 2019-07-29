import React, {useState} from 'react';


export default function AddStylist(props) {
    const [newStylist, setNewStylist] = useState({name:" ", number:" ", email:" "})

    return (
        <form>
            {/* Name */}
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="Please enter your name"
                    // value={newStylist.name}
                    // onChange={handleChange}
                />
            </div>
            {/* Phone Number */}
            <div className="form-group">
                <label>Phone Number:</label>
                <input
                    type="text"
                    className="input"
                    name="number"
                    placeholder="Please enter your number"
                    // value={newStylist.number}
                    // onChange={handleChange}
                />
            </div>
            {/* Email */}
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="text"
                    className="input"
                    name="email"
                    placeholder="Please enter your email"
                    // value={newStylist.email}
                    // onChange={handleChange}
                />
            </div>
        </form>
    )

};