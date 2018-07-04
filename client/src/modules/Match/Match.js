import React from 'react';

import Container from 'components/Container';
// import MatchFixture from 'components/MatchFixture';
// import MatchesLoader from 'modules/MatchesLoader';

// const Match = ({ match: routerMatch }) => {
//   // const filter = `country?fifa_code={routerMatch.params.id}`;
//   return (
//     <section className="section">
//       <Container>
//         <MatchesLoader>
//         {({ matches }) =>
//           matches
//             .filter(match => match.fifa_id === routerMatch.params.id)
//             .map(match =>
//               <MatchFixture
//                 key={match.fifa_id}
//                 cupMatch={match}
//                 showStatistics
//                 compactScore
//               />
//             )
//         }
//         </MatchesLoader>
//       </Container>
//     </section>
//   );
// };
const Match = () => <div><p>Details</p></div>;

export default Match;