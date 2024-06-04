import axios from "axios";
import { QUERY_GETUSER } from "./queries";

const queryGetUser = QUERY_GETUSER.loc.source.body;

const signIn = (email) => {
    const userDetails = { email };

    axios.get("http://localhost:30033/gaphql", {
        params: {
            query: queryGetUser,
            variables: JSON.stringify(userDetails)
        } 
    }).then(response => {
        console.log(response.data);
        alert("returned");
        return response.data;
    }).catch(error => {
        console.log("user fetch errr", error);
    });
};

export default signIn;