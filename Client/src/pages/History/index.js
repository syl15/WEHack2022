import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './styles.css';

function History() {
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');
    const [entries, setEntries] = useState([]);
    function addtotable() {
        
    }

    return (
        <div className="main">
        <div style={{ marginTop: 60 }}>
            <br></br>
            <h1> Your History</h1>
            <form> 
                <label for="searchbar">Where do you want to travel?</label><br />
                <input type="text" id="travel" name="travel" placeholder="Location"/>
                <button type="submitlog">Enter</button><br/>
                
            </form>
            <form>
                <label for="travel">Input a travel log:</label><br />
                <input type="text" id="travelloc" placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location}/>
                <input type="text" id="travelnotes" placeholder="Notes" onChange={(e)=> setNotes(e.target.value)} value={notes}/>
                <button onClick={() => addtotable()}>Enter</button><br/>
            
            </form>
            <br></br>
            <hr></hr>
            <br></br>
            <table id="myTable">
                <tr>
                    <td>Location</td>
                    <td>Travel Method</td>
                </tr>
                <tr>
                    <td> 7/11 </td>
                    <td> Walked to end of street, then cut through field to get to back of store and walked around</td>
                </tr>
                <tr>
                    <td>Johnny's House</td>
                    <td>Biked along forest trail behind house until the river, then turn right and its the 5th house</td>
                </tr>
                {
                    entries.map(entry => (
                        <tr>

                        </tr>
                    ))     
                }
            </table>
            
        </div>
        
</div>
    )
}

export default History;