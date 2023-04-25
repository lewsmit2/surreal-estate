import React, {useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Alert from "./Alert";
import FavouriteCard from "./FavouriteCard";

const Favourites = ({userID}) => {
    const [favourites, setFavourites] = useState([]);
    const [alert, setAlert] = useState({ message: "", isSuccess: false });


useEffect(() => {
    axios
        .get("http://localhost:3000/api/v1/Favourite/?populate=propertyListing")
        .then(({ data }) => {
            setFavourites(data);
        })
        .catch(() => 
        setAlert({
            message: "Server Error. Please try again later",
            isSuccess: false,
        })
        );
}, []);

const handleDeleteFavourite = (_id) => {
    axios.delete(`http://localhost:3000/api/v1/Favourite/${_id}`)
        .then(() => {
            axios
                .get("http://localhost:3000/api/v1/Favourite/?populate=propertyListing")
                    .then(({data }) => {
                        setFavourites(data);
                    })
                    .catch(() => 
                    setAlert({
                        message: "Server Error. Please try again later",
                        isSuccess: false,
                    })
                    );
        });
};

if (!userID) return <p> Sign in to view your favourite properties</p>;

return (
    <div className="favourites">
        <Alert message={alert.message} success={alert.isSuccess} />
        Favourites Page
        <Sidebar />
        {favourites.map((response) => (
            <div key={response._id} className="item">
                <FavouriteCard {...response} onDelete={handleDeleteFavourite} />
            </div>
        ))}
    </div>
)
};

export default Favourites;