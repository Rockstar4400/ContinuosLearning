import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

function UserList() {

    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => {
        return state.users;
    })

    useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch]);

    if(isLoading) {
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error fetching data...</div>
    }

    const renderedUsers = data.map((user)=>{
        return <div key={user.id}>{user.name}</div>
    })

    return renderedUsers;
}

export default UserList;