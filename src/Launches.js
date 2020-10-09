import React from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';


const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
 
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  const getLaunches = () => {
    if(error) return <h4>Error</h4>
    if(loading) return <h4>loading....</h4>

    return data.launches.map(launch => {
     return <LaunchItem key = {launch.flight_number} launch={launch}/>
    })}
  

    return (
        <div>

          <MissionKey/>
           {
              getLaunches()
           }

        </div>
 
    );
  
          }

export default Launches;
