'use strict';

const e = React.createElement;

// class Leaderboard extends React.Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//             loading: true,
//             columnNames: [],
//             rows: []
//         }
//     }

//     // componentDidMount() {
//     //     //this.getLeaderboardData();
//     // }

//     // getLeaderboardData = () => {
//     //     var xhr = new XMLHttpRequest();
//     //     xhr.onreadystatechange = function () {
//     //         // Only run if the request is complete
//     //         if (xhr.readyState !== 4) {
//     //             return;
//     //         }

//     //         if (xhr.status >= 200 && xhr.status < 300) {
//     //             let response = JSON.parse(xhr.responseText);
//     //             this.setState({
//     //                 columnNames: response.columns,
//     //                 rows: response.rows,
//     //                 leaderboardId: response.leaderboard_id,
//     //                 loading: false,
//     //             });                
//     //         } else {
//     //             let response = JSON.parse(xhr.responseText)
//     //             this.setState({errorFromServer: response.error, loading: false});
//     //         }
//     //     }.bind(this);
 
//     //     xhr.open("GET", "/api/project/leaderboard?project_repo_id=" + this.props.projectRepoId);
//     //     xhr.send();
//     // }

//     render() {
//         return (
//             <div><h5>HELLO WORLD</h5></div>
//             // <div>
//             //     <h5>Leaderboard ID: {this.state.leaderboardId}</h5>
//             //     <table className="table is-fullwidth">
//             //         <thead>
//             //             <tr>
//             //                 <th>Rank</th>
//             //                 <th>Username</th>
//             //                 <th>Submission Number</th>
//             //                 {this.state.columnNames.map(col => {
//             //                     return <th>{col}</th>
//             //                 })}
//             //             </tr>
//             //         </thead>
//             //         <tbody>
//             //             {this.state.rows.map(row => {
//             //                 return (
//             //                     <tr>
//             //                         <th>{row.rank}</th>
//             //                         <th>{row.username}</th>
//             //                         <th>{row.submission_number}</th>
//             //                         {row.data.map(field => {
//             //                             return <td>{field}</td>
//             //                         })}
//             //                     </tr>
//             //                 )
//             //             })}
//             //         </tbody>
//             //     </table>
//             // </div>
//         );
//     }
// }

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {

    // Clear out the output before showing results 
    document.getElementById("like_button_container").innerHTML = "";

    var rows = 10;


    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('output').appendChild(table);

    //Adding the title
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Recipe Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Avg Rating";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    thead.appendChild(row_1);

    array = [];
    c = 0;

    return null;
    // json.split(/([()])/).filter(Boolean).forEach(e =>
    //     // Increase / decrease counter and push desired values to an array
    //     e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array.push(e) : {}
    // );

    // for (const tuple of array) {
    //     split = tuple.split(',');
    //     if (split.length == 2) {
    //         var [recipeName, score] = split
            
    //         let trow = document.createElement('tr');
        
    //         let tcol1 = document.createElement('td'); //col 1
    //         tcol1.innerHTML = recipeName.replace("'", "").replace("'", "")

    //         let tcol2 = document.createElement('td'); //col 2
    //         tcol2.innerHTML = score
            
    //         trow.appendChild(tcol1); //append col1
    //         trow.appendChild(tcol2); //append col2
    //         tbody.appendChild(trow); //append whole row

    //     }
    // }


    // var table = e('table',
    // { onClick: () => this.setState({ liked: true }) },
    // 'Like');

    // var c, r, t;
    // t = e('table',
    // { onClick: () => this.setState({ liked: true }) },
    // 'My Table Goes Here');
    // t.createElement('row', {}, '123')
    // // r = t.insertRow(0); 
    // // c = r.insertCell(0);
    // // c.innerHTML = 123;
    // // c = r.insertCell(1);
    // // c.innerHTML = 456;

    // return ( 
    //     t
    // );
      
        
    //     // <div>
    //     //     <h5>Leaderboard ID: {this.state.leaderboardId}</h5>
    //     //     {/* <table className="table is-fullwidth">
    //     //         <thead>
    //     //             <tr>
    //     //                 <th>Rank</th>
    //     //                 <th>Username</th>
    //     //                 <th>Submission Number</th>
    //     //                 {this.state.columnNames.map(col => {
    //     //                     return <th>{col}</th>
    //     //                 })}
    //     //             </tr>
    //     //         </thead>
    //     //         <tbody>
    //     //             {this.state.rows.map(row => {
    //     //                 return (
    //     //                     <tr>
    //     //                         <th>{row.rank}</th>
    //     //                         <th>{row.username}</th>
    //     //                         <th>{row.submission_number}</th>
    //     //                         {row.data.map(field => {
    //     //                             return <td>{field}</td>
    //     //                         })}
    //     //                     </tr>
    //     //                 )
    //     //             })}
    //     //         </tbody>
    //     //     </table> */}
    //     // </div>
    // );

    // if (this.state.liked) {
    //   return 'You liked this.';
    // }

    // // var table = e('table', {}, 'YO');
    // // table.innerhtml = "<tr><td>123</td><td>456</td></tr>";
    // var c, r, t;
    // t = e('table', {}, 'yo');
    // r = t.insertRow(0); 
    // c = r.insertCell(0);
    // c.innerHTML = 123;
    // c = r.insertCell(1);
    // c.innerHTML = 456;

    // return e('button', {}, 'yo');
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));