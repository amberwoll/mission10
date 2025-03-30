import { useEffect, useState } from 'react';
import { bowler } from './types/bowler';

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  // Fetching bowlers and filtering them based on Team Name (Marlins or Sharks)
  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch('https://localhost:5000/Bowler');
      const data = await response.json();

      // Filter bowlers who are in the Marlins or Sharks team
      const filteredBowlers = data.filter(
        (bowler: bowler) =>
          bowler.team?.teamName === 'Marlins' ||
          bowler.team?.teamName === 'Sharks'
      );

      setBowlers(filteredBowlers);
    };

    fetchBowlers();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerID}>
              <td>{`${bowler.bowlerFirstName} ${bowler.bowlerMiddleInit ? bowler.bowlerMiddleInit + '. ' : ''}${bowler.bowlerLastName}`}</td>
              <td>{bowler.team?.teamName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
