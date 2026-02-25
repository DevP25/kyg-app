import { useState } from 'react';
import { Link } from "react-router-dom"
import Navbar from '../Components/navbar';

function Page1() {
    const [selectedState, setSelectedState] = useState("");
    const [data, setData] = useState<any>(null);

    const states = [
        "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
        "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
        "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
        "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
        "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
    ];

    const handleChange = async (e: { target: { value: any; }; }) => {
        const state = e.target.value;
        setSelectedState(state);

        try {
        const response = await fetch(
            `http://localhost:3000/senators?state=${state}`
        );

        const congress = await response.json();
        const mappedCongress = congress.map((congressOfficials: { name: String; partyName: String; state: String; terms: any; item: any; chamber: String; startYear: Int16Array; }) => {
            let chamberAndYear = congressOfficials?.terms?.item?.[0];
            const count = Object.keys(congressOfficials?.terms?.item).length;

            for(let i = 0; i < count; ++i) {
            if(count == 1) {
                chamberAndYear = congressOfficials?.terms?.item?.[0];
            }else {
                if(congressOfficials?.terms?.item?.[i].chamber === "Senate") {
                chamberAndYear = congressOfficials?.terms?.item?.[i];
                }
            }
            }

            return {
            name: congressOfficials.name,
            partyName: congressOfficials.partyName,
            state: congressOfficials.state,
            chamber: chamberAndYear?.chamber,
            startYear: chamberAndYear?.startYear
            };
        });

        const senateOnly = mappedCongress.filter(
            (congressOficials: { chamber: string; }) => congressOficials.chamber === "Senate"
        );

        setData(senateOnly);
        } catch(error) {
        console.error("Error fetching data:", error);
        }
    };

    return(
        <>
            <Navbar/>

            <h1> Page 1 </h1>

            <div>
                <h1> Select a State </h1>
                <select value={selectedState} onChange={handleChange}>
                <option value="">-- Choose a state --</option>
                {states.map((state) => (
                    <option key ={state} value = {state}>
                    {state}
                    </option>
                ))}
                </select>

                {data && (
                    <pre style={{ marginTop: "20px" }}>
                    {JSON.stringify(data, null, 2)}
                    </pre>
                )}
            </div>
        </>
    )
}

export default Page1