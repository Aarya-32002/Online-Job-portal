import axios from "axios";
import { useState } from "react";

export default function Placement() {

    const [result, setResult] = useState(null)

    function handleBuy(event){
        alert("Congratulations!! you bought the book");
    }

    if(result == null){
        axios.get('http://localhost:8081/display').then((response) => {
            console.log(response.data);
            setResult(response.data);
        })
        return(
            <div>
                The Books Data is Not There
            </div>
        );
    }
    else{
        return(
            <div>
                The Books Data is Given Below <br/><br/>
                <table border="1">
                <tr>
                    <th>Resume Id</th>
                    <th>Resume Name</th>
                    <th>Skill</th>
                    <th>project Name</th>
                    <th>Package</th>
                    <th>Buy Button</th>
                </tr>
                {result.map((user) => {
                    return(
                    <tr>
                        <td>{user.bid}</td>
                        <td>{user.bname}</td>
                        <td>{user.genre}</td>
                        <td>{user.author}</td>
                        <td>{user.price}</td>
                        <td> <button onClick={handleBuy} book={user.bname}> Upload </button></td>
                    </tr>
                        
                    );
                })}
                </table>
            </div>
        );
    }
}